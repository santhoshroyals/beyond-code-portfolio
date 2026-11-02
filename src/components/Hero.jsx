
import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Hero() {
  const { data } = usePortfolio();

  return (
    <section className="relative min-h-[650px] flex flex-col md:flex-row overflow-hidden border-b border-ivory-200 bg-[#faf8f5]">

      {/* LEFT SECTION - CENTRED CONTENT */}
      <div className="relative z-10 w-full md:w-[58%] flex items-center justify-center px-5 sm:px-10 lg:px-14 py-16 md:py-20">

        <div className="w-full max-w-[680px] text-center">

          {/* Academic Information Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/95 border border-navy-200/80 shadow-sm mb-8">

            <span className="w-2.5 h-2.5 rounded-full bg-violetAccent-600 animate-pulse"></span>

            <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-navy-800 font-semibold">
              {data.meta.courseCode} • 2026–2027
            </span>

            <span className="text-navy-300">|</span>

            <span className="text-xs sm:text-sm font-mono text-violetAccent-700 font-bold">
              July – November 2026
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 tracking-tight leading-[1.1] mb-6">
            Beyond Code

            <span className="block font-subserif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-navy-700 mt-3">
              My Python Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-navy-700 font-sans font-light leading-relaxed mb-10">
            A showcase of my learning journey through Python programming,
            classroom activities, coding exercises, collaborative projects,
            and practical applications.
          </p>

          {/* Read-Only Student Details Card */}
          <div className="inline-flex flex-wrap items-center justify-center gap-5 sm:gap-7 px-6 py-5 sm:px-7 sm:py-6 rounded-2xl bg-white/95 border border-navy-100 shadow-editorial mb-8">

            {/* Student Name */}
            <div className="text-left">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-navy-400 font-semibold block mb-1">
                Student
              </span>

              <span className="text-base sm:text-lg font-serif font-bold text-navy-950">
                {data.meta.studentName}
              </span>
            </div>

            <div className="hidden sm:block w-px h-10 bg-ivory-200" />

            {/* Register Number */}
            <div className="text-left">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-navy-400 font-semibold block mb-1">
                Register Number
              </span>

              <span className="text-base sm:text-lg font-serif font-bold text-navy-950">
                23MID0233
              </span>
            </div>

            <div className="hidden sm:block w-px h-10 bg-ivory-200" />

            {/* Course Title */}
            <div className="text-left">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-navy-400 font-semibold block mb-1">
                Course Title
              </span>

              <span className="text-base sm:text-lg font-serif font-bold text-navy-950">
                {data.meta.courseTitle}
              </span>
            </div>

            {/* Faculty */}
            {data.meta.instructor && (
              <>
                <div className="hidden sm:block w-px h-10 bg-ivory-200" />

                <div className="text-left">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-navy-400 font-semibold block mb-1">
                    Faculty
                  </span>

                  <span className="text-sm sm:text-base font-sans text-navy-700">
                    {data.meta.instructor}
                  </span>
                </div>
              </>
            )}

          </div>

        </div>
      </div>

      {/* RIGHT SECTION - PHOTOGRAPH */}
      <div className="relative w-full md:w-[42%] min-h-[420px] md:min-h-0 flex items-center justify-center bg-[#faf8f5]">

        <img
          src="/uploads/background_santhosh.jpeg"
          alt="Student outside Data Analytics Lab, Room 319"
          className="w-full h-full max-h-[750px] object-contain object-center"
        />

        {/* Soft Photo Blend */}
        <div
          className="absolute inset-y-0 left-0 w-20 md:w-28 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #faf8f5, rgba(250,248,245,0))'
          }}
        />

      </div>

    </section>
  );
}
