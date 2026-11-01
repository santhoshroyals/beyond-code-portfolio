import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import { Layers, ChevronLeft, ChevronRight, Activity, Cpu, Sliders, Watch, Radio, FileCheck, CheckCircle } from 'lucide-react';

const iconMap = {
  Watch: Watch,
  Sliders: Sliders,
  Activity: Activity,
  Radio: Radio,
  Cpu: Cpu,
  FileCheck: FileCheck
};

export default function StoryboardActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.storyboard;
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = activity.steps[activeStepIndex];
  const StepIcon = iconMap[currentStep.icon] || Activity;

  return (
    <div id="storyboard" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Activity Label & Title */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            02
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 2 • Ideation & Process Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>{activity.badge}</span>
          </span>
          <span className="text-xs text-navy-500 font-mono bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
            {activity.date}
          </span>
        </div>
      </div>

      <p className="text-navy-700 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
        {activity.description}
      </p>

      {/* Storyboard Step Navigator Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
        {activity.steps.map((step, idx) => {
          const Icon = iconMap[step.icon] || Activity;
          const isSelected = activeStepIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-violetAccent-600 bg-violetAccent-50/70 shadow-sm ring-1 ring-violetAccent-500'
                  : 'border-ivory-200 bg-ivory-50/70 hover:bg-white hover:border-navy-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-violetAccent-700' : 'text-navy-400'}`}>
                  Stage {step.stage}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-violetAccent-600' : 'text-navy-400'}`} />
              </div>
              <p className={`text-xs font-medium line-clamp-1 ${isSelected ? 'text-navy-950 font-bold' : 'text-navy-700'}`}>
                {step.title.split('. ')[1] || step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 bg-ivory-50/60 rounded-2xl border border-ivory-200">
        <div className="lg:col-span-7">
          <MediaUploadSlot
            activityKey="storyboard"
            fieldKey={`step_image_${activeStepIndex}`}
            currentImage={activity[`step_image_${activeStepIndex}`]}
            defaultImage={currentStep.image}
            aspectRatio="aspect-[16/10]"
            title={`Storyboard Stage ${currentStep.stage}: ${currentStep.title}`}
            caption={`Visual representation for Stage ${currentStep.stage}: ${currentStep.title}`}
            label={`Upload Custom Visual for Stage ${currentStep.stage}`}
          />
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider mb-2">
              <StepIcon className="w-4 h-4" />
              <span>Step {currentStep.stage} of {activity.steps.length} in System Lifecycle</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mb-3">
              {currentStep.title}
            </h3>
            <p className="text-navy-700 leading-relaxed text-sm sm:text-base font-sans">
              {currentStep.desc}
            </p>
          </div>

          <div className="pt-4 border-t border-navy-100 flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : activity.steps.length - 1))}
              className="px-3 py-1.5 rounded-lg border border-navy-200 bg-white text-navy-700 text-xs font-medium flex items-center space-x-1 hover:bg-ivory-100 transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous Stage</span>
            </button>

            <span className="text-xs font-mono text-navy-500">
              {activeStepIndex + 1} / {activity.steps.length}
            </span>

            <button
              onClick={() => setActiveStepIndex((prev) => (prev < activity.steps.length - 1 ? prev + 1 : 0))}
              className="px-3 py-1.5 rounded-lg border border-navy-200 bg-white text-navy-700 text-xs font-medium flex items-center space-x-1 hover:bg-ivory-100 transition"
            >
              <span>Next Stage</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Reflection Footer */}
      <div className="mt-8 p-5 rounded-xl bg-white border border-navy-100/70 text-xs sm:text-sm text-navy-700 font-subserif italic">
        <strong className="font-sans not-italic text-navy-950 uppercase text-xs font-semibold mr-2">
          Architectural Insight:
        </strong>
        "{activity.reflection}"
      </div>
    </div>
  );
}

