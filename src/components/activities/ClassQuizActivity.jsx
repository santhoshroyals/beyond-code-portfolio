
import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  CheckCircle2,
  BookOpen,
  Users,
  Trophy,
  Sparkles,
  Camera,
  Eye
} from 'lucide-react';

export default function ClassQuizActivity() {
  const { data, openLightbox } = usePortfolio();

  const activity = data?.activities?.classQuiz || {};

  // Display only the three selected photographs
  const quizPhotos = [
    '/uploads/class_quiz1.jpeg',
    '/uploads/class_quiz2.jpeg',
    '/uploads/class_quiz3.jpeg'
  ];

  const topicsCovered = Array.isArray(activity.topicsCovered)
    ? activity.topicsCovered
    : [];

  const keyTakeaways = Array.isArray(activity.keyTakeaways)
    ? activity.keyTakeaways
    : [];

  return (
    <div
      id="class-quiz"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* ACTIVITY HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            05
          </span>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 5 • Classroom Competition
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'Python Concepts and Data Structures Quiz'}
            </h2>
          </div>
        </div>

        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
          <Trophy className="w-4 h-4 text-amber-600" />
          <span>
            {activity.achievement || 'Second Place – Team Participation'}
          </span>
        </span>
      </div>

      {/* ACHIEVEMENT OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 to-ivory-100 border border-amber-200">
          <span className="text-xs font-mono uppercase text-amber-800 font-bold block mb-1">
            Achievement
          </span>

          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Second Place
          </p>

          <span className="text-xs text-navy-600">
            Team Participation
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200">
          <span className="text-xs font-mono uppercase text-navy-500 font-bold block mb-1">
            Participation Format
          </span>

          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Team Quiz
          </p>

          <span className="text-xs text-navy-600">
            Collaborative Academic Competition
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200">
          <span className="text-xs font-mono uppercase text-navy-500 font-bold block mb-1">
            Core Focus
          </span>

          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Concepts & Data Structures
          </p>

          <span className="text-xs text-navy-600">
            Python Language Fundamentals
          </span>
        </div>
      </div>

      {/* TOPICS AND LEARNING EXPERIENCE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        <div className="lg:col-span-7 space-y-6">

          {/* TOPICS COVERED */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Topics Covered in the Quiz
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {topicsCovered.map((topicName, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-navy-100 bg-ivory-50/60 hover:bg-white hover:border-violetAccent-300 transition-all shadow-2xs"
                >
                  <span className="text-[10px] font-mono text-violetAccent-600 font-bold block mb-1">
                    Topic 0{idx + 1}
                  </span>

                  <h5 className="text-sm font-serif font-bold text-navy-950">
                    {topicName}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* KEY TAKEAWAYS */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-navy-500 font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Key Takeaways
            </h4>

            <div className="space-y-2.5">
              {keyTakeaways.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-navy-100 shadow-2xs flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />

                  <span className="text-xs sm:text-sm text-navy-800 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LEARNING EXPERIENCE */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-ivory-50 to-violetAccent-50/30 border border-navy-100 shadow-xs">
            <div className="flex items-center gap-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider font-bold mb-3">
              <Users className="w-4 h-4" />
              My Learning Experience
            </div>

            <p className="text-sm text-navy-800 font-subserif italic leading-relaxed">
              "{activity.learningExperience || ''}"
            </p>

            <div className="mt-4 pt-3 border-t border-navy-100/60 flex flex-wrap items-center justify-between gap-2 text-xs text-navy-500">
              <span className="font-mono text-[11px]">
                Classroom Reflection
              </span>

              <span className="font-mono text-[11px] text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                Second Place – Team Participation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CLASSROOM PHOTO GALLERY */}
      <div className="border-t border-ivory-200 pt-8">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-violetAccent-600" />

            <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold">
              Classroom Memories
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950">
            Quiz Event Photo Gallery
          </h3>

          <p className="text-sm text-navy-600 mt-2">
            Three selected photographs capturing my participation,
            team interaction and classroom quiz experience.
          </p>
        </div>

        {/* DISPLAY EXACTLY THREE SELECTED PHOTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizPhotos.map((photo, index) => (
            <div
              key={photo}
              className="bg-white rounded-xl border border-navy-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-ivory-100 relative">
                <img
                  src={photo}
                  alt={`Selected quiz photograph ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      photo,
                      `Quiz Memory ${index + 1}`,
                      'Quiz Gallery'
                    )
                  }
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:bg-white transition"
                  aria-label={`View photograph ${index + 1}`}
                >
                  <Eye className="w-4 h-4 text-navy-900" />
                </button>
              </div>

              <div className="p-3">
                <p className="text-sm font-semibold text-navy-900">
                  Quiz Memory {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
