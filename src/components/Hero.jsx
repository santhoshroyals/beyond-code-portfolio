import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Sparkles, 
  ArrowDown, 
  Award, 
  BookOpen, 
  Radio, 
  CheckCircle2, 
  Edit3, 
  Check, 
  Calendar,
  Layers
} from 'lucide-react';

export default function Hero() {
  const { data, updateMeta } = usePortfolio();
  const [isEditingMeta, setIsEditingMeta] = useState(false);
  const [tempStudentName, setTempStudentName] = useState(data.meta.studentName);
  const [tempCourseTitle, setTempCourseTitle] = useState(data.meta.courseTitle);

  const handleSaveMeta = () => {
    updateMeta({
      studentName: tempStudentName,
      courseTitle: tempCourseTitle
    });
    setIsEditingMeta(false);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden border-b border-ivory-200">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-violetAccent-100/30 via-blueAccent-50/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Academic Course Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-navy-200/80 shadow-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-violetAccent-600 animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest uppercase text-navy-800 font-semibold">
            {data.meta.courseCode} • {data.meta.academicTerm}
          </span>
          <span className="text-navy-300">|</span>
          <span className="text-xs font-mono text-violetAccent-700 font-bold">
            {data.meta.statusBadge}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-navy-950 tracking-tight leading-[1.1] mb-6">
          Beyond Code
          <span className="block font-subserif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-navy-700 mt-2">
            My Python Journey
          </span>
        </h1>

        {/* Monograph Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-navy-700 font-sans font-light leading-relaxed mb-10">
          An academic monograph on advanced CPython internals, asynchronous telemetry, real-time digital signal processing, and applied IoT software architecture.
        </p>

        {/* Student / Course Credential Strip */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 sm:p-5 rounded-2xl bg-white/90 border border-navy-100 shadow-editorial mb-10">
          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-navy-400 font-semibold block">
              Author & Researcher
            </span>
            <span className="text-sm sm:text-base font-serif font-bold text-navy-950">
              {data.meta.studentName}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-ivory-200" />

          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-navy-400 font-semibold block">
              Course Title
            </span>
            <span className="text-sm sm:text-base font-serif font-bold text-navy-950">
              {data.meta.courseTitle}
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-ivory-200" />

          <div className="text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-navy-400 font-semibold block">
              Academic Advising
            </span>
            <span className="text-xs sm:text-sm font-sans text-navy-700">
              {data.meta.instructor}
            </span>
          </div>

          <button
            onClick={() => setIsEditingMeta(!isEditingMeta)}
            className="p-1.5 text-navy-400 hover:text-violetAccent-700 rounded-lg transition"
            title="Edit student/course details"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Inline Meta Editor if triggered */}
        {isEditingMeta && (
          <div className="max-w-md mx-auto p-4 mb-8 bg-white rounded-xl border border-violetAccent-300 shadow-md text-left space-y-3">
            <div>
              <label className="text-xs font-mono uppercase text-navy-600 block mb-1">Student Name</label>
              <input
                type="text"
                value={tempStudentName}
                onChange={(e) => setTempStudentName(e.target.value)}
                className="w-full text-xs p-2 border border-navy-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-violetAccent-500"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase text-navy-600 block mb-1">Course Title</label>
              <input
                type="text"
                value={tempCourseTitle}
                onChange={(e) => setTempCourseTitle(e.target.value)}
                className="w-full text-xs p-2 border border-navy-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-violetAccent-500"
              />
            </div>
            <button
              onClick={handleSaveMeta}
              className="w-full py-1.5 bg-violetAccent-600 text-white rounded-lg text-xs font-medium hover:bg-violetAccent-700 transition"
            >
              Update Credentials
            </button>
          </div>
        )}

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#stars-photo"
            className="px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-2 shadow-lg transition-transform active:scale-95"
          >
            <Layers className="w-4 h-4" />
            <span>Explore 10 Mandatory Activities</span>
          </a>

          <a
            href="#iot-showcase"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-ivory-100 border border-navy-200 text-navy-900 text-xs sm:text-sm font-medium tracking-wide flex items-center space-x-2 shadow-sm transition"
          >
            <Radio className="w-4 h-4 text-violetAccent-600" />
            <span>View IoT Impairment Showcase</span>
          </a>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-navy-100/70">
          <div className="p-4 rounded-xl bg-white/70 border border-ivory-200">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-navy-950">10 / 10</span>
            <p className="text-xs font-mono text-violetAccent-700 mt-0.5 uppercase tracking-wider">Mandatory Activities</p>
            <p className="text-[11px] text-navy-500">Fully Documented</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-ivory-200">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-navy-950">200 Hz</span>
            <p className="text-xs font-mono text-violetAccent-700 mt-0.5 uppercase tracking-wider">IoT Sensor Telemetry</p>
            <p className="text-[11px] text-navy-500">MicroPython & WebSockets</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-ivory-200">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-navy-950">2nd Place</span>
            <p className="text-xs font-mono text-violetAccent-700 mt-0.5 uppercase tracking-wider">Class Quiz Award</p>
            <p className="text-[11px] text-navy-500">Team Participation</p>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-ivory-200">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-navy-950">1.4k+</span>
            <p className="text-xs font-mono text-violetAccent-700 mt-0.5 uppercase tracking-wider">Medium Blog Claps</p>
            <p className="text-[11px] text-navy-500">Peer Dissemination</p>
          </div>
        </div>
      </div>
    </section>
  );
}

