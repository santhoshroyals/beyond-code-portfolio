import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialPortfolioData } from '../data/portfolioData';
import { deleteAudioFromDB } from '../utils/audioStorage';
import { deletePresentationFromDB } from '../utils/presentationStorage';
import { deleteVideoFromDB } from '../utils/videoStorage';

const PortfolioContext = createContext(null);

const STORAGE_KEY = 'beyond_code_portfolio_data_v7';

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep-merge each activity individually so new fields from
        // initialPortfolioData are never overwritten by stale localStorage entries.
        const mergedActivities = {};
        const allKeys = new Set([
          ...Object.keys(initialPortfolioData.activities),
          ...Object.keys((parsed.activities || {}))
        ]);
        allKeys.forEach((key) => {
          const act = {
            ...(initialPortfolioData.activities[key] || {}),
            ...(parsed.activities?.[key] || {})
          };
          // Remove legacy large audio string from state if present in old localStorage
          if (key === 'audioBusinessThesis' && act.userUploadedAudio) {
            delete act.userUploadedAudio;
          }
          // Remove legacy fabricated slides and heavy files from websitePpt
          if (key === 'websitePpt') {
            if (act.slides) delete act.slides;
            if (act.userUploadedFile) delete act.userUploadedFile;
          }
          // Remove legacy fabricated chapters, unverified claims and heavy video strings from websiteDemoVideo
          if (key === 'websiteDemoVideo') {
            if (act.chapters) delete act.chapters;
            if (act.userVideoUrl) delete act.userVideoUrl;
            if (act.userUploadedVideo) delete act.userUploadedVideo;
          }
          // Remove legacy fabricated boards from padletScreenshots
          if (key === 'padletScreenshots') {
            if (act.boards) delete act.boards;
            act.badge = 'Padlet Contribution';
          }
          // Sync updated content for mediumBlog while preserving uploaded screenshot
          if (key === 'mediumBlog') {
            act.articleTitle = initialPortfolioData.activities.mediumBlog.articleTitle;
            act.author = initialPortfolioData.activities.mediumBlog.author;
            act.platform = initialPortfolioData.activities.mediumBlog.platform;
            act.description = initialPortfolioData.activities.mediumBlog.description;
            act.mediumUrl = initialPortfolioData.activities.mediumBlog.mediumUrl;
            act.keyLearningAreas = initialPortfolioData.activities.mediumBlog.keyLearningAreas;
            if (act.topicsCovered) delete act.topicsCovered;
            if (act.learningOutcome) delete act.learningOutcome;
          }
          mergedActivities[key] = act;
        });
        return {
          ...initialPortfolioData,
          ...parsed,
          activities: mergedActivities
        };
      }
    } catch (e) {
      console.warn('Failed to load portfolio from localStorage:', e);
    }
    return initialPortfolioData;
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [isEditMode, setIsEditMode] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', caption: '', title: '' });
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio', 'iot-capstone', 'activities', 'timeline', 'skills', 'reflection'

  // Persist to localStorage whenever data changes (excluding heavy media to prevent QuotaExceededError)
  useEffect(() => {
    try {
      const safeData = {
        ...data,
        activities: {
          ...data.activities
        }
      };
      if (safeData.activities?.audioBusinessThesis) {
        const { userUploadedAudio, ...restAudioActivity } = safeData.activities.audioBusinessThesis;
        safeData.activities.audioBusinessThesis = restAudioActivity;
      }
      if (safeData.activities?.websitePpt) {
        const { userUploadedFile, ...restPptActivity } = safeData.activities.websitePpt;
        safeData.activities.websitePpt = restPptActivity;
      }
      if (safeData.activities?.websiteDemoVideo) {
        const { userUploadedVideo, userVideoUrl, ...restVideoActivity } = safeData.activities.websiteDemoVideo;
        safeData.activities.websiteDemoVideo = restVideoActivity;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeData));
    } catch (e) {
      console.warn('Could not persist to localStorage:', e);
    }
  }, [data]);

  const updateMeta = (fields) => {
    setData((prev) => ({
      ...prev,
      meta: { ...prev.meta, ...fields }
    }));
  };

  const updateActivity = (activityKey, updatedFields) => {
    setData((prev) => ({
      ...prev,
      activities: {
        ...prev.activities,
        [activityKey]: {
          ...prev.activities[activityKey],
          ...updatedFields
        }
      }
    }));
  };

  const uploadMedia = (activityKey, fileField, base64Url) => {
    setData((prev) => ({
      ...prev,
      activities: {
        ...prev.activities,
        [activityKey]: {
          ...prev.activities[activityKey],
          [fileField]: base64Url
        }
      }
    }));
  };

  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to reset all customized photos and content to course defaults?")) {
      setData(initialPortfolioData);
      localStorage.removeItem(STORAGE_KEY);
      deleteAudioFromDB().catch((err) => {
        console.warn('Failed to clear audio from IndexedDB:', err);
      });
      deletePresentationFromDB().catch((err) => {
        console.warn('Failed to clear presentation from IndexedDB:', err);
      });
      deleteVideoFromDB().catch((err) => {
        console.warn('Failed to clear video from IndexedDB:', err);
      });
    }
  };

  const openLightbox = (src, caption = '', title = '') => {
    setLightbox({ isOpen: true, src, caption, title });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: '', caption: '', title: '' });
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
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

