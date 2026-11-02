
import React, { useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Upload, Image as ImageIcon, Eye } from 'lucide-react';

const LOCAL_EVIDENCE = {
  'starsPhoto:cat1Image': '/uploads/star2%20(1).jpeg',
  'starsPhoto:userUploadedImage': '/uploads/star2.jpeg',
  'starsPhoto:cat2Image': '/uploads/Red%20CAT-2%20Marked%20Paper.png',
};

export default function MediaUploadSlot({
  activityKey,
  fieldKey,
  currentImage,
  defaultImage,
  aspectRatio = 'aspect-[4/3]',
  title,
  caption,
  label = 'Upload Photograph'
}) {
  const { uploadMedia, openLightbox } = usePortfolio();
  const inputRef = useRef(null);

  const localEvidence = LOCAL_EVIDENCE[`${activityKey}:${fieldKey}`];

  const imageSrc = localEvidence || currentImage || defaultImage;

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      event.target.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image is larger than 5 MB. Please choose a smaller image.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        uploadMedia(activityKey, fieldKey, reader.result);
      }
    };

    reader.onerror = () => {
      alert('Could not read this image. Please try again.');
    };

    reader.readAsDataURL(file);
    event.target.value = '';
  };

  return (
    <div className="bg-white rounded-2xl border border-navy-200/80 shadow-sm overflow-hidden">

      <div className="p-4 border-b border-ivory-200">
        <h3 className="font-semibold text-navy-900">{title}</h3>

        {caption && (
          <p className="text-sm text-navy-500 mt-1">{caption}</p>
        )}
      </div>

      <div className={`${aspectRatio} relative bg-ivory-100`}>

        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt={title || 'Photograph'}
              className="w-full h-full object-contain"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <button
              type="button"
              onClick={() => openLightbox(imageSrc, caption, title)}
              className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 text-navy-900 shadow"
              aria-label="View photograph"
            >
              <Eye className="w-5 h-5" />
            </button>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-navy-400">
            <ImageIcon className="w-8 h-8" />
            <span className="text-sm">
              No photograph available
            </span>
          </div>
        )}

      </div>

      {!imageSrc && (
        <div className="p-4">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="w-full px-4 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium flex items-center justify-center gap-2 transition"
          >
            <Upload className="w-4 h-4" />
            {label}
          </button>
        </div>
      )}

    </div>
  );
}
