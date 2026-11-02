
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  Activity,
  Cpu,
  Sliders,
  Radio,
  FileCheck,
  CheckCircle
} from 'lucide-react';

import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';

const iconMap = {
  Layers,
  Activity,
  Cpu,
  Sliders,
  Radio,
  FileCheck,
  CheckCircle
};

const storyboardSteps = [
  {
    stage: 1,
    title: 'Setup & Initialization',
    icon: 'Cpu',
    desc: 'The main thread initializes the shared queue, creates a queue lock, and starts three worker threads. The queue is configured with a fixed capacity of 10 items, preparing the system for task processing.'
  },
  {
    stage: 2,
    title: 'Filling the Queue',
    icon: 'Layers',
    desc: 'The main thread adds tasks A, B, C, D, and E to the shared queue. These tasks are stored in the queue and become available for the worker threads to process.'
  },
  {
    stage: 3,
    title: 'Threads Start Working',
    icon: 'Radio',
    desc: 'Each worker thread attempts to acquire the queue lock. Once a thread gets the lock, it retrieves an available task from the shared queue and begins processing it.'
  },
  {
    stage: 4,
    title: 'Concurrent Processing & Shared Access',
    icon: 'Activity',
    desc: 'Multiple worker threads process different tasks concurrently. The lock ensures that only one thread accesses the shared queue at a time, preventing conflicts during queue operations.'
  },
  {
    stage: 5,
    title: 'Completion & Exit Flag',
    icon: 'Sliders',
    desc: 'The main thread monitors the queue. When the queue becomes empty and the work is complete, it sets the exit flag to signal the worker threads that processing is finished.'
  },
  {
    stage: 6,
    title: 'Worker Shutdown & Final Exit',
    icon: 'CheckCircle',
    desc: 'The worker threads detect the exit signal, complete their remaining operations, and shut down. Finally, the main thread concludes execution after the workers have finished.'
  }
];

export default function StoryboardActivity() {
  const { data } = usePortfolio();

  const activity = data?.activities?.storyboard || {};

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = storyboardSteps[activeStepIndex];
  const StepIcon = iconMap[currentStep.icon] || Activity;

  const goToPrevious = () => {
    setActiveStepIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setActiveStepIndex((prev) =>
      Math.min(storyboardSteps.length - 1, prev + 1)
    );
  };

  return (
    <div
      id="storyboard"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* Activity Header */}
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
              {activity.title || 'Python Multithreading Storyboard'}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>{activity.badge || 'Storyboard'}</span>
          </span>

          <span className="text-xs text-navy-500 font-mono bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
            {activity.date || 'Course Activity'}
          </span>
        </div>
      </div>

      {/* Introduction */}
      <p className="text-navy-700 text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
        {activity.description ||
          'This storyboard illustrates the six stages of Python multithreading and shared queue processing, from initialization to worker shutdown.'}
      </p>

      {/* Complete Storyboard Image */}
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-lg font-serif font-bold text-navy-900">
            Complete Storyboard
          </h3>

          <p className="text-sm text-navy-600 mt-1">
            Visual overview of all six stages of Python multithreading and
            shared queue processing.
          </p>
        </div>

        <MediaUploadSlot
          activityKey="storyboard"
          fieldKey="userUploadedImage"
          currentImage={activity.userUploadedImage}
          defaultImage="/uploads/storyboard.jpeg"
          aspectRatio="aspect-[16/9]"
          title="Python Multithreading Storyboard"
          caption="Complete visual representation of all six stages."
          label="Upload Complete Storyboard Image"
        />
      </div>

      {/* Six Stage Navigation */}
      <div className="mb-6">
        <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
          Explore the Six Stages
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {storyboardSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Activity;
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.stage}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-violetAccent-600 bg-violetAccent-50/70 shadow-sm ring-1 ring-violetAccent-500'
                    : 'border-ivory-200 bg-ivory-50/70 hover:bg-white hover:border-navy-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      isSelected
                        ? 'text-violetAccent-700'
                        : 'text-navy-400'
                    }`}
                  >
                    Stage {step.stage}
                  </span>

                  <Icon
                    className={`w-4 h-4 ${
                      isSelected
                        ? 'text-violetAccent-600'
                        : 'text-navy-400'
                    }`}
                  />
                </div>

                <p
                  className={`text-xs font-medium ${
                    isSelected
                      ? 'text-navy-950 font-bold'
                      : 'text-navy-700'
                  }`}
                >
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Explanation */}
      <div className="p-6 sm:p-8 bg-ivory-50/60 rounded-2xl border border-ivory-200">
        <div className="flex flex-col justify-between min-h-[210px]">
          <div>
            <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider mb-3">
              <StepIcon className="w-4 h-4" />

              <span>
                Stage {currentStep.stage} of {storyboardSteps.length}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mb-3">
              {currentStep.title}
            </h3>

            <p className="text-navy-700 leading-relaxed text-sm sm:text-base">
              {currentStep.desc}
            </p>
          </div>

          {/* Previous and Next Navigation */}
          <div className="pt-6 mt-6 border-t border-navy-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={activeStepIndex === 0}
              className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-navy-700 text-xs font-medium flex items-center space-x-1 hover:bg-ivory-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <span className="text-xs font-mono text-navy-500">
              {activeStepIndex + 1} / {storyboardSteps.length}
            </span>

            <button
              type="button"
              onClick={goToNext}
              disabled={activeStepIndex === storyboardSteps.length - 1}
              className="px-3 py-2 rounded-lg border border-navy-200 bg-white text-navy-700 text-xs font-medium flex items-center space-x-1 hover:bg-ivory-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Architectural Reflection */}
      {activity.reflection && (
        <div className="mt-8 p-5 rounded-xl bg-white border border-navy-100/70 text-xs sm:text-sm text-navy-700 font-subserif italic">
          <strong className="font-sans not-italic text-navy-950 uppercase text-xs font-semibold mr-2">
            Architectural Insight:
          </strong>
          "{activity.reflection}"
        </div>
      )}
    </div>
  );
}
