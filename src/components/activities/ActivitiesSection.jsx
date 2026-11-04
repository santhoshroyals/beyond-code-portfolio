
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
        <div className="space-y-12">

          <StarsPhotoActivity />
          <StoryboardActivity />
          <TutorialDiscussionActivity />
          <IotShowcase />
          <ClassQuizActivity />
          <MediumBlogActivity />
          <AudioBusinessThesisActivity />
          <WebsitePptActivity />
          <WebsiteDemoVideoActivity />
          <PadletScreenshotsActivity />

          
        </div>
      </div>
    </section>
  );
}
