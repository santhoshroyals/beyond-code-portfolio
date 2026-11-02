
import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

import { initialPortfolioData } from '../data/portfolioData';
import { deleteAudioFromDB } from '../utils/audioStorage';
import { deletePresentationFromDB } from '../utils/presentationStorage';
import { deleteVideoFromDB } from '../utils/videoStorage';

const PortfolioContext = createContext(null);

const STORAGE_KEY = 'beyond_code_portfolio_data_v7';

const MEDIA_DB_NAME = 'beyond_code_media_db';
const MEDIA_STORE_NAME = 'portfolio_media';

// ---------- IndexedDB PHOTO STORAGE ----------

function openMediaDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MEDIA_DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(MEDIA_STORE_NAME)) {
        db.createObjectStore(MEDIA_STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveMediaToDB(activityKey, fileField, value) {
  const db = await openMediaDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, 'readwrite');
    const store = transaction.objectStore(MEDIA_STORE_NAME);

    store.put({
      id: `${activityKey}:${fileField}`,
      activityKey,
      fileField,
      value
    });

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

async function getAllMediaFromDB() {
  const db = await openMediaDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, 'readonly');
    const request = transaction.objectStore(MEDIA_STORE_NAME).getAll();

    request.onsuccess = () => {
      const result = request.result || [];
      db.close();
      resolve(result);
    };

    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

async function clearMediaDB() {
  const db = await openMediaDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, 'readwrite');
    transaction.objectStore(MEDIA_STORE_NAME).clear();

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };

    transaction.onerror = () => {
      db.close();
      reject(transaction.error);
    };
  });
}

function isUploadedImage(value) {
  if (typeof value === 'string') {
    return value.startsWith('data:image/');
  }

  if (Array.isArray(value)) {
    return value.some(
      (item) =>
        typeof item === 'string' && item.startsWith('data:image/')
    );
  }

  return false;
}

function isMediaField(field, value) {
  return (
    /image|photo|screenshot/i.test(field) &&
    isUploadedImage(value)
  );
}

// ---------- LOAD INITIAL DATA ----------

function loadInitialData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return initialPortfolioData;

    const parsed = JSON.parse(saved);
    const mergedActivities = {};

    const allKeys = new Set([
      ...Object.keys(initialPortfolioData.activities || {}),
      ...Object.keys(parsed.activities || {})
    ]);

    allKeys.forEach((key) => {
      const act = {
        ...(initialPortfolioData.activities[key] || {}),
        ...(parsed.activities?.[key] || {})
      };

      if (key === 'audioBusinessThesis') {
        delete act.userUploadedAudio;
      }

      if (key === 'websitePpt') {
        delete act.slides;
        delete act.userUploadedFile;
      }

      if (key === 'websiteDemoVideo') {
        delete act.chapters;
        delete act.userVideoUrl;
        delete act.userUploadedVideo;
      }

      if (key === 'padletScreenshots') {
        delete act.boards;
        act.badge = 'Padlet Contribution';
      }

      if (key === 'mediumBlog') {
        const original = initialPortfolioData.activities.mediumBlog || {};

        act.articleTitle = original.articleTitle;
        act.author = original.author;
        act.platform = original.platform;
        act.description = original.description;
        act.mediumUrl = original.mediumUrl;
        act.keyLearningAreas = original.keyLearningAreas;

        delete act.topicsCovered;
        delete act.learningOutcome;
      }

      mergedActivities[key] = act;
    });

    return {
      ...initialPortfolioData,
      ...parsed,
      activities: mergedActivities
    };
  } catch (error) {
    console.warn('Failed to load portfolio:', error);
    return initialPortfolioData;
  }
}

