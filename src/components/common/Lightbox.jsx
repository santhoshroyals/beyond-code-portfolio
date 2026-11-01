import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function Lightbox() {
  const { lightbox, closeLightbox } = usePortfolio();

  if (!lightbox.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/85 backdrop-blur-md p-4 animate-fade-in"
      onClick={closeLightbox}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-navy-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-ivory-200 bg-ivory-50">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-violetAccent-600 font-semibold">Evidence Inspection</span>
            <h3 className="text-lg font-serif font-bold text-navy-950">{lightbox.title || "Full Resolution Preview"}</h3>
          </div>
          <div className="flex items-center space-x-2">
            {lightbox.src && (
              <a 
                href={lightbox.src} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 text-navy-600 hover:text-navy-950 hover:bg-ivory-200 rounded-lg transition"
                title="Open original in new tab"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={closeLightbox}
              className="p-2 text-navy-500 hover:text-navy-950 hover:bg-ivory-200 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Image */}
        <div className="flex-1 overflow-auto bg-navy-900/5 p-4 flex items-center justify-center min-h-[300px]">
          <img 
            src={lightbox.src} 
            alt={lightbox.caption || lightbox.title || "Evidence preview"} 
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-md shadow-md"
          />
        </div>

        {/* Caption */}
        {lightbox.caption && (
          <div className="px-6 py-3 bg-ivory-50 border-t border-ivory-200 text-sm text-navy-700 italic font-subserif">
            {lightbox.caption}
          </div>
        )}
      </div>
    </div>
  );
}

