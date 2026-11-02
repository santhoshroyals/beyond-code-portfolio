
import React from 'react';
import {
  Headphones,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Volume2
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function AudioBusinessThesis() {
  const { data } = usePortfolio();
  const activity = data?.activities?.audioBusinessThesis || {};

  const learningOutcomes = activity.learningOutcomes || [
    'Developed an understanding of the business idea and its objectives.',
    'Improved communication and presentation skills.',
    'Organised business concepts into a structured presentation.',
    'Learned to explain a project idea through audio narration.'
  ];

  const audioUrl =
  activity.audioUrl ||
  activity.userUploadedAudio ||
  activity.audioFile ||
  '/uploads/business-thesis-audio.mp3';

  return (
    <section
      id="audio-business-thesis"
      className="scroll-mt-32 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm">
            06
          </span>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Audio Presentation
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'InteroperAI-ResQUE – Business Thesis Audio Presentation'}
            </h2>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs bg-violetAccent-50 text-violetAccent-800 border border-violetAccent-200">
          <Headphones className="w-4 h-4" />
          Audio Presentation
        </span>
      </div>

      {/* DESCRIPTION */}
      <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-200 mb-8">
        <h3 className="font-serif font-bold text-lg text-navy-950 mb-3">
          About the Presentation
        </h3>

        <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
          This activity presents the business thesis of InteroperAI-ResQUE
          through an audio presentation. It communicates the project's
          concept, purpose, proposed solution and overall value in a
          structured and understandable way.
        </p>
      </div>

      {/* AUDIO PLAYER */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Volume2 className="w-5 h-5 text-violetAccent-700" />
          <h3 className="text-lg font-serif font-bold text-navy-950">
            Listen to the Business Thesis
          </h3>
        </div>

        <div className="rounded-2xl border border-violetAccent-200 bg-gradient-to-br from-violetAccent-50/60 to-ivory-50 p-5 sm:p-7">
          {audioUrl ? (
            <audio
              controls
              preload="metadata"
              className="w-full"
              src={audioUrl}
            >
              Your browser does not support audio playback.
            </audio>
          ) : (
            <div className="text-center py-6">
              <Headphones className="w-10 h-10 text-violetAccent-500 mx-auto mb-3" />
              <p className="text-sm text-navy-700 font-medium">
                Audio file is not available.
              </p>
              <p className="text-xs text-navy-500 mt-1">
                Check the existing audio file path in your project data.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* LEARNING OUTCOMES */}
      <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-200">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Learning Outcomes
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learningOutcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 rounded-xl bg-white border border-navy-100"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-navy-800 leading-relaxed">
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT LINK */}
      {activity.projectUrl && (
        <a
          href={activity.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violetAccent-700 hover:text-violetAccent-900"
        >
          View Project
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </section>
  );
}
