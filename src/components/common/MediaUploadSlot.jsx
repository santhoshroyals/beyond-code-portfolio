import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, Eye, RefreshCw, CheckCircle2, FileUp } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

export default function MediaUploadSlot({
  activityKey,
  fieldKey = 'customImage',
  currentImage,
  defaultImage = null,
  label = "Upload Academic Evidence / Screenshot",
  aspectRatio = "aspect-video",
  title = "Evidence Preview",
  caption = "",
  placeholderNote = "Evidence placeholder — upload your genuine project photograph or screenshot",
  className = ""
}) {
  const { uploadMedia, openLightbox } = usePortfolio();
  const fileInputRef = useRef(null);

  const displayImage = currentImage || defaultImage;
  const isCustom = Boolean(currentImage && currentImage !== defaultImage);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WebP, etc.)');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image file is large (>5MB). Please use a compressed image for smooth browser storage.');
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        uploadMedia(activityKey, fieldKey, result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    uploadMedia(activityKey, fieldKey, null);
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative group rounded-2xl overflow-hidden border border-navy-200/80 bg-white shadow-sm transition-all hover:shadow-md ${className}`}>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-ivory-100 flex items-center justify-center`}>
        {displayImage ? (
          <img 
            src={displayImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* High-End Editorial Placeholder Display when no fake image is provided */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-ivory-50 via-white to-ivory-100/60 border-2 border-dashed border-navy-200 rounded-xl m-2">
            <div className="w-12 h-12 rounded-2xl bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center mb-3 shadow-xs border border-violetAccent-100">
              <FileUp className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-navy-800 mb-1">
              {title || "Evidence Placeholder"}
            </p>
            <p className="text-xs text-navy-500 font-sans max-w-xs mb-3">
              {placeholderNote}
            </p>
            <button
              type="button"
              onClick={handleTriggerUpload}
              className="px-3.5 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium flex items-center space-x-1.5 shadow-sm transition"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono backdrop-blur-md bg-white/95 text-navy-800 shadow-sm border border-navy-100">
          {isCustom ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[11px] font-semibold text-emerald-800">Your Evidence Uploaded</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="text-[11px] text-navy-600">Placeholder (Awaiting Evidence)</span>
            </>
          )}
        </div>

        {/* Hover Overlay when image exists */}
        {displayImage && (
          <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => openLightbox(displayImage, caption, title)}
                className="px-3.5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium rounded-lg flex items-center space-x-1.5 transition"
                title="Inspect in full resolution"
              >
                <Eye className="w-4 h-4" />
                <span>View Fullscreen</span>
              </button>

              <button
                type="button"
                onClick={handleTriggerUpload}
                className="px-3.5 py-2 bg-violetAccent-600 hover:bg-violetAccent-700 text-white text-xs font-medium rounded-lg flex items-center space-x-1.5 shadow-md transition"
                title="Upload authentic photo/screenshot"
              >
                <Upload className="w-4 h-4" />
                <span>Replace Image</span>
              </button>
            </div>

            {isCustom && (
              <button
                type="button"
                onClick={handleReset}
                className="mt-1 text-xs text-navy-200 hover:text-white underline flex items-center space-x-1 opacity-80 hover:opacity-100"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset placeholder</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Caption footer if provided */}
      {caption && (
        <div className="p-3 bg-white border-t border-navy-100 text-xs text-navy-600 flex items-center justify-between">
          <span className="truncate italic font-subserif text-navy-700">{caption}</span>
          <button 
            type="button" 
            onClick={handleTriggerUpload} 
            className="text-[11px] font-mono text-violetAccent-600 hover:text-violetAccent-700 font-medium ml-2 flex-shrink-0"
          >
            {isCustom ? "Replace" : "Upload"}
          </button>
        </div>
      )}
    </div>
  );
}
