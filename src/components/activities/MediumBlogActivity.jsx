
import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import {
  ExternalLink,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  GraduationCap,
  UserRound,
  Quote
} from 'lucide-react';

export default function MediumBlogActivity() {
  const { data } = usePortfolio();
  const activity = data?.activities?.mediumBlog || {};

  const keyLearningAreas = Array.isArray(activity.keyLearningAreas)
    ? activity.keyLearningAreas
    : [
        'Python list behaviour and object references.',
        'Differences between shallow copy and deep copy.',
        'How changes to copied lists can affect original data.',
        'Explaining programming concepts through technical writing.'
      ];

  const mediumUrl = activity.mediumUrl || '';

  return (
    <section
      id="medium-blog"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm">
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

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-4 h-4" />
          Published
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT: ARTICLE ILLUSTRATION */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border-2 border-violetAccent-200 bg-gradient-to-br from-violetAccent-50/70 to-ivory-50 p-3 shadow-sm">

            <div className="flex items-center gap-2 px-2 pt-2 pb-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-violetAccent-200 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-violetAccent-700" />
              </div>

              <div>
                <h3 className="font-serif font-bold text-navy-950">
                  Article Concept Illustration
                </h3>

                <p className="text-xs text-navy-600">
                  Visual explanation of Python list copying
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-violetAccent-200 bg-white">
              <MediaUploadSlot
                activityKey="mediumBlog"
                fieldKey="userUploadedBlogImage"
                currentImage={activity.userUploadedBlogImage}
                defaultImage="/uploads/medium-blog-article.png"
                aspectRatio="aspect-[4/3]"
                title="Python List Copying"
                caption="Illustration showing parent lists, deep copies and separate memory references."
                label="Upload Another Article Image"
                placeholderNote="Upload an additional article-related illustration if required."
              />
            </div>

            <p className="text-center text-xs text-violetAccent-700 font-medium py-3">
              <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />
              Supporting visual for the published article
            </p>
          </div>

          {/* ARTICLE DETAILS */}
          <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 space-y-3">

            <div className="flex items-center justify-between text-xs">
              <span className="font-mono uppercase text-navy-500 font-semibold">
                Platform
              </span>

              <span className="font-medium text-navy-900">
                {activity.platform || 'Medium'}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="font-mono uppercase text-navy-500 font-semibold">
                Author
              </span>

              <span className="font-medium text-navy-900">
                {activity.author || 'Gilledi Santhosh'}
              </span>
            </div>

            {mediumUrl && (
              <div className="pt-3 border-t border-ivory-200">
                <a
                  href={mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-violetAccent-700 hover:text-violetAccent-900 font-medium flex items-center gap-1 break-all"
                >
                  Read published article on Medium
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: ARTICLE INFORMATION */}
        <div className="lg:col-span-7 space-y-6">

          {/* ARTICLE OVERVIEW */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-ivory-50 to-violetAccent-50/40 border border-violetAccent-100 shadow-sm">

            <div className="flex items-center gap-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider font-bold mb-4">
              <BookOpen className="w-4 h-4" />
              Published Technical Article
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 leading-snug">
              {activity.articleTitle ||
                "When a Copy Isn't Really a Copy: The Hidden Behaviour of Python Lists"}
            </h3>

            <p className="text-navy-700 text-sm sm:text-base leading-relaxed mt-4">
              {activity.description ||
                'A technical article explaining how Python lists behave when copied, with a focus on shallow copying, deep copying, and object references.'}
            </p>

            {mediumUrl && (
              <div className="pt-5 mt-5 border-t border-violetAccent-100">
                <a
                  href={mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-sm font-medium transition shadow-sm"
                >
                  Read Article on Medium
                  <ExternalLink className="w-4 h-4 text-violetAccent-300" />
                </a>
              </div>
            )}
          </div>

          {/* LEARNING AREAS */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Key Learning Areas
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyLearningAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-navy-100 shadow-2xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />

                  <span className="text-sm text-navy-800 leading-relaxed">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PUBLISHING EXPERIENCE */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-violetAccent-50/70 to-ivory-50 border border-violetAccent-200">

            <div className="flex items-center gap-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider font-bold mb-3">
              <UserRound className="w-4 h-4" />
              My Publishing Experience
            </div>

            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-violetAccent-400 shrink-0" />

              <p className="text-sm text-navy-800 italic leading-relaxed">
                {activity.learningExperience ||
                  'Writing and publishing this article helped me strengthen my understanding of Python list behaviour and communicate technical concepts through structured writing.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
