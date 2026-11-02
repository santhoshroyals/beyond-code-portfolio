
import React from 'react';
import {
  Video,
  Play,
  Download,
  ExternalLink,
  CheckCircle2,
  Github
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function WebsiteDemoVideoActivity() {
  const { data } = usePortfolio();
  const activity = data?.activities?.websiteDemoVideo || {};

  const videoUrl = '/uploads/23MID0233_23MID0061_VIDEO.mp4';
  const videoName = '23MID0233_23MID0061_VIDEO.mp4';

  const repoLinks = activity.repoLinks || [
    {
      label: 'Member 1 – GitHub Repository',
      url: 'https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member1'
    },
    {
      label: 'Member 2 – GitHub Repository',
      url: 'https://github.com/SalvaSoumya/InteroperAI-ResQUE-Member2'
    }
  ];

  const liveLinks = activity.liveLinks || [
    {
      label: 'Member 1 – Live Website',
      url: 'https://interoper-ai-res-que-member1-29p4.vercel.app/'
    },
    {
      label: 'Member 2 – Live Website',
      url: 'https://interoper-ai-res-que-member2.vercel.app/'
    }
  ];

  return (
    <section
      id="website-demo-video"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm">
            09
          </span>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 9 • Operational Video Demonstration
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'InteroperAI-ResQUE – Website Demo Video'}
            </h2>

            <p className="text-sm text-navy-600 mt-1">
              {activity.subtitle || 'A Walkthrough of Our Disaster Data Integration and Resource Coordination Platform'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-rose-50 text-rose-800 border border-rose-200">
          <Video className="w-3.5 h-3.5" />
          Website Demo Video
        </span>
      </div>

      {/* Video Player */}
      <div className="rounded-2xl border border-navy-200 bg-ivory-50 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-navy-950">
              Project Demonstration
            </h3>
            <p className="text-xs text-navy-500 mt-1">
              InteroperAI-ResQUE website walkthrough
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Video Available
          </span>
        </div>

        <div className="rounded-xl overflow-hidden bg-black border border-navy-200">
          <video
            key={videoUrl}
            controls
            preload="metadata"
            playsInline
            className="w-full max-h-[600px] object-contain"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
          <p className="text-xs text-navy-600 font-mono break-all">
            {videoName}
          </p>

          <a
            href={videoUrl}
            download={videoName}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-white text-xs font-medium transition"
          >
            <Download className="w-4 h-4" />
            Download Video
          </a>
        </div>
      </div>

      {/* Project Links */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center gap-2">
            <Github className="w-4 h-4" />
            GitHub Repositories
          </h3>

          <div className="space-y-3">
            {repoLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-50 hover:border-violetAccent-300 transition"
              >
                <span className="text-sm text-navy-800 font-medium">
                  {link.label}
                </span>
                <ExternalLink className="w-4 h-4 text-navy-500 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-4 flex items-center gap-2">
            <Play className="w-4 h-4" />
            Live Project Websites
          </h3>

          <div className="space-y-3">
            {liveLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-50 hover:border-violetAccent-300 transition"
              >
                <span className="text-sm text-navy-800 font-medium">
                  {link.label}
                </span>
                <ExternalLink className="w-4 h-4 text-navy-500 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
