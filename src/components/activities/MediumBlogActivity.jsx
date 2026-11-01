import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import {
  ExternalLink,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  GraduationCap,
  FileText
} from 'lucide-react';

export default function MediumBlogActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.mediumBlog || {};

  const keyLearningAreas = activity.keyLearningAreas || [
    "Python list behaviour.",
    "Understanding list copying.",
    "Shallow copy and deep copy concepts.",
    "Understanding how changes to copied lists can affect the original data."
  ];

  return (
    <div id="medium-blog" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* ── Activity Header ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm flex-shrink-0">
            06
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 6 • Published Article
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'Medium Blog'}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Published</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Article Screenshot / Upload Slot */}
        <div className="lg:col-span-5 space-y-4">
          <MediaUploadSlot
            activityKey="mediumBlog"
            fieldKey="userUploadedBlogImage"
            currentImage={activity.userUploadedBlogImage}
            defaultImage={null}
            aspectRatio="aspect-[16/10]"
            title="Published Medium Article Screenshot"
            caption={activity.caption || "Screenshot of the published Medium article by Gilledi Santhosh."}
            label="Upload Article Screenshot"
            placeholderNote="Upload an authentic screenshot of your published Medium article."
          />

          {/* Article Source & Metadata Pill */}
          <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-navy-600">
              <span className="font-mono text-navy-500 font-semibold uppercase text-[11px]">Platform</span>
              <span className="font-medium text-navy-900">{activity.platform || 'Medium'}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-navy-600">
              <span className="font-mono text-navy-500 font-semibold uppercase text-[11px]">Author</span>
              <span className="font-medium text-navy-900">{activity.author || 'Gilledi Santhosh'}</span>
            </div>
            <div className="pt-2 border-t border-ivory-200">
              <a
                href={activity.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-violetAccent-700 hover:text-violetAccent-800 font-mono flex items-center space-x-1 break-all"
              >
                <span className="truncate">medium.com/@gilledi.santhosh2023/...</span>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Article Details & Key Learning Areas */}
        <div className="lg:col-span-7 space-y-6">
          {/* Article Details Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-ivory-50/70 border border-ivory-200 space-y-4">
            <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider font-bold">
              <BookOpen className="w-4 h-4" />
              <span>Published Technical Article</span>
            </div>

            {/* Prominent Article Title */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 leading-snug">
              {activity.articleTitle || "When a Copy Isn't Really a Copy: The Hidden Behaviour of Python Lists"}
            </h3>

            {/* Clean Short Description */}
            <p className="text-navy-700 font-sans text-sm sm:text-base leading-relaxed">
              {activity.description}
            </p>

            {/* Primary Action Button: Read Article on Medium */}
            <div className="pt-4 border-t border-navy-100/70">
              <a
                href={activity.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-xs sm:text-sm font-medium tracking-wide transition shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Read Article on Medium</span>
                <ExternalLink className="w-4 h-4 text-violetAccent-300" />
              </a>
            </div>
          </div>

          {/* Key Learning Areas */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3 flex items-center space-x-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Key Learning Areas</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyLearningAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-navy-100 shadow-2xs flex items-start space-x-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-navy-800 font-sans leading-relaxed">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
