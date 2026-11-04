
import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, CalendarDays, BookOpen } from 'lucide-react';

export default function Hero() {
  const { data } = usePortfolio();

  return (
    <section
      className="
        relative isolate overflow-hidden
        border-b border-ivory-200
        bg-[#faf8f7]
        pt-24 sm:pt-28 md:pt-32
        pb-12 sm:pb-16
      "
    >
      {/* Soft pastel background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-[5%] h-80 w-80 rounded-full bg-[#fce7f3]/70 blur-[90px]" />
        <div className="absolute top-1/3 left-[30%] h-96 w-96 rounded-full bg-[#e0f2fe]/70 blur-[100px]" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-[#fdf2f8]/70 blur-[90px]" />
        <div className="absolute bottom-0 right-[25%] h-72 w-72 rounded-full bg-[#dbeafe]/40 blur-[90px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-14">

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center">

          {/* Academic Badge */}
          <div className="
            mb-8 inline-flex flex-wrap items-center justify-center gap-2.5
            rounded-full border border-violetAccent-200/70
            bg-white/90 px-5 py-3
            shadow-[0_5px_20px_rgba(124,58,237,0.07)]
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(124,58,237,0.12)]
          ">
            <span className="h-2 w-2 rounded-full bg-violetAccent-600" />

            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.13em] text-navy-800 sm:text-sm">
              {data.meta.courseCode} • 2026–2027
            </span>

            <span className="hidden text-navy-300 sm:inline">|</span>

            <span className="text-xs font-mono font-bold text-violetAccent-700 sm:text-sm">
              July – November 2026
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="
              text-5xl font-serif font-bold tracking-tight
              leading-[1.08] text-navy-950
              sm:text-6xl lg:text-7xl
            ">
              Beyond Code
            </h1>

            <p className="
              mt-3 font-subserif text-3xl italic font-normal
              text-[#526b89]
              sm:text-4xl lg:text-5xl
            ">
              My Python Journey
            </p>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-pink-300 via-violetAccent-400 to-sky-300" />
          </div>

          {/* Description */}
          <p className="
            mb-9 max-w-[610px]
            text-base font-light leading-8 text-navy-700
            sm:text-lg
          ">
            A showcase of my learning journey through Python programming,
            classroom activities, coding exercises, collaborative projects,
            and practical applications.
          </p>

          {/* Student Information Card */}
          <div className="
            w-full max-w-[720px]
            rounded-2xl border border-white/90
            bg-white/85 p-5
            shadow-[0_12px_35px_rgba(30,41,59,0.08)]
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-[0_18px_40px_rgba(30,41,59,0.13)]
            sm:p-7
          ">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Student */}
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fce7f3] text-[#be5685]">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-navy-400">
                    Student
                  </span>
                  <p className="break-words text-base font-serif font-bold text-navy-950">
                    {data.meta.studentName}
                  </p>
                </div>
              </div>

              {/* Register Number */}
              <div className="flex items-center gap-3 text-left sm:border-l sm:border-ivory-200 sm:pl-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#3980ad]">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-navy-400">
                    Register Number
                  </span>
                  <p className="text-base font-serif font-bold text-navy-950">
                    23MID0233
                  </p>
                </div>
              </div>

              {/* Course */}
              <div className="flex items-center gap-3 text-left sm:col-span-2 lg:col-span-1 lg:border-l lg:border-ivory-200 lg:pl-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violetAccent-50 text-violetAccent-700">
                  <CalendarDays className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-navy-400">
                    Course Title
                  </span>
                  <p className="text-base font-serif font-bold text-navy-950">
                    {data.meta.courseTitle}
                  </p>
                </div>
              </div>

              {/* Faculty */}
              {data.meta.instructor && (
                <div className="flex items-center gap-3 text-left sm:col-span-2 lg:col-span-3 lg:border-t lg:border-ivory-200 lg:pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3e8ff] text-violetAccent-700">
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  <div>
                    <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-navy-400">
                      Faculty
                    </span>
                    <p className="text-sm font-medium text-navy-700">
                      {data.meta.instructor}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Small decorative caption */}
          <p className="mt-6 text-[10px] font-mono uppercase tracking-[0.22em] text-navy-400">
            Learn • Explore • Create • Grow
          </p>
        </div>

        {/* RIGHT CONTENT - PROFILE PHOTO */}
        <div className="
          relative z-10 flex w-full items-center justify-center
          px-3 py-3 sm:px-8 lg:px-4
        ">

          {/* Soft glow behind photograph */}
          <div className="
            absolute h-[380px] w-[300px] rounded-full
            bg-gradient-to-br from-pink-200/60 to-sky-200/60
            blur-[65px] sm:h-[470px] sm:w-[380px]
          " />

          {/* Photo frame */}
          <div className="
            group relative
            h-[420px] w-full max-w-[360px]
            overflow-hidden rounded-[30px]
            border-[6px] border-white
            bg-white
            shadow-[0_20px_55px_rgba(30,41,59,0.14)]
            transition-all duration-500 ease-out
            transform-gpu
            hover:-translate-y-2
            hover:shadow-[0_30px_65px_rgba(30,41,59,0.20)]
            sm:h-[500px] sm:max-w-[390px]
            lg:h-[530px]
            motion-reduce:transform-none
            motion-reduce:transition-none
          ">

            <img
              src="/uploads/background_santhosh.jpeg"
              alt="Student outside Data Analytics Lab, Room 319"
              className="
                h-full w-full object-cover object-center
                transition-transform duration-700 ease-out
                group-hover:scale-[1.025]
                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            />

            {/* Subtle photo overlay */}
            <div className="
              pointer-events-none absolute inset-0
              bg-gradient-to-t
              from-navy-950/20 via-transparent to-white/10
              opacity-80
            " />

            {/* Small bottom caption */}
            <div className="
              absolute bottom-4 left-4 right-4
              rounded-xl border border-white/40
              bg-white/75 px-4 py-3
              opacity-0 backdrop-blur-md
              transition-all duration-300
              group-hover:translate-y-0 group-hover:opacity-100
              translate-y-2
              motion-reduce:transition-none
            ">
              <p className="text-center text-xs font-semibold tracking-wide text-navy-900">
                My Learning Journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
