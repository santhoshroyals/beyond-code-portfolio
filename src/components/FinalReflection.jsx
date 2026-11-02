
import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Feather,
  Award,
  Quote
} from 'lucide-react';

export default function FinalReflection() {
  const { data } = usePortfolio();

  // Safe fallback values prevent the page from crashing
  // if portfolio data has not loaded yet.
  const finalReflection = data?.finalReflection || {};
  const meta = data?.meta || {};

  const essay = Array.isArray(finalReflection.essay)
    ? finalReflection.essay
    : [];

  const facultyEndorsements = Array.isArray(
    finalReflection.facultyEndorsements
  )
    ? finalReflection.facultyEndorsements
    : [];

  return (
    <section
      id="reflection"
      className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <Feather className="w-4 h-4" />
          <span>Capstone Valediction</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-4">
          {finalReflection.title || 'Final Reflection'}
        </h2>

        <p className="text-xs font-mono text-navy-400 uppercase tracking-widest mb-10">
          Academic Monograph Conclusion
          {finalReflection.date ? ` • ${finalReflection.date}` : ''}
          {finalReflection.signoff ? ` • ${finalReflection.signoff}` : ''}
        </p>

        {/* Concluding Essay */}
        {essay.length > 0 && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-navy-100 shadow-editorial mb-12 space-y-6 text-navy-900 font-sans text-base sm:text-lg leading-relaxed">

            {essay.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "font-subserif text-xl sm:text-2xl italic leading-relaxed text-navy-950"
                    : ""
                }
              >
                {para}
              </p>
            ))}

            {/* Academic Signature Block */}
            <div className="pt-8 border-t border-ivory-300 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-serif italic text-2xl text-navy-900">
                  {meta.studentName || ''}
                </p>

                <span className="text-xs font-mono text-navy-500 uppercase tracking-wider block mt-1">
                  {meta.studentId
                    ? `Student ID: ${meta.studentId} • Candidate for Honors`
                    : 'Candidate for Honors'}
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-xl bg-ivory-50 border border-ivory-200">
                <Award className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono font-bold text-navy-950 block">
                    Verified Portfolio Defense
                  </span>
                  <span className="text-[11px] text-navy-500">
                    {meta.courseTitle || ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Faculty Advisors Endorsements */}
        {facultyEndorsements.length > 0 && (
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-navy-400 font-bold mb-6">
              Faculty Committee Endorsements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyEndorsements.map((faculty, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-ivory-50/70 border border-ivory-200 shadow-xs relative"
                >
                  <Quote className="w-6 h-6 text-violetAccent-300 mb-3" />

                  <p className="text-xs sm:text-sm text-navy-800 italic font-subserif leading-relaxed mb-4">
                    "{faculty.quote || ''}"
                  </p>

                  <div className="pt-3 border-t border-ivory-200">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-navy-950">
                      {faculty.professor || ''}
                    </h4>

                    <p className="text-[11px] text-navy-500 font-sans">
                      {faculty.role || ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
