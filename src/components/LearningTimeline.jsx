import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Calendar, CheckCircle2, Milestone, ArrowRight } from 'lucide-react';

export default function LearningTimeline() {
  const { data } = usePortfolio();
  const { timeline } = data;

  return (
    <section id="timeline" className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <Calendar className="w-4 h-4" />
          <span>Curricular Trajectory</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-4">
          Learning Timeline & Milestones
        </h2>
        <p className="text-navy-700 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
          A systematic chronological progression across sixteen weeks—evolving from CPython memory primitives to an integrated multi-threaded biomedical IoT platform.
        </p>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-ivory-300 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-violetAccent-600 shadow-sm group-hover:scale-125 transition-transform" />

              {/* Time Label on Left for Desktop */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right">
                <span className="font-mono text-xs font-bold text-violetAccent-700 uppercase tracking-wider block">
                  {item.week}
                </span>
                <span className="text-[11px] text-navy-400 font-mono hidden sm:block">
                  Semester Week
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-navy-100 shadow-xs hover:border-violetAccent-300 hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-navy-400 font-semibold">
                    {item.phase}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-ivory-100 text-navy-700 border border-ivory-200">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-navy-700 text-sm sm:text-base leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

