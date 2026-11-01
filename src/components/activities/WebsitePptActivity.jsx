import React, { useRef, useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Presentation,
  Upload,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  FileUp
} from 'lucide-react';
import {
  savePresentationToDB,
  getPresentationFromDB,
  deletePresentationFromDB
} from '../../utils/presentationStorage';

export default function WebsitePptActivity() {
  const { data } = usePortfolio();
  const activity = data.activities.websitePpt || {};

  const fileInputRef = useRef(null);
  const activeBlobUrlRef = useRef(null);

  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Restore presentation reliably from IndexedDB on component mount
  useEffect(() => {
    let isMounted = true;

    async function restorePresentation() {
      try {
        setIsLoading(true);
        const record = await getPresentationFromDB();
        if (record && record.blob && isMounted) {
          const blobUrl = URL.createObjectURL(record.blob);
          activeBlobUrlRef.current = blobUrl;
          setFileUrl(blobUrl);
          setFileName(record.name || 'presentation.pdf');
          setFileType(record.type || record.blob.type || '');
          setFileSize(record.size || record.blob.size || 0);
        }
      } catch (err) {
        console.error('Failed to restore presentation from IndexedDB:', err);
        if (isMounted) {
          setErrorMessage('Could not load stored presentation: ' + (err.message || 'Storage error'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    restorePresentation();

    return () => {
      isMounted = false;
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }
    };
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset input value so selecting the exact same file re-triggers onChange
    e.target.value = '';

    const lowerName = file.name.toLowerCase();
    const isPptOrPdf =
      lowerName.endsWith('.pdf') ||
      lowerName.endsWith('.ppt') ||
      lowerName.endsWith('.pptx') ||
      file.type.includes('pdf') ||
      file.type.includes('presentation') ||
      file.type.includes('powerpoint');

    if (!isPptOrPdf) {
      setErrorMessage('Please select a valid PowerPoint (.pptx, .ppt) or PDF (.pdf) file.');
      return;
    }

    try {
      setErrorMessage('');

      // Store in IndexedDB for reliable persistence across refreshes
      await savePresentationToDB(file, file.name);

      // Clean up previous blob URL if exists
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }

      // Generate a new direct object URL for preview and download
      const newBlobUrl = URL.createObjectURL(file);
      activeBlobUrlRef.current = newBlobUrl;
      setFileUrl(newBlobUrl);
      setFileName(file.name);
      setFileType(file.type || (lowerName.endsWith('.pdf') ? 'application/pdf' : 'application/vnd.ms-powerpoint'));
      setFileSize(file.size);
    } catch (err) {
      console.error('Error storing presentation file:', err);
      setErrorMessage('Failed to save presentation: ' + (err.message || 'Could not store file in local storage.'));
    }
  };

  const handleRemove = async () => {
    if (window.confirm('Are you sure you want to remove the uploaded presentation?')) {
      try {
        await deletePresentationFromDB();
        if (activeBlobUrlRef.current) {
          URL.revokeObjectURL(activeBlobUrlRef.current);
          activeBlobUrlRef.current = null;
        }
        setFileUrl(null);
        setFileName('');
        setFileType('');
        setFileSize(0);
      } catch (err) {
        console.warn('Error deleting presentation:', err);
      }
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  };

  const isPdf = fileType?.includes('pdf') || fileName?.toLowerCase().endsWith('.pdf');

  return (
    <div id="website-ppt" className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
        className="hidden"
      />

      {/* ── Activity Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-start space-x-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm flex-shrink-0 mt-0.5">
            08
          </span>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block mb-1">
              Mandatory Activity 8 • Presentation Deck
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
              {activity.title || 'Website PPT – Presentation Deck'}
            </h2>
            <p className="text-sm text-navy-600 mt-1 font-sans">
              {activity.subtitle || 'Presentation slides and academic defense deck.'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 flex-shrink-0">
          <Presentation className="w-3.5 h-3.5 text-amber-600" />
          <span>{activity.badge || 'Presentation Deck'}</span>
        </span>
      </div>

      {/* Error Banner */}
      {errorMessage && (
        <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
            <span>{errorMessage}</span>
          </div>
          <button
            onClick={() => setErrorMessage('')}
            className="p-1 hover:bg-red-100 rounded text-red-500 transition"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* ── Main Content Area ── */}
      {isLoading ? (
        <div className="py-16 text-center text-xs font-mono text-navy-500">
          Loading stored presentation from local storage...
        </div>
      ) : fileUrl ? (
        /* ── Uploaded File Display & Preview ── */
        <div className="space-y-6">
          {/* Metadata & Controls Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-ivory-50 border border-navy-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-11 h-11 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center flex-shrink-0">
                {isPdf ? <FileText className="w-6 h-6" /> : <Presentation className="w-6 h-6" />}
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono font-bold text-navy-950 truncate max-w-xs sm:max-w-md">
                    {fileName}
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Saved</span>
                  </span>
                </div>
                <p className="text-xs text-navy-500 font-sans mt-0.5">
                  {isPdf ? 'PDF Document' : 'PowerPoint Presentation'} • {formatFileSize(fileSize)}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white border border-navy-200 hover:bg-ivory-100 text-navy-800 text-xs font-medium flex items-center space-x-1.5 shadow-2xs transition"
                title="Open in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in New Tab</span>
              </a>

              <a
                href={fileUrl}
                download={fileName}
                className="px-3.5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium flex items-center space-x-1.5 shadow-sm transition"
                title="Download file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-2 rounded-xl border border-navy-200 hover:bg-ivory-100 text-navy-700 text-xs font-medium flex items-center space-x-1.5 transition"
                title="Replace with another PPT or PDF"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Replace</span>
              </button>

              <button
                type="button"
                onClick={handleRemove}
                className="p-2 rounded-xl border border-transparent hover:border-red-200 hover:bg-red-50 text-navy-400 hover:text-red-600 transition"
                title="Remove uploaded presentation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Preview Stage */}
          {isPdf ? (
            /* PDF Embedded Preview */
            <div className="rounded-2xl border border-navy-200 overflow-hidden bg-ivory-100/50 shadow-sm">
              <div className="p-3 bg-white border-b border-navy-100 flex items-center justify-between text-xs text-navy-600">
                <span className="font-mono font-medium">Document Preview</span>
                <span className="text-[11px] text-navy-400">PDF Viewer Active</span>
              </div>
              <iframe
                src={fileUrl}
                title={fileName}
                className="w-full h-[580px] bg-white border-0"
              />
            </div>
          ) : (
            /* PowerPoint Presentation Showcase Box */
            <div className="p-8 sm:p-12 rounded-2xl border border-navy-200 bg-gradient-to-br from-ivory-50 via-white to-ivory-100/60 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 border border-amber-200 shadow-xs">
                <Presentation className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif font-bold text-navy-950 mb-1">
                {fileName}
              </h3>
              <p className="text-xs text-navy-600 font-sans max-w-md mb-6">
                Your PowerPoint presentation file is uploaded and ready. You can open it in your browser or download it to present.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={fileUrl}
                  download={fileName}
                  className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-medium flex items-center space-x-2 shadow-sm transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Presentation ({formatFileSize(fileSize)})</span>
                </a>

                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white border border-navy-200 hover:bg-ivory-100 text-navy-800 text-xs font-medium flex items-center space-x-2 shadow-2xs transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Presentation</span>
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ── Upload Placeholder Card ── */
        <div className="rounded-2xl border-2 border-dashed border-navy-200 bg-gradient-to-br from-ivory-50/80 via-white to-ivory-100/50 p-8 sm:p-14 text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center mb-4 border border-violetAccent-100 shadow-2xs">
            <FileUp className="w-7 h-7" />
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-950 mb-2">
            Presentation Deck Awaiting Upload
          </h3>

          <p className="text-xs sm:text-sm text-navy-600 font-sans max-w-lg mb-6 leading-relaxed">
            Upload your authentic PowerPoint presentation (<span className="font-mono">.pptx</span>, <span className="font-mono">.ppt</span>) or PDF (<span className="font-mono">.pdf</span>) document. The presentation will be stored securely in your browser and will persist across refreshes.
          </p>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-medium shadow-sm transition active:scale-95"
          >
            <Upload className="w-4 h-4" />
            <span>Upload PPT / PDF</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 pt-6 border-t border-navy-100 w-full max-w-md text-[11px] font-mono text-navy-500">
            <span className="px-2.5 py-1 rounded bg-white border border-navy-100">PowerPoint (.pptx)</span>
            <span className="px-2.5 py-1 rounded bg-white border border-navy-100">PowerPoint (.ppt)</span>
            <span className="px-2.5 py-1 rounded bg-white border border-navy-100">PDF (.pdf)</span>
          </div>
        </div>
      )}
    </div>
  );
}
