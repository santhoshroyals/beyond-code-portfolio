import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { AlertTriangle, CheckCircle, Wrench, ArrowRight, Sparkles } from 'lucide-react';

export default function ChallengesSolutions() {
  const { data } = usePortfolio();
  const { challenges } = data;
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);

  return (
    <section id="challenges" className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <Wrench className="w-4 h-4" />
          <span>Engineering Resilience</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-4">
          Challenges and Solutions
        </h2>
        <p className="text-navy-700 text-sm sm:text-base max-w-2xl leading-relaxed mb-12">
          Real-world engineering is punctuated by edge cases and runtime bottlenecks. Here are four pivotal technical obstacles encountered during this journey and the principled Python architectures that resolved them.
        </p>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-navy-100 shadow-editorial flex flex-col justify-between hover:border-violetAccent-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase font-bold text-violetAccent-700 bg-violetAccent-50 px-2.5 py-1 rounded border border-violetAccent-200">
                    Challenge 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-navy-400">{item.category}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-navy-950 mb-4">
                  {item.title}
                </h3>

                {/* Problem Statement */}
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 mb-4">
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-rose-800 uppercase mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    <span>The Bottleneck:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-sans">
                    {item.problem}
                  </p>
                </div>

                {/* Resolution */}
                <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 mb-4">
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-emerald-800 uppercase mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Architectural Resolution:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-sans">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Performance Impact */}
              <div className="pt-3 border-t border-navy-100 flex items-center justify-between text-xs">
                <span className="font-mono text-navy-500 uppercase text-[10px]">Quantified Gain:</span>
                <span className="font-semibold text-violetAccent-700">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

