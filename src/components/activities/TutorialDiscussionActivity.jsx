
import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  CheckCircle2,
  Quote,
  BookOpen,
  Image as ImageIcon,
  Eye,
  HeartPulse,
  Search,
  Filter,
  Users,
  Activity,
  Brain,
  TrendingUp,
  ClipboardList,
  Download,
  ExternalLink,
  ShieldCheck,
  FolderKanban
} from 'lucide-react';

export default function TutorialDiscussionActivity() {
  const { openLightbox } = usePortfolio();

  // Display only the five selected photographs from public/uploads
  const displayImages = [
    '/uploads/tuto1.jpeg',
    '/uploads/tuto2.jpeg',
    '/uploads/tuto3.jpeg',
    '/uploads/tuto4.jpeg',
    '/uploads/tuto5.jpeg'
  ];

  const figmaUrl =
    'https://www.figma.com/design/meBfRYzaZhetoq2WgGunEV/MedHub?nodeid=01&t=dnFGXXcMaJgMtTyX-1';

  const prompts = [
    'Discussing Python programming concepts covered in class.',
    'Sharing approaches to solving programming questions.',
    'Learning from classmates’ explanations and examples.',
    'Improving confidence through active participation.'
  ];

  const features = [
    {
      icon: Search,
      title: 'Patient Search',
      description: 'Helps the doctor quickly search for a patient.'
    },
    {
      icon: Filter,
      title: 'Filter By',
      description: 'Filters patients based on Age, Disease and Risk Level.'
    },
    {
      icon: Users,
      title: 'Recent Patients',
      description: 'Displays recently monitored patients along with their health risk.'
    },
    {
      icon: Activity,
      title: 'AI Risk Score',
      description: "Shows the patient's overall health risk as a percentage."
    },
    {
      icon: ClipboardList,
      title: 'Prediction Overview',
      description: "Displays the patient's current health status, AI confidence, priority level and analysis time."
    },
    {
      icon: TrendingUp,
      title: 'Future Health Prediction',
      description: "Predicts how the patient's health risk may change over the next few days."
    },
    {
      icon: HeartPulse,
      title: 'Personalized AI Recommendations',
      description: 'Provides health suggestions related to diet, exercise, medication and sleep.'
    },
    {
      icon: Download,
      title: 'Download Report',
      description: 'Allows the doctor to download the AI health prediction report.'
    }
  ];

  return (
    <section
      id="tutorial-discussion"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* Activity Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm">
            03
          </span>

          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold mb-1">
              Mandatory Activity 3 · Collaborative Colloquium
            </p>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              Python Tutorial Discussion
            </h2>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
          Tutorial Discussion
        </span>
      </div>

      {/* Tutorial Gallery and Discussion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Five Selected Photographs */}
        <div className="rounded-xl border border-navy-200 overflow-hidden">
          <div className="p-4 border-b border-ivory-200">
            <h3 className="text-xs font-mono uppercase tracking-widest text-navy-900 font-bold">
              Python Tutorial Discussion Gallery
            </h3>

            <p className="text-xs text-navy-500 mt-1">
              5 selected photographs
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-3">
            {displayImages.map((image, index) => (
              <div
                key={image}
                className="rounded-lg border border-ivory-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      image,
                      `Python tutorial discussion photograph ${index + 1}`,
                      `Photograph ${index + 1}`
                    )
                  }
                  className="w-full text-left"
                >
                  <div className="relative aspect-[4/3] bg-ivory-100">
                    <img
                      src={image}
                      alt={`Python tutorial discussion ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />

                    <span className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 text-navy-900 shadow">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-xs text-navy-600 p-2">
                    Photograph {index + 1}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion Details */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-3">
            Colloquium Objective
          </p>

          <p className="text-sm text-navy-800 leading-6 mb-6">
            A classroom tutorial discussion where students explored Python
            programming concepts, shared ideas, and learned from one another.
          </p>

          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3">
            <BookOpen className="w-4 h-4 inline mr-2" />
            Core Theoretical Prompts Explored
          </p>

          <div className="space-y-2">
            {prompts.map(prompt => (
              <div
                key={prompt}
                className="flex items-start gap-3 p-3 rounded-lg border border-ivory-200 bg-[#fcfaf7]"
              >
                <CheckCircle2 className="w-4 h-4 text-violetAccent-600 shrink-0 mt-0.5" />

                <p className="text-xs sm:text-sm text-navy-800">
                  {prompt}
                </p>
              </div>
            ))}
          </div>

          {/* Reflection */}
          <div className="mt-5 p-4 rounded-xl bg-[#f4f0e7] border border-ivory-200">
            <p className="text-xs font-mono uppercase tracking-widest text-navy-500 mb-2">
              Pedagogical Reflection
            </p>

            <p className="text-sm text-navy-700 leading-6 italic">
              "The discussion helped me clarify concepts, listen to different
              approaches, and become more comfortable participating in
              technical conversations."
            </p>
          </div>
        </div>
      </div>

      {/* Colloquium Dialogue */}
      <div className="rounded-xl border border-ivory-200 bg-[#fcfaf7] p-5 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3">
          <Quote className="w-4 h-4 inline mr-2" />
          Colloquium Dialogue & Key Insights
        </p>

        <p className="text-sm text-navy-700 leading-6">
          The tutorial discussion provided an opportunity to exchange ideas,
          understand different problem-solving approaches, and strengthen
          Python programming concepts through collaborative learning.
        </p>
      </div>

      {/* MedHUB Project */}
      <div className="border-t border-ivory-200 pt-8">

        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center">
              <FolderKanban className="w-5 h-5" />
            </span>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-violetAccent-700 font-bold mb-1">
                Team Project · Review 1
              </p>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950">
                MedHUB – Patient-Doctor Remote Health Monitoring Gateway
              </h3>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
            <HeartPulse className="w-4 h-4" />
            AI Health Prediction Module
          </span>
        </div>

        {/* Project Overview */}
        <div className="mb-7">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3">
            Project Overview
          </p>

          <p className="text-sm text-navy-800 leading-7 max-w-4xl">
            The AI Health Prediction module helps doctors predict a patient's
            health risk using AI. It analyzes patient information, estimates
            the risk level, predicts future health trends, and provides
            recommendations to support better treatment decisions.
          </p>
        </div>

        {/* AI Health Prediction Features */}
        <div className="mb-7">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4">
            AI Health Prediction Module – Features
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(feature => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl border border-navy-100 bg-white"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="text-sm font-serif font-bold text-navy-950 mb-1">
                      {feature.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-navy-700 leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow */}
        <div className="rounded-xl bg-ivory-50 border border-ivory-200 p-5 mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4">
            Module Workflow
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-navy-800">
            {[
              'Patient Information',
              'AI Risk Analysis',
              'Prediction Overview',
              'Future Health Prediction',
              'Personalized Recommendations',
              'Download Report'
            ].map((step, index) => (
              <React.Fragment key={step}>
                <span className="px-3 py-2 rounded-lg bg-white border border-navy-200">
                  {step}
                </span>

                {index !== 5 && (
                  <span className="text-violetAccent-600 font-bold">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Figma Link */}
        <div className="rounded-xl border border-navy-200 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-sm font-serif font-bold text-navy-950 mb-1">
                  MedHUB – Figma Design
                </h4>

                <p className="text-xs text-navy-600">
                  Review 1 – Frontend Design Using Figma
                </p>
              </div>
            </div>

            <a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-950 hover:bg-navy-800 text-white text-sm font-medium transition"
            >
              Open Figma Design
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Original MedHUB Submission PDF */}
        <div className="mt-5 rounded-xl border border-navy-200 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-sm font-serif font-bold text-navy-950">
                  Original MedHUB Review 1 PDF
                </h3>

                <p className="text-xs text-navy-600">
                  Download the submitted project document
                </p>
              </div>
            </div>

            <a
              href="/MedHUB-Review-1.pdf"
              download="MedHUB-Review-1.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-950 hover:bg-navy-800 text-white text-sm font-medium transition"
            >
              Download PDF
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Verification Note */}
        <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-[#f4f0e7]">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />

          <p className="text-xs sm:text-sm text-navy-700 leading-6">
            The MedHUB details above reflect the AI Health Prediction Module
            contribution documented in the submitted Review 1 PDF.
          </p>
        </div>
      </div>
    </section>
  );
}
