import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import { Award, CheckCircle2, BookOpen, Users, Trophy, Sparkles } from 'lucide-react';

export default function ClassQuizActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.classQuiz;

  return (
    <div id="class-quiz" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Activity Label & Title */}
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
              {activity.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>{activity.achievement}</span>
          </span>
        </div>
      </div>

      {/* Overview Achievement Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 to-ivory-100 border border-amber-200">
          <span className="text-xs font-mono uppercase text-amber-800 font-bold block mb-1">Achievement</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">Second Place</p>
          <span className="text-xs text-navy-600 font-sans">Team Participation</span>
        </div>

        <div className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200">
          <span className="text-xs font-mono uppercase text-navy-500 font-bold block mb-1">Participation Format</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">Team Quiz</p>
          <span className="text-xs text-navy-600 font-sans">Collaborative Academic Competition</span>
        </div>

        <div className="p-5 rounded-2xl bg-ivory-50 border border-ivory-200">
          <span className="text-xs font-mono uppercase text-navy-500 font-bold block mb-1">Core Focus</span>
          <p className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">Concepts & Data Structures</p>
          <span className="text-xs text-navy-600 font-sans">Python Language Fundamentals</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Column: Topics Covered & Key Takeaways */}
        <div className="lg:col-span-7 space-y-6">
          {/* Topics Covered */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-violetAccent-600" />
              <span>Topics Covered in the Quiz</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activity.topicsCovered.map((topicName, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-navy-100 bg-ivory-50/60 hover:bg-white hover:border-violetAccent-300 transition-all flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <span className="text-[10px] font-mono text-violetAccent-600 font-bold block mb-1">
                      Topic 0{idx + 1}
                    </span>
                    <h5 className="text-sm font-serif font-bold text-navy-950">
                      {topicName}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-navy-500 font-bold mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Key Takeaways</span>
            </h4>

            <div className="space-y-2.5">
              {activity.keyTakeaways.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-navy-100 shadow-2xs flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-navy-800 font-medium font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quiz Photograph & Learning Experience */}
        <div className="lg:col-span-5 space-y-6">
          {/* Evidence Slot for Existing Quiz Photograph (Awaiting Upload Notice) */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-navy-500 font-bold mb-3">
              Quiz Event Evidence Photograph
            </h4>
            <MediaUploadSlot
              activityKey="classQuiz"
              fieldKey="userUploadedQuizScreenshot"
              currentImage={activity.userUploadedQuizScreenshot}
              defaultImage={null}
              aspectRatio="aspect-[4/3]"
              title="Classroom Quiz Photograph"
              caption="Actual classroom photograph awaiting upload."
              label="Upload Classroom Photograph"
              placeholderNote="Actual classroom photograph awaiting upload. Click to upload your authentic quiz photograph."
            />
          </div>

          {/* My Learning Experience */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-ivory-50 to-violetAccent-50/30 border border-navy-100 shadow-xs">
            <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>My Learning Experience</span>
            </div>
            <p className="text-sm text-navy-800 font-subserif italic leading-relaxed">
              "{activity.learningExperience}"
            </p>
            <div className="mt-4 pt-3 border-t border-navy-100/60 flex items-center justify-between text-xs text-navy-500">
              <span className="font-mono text-[11px] text-navy-500">Classroom Reflection</span>
              <span className="font-mono text-[11px] text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-medium">
                Second Place – Team Participation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
