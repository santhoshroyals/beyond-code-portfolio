import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import StarsPhotoActivity from './activities/StarsPhotoActivity';
import StoryboardActivity from './activities/StoryboardActivity';
import TutorialDiscussionActivity from './activities/TutorialDiscussionActivity';
import IotShowcase from './IotShowcase';
import ClassQuizActivity from './activities/ClassQuizActivity';
import MediumBlogActivity from './activities/MediumBlogActivity';
import AudioBusinessThesisActivity from './activities/AudioBusinessThesisActivity';
import WebsitePptActivity from './activities/WebsitePptActivity';
import WebsiteDemoVideoActivity from './activities/WebsiteDemoVideoActivity';
import PadletScreenshotsActivity from './activities/PadletScreenshotsActivity';
import { Layers, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ActivitiesSection() {
  const { data } = usePortfolio();
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All 10 Mandatory Activities' },
    { id: 'iot', label: 'IoT & Impairment Capstone' },
    { id: 'collab', label: 'Discourse & Colloquium (Stars, Tutorial, Padlet)' },
    { id: 'media', label: 'Media & Presentation (Audio, Video, PPT, Blog)' },
    { id: 'evaluation', label: 'Evaluation & Exam (Class Quiz, Storyboard)' }
  ];

  const shouldShow = (type) => {
    if (filter === 'all') return true;
    if (filter === 'iot' && type === 'iot') return true;
    if (filter === 'collab' && (type === 'stars' || type === 'tutorial' || type === 'padlet')) return true;
    if (filter === 'media' && (type === 'audio' || type === 'video' || type === 'ppt' || type === 'blog')) return true;
    if (filter === 'evaluation' && (type === 'quiz' || type === 'storyboard')) return true;
    return false;
  };

  return (
    <section id="activities" className="scroll-mt-20 py-16 sm:py-24 border-b border-ivory-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 text-violetAccent-700 font-mono text-xs uppercase tracking-widest font-bold mb-3 bg-violetAccent-50 px-3 py-1 rounded-full border border-violetAccent-200">
            <Layers className="w-4 h-4" />
            <span>Academic Coursework Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-950 mb-4">
            Ten Mandatory Course Activities
          </h2>
          <p className="text-navy-700 text-sm sm:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Every required coursework milestone documented with dedicated analytical commentary, interactive tools, and customizable academic evidence slots.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === opt.id
                    ? 'bg-navy-950 text-white shadow-sm'
                    : 'bg-white border border-navy-200 text-navy-700 hover:bg-ivory-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Activities in Curricular Sequence */}
        <div className="space-y-12">
          {/* 1. Stars Photo */}
          {shouldShow('stars') && <StarsPhotoActivity />}

          {/* 2. Storyboard */}
          {shouldShow('storyboard') && <StoryboardActivity />}

          {/* 3. Python Tutorial Discussion Photo */}
          {shouldShow('tutorial') && <TutorialDiscussionActivity />}

          {/* 4. IoT-Based Application for Impairment Assessment (Prominent Showcase) */}
          {shouldShow('iot') && <IotShowcase />}

          {/* 5. Class Quiz */}
          {shouldShow('quiz') && <ClassQuizActivity />}

          {/* 6. Medium Blog */}
          {shouldShow('blog') && <MediumBlogActivity />}

          {/* 7. Audio Recording Website — Business Thesis */}
          {shouldShow('audio') && <AudioBusinessThesisActivity />}

          {/* 8. Website PPT */}
          {shouldShow('ppt') && <WebsitePptActivity />}

          {/* 9. Website Demo Video */}
          {shouldShow('video') && <WebsiteDemoVideoActivity />}

          {/* 10. Padlet Screenshots with Questions */}
          {shouldShow('padlet') && <PadletScreenshotsActivity />}
        </div>
      </div>
    </section>
  );
}

