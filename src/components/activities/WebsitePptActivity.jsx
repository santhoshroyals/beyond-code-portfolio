
import React from 'react';
import {
  Presentation,
  Download,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function WebsitePptActivity() {
  const { data } = usePortfolio();
  const activity = data?.activities?.websitePpt || {};

  const pptUrl = '/uploads/interoperai-presentation.pptx';
  const pptName = 'interoperai-presentation.pptx';

  return (
    <section
      id="website-ppt"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm">
            08
          </span>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 8 • Presentation Deck
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'InteroperAI-ResQUE – Website Presentation'}
            </h2>

            <p className="text-sm text-navy-600 mt-1">
              {activity.subtitle || 'Presenting the Project Concept, Features, and Workflow'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200">
          <Presentation className="w-3.5 h-3.5" />
          {activity.badge || 'Presentation Deck'}
        </span>
      </div>

      {/* Presentation File */}
      <div className="rounded-2xl border border-navy-200 bg-gradient-to-br from-ivory-50 via-white to-ivory-100/50 p-8 sm:p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center mb-4 border border-violetAccent-100">
          <Presentation className="w-8 h-8" />
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-4">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Presentation Available
        </span>

        <h3 className="text-xl font-serif font-bold text-navy-950 mb-2">
          InteroperAI-ResQUE Presentation
        </h3>

        <p className="text-sm text-navy-600 max-w-lg mx-auto mb-2">
          The project presentation deck is available below.
          Download the PowerPoint file to view the slides.
        </p>

        <p className="text-xs font-mono text-navy-500 mb-6">
          {pptName}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
  href="/uploads/interoperai-presentation.pptx"
  download="InteroperAI-ResQUE-Presentation.pptx"
  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-100 text-navy-800 text-sm font-medium transition"
>
  <Download className="w-4 h-4" />
  Download PPT
</a>

          <a
            href={pptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-navy-200 bg-white hover:bg-ivory-100 text-navy-800 text-sm font-medium transition"
          >
            <ExternalLink className="w-4 h-4" />
            Open File
          </a>
        </div>

        <div className="mt-7 pt-5 border-t border-navy-100 flex flex-wrap justify-center gap-2 text-xs font-mono text-navy-500">
          <span className="px-3 py-1.5 bg-white border border-navy-100 rounded">
            PowerPoint
          </span>
          <span className="px-3 py-1.5 bg-white border border-navy-100 rounded">
            .pptx
          </span>
        </div>
      </div>
    </section>
  );
}