// ---------- PROVIDER ----------

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(loadInitialData);
  const [mediaReady, setMediaReady] = useState(false);

  const [activeFilter, setActiveFilter] = useState('all');
  const [isEditMode, setIsEditMode] = useState(false);

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    src: '',
    caption: '',
    title: ''
  });

  const [activeTab, setActiveTab] = useState('portfolio');

  // Load saved photos and migrate older Base64 photos from localStorage.
  useEffect(() => {
    let cancelled = false;

    async function restoreMedia() {
      try {
        const savedMedia = await getAllMediaFromDB();

        const mediaMap = new Map(
          savedMedia.map((item) => [item.id, item])
        );

        const activities = data.activities || {};

        // Migrate photos saved by the older localStorage version.
        for (const [activityKey, activity] of Object.entries(activities)) {
          for (const [field, value] of Object.entries(activity || {})) {
            if (!isMediaField(field, value)) continue;

            const id = `${activityKey}:${field}`;

            if (!mediaMap.has(id)) {
              await saveMediaToDB(activityKey, field, value);
              mediaMap.set(id, {
                id,
                activityKey,
                fileField: field,
                value
              });
            }
          }
        }

        if (cancelled) return;

        setData((previous) => {
          const restoredActivities = { ...previous.activities };

          savedMedia.concat(
            [...mediaMap.values()].filter(
              (item) => !savedMedia.some((saved) => saved.id === item.id)
            )
          ).forEach((item) => {
            restoredActivities[item.activityKey] = {
              ...restoredActivities[item.activityKey],
              [item.fileField]: item.value
            };
          });

          return {
            ...previous,
            activities: restoredActivities
          };
        });
      } catch (error) {
        console.error('Could not restore uploaded photos:', error);
      } finally {
        if (!cancelled) setMediaReady(true);
      }
    }

    restoreMedia();

    return () => {
      cancelled = true;
    };
  }, []);

  // Save text and portfolio content in localStorage.
  // Uploaded photos are stored separately in IndexedDB.
  useEffect(() => {
    if (!mediaReady) return;

    try {
      const safeData = {
        ...data,
        activities: {}
      };

      Object.entries(data.activities || {}).forEach(
        ([activityKey, activity]) => {
          const safeActivity = {};

          Object.entries(activity || {}).forEach(([field, value]) => {
            if (isMediaField(field, value)) return;

            safeActivity[field] = value;
          });

          safeData.activities[activityKey] = safeActivity;
        }
      );

      if (safeData.activities?.audioBusinessThesis) {
        delete safeData.activities.audioBusinessThesis.userUploadedAudio;
      }

      if (safeData.activities?.websitePpt) {
        delete safeData.activities.websitePpt.userUploadedFile;
      }

      if (safeData.activities?.websiteDemoVideo) {
        delete safeData.activities.websiteDemoVideo.userUploadedVideo;
        delete safeData.activities.websiteDemoVideo.userVideoUrl;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeData));
    } catch (error) {
      console.warn('Could not persist portfolio content:', error);
    }
  }, [data, mediaReady]);

  // ---------- UPDATE FUNCTIONS ----------

  const updateMeta = (fields) => {
    setData((previous) => ({
      ...previous,
      meta: {
        ...previous.meta,
        ...fields
      }
    }));
  };

  const updateActivity = (activityKey, updatedFields) => {
    setData((previous) => ({
      ...previous,
      activities: {
        ...previous.activities,
        [activityKey]: {
          ...previous.activities[activityKey],
          ...updatedFields
        }
      }
    }));
  };

  // Supports both a single image and an array of multiple images.
  const uploadMedia = async (activityKey, fileField, value) => {
    try {
      await saveMediaToDB(activityKey, fileField, value);

      setData((previous) => ({
        ...previous,
        activities: {
          ...previous.activities,
          [activityKey]: {
            ...previous.activities[activityKey],
            [fileField]: value
          }
        }
      }));
    } catch (error) {
      console.error('Photo could not be saved:', error);
      alert('The photo could not be saved. Please try a smaller image.');
    }
  };

  const resetToDefault = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all customized photos and content to course defaults?'
      )
    ) {
      setData(initialPortfolioData);
      localStorage.removeItem(STORAGE_KEY);

      deleteAudioFromDB().catch(console.warn);
      deletePresentationFromDB().catch(console.warn);
      deleteVideoFromDB().catch(console.warn);
      clearMediaDB().catch(console.warn);
    }
  };

  const openLightbox = (src, caption = '', title = '') => {
    setLightbox({
      isOpen: true,
      src,
      caption,
      title
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      src: '',
      caption: '',
      title: ''
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        activeFilter,
        setActiveFilter,
        isEditMode,
        setIsEditMode,
        lightbox,
        openLightbox,
        closeLightbox,
        activeTab,
        setActiveTab,
        updateMeta,
        updateActivity,
        uploadMedia,
        resetToDefault
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      'usePortfolio must be used within a PortfolioProvider'
    );
  }

  return context;
}
