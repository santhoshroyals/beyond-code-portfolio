
import React from 'react';
import StarsPhotoActivity from './StarsPhotoActivity';
import StoryboardActivity from './StoryboardActivity';
import TutorialDiscussionActivity from './TutorialDiscussionActivity';
import IotShowcase from '../IotShowcase';
import ClassQuizActivity from './ClassQuizActivity';
import MediumBlogActivity from './MediumBlogActivity';
import AudioBusinessThesisActivity from './AudioBusinessThesisActivity';
import WebsitePptActivity from './WebsitePptActivity';
import WebsiteDemoVideoActivity from './WebsiteDemoVideoActivity';
import PadletScreenshotsActivity from './PadletScreenshotsActivity';

export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="scroll-mt-20 py-16 sm:py-24 border-b border-ivory-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* All 10 Activities */}
        <div className="space-y-12">

          {/* 1. Stars Photo */}
          <StarsPhotoActivity />

          {/* 2. Storyboard */}
          <StoryboardActivity />

          {/* 3. Python Tutorial Discussion */}
          <TutorialDiscussionActivity />

          {/* 4. IoT-Based Application */}
          <IotShowcase />

          {/* 5. Class Quiz */}
          <ClassQuizActivity />

          {/* 6. Medium Blog */}
          <MediumBlogActivity />

          {/* 7. Audio Recording Website */}
          <AudioBusinessThesisActivity />

          {/* 8. Website PPT */}
          <WebsitePptActivity />

          {/* 9. Website Demo Video */}
          <WebsiteDemoVideoActivity />

          {/* 10. Padlet Screenshots */}
          <PadletScreenshotsActivity />

        </div>
      </div>
    </section>
  );
}
