import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, BookOpen, ShieldCheck, Heart, Sparkles, RefreshCcw } from 'lucide-react';

export default function Footer() {
  const { data, resetToDefault } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-navy-800">
          {/* Column 1: Branding & Abstract */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-violetAccent-600 text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                BC
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Beyond Code</h3>
                <span className="text-xs font-mono text-violetAccent-300">My Python Journey</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-navy-300 font-sans leading-relaxed max-w-sm">
              Official academic portfolio submitted in fulfillment of the requirements for <strong>{data.meta.courseTitle} ({data.meta.courseCode})</strong>.
            </p>

            <div className="flex items-center space-x-2 text-xs text-navy-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Academic Integrity Compliant • Verifiable Evidence</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-400 font-bold">
              Coursework Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-navy-300">
              <li><a href="#about" className="hover:text-white transition">About My Journey</a></li>
              <li><a href="#skills" className="hover:text-white transition">Python Skills Matrix</a></li>
              <li><a href="#iot-showcase" className="hover:text-white transition">IoT Impairment Assessment</a></li>
              <li><a href="#timeline" className="hover:text-white transition">Learning Milestones</a></li>
              <li><a href="#challenges" className="hover:text-white transition">Challenges & Solutions</a></li>
              <li><a href="#reflection" className="hover:text-white transition">Final Capstone Reflection</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Citation & Reset */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-400 font-bold">
              Academic Citation
            </h4>
            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800 text-[11px] font-mono text-navy-300 leading-relaxed">
              Rivera, A. (2026). <em>Beyond Code: Engineering High-Fidelity Neurological Telemetry in Python</em>. Coursework Monograph, Department of Computer Science.
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={resetToDefault}
                className="text-xs text-navy-400 hover:text-rose-400 transition flex items-center space-x-1"
                title="Reset all uploaded evidence and edits to course defaults"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Reset Evidence to Defaults</span>
              </button>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white transition flex items-center space-x-1 text-xs"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-navy-400">
          <p>© {new Date().getFullYear()} {data.meta.studentName}. All academic artifacts documented for {data.meta.courseCode}.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with Pythonic Rigor & React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

