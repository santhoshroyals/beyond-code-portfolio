
import React from 'react';
import {
  Cpu,
  Workflow,
  Accessibility,
  Camera,
  Mic,
  Watch,
  Lightbulb,
  Fan,
  Monitor,
  ShieldCheck,
  Wifi,
  HeartPulse,
  Laptop,
  Settings,
} from 'lucide-react';

const architectureImage = '/uploads/cerabal_palsy.jpeg';
const hardwareImage = '/uploads/proposed-hardware-setup.png';

const inputDevices = [
  {
    icon: Accessibility,
    title: 'Accessible Switch',
    description: 'Simple button-based input',
  },
  {
    icon: Watch,
    title: 'Wearable IMU',
    description: 'Movement and gesture input',
  },
  {
    icon: Camera,
    title: 'Camera',
    description: 'Face, eye and gesture input',
  },
  {
    icon: Mic,
    title: 'Voice Input',
    description: 'Optional voice commands',
  },
];

const outputDevices = [
  { icon: Lightbulb, title: 'Smart Lights' },
  { icon: Fan, title: 'Fans' },
  { icon: Monitor, title: 'TV and Appliances' },
  { icon: ShieldCheck, title: 'Door Lock' },
  { icon: HeartPulse, title: 'Emergency Assistance' },
];

export default function IoTShowcase() {
  return (
    <section
      id="system-architecture-proposal"
      className="w-full bg-ivory-50 py-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-violet-700 mb-3">
            IoT-Based Assistive System
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-navy-950">
            System Architecture Proposal
          </h2>

          <p className="text-navy-600 mt-3 max-w-3xl leading-relaxed">
            A proposed assistive IoT system designed to help individuals
            with Cerebral Palsy interact with essential household appliances
            through accessible input methods and intelligent device control.
          </p>
        </div>

        {/* SYSTEM ARCHITECTURE */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Workflow className="w-5 h-5 text-violet-600" />
            <h3 className="text-xl font-serif text-navy-950">
              1. Overall System Architecture
            </h3>
          </div>

          <p className="text-sm text-navy-600 mb-5">
            The architecture illustrates the complete workflow, from
            accessible user inputs to local processing and appliance control.
          </p>

          <div className="rounded-2xl border border-navy-200 bg-white p-3 sm:p-5 shadow-sm">
            <img
              src={architectureImage}
              alt="Overall architecture and workflow of the proposed assistive IoT system for Cerebral Palsy"
              className="w-full h-auto rounded-xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <p className="text-xs text-navy-500 italic mt-3">
              Proposed system architecture showing user input, edge
              processing, command validation, IoT control and output layers.
            </p>
          </div>
        </div>

        {/* INPUT DEVICES */}
        <div className="mb-12">
          <h3 className="text-xl font-serif text-navy-950 mb-2">
            2. User Input Layer
          </h3>

          <p className="text-sm text-navy-600 mb-5">
            Users can interact with the system using different accessible
            input methods based on their individual abilities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {inputDevices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy-200 bg-white p-5"
                >
                  <Icon className="w-6 h-6 text-violet-600 mb-3" />
                  <h4 className="font-semibold text-navy-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy-500 mt-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROCESSING */}
        <div className="mb-12">
          <h3 className="text-xl font-serif text-navy-950 mb-4">
            3. Processing and Device Control
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-navy-200 bg-white p-5">
              <Settings className="w-6 h-6 text-violet-600 mb-3" />
              <h4 className="font-semibold text-navy-900">
                Data Preprocessing
              </h4>
              <p className="text-sm text-navy-600 mt-2">
                Input data is processed to reduce noise and identify
                meaningful commands.
              </p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-5">
              <Cpu className="w-6 h-6 text-violet-600 mb-3" />
              <h4 className="font-semibold text-navy-900">
                Edge Processing
              </h4>
              <p className="text-sm text-navy-600 mt-2">
                The proposed ESP32-based controller handles command
                processing and device communication locally.
              </p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-5">
              <ShieldCheck className="w-6 h-6 text-violet-600 mb-3" />
              <h4 className="font-semibold text-navy-900">
                Command Validation
              </h4>
              <p className="text-sm text-navy-600 mt-2">
                Commands are checked before the corresponding appliance
                action is triggered.
              </p>
            </div>
          </div>
        </div>

        {/* OUTPUT DEVICES */}
        <div className="mb-16">
          <h3 className="text-xl font-serif text-navy-950 mb-2">
            4. Output and Assistance Layer
          </h3>

          <p className="text-sm text-navy-600 mb-5">
            Validated commands can be used to control household devices
            and provide assistance to the user.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {outputDevices.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy-200 bg-white p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-violet-600 mx-auto mb-3" />
                  <p className="text-sm font-medium text-navy-900">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PROPOSED HARDWARE */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5 text-violet-600" />
            <h3 className="text-xl font-serif text-navy-950">
              5. Proposed Hardware Setup
            </h3>
          </div>

          <p className="text-sm text-navy-600 mb-5 max-w-3xl">
            The conceptual hardware setup illustrates the possible
            integration of accessible input devices, an ESP32 controller,
            relay modules and connected household appliances.
          </p>

          <div className="max-w-4xl rounded-2xl border border-navy-200 bg-white p-3 sm:p-5 shadow-sm">
            <img
              src={hardwareImage}
              alt="Proposed hardware setup with accessible switch, wearable IMU, camera, microphone, ESP32 and relay module"
              className="w-full h-auto rounded-xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <p className="text-xs text-navy-500 italic mt-3">
              Conceptual hardware reference for the proposed assistive
              IoT system. Component selection, assembly and implementation
              are planned as future activities.
            </p>
          </div>
        </div>

        {/* CURRENT PROJECT STATUS */}
        <div className="rounded-2xl border border-[#eadfcf] bg-[#faf8f4] p-6 md:p-7">
          <div className="flex items-center gap-3 mb-3">
            <Laptop className="w-5 h-5 text-violet-600" />
            <h3 className="font-serif text-lg text-navy-950">
              Current Project Status
            </h3>
          </div>

          <p className="text-sm md:text-base text-navy-700 leading-relaxed">
            The project is currently in the ideation and design stage.
            Problem identification, the proposed assistive solution,
            system architecture and conceptual hardware setup have been
            prepared. Hardware selection, prototype development, IoT
            integration and application implementation are planned
            future activities.
          </p>
        </div>

      </div>
    </section>
  );
}
