import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Compass, BookOpen, CheckCircle, Cpu, Quote } from 'lucide-react';

export default function AboutJourney() {
  const { data } = usePortfolio();
  const { about } = data;

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3">
          <Compass className="w-4 h-4" />
          <span>Curricular Monograph</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-950 mb-6">
          About My Journey
        </h2>

        {/* Narrative & Philosophy Pull Quote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-navy-100 shadow-editorial mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violetAccent-50 rounded-full blur-2xl pointer-events-none" />
          <Quote className="w-10 h-10 text-violetAccent-200 mb-4" />
          <p className="text-xl sm:text-2xl font-serif font-semibold text-navy-950 leading-relaxed italic mb-4">
            "{about.philosophy}"
          </p>
          <span className="text-xs font-mono tracking-wider uppercase text-violetAccent-700 font-bold">
            — Core Pedagogical Thesis • {data.meta.studentName}
          </span>
        </div>

        {/* Narrative Essay Paragraphs */}
        <div className="space-y-6 text-navy-800 font-sans text-base sm:text-lg leading-relaxed mb-14 max-w-4xl">
          {about.story.map((paragraph, idx) => (
            <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-violetAccent-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Four Core Architectural Principles */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-navy-400 font-bold mb-6">
            Guiding Principles of Advanced Python Engineering
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.principles.map((principle, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-navy-100 shadow-xs hover:border-violetAccent-300 transition-all group"
              >
                <div className="w-8 h-8 rounded-xl bg-ivory-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-xs mb-3 group-hover:bg-violetAccent-600 group-hover:text-white transition-colors">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-serif font-bold text-navy-950 mb-2">
                  {principle.title}
                </h4>
                <p className="text-sm text-navy-700 leading-relaxed font-sans">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

