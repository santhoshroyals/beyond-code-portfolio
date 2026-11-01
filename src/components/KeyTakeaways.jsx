import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Lightbulb, CheckCircle2, BookmarkCheck } from 'lucide-react';

export default function KeyTakeaways() {
  const { data } = usePortfolio();
  const { takeaways } = data;

  return (
    <section id="takeaways" className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <BookmarkCheck className="w-4 h-4" />
          <span>Epistemological Synthesis</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-4">
          Key Takeaways
        </h2>
        <p className="text-navy-700 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
          Six foundational axioms distilled from hundreds of hours of coding, profiling, and hardware testing that now govern my engineering decision-making.
        </p>

        {/* 6 Takeaway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {takeaways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-navy-100 shadow-xs hover:border-violetAccent-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-violetAccent-700 bg-violetAccent-50 px-2.5 py-1 rounded border border-violetAccent-200 inline-block mb-3">
                  Axiom 0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-navy-950 mb-3">
                  {item.principle.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ivory-200 flex items-center text-[11px] font-mono text-navy-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                <span>Internalized Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

