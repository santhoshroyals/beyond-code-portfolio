import React, { useRef, useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import {
  Mic, ExternalLink, Github, Upload, BookOpen, CheckCircle2, Play, Pause, AlertCircle, X
} from 'lucide-react';
import { saveAudioToDB, getAudioFromDB, deleteAudioFromDB } from '../../utils/audioStorage';

export default function AudioBusinessThesisActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.audioBusinessThesis || {};

  // Safe fallbacks for arrays — guards against stale localStorage merges
  const projectOverview = activity.projectOverview || [];
  const repoLinks       = activity.repoLinks       || [];
  const liveLinks       = activity.liveLinks       || [];

  // Audio state
  const audioRef = useRef(null);
  const audioFileInputRef = useRef(null);
  const activeBlobUrlRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [customAudioUrl, setCustomAudioUrl] = useState(null);
  const [audioFileName, setAudioFileName] = useState('');
  const [isLoadingAudio, setIsLoadingAudio] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Team photo from context (persisted in localStorage via PortfolioContext)
  const teamPhoto = activity.userUploadedTeamPhoto || null;

  // Restore audio reliably from IndexedDB on component mount
  useEffect(() => {
    let isMounted = true;

    async function restoreAudio() {
      try {
        setIsLoadingAudio(true);
        const savedAudio = await getAudioFromDB();
        if (savedAudio && savedAudio.blob && isMounted) {
          const blobUrl = URL.createObjectURL(savedAudio.blob);
          activeBlobUrlRef.current = blobUrl;
          setCustomAudioUrl(blobUrl);
          if (savedAudio.name) {
            setAudioFileName(savedAudio.name);
          }
        }
      } catch (err) {
        console.error('Failed to restore audio from IndexedDB:', err);
        if (isMounted) {
          setErrorMessage('Could not load saved audio from IndexedDB: ' + (err.message || 'Storage error'));
        }
      } finally {
        if (isMounted) {
          setIsLoadingAudio(false);
        }
      }
    }

    restoreAudio();

    return () => {
      isMounted = false;
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }
    };
  }, []);

  const handleAudioUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset input value so re-selecting the exact same file fires onChange
    e.target.value = '';

    const isValidType = file.type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|aac)$/i.test(file.name);
    if (!isValidType) {
      setErrorMessage('Please upload a valid audio file (MP3, WAV, etc.)');
      return;
    }

    try {
      setErrorMessage('');

      // Store in IndexedDB for reliable persistence across refreshes
      await saveAudioToDB(file, file.name);

      // Clean up previous blob URL if exists
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }

      // Generate a new direct object URL for playback
      const newBlobUrl = URL.createObjectURL(file);
      activeBlobUrlRef.current = newBlobUrl;
      setCustomAudioUrl(newBlobUrl);
      setAudioFileName(file.name);
      setIsPlaying(false);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
      }
    } catch (err) {
      console.error('Error storing audio file:', err);
      setErrorMessage('Audio storage failed: ' + (err.message || 'Could not save audio into browser storage.'));
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.warn('Audio play error:', err);
      });
    }
  };

  const audioSrc = customAudioUrl || activity.defaultAudio || null;

  return (
    <div id="audio-business-thesis" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">

      {/* Hidden audio file input */}
      <input
        type="file"
        ref={audioFileInputRef}
        onChange={handleAudioUpload}
        accept="audio/*,.mp3,.wav,.ogg,.m4a"
        className="hidden"
      />

      {/* ── Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-8 pb-6 border-b border-ivory-200">
        <div className="flex items-start space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm flex-shrink-0 mt-0.5">
            07
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 7 • Business Thesis Presentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
              {activity.title}
            </h2>
            <p className="text-sm text-navy-600 mt-1 font-sans">
              {activity.subtitle}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-900 border border-indigo-200 flex-shrink-0">
          <Mic className="w-3.5 h-3.5 text-indigo-600" />
          <span>{activity.badge}</span>
        </span>
      </div>

      {/* ── Team Photograph ── */}
      <div className="mb-10">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
          <span className="w-5 h-px bg-violetAccent-300 inline-block" />
          <span>Team Photograph</span>
        </h3>
        <MediaUploadSlot
          activityKey="audioBusinessThesis"
          fieldKey="userUploadedTeamPhoto"
          currentImage={teamPhoto}
          defaultImage={activity.defaultTeamPhoto}
          title="Team Photograph"
          caption={activity.teamPhotoCaption}
          label="Upload Team Photograph"
          placeholderNote="Upload your actual classroom or team photograph for this activity."
          aspectRatio="aspect-video"
          className="max-w-2xl"
        />
      </div>

      {/* ── Audio Player ── */}
      <div className="mb-10">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
          <span className="w-5 h-px bg-violetAccent-300 inline-block" />
          <span>Audio Recording</span>
        </h3>

        {/* Storage Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => setErrorMessage('')}
              className="p-1 hover:bg-red-100 rounded text-red-500 transition"
              title="Dismiss error message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="rounded-2xl border border-navy-100 bg-ivory-50 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <p className="text-sm font-mono text-navy-700">
              {activity.audioNote}
            </p>
            {audioFileName && (
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-white text-navy-700 border border-navy-200 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span className="truncate max-w-xs">{audioFileName}</span>
              </span>
            )}
          </div>

          {isLoadingAudio ? (
            <div className="py-8 text-center text-xs font-mono text-navy-500">
              Loading stored audio from local storage...
            </div>
          ) : audioSrc ? (
            /* Functional player when audio is available */
            <div className="space-y-4">
              <audio
                ref={audioRef}
                controls
                src={audioSrc}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className="w-full rounded-lg"
              >
                Your browser does not support the audio element.
              </audio>

              {/* Action buttons */}
              <div className="flex items-center space-x-4 pt-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium shadow-sm transition active:scale-95"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 ml-0.5" />
                      <span>Play Presentation</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => audioFileInputRef.current?.click()}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-navy-200 hover:bg-ivory-100 text-navy-700 text-sm font-medium transition"
                >
                  <Upload className="w-4 h-4" />
                  <span>Replace Audio</span>
                </button>
              </div>
            </div>
          ) : (
            /* Upload slot when no audio is present */
            <div className="flex flex-col items-center justify-center py-10 px-6 rounded-xl border-2 border-dashed border-navy-200 bg-white text-center">
              <div className="w-12 h-12 rounded-2xl bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center mb-3 border border-violetAccent-100">
                <Mic className="w-6 h-6" />
              </div>
              <p className="text-sm font-mono font-bold text-navy-800 mb-1">
                Audio Recording Awaiting Upload
              </p>
              <p className="text-xs text-navy-500 mb-4 max-w-xs">
                Upload your MP3 file: <span className="font-mono font-semibold">(23MID0233) Gilledi Santhosh.mp3</span>
              </p>
              <button
                type="button"
                onClick={() => audioFileInputRef.current?.click()}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium shadow-sm transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Audio File</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Project Overview ── */}
      <div className="mb-10">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
          <span className="w-5 h-px bg-violetAccent-300 inline-block" />
          <span>Project Overview</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectOverview.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-ivory-50 border border-ivory-200">
              <CheckCircle2 className="w-5 h-5 text-violetAccent-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-navy-900 font-mono">{item.label}</p>
                <p className="text-xs text-navy-600 mt-0.5 font-sans leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Repositories & Live Links ── */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* GitHub Repositories */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
            <span className="w-5 h-px bg-violetAccent-300 inline-block" />
            <span>GitHub Repositories</span>
          </h3>
          <div className="space-y-3">
            {repoLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-50 hover:border-violetAccent-300 transition group"
              >
                <Github className="w-4 h-4 text-navy-700 group-hover:text-violetAccent-600 flex-shrink-0" />
                <span className="text-sm text-navy-800 font-medium group-hover:text-navy-950 flex-1 truncate">
                  {link.label}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-navy-400 group-hover:text-violetAccent-600 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Live Websites */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
            <span className="w-5 h-px bg-violetAccent-300 inline-block" />
            <span>Live Project Websites</span>
          </h3>
          <div className="space-y-3">
            {liveLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-50 hover:border-violetAccent-300 transition group"
              >
                <ExternalLink className="w-4 h-4 text-navy-700 group-hover:text-violetAccent-600 flex-shrink-0" />
                <span className="text-sm text-navy-800 font-medium group-hover:text-navy-950 flex-1 truncate">
                  {link.label}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-navy-400 group-hover:text-violetAccent-600 flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Learning Experience ── */}
      <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-200">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3 flex items-center space-x-2">
          <BookOpen className="w-4 h-4" />
          <span>Learning Experience</span>
        </h3>
        <p className="text-sm text-navy-700 font-sans leading-relaxed">
          {activity.learningExperience}
        </p>
      </div>
    </div>
  );
}
