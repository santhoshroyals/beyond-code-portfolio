import React, { useRef, useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Video,
  Upload,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  X,
  FileVideo
} from 'lucide-react';
import {
  saveVideoToDB,
  getVideoFromDB,
  deleteVideoFromDB
} from '../../utils/videoStorage';

export default function WebsiteDemoVideoActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.websiteDemoVideo || {};

  const repoLinks = activity.repoLinks || [];
  const liveLinks = activity.liveLinks || [];

  const fileInputRef = useRef(null);
  const activeBlobUrlRef = useRef(null);
  const videoElementRef = useRef(null);

  const [videoUrl, setVideoUrl] = useState(null);
  const [videoFileName, setVideoFileName] = useState('');
  const [videoFileSize, setVideoFileSize] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Restore video reliably from IndexedDB on component mount
  useEffect(() => {
    let isMounted = true;

    async function restoreVideo() {
      try {
        setIsLoading(true);
        const record = await getVideoFromDB();
        if (record && record.blob && isMounted) {
          const blobUrl = URL.createObjectURL(record.blob);
          activeBlobUrlRef.current = blobUrl;
          setVideoUrl(blobUrl);
          setVideoFileName(record.name || 'demo_video.mp4');
          setVideoFileSize(record.size || record.blob.size || 0);
        }
      } catch (err) {
        console.error('Failed to restore demo video from IndexedDB:', err);
        if (isMounted) {
          setErrorMessage('Could not load saved demo video: ' + (err.message || 'Storage error'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    restoreVideo();

    return () => {
      isMounted = false;
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }
    };
  }, []);

  const handleVideoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset input value so re-uploading the exact same file fires onChange
    e.target.value = '';

    const isValidVideo =
      file.type.startsWith('video/') ||
      /\.(mp4|webm|ogg|mov|m4v|mkv)$/i.test(file.name);

    if (!isValidVideo) {
      setErrorMessage('Please upload a valid video file (MP4, WebM, MOV, etc.).');
      return;
    }

    try {
      setErrorMessage('');

      // Store in IndexedDB for reliable persistence across refreshes
      await saveVideoToDB(file, file.name);

      // Clean up previous blob URL if exists
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }

      // Generate a new direct object URL for playback
      const newBlobUrl = URL.createObjectURL(file);
      activeBlobUrlRef.current = newBlobUrl;
      setVideoUrl(newBlobUrl);
      setVideoFileName(file.name);
      setVideoFileSize(file.size);

      if (videoElementRef.current) {
        videoElementRef.current.load();
      }
    } catch (err) {
      console.error('Error saving demo video:', err);
      setErrorMessage('Failed to save demo video: ' + (err.message || 'Could not store video in local storage.'));
    }
  };

  const handleRemoveVideo = async () => {
    if (window.confirm('Are you sure you want to remove the uploaded demonstration video?')) {
      try {
        await deleteVideoFromDB();
        if (activeBlobUrlRef.current) {
          URL.revokeObjectURL(activeBlobUrlRef.current);
          activeBlobUrlRef.current = null;
        }
        setVideoUrl(null);
        setVideoFileName('');
        setVideoFileSize(0);
      } catch (err) {
        console.warn('Error deleting video:', err);
      }
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  };

  return (
    <div id="website-demo-video" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleVideoUpload}
        accept="video/*,.mp4,.webm,.ogg,.mov,.m4v"
        className="hidden"
      />

      {/* ── Activity Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-start space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm flex-shrink-0 mt-0.5">
            09
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 9 • Operational Video Demonstration
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
              {activity.title || 'InteroperAI-ResQUE – Website Demo Video'}
            </h2>
            <p className="text-sm text-navy-600 mt-1 font-sans">
              {activity.subtitle || 'Demonstration walkthrough of our disaster data integration and resource coordination platform.'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 text-rose-900 border border-rose-200 flex-shrink-0">
          <Video className="w-3.5 h-3.5 text-rose-600" />
          <span>{activity.badge || 'Website Demo Video'}</span>
        </span>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setErrorMessage('')}
            className="p-1 hover:bg-red-100 rounded text-red-500 transition"
            title="Dismiss error"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ── Video Player / Upload Showcase ── */}
      <div className="mb-10">
        {isLoading ? (
          <div className="py-16 text-center text-xs font-mono text-navy-500 bg-ivory-50 rounded-2xl border border-navy-100">
            Loading demonstration video from local storage...
          </div>
        ) : videoUrl ? (
          /* Active Video Player */
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-950 shadow-xl border border-navy-800 flex items-center justify-center">
              <video
                ref={videoElementRef}
                src={videoUrl}
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Controls Bar */}
            <div className="p-4 rounded-xl bg-ivory-50 border border-navy-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center space-x-2.5 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-mono text-navy-800 truncate max-w-xs sm:max-w-md font-medium">
                  {videoFileName}
                </span>
                <span className="text-navy-500 text-[11px] font-mono flex-shrink-0">
                  ({formatFileSize(videoFileSize)})
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 rounded-lg bg-white border border-navy-200 text-navy-800 hover:bg-ivory-100 flex items-center space-x-1.5 font-medium transition"
                  title="Replace with another video file"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Replace Video</span>
                </button>

                <button
                  type="button"
                  onClick={handleRemoveVideo}
                  className="p-1.5 rounded-lg border border-transparent hover:border-red-200 hover:bg-red-50 text-navy-400 hover:text-red-600 transition"
                  title="Remove video"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Video Upload Placeholder */
          <div className="rounded-2xl border-2 border-dashed border-navy-200 bg-gradient-to-br from-ivory-50/80 via-white to-ivory-100/50 p-8 sm:p-14 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4 border border-rose-100 shadow-2xs">
              <FileVideo className="w-7 h-7" />
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-950 mb-2">
              Website Demo Video Awaiting Upload
            </h3>

            <p className="text-xs sm:text-sm text-navy-600 font-sans max-w-lg mb-6 leading-relaxed">
              Upload your actual website demonstration video (<span className="font-mono">.mp4</span>, <span className="font-mono">.webm</span>, <span className="font-mono">.mov</span>). The video will be saved securely in your browser and will persist across refreshes.
            </p>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-medium shadow-sm transition active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>Upload Demo Video</span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-6 pt-6 border-t border-navy-100 w-full max-w-md text-[11px] font-mono text-navy-500">
              <span className="px-2.5 py-1 rounded bg-white border border-navy-100">MP4 (.mp4)</span>
              <span className="px-2.5 py-1 rounded bg-white border border-navy-100">WebM (.webm)</span>
              <span className="px-2.5 py-1 rounded bg-white border border-navy-100">QuickTime (.mov)</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Repositories & Live Links ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-ivory-200">
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

        {/* Live Project Websites */}
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
    </div>
  );
}
