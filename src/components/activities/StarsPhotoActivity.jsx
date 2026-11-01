import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import { Star, Award, Users, Calendar, Sparkles, Quote, Edit3 } from 'lucide-react';

export default function StarsPhotoActivity() {
  const { data, updateActivity } = usePortfolio();
  const activity = data.activities.starsPhoto;
  const [isEditingReflection, setIsEditingReflection] = useState(false);
  const [tempReflection, setTempReflection] = useState(activity.reflection);

  const handleSaveReflection = () => {
    updateActivity('starsPhoto', { reflection: tempReflection });
    setIsEditingReflection(false);
  };

  return (
    <div id="stars-photo" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Activity Label & Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            01
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 1 • Honors & Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{activity.badge}</span>
          </span>
          <span className="text-xs text-navy-500 font-mono bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
            {activity.date}
          </span>
        </div>
      </div>

      {/* Main Grid: Upload slot & Reflection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Media Upload Slot for user's Stars photo */}
        <div className="lg:col-span-7 space-y-4">
          <MediaUploadSlot
            activityKey="starsPhoto"
            fieldKey="userUploadedImage"
            currentImage={activity.userUploadedImage}
            defaultImage={activity.defaultImage}
            aspectRatio="aspect-[4/3]"
            title={activity.title}
            caption={activity.caption}
            label="Upload Your Stars Cohort Photo"
          />

          <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 text-xs text-navy-700 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-violetAccent-600" />
              <span className="font-semibold text-navy-900">Cohort Members Featured:</span>
              <span className="text-navy-600">{activity.participants.join(', ')}</span>
            </div>
            <div className="flex items-center space-x-1">
              {activity.tags.map((tag, idx) => (
                <span key={idx} className="bg-white px-2 py-0.5 rounded text-[11px] font-mono border border-ivory-300 text-navy-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Academic Context & Reflection */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-sm font-mono tracking-wider uppercase text-navy-500 mb-2 font-semibold">
              Event Context & Significance
            </h4>
            <p className="text-navy-800 leading-relaxed text-sm sm:text-base font-sans">
              {activity.description}
            </p>
          </div>

          <div className="relative p-6 rounded-xl bg-gradient-to-br from-ivory-100/90 to-violetAccent-50/40 border border-navy-100 shadow-sm">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-violetAccent-200 pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold">
                Student Reflection
              </span>
              <button
                type="button"
                onClick={() => setIsEditingReflection(!isEditingReflection)}
                className="text-xs text-navy-500 hover:text-violetAccent-700 flex items-center space-x-1 transition"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditingReflection ? "Cancel" : "Edit Reflection"}</span>
              </button>
            </div>

            {isEditingReflection ? (
              <div className="space-y-3">
                <textarea
                  value={tempReflection}
                  onChange={(e) => setTempReflection(e.target.value)}
                  rows={4}
                  className="w-full text-sm p-3 border border-violetAccent-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violetAccent-500"
                />
                <button
                  onClick={handleSaveReflection}
                  className="px-4 py-1.5 bg-violetAccent-600 text-white rounded-lg text-xs font-medium hover:bg-violetAccent-700 transition"
                >
                  Save Reflection
                </button>
              </div>
            ) : (
              <p className="text-navy-900 font-subserif text-base sm:text-lg italic leading-relaxed">
                "{activity.reflection}"
              </p>
            )}

            <div className="mt-4 pt-3 border-t border-navy-100/60 flex items-center justify-between text-xs text-navy-600">
              <span className="font-semibold text-navy-900">{data.meta.studentName}</span>
              <span className="font-mono">{data.meta.courseCode}</span>
            </div>
          </div>

          <div className="border-l-2 border-amber-400 pl-4 py-1">
            <p className="text-xs text-navy-600">
              <strong className="text-navy-900">Academic Evidence Note:</strong> You can replace the default placeholder photo at any time by hovering over the frame and clicking <em>"Upload Your Evidence"</em>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

