import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import { MessageSquare, CheckCircle2, Quote, BookOpen, Sparkles } from 'lucide-react';

export default function TutorialDiscussionActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.tutorialDiscussion;

  return (
    <div id="tutorial-discussion" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Activity Label & Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            03
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 3 • Collaborative Colloquium
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-900 border border-emerald-200">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>{activity.badge}</span>
          </span>
          <span className="text-xs text-navy-500 font-mono bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
            {activity.date}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Upload Slot for real Seminar Photograph */}
        <div className="lg:col-span-6 space-y-4">
          <MediaUploadSlot
            activityKey="tutorialDiscussion"
            fieldKey="userUploadedImage"
            currentImage={activity.userUploadedImage}
            defaultImage={activity.defaultImage}
            aspectRatio="aspect-[4/3]"
            title="Python Tutorial Discussion Session"
            caption="Seminar discussion on Python coroutines, event loop scheduling, and memory profiling."
            label="Upload Tutorial Discussion Photograph"
          />

          <div className="p-5 rounded-xl bg-gradient-to-br from-ivory-50 to-violetAccent-50/20 border border-ivory-200">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3 flex items-center space-x-2">
              <Quote className="w-4 h-4 text-violetAccent-500" />
              <span>Colloquium Dialogue & Key Insights</span>
            </h4>
            <div className="space-y-3">
              {activity.keyQuotes.map((quoteObj, idx) => (
                <div key={idx} className="p-3 bg-white rounded-lg border border-navy-100/60 shadow-xs">
                  <p className="text-xs sm:text-sm text-navy-800 italic font-subserif">
                    "{quoteObj.quote}"
                  </p>
                  <p className="text-[11px] font-mono text-navy-500 mt-1.5 font-medium">
                    — {quoteObj.speaker}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Discussion Details & Prompts */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h4 className="text-sm font-mono tracking-wider uppercase text-navy-500 mb-2 font-semibold">
              Colloquium Objective
            </h4>
            <p className="text-navy-800 leading-relaxed text-sm sm:text-base font-sans">
              {activity.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-violetAccent-700 font-bold mb-3 flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Core Theoretical Prompts Explored</span>
            </h4>
            <ul className="space-y-2.5">
              {activity.discussionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3 p-3 bg-ivory-50/80 rounded-xl border border-ivory-200/80">
                  <CheckCircle2 className="w-4 h-4 text-violetAccent-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-navy-800 font-sans leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-ivory-100/60 border border-navy-100">
            <span className="text-xs font-mono uppercase text-navy-500 block mb-1 font-semibold">Pedagogical Reflection</span>
            <p className="text-sm text-navy-900 font-subserif italic leading-relaxed">
              "{activity.reflection}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

