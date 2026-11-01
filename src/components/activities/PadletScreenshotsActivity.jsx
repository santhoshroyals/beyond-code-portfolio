import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import {
  MessageSquareCode,
  ExternalLink,
  CheckCircle2,
  FileText,
  BookOpen
} from 'lucide-react';

export default function PadletScreenshotsActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.padletScreenshots || {};

  const learningOutcomes = activity.learningOutcomes || [];
  const overviewImage = activity.userUploadedOverviewScreenshot || null;
  const contributionImage = activity.userUploadedContributionScreenshot || null;

  return (
    <div id="padlet-screenshots" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* ── Activity Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-start space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm flex-shrink-0 mt-0.5">
            10
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 10 • Padlet Discussion
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
              {activity.title || 'Object-Oriented Python Question Sets – Padlet Discussion'}
            </h2>
            <p className="text-sm text-navy-600 mt-1 font-sans">
              {activity.subtitle || 'Collaborative Student Q&A and Problem-Solving Forum'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-50 text-cyan-900 border border-cyan-200 flex-shrink-0">
          <MessageSquareCode className="w-3.5 h-3.5 text-cyan-600" />
          <span>Padlet Contribution</span>
        </span>
      </div>

      {/* ── Description & Padlet Link ── */}
      <div className="mb-8 p-6 rounded-2xl bg-ivory-50 border border-ivory-200 space-y-4">
        <div className="space-y-2 text-sm sm:text-base text-navy-800 leading-relaxed font-sans">
          <p>
            As part of Advanced Python Programming, we participated in a Padlet activity where students shared question sets related to Object-Oriented Programming in Python.
          </p>
          <p>
            My contribution is visible in the Padlet under the name <strong className="text-navy-950 font-semibold">Gilledi Santhosh</strong>. It includes a 19-page document titled <em className="font-serif text-violetAccent-800 font-medium">LeetCode OOPS Questions Practice</em>.
          </p>
        </div>

        {/* Clickable Padlet Link */}
        <div className="pt-2">
          <a
            href={activity.padletUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-medium shadow-sm transition group"
          >
            <span>Open Classroom Padlet Discussion</span>
            <ExternalLink className="w-4 h-4 text-violetAccent-300 group-hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* ── Two Separate Evidence Upload Slots ── */}
      <div className="mb-10">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
          <span className="w-5 h-px bg-violetAccent-300 inline-block" />
          <span>Authentic Padlet Evidence</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Slot 1: Overview Screenshot */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-navy-800">
              <span className="w-5 h-5 rounded bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center text-[11px]">
                1
              </span>
              <span>Padlet Overview Screenshot</span>
            </div>
            <MediaUploadSlot
              activityKey="padletScreenshots"
              fieldKey="userUploadedOverviewScreenshot"
              currentImage={overviewImage}
              defaultImage={null}
              title="Padlet Overview Screenshot"
              caption="Overview of the Object-Oriented Python Question Sets Padlet board."
              label="Upload Overview Screenshot"
              placeholderNote="Upload your screenshot showing the Padlet discussion board overview."
              aspectRatio="aspect-[16/10]"
            />
          </div>

          {/* Upload Slot 2: Individual Contribution Screenshot */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-navy-800">
              <span className="w-5 h-5 rounded bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center text-[11px]">
                2
              </span>
              <span>My Individual Contribution Screenshot</span>
            </div>
            <MediaUploadSlot
              activityKey="padletScreenshots"
              fieldKey="userUploadedContributionScreenshot"
              currentImage={contributionImage}
              defaultImage={null}
              title="My Padlet Contribution Screenshot"
              caption="Individual Padlet contribution by Gilledi Santhosh featuring LeetCode OOPS Questions Practice."
              label="Upload Contribution Screenshot"
              placeholderNote="Upload your screenshot showing your contribution under the name Gilledi Santhosh (LeetCode OOPS Questions Practice)."
              aspectRatio="aspect-[16/10]"
            />
          </div>
        </div>
      </div>

      {/* ── Learning Outcomes ── */}
      <div className="p-6 rounded-2xl bg-ivory-50 border border-ivory-200">
        <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center space-x-2">
          <BookOpen className="w-4 h-4" />
          <span>Learning Outcomes</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {learningOutcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-navy-100 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-navy-800 font-sans leading-relaxed">
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
