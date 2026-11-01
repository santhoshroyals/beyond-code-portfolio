import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import MediaUploadSlot from './common/MediaUploadSlot';
import { 
  Radio, 
  Layers, 
  CheckCircle, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  Tv,
  Fan,
  Lightbulb,
  HeartHandshake,
  Sliders,
  Cpu,
  Power,
  Volume2,
  FileCode,
  ShieldCheck,
  MousePointerClick,
  Compass,
  AlertCircle,
  HelpCircle,
  Clock,
  ListOrdered
} from 'lucide-react';

export default function IotShowcase() {
  const { data } = usePortfolio();
  const activity = data.activities.iotImpairmentApp;

  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const workflowIcons = [
    MousePointerClick, // 01. Accessible User Input
    Cpu,               // 02. Input Processing
    Radio,             // 03. IoT Controller
    Power,             // 04. Appliance Control
    Volume2            // 05. User Feedback
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activity.conceptualSpecification);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="iot-showcase" className="scroll-mt-20 my-16">
      {/* Editorial Header Banner */}
      <div className="relative rounded-3xl bg-navy-950 text-white overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 mb-12 border border-navy-800">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-violetAccent-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blueAccent-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-violetAccent-500/20 text-violetAccent-300 border border-violetAccent-500/30 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violetAccent-400" />
              <span>Mandatory Activity 4 • Classroom Activity</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-navy-800/80 text-navy-300 border border-navy-700">
              {activity.date}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
              {activity.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-4 leading-tight">
            {activity.title}
          </h2>

          <p className="text-base sm:text-lg text-violetAccent-200 font-subserif italic mb-6">
            {activity.subtitle}
          </p>

          <p className="text-sm sm:text-base text-navy-200 font-sans font-light leading-relaxed mb-8">
            {activity.executiveSummary}
          </p>

          {/* Planning & Scope Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-800">
            {activity.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-900/60 border border-navy-800">
                <p className="text-xl sm:text-2xl font-mono font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs font-mono text-violetAccent-300 uppercase tracking-wider">{stat.label}</p>
                <p className="text-[11px] text-navy-400 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MY PROJECT IDEATION JOURNEY (NEW DEDICATED SECTION) */}
      <div className="bg-white rounded-3xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-1">
            <Compass className="w-4 h-4" />
            <span>Classroom Activity Milestone</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-navy-950">
            My Project Ideation Journey
          </h3>
          <p className="text-navy-600 text-sm mt-1 font-sans">
            A step-by-step narrative documenting the classroom ideation and preliminary planning process:
          </p>
        </div>

        {/* 5-Step Ideation Narrative Cards */}
        <div className="space-y-4">
          {activity.ideationJourney.map((step, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                idx === 4 
                  ? 'bg-gradient-to-br from-amber-50/50 to-ivory-50 border-amber-200/80' 
                  : 'bg-ivory-50/60 border-ivory-200 hover:border-violetAccent-300 hover:bg-white'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-violetAccent-700 bg-white px-2.5 py-0.5 rounded border border-navy-100">
                  Step {step.step}
                </span>
                <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-medium ${
                  idx === 4 ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-white text-navy-600 border border-navy-200'
                }`}>
                  {step.badge}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-serif font-bold text-navy-950 mb-2">
                {step.title}
              </h4>

              <p className="text-sm sm:text-base text-navy-800 font-sans leading-relaxed">
                {step.desc}
              </p>

              {/* Sub-stages list for Step 4 if present */}
              {step.stages && (
                <div className="mt-4 pt-3 border-t border-navy-100/60">
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {step.stages.map((stageName, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-xl bg-white border border-ivory-300 text-center">
                        <span className="text-[10px] font-mono text-violetAccent-600 font-bold block mb-0.5">0{sIdx + 1}</span>
                        <span className="text-xs font-semibold text-navy-950 leading-tight block">{stageName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Target Appliances & Problem/Solution Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Problem Selection & Challenge */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-navy-100 shadow-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-rose-700 font-mono text-xs uppercase tracking-wider mb-3">
              <HeartHandshake className="w-4 h-4" />
              <span>Selected Challenge</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-950 mb-3">
              Motor-Control Limitations
            </h3>
            <p className="text-navy-700 leading-relaxed text-xs sm:text-sm font-sans">
              Individuals with Cerebral Palsy may face physical hurdles with traditional household controls that demand fine finger grasp, steady sustained pressure, or dual-button actuation.
            </p>
          </div>
        </div>

        {/* Card 2: Proposed Solution */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-navy-100 shadow-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-emerald-700 font-mono text-xs uppercase tracking-wider mb-3">
              <CheckCircle className="w-4 h-4" />
              <span>Proposed IoT Solution</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-950 mb-3">
              Accessible Input Architecture
            </h3>
            <p className="text-navy-700 leading-relaxed text-xs sm:text-sm font-sans">
              An assistive IoT system designed to bridge accessible, low-barrier input methods directly to domestic appliance actuators, returning reliable confirmation to the user.
            </p>
          </div>
        </div>

        {/* Card 3: Target Household Appliances */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-ivory-50 to-violetAccent-50/40 border border-navy-100 shadow-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-wider mb-3">
              <Power className="w-4 h-4" />
              <span>Target Household Appliances</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-950 mb-3">
              Independent Operation
            </h3>
            <div className="space-y-2.5 mt-4">
              <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-white border border-ivory-300">
                <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-navy-950 block">Room Lighting</span>
                  <span className="text-[11px] text-navy-500">Accessible ON/OFF appliance switching</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-white border border-ivory-300">
                <Fan className="w-5 h-5 text-blueAccent-500 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-navy-950 block">Fans & Climate</span>
                  <span className="text-[11px] text-navy-500">Accessible power & ventilation control</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-white border border-ivory-300">
                <Tv className="w-5 h-5 text-violetAccent-600 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-navy-950 block">Televisions</span>
                  <span className="text-[11px] text-navy-500">Accessible power, volume, and channel states</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROPOSED FIVE-STAGE CONCEPTUAL WORKFLOW (PROPOSED ARCHITECTURE) */}
      <div className="bg-white rounded-3xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-1">
            <Layers className="w-4 h-4" />
            <span>Proposed Architecture Planning</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Proposed Five-Stage Conceptual Workflow
          </h3>
          <p className="text-navy-600 text-sm mt-1 font-sans">
            The initial conceptual workflow planned for the assistive system:
          </p>
        </div>

        {/* 5-Step Workflow Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {activity.conceptualWorkflow.map((step, idx) => {
            const IconComponent = workflowIcons[idx] || Radio;
            const isSelected = activeWorkflowStage === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveWorkflowStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-violetAccent-50/80 border-violetAccent-600 shadow-sm ring-1 ring-violetAccent-500'
                    : 'bg-ivory-50/60 border-ivory-200 hover:bg-white hover:border-navy-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-violetAccent-700' : 'text-navy-400'}`}>
                      Stage {step.stage}
                    </span>
                    <IconComponent className={`w-4 h-4 ${isSelected ? 'text-violetAccent-600' : 'text-navy-400'}`} />
                  </div>
                  <h4 className={`text-xs sm:text-sm font-serif font-bold leading-snug mb-1.5 ${isSelected ? 'text-navy-950 font-bold' : 'text-navy-800'}`}>
                    {step.name}
                  </h4>
                </div>

                <div className="pt-2 border-t border-navy-100/60 flex items-center justify-between text-[10px] font-mono text-navy-400">
                  <span>{isSelected ? "Active Stage" : "Click to Inspect"}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Workflow Stage Focus Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-ivory-50/70 border border-ivory-200">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold">
              Stage {activity.conceptualWorkflow[activeWorkflowStage].stage} Details • {activity.conceptualWorkflow[activeWorkflowStage].name}
            </span>
            <span className="text-xs font-mono text-navy-400 bg-white px-2.5 py-0.5 rounded border border-navy-100">
              Conceptual Planning Stage
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mb-3">
            {activity.conceptualWorkflow[activeWorkflowStage].name}
          </h4>
          <p className="text-navy-700 text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            {activity.conceptualWorkflow[activeWorkflowStage].desc}
          </p>
        </div>
      </div>

      {/* PROPOSED SYSTEM ARCHITECTURE DIAGRAM (DEDICATED PLACEHOLDER) */}
      <div className="bg-white rounded-3xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold block mb-1">
            Proposed Architecture
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Proposed System Architecture Diagram
          </h3>
          <p className="text-navy-600 text-sm mt-1 font-sans">
            Conceptual architecture diagram mapping the planned flow from Accessible User Input through Input Processing, the IoT Controller, Appliance Control, and User Feedback.
          </p>
        </div>

        <MediaUploadSlot
          activityKey="iotImpairmentApp"
          fieldKey="userUploadedArchitectureDiagram"
          currentImage={activity.userUploadedArchitectureDiagram}
          defaultImage={null}
          aspectRatio="aspect-[16/9]"
          title="Proposed System Architecture Diagram"
          caption="Proposed architecture diagram: Accessible Input -> Input Processing -> IoT Controller -> Appliance Control -> User Feedback."
          label="Upload Proposed Architecture Diagram"
          placeholderNote="Placeholder: Upload your proposed system architecture diagram or data flow chart."
        />
      </div>

      {/* AUTHENTIC PLACEHOLDERS FOR FUTURE WORK (CLEARLY STATED AS NOT YET STARTED) */}
      <div className="bg-white rounded-3xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold block mb-1">
            Future Work Placeholders
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
            Project Photographs & Application Screenshots
          </h3>
          <p className="text-navy-600 text-sm mt-2 font-sans">
            As noted in Current Progress, prototype development, hardware selection, and application development have not yet started. These placeholders are reserved for authentic documentation once development begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <MediaUploadSlot
              activityKey="iotImpairmentApp"
              fieldKey="userUploadedHardwarePhoto"
              currentImage={activity.userUploadedHardwarePhoto}
              defaultImage={null}
              aspectRatio="aspect-[4/3]"
              title="Project / Hardware Setup Photograph"
              caption="Placeholder for physical hardware setup, accessible switch, or prototyping bench."
              label="Upload Project Photograph"
              placeholderNote="Placeholder: Prototype development has not yet started. Upload your authentic photo when hardware prototyping begins."
            />
            <p className="text-xs text-navy-500 mt-2 italic font-subserif">
              Placeholder 4.1 — Physical setup documentation (awaiting prototype development).
            </p>
          </div>

          <div>
            <MediaUploadSlot
              activityKey="iotImpairmentApp"
              fieldKey="userUploadedTestingPhoto"
              currentImage={activity.userUploadedTestingPhoto}
              defaultImage={null}
              aspectRatio="aspect-[4/3]"
              title="Application UI & Dashboard Screenshot"
              caption="Placeholder for controller software interface and appliance status dashboard."
              label="Upload Application Screenshot"
              placeholderNote="Placeholder: Application development has not yet started. Upload your software screenshot when UI development begins."
            />
            <p className="text-xs text-navy-500 mt-2 italic font-subserif">
              Placeholder 4.2 — Controller software dashboard (awaiting application development).
            </p>
          </div>
        </div>
      </div>

      {/* CONCEPTUAL ARCHITECTURE SPECIFICATION */}
      <div className="bg-navy-950 rounded-3xl border border-navy-800 shadow-2xl overflow-hidden mb-12">
        <div className="flex items-center justify-between px-6 py-4 bg-navy-900 border-b border-navy-800">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-violetAccent-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-blueAccent-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-xs font-mono text-navy-300">
              conceptual_architecture_spec.py — Proposed Interface Contracts
            </span>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-xs font-mono text-navy-200 transition"
          >
            {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCode ? 'Copied' : 'Copy Conceptual Spec'}</span>
          </button>
        </div>

        <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-navy-100 bg-navy-950 leading-relaxed max-h-[460px]">
          <pre className="whitespace-pre">{activity.conceptualSpecification}</pre>
        </div>
      </div>

      {/* ACADEMIC PLANNING REFLECTIONS */}
      <div className="p-8 rounded-3xl bg-ivory-100/70 border border-navy-100 shadow-sm">
        <h4 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4">
          Academic Planning & Assistive Design Considerations
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activity.academicReflections.map((ref, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-ivory-300 shadow-xs">
              <span className="text-xs font-mono text-violetAccent-600 font-bold block mb-2">0{idx + 1}</span>
              <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-sans">
                {ref}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
