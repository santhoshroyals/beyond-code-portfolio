
import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import MediaUploadSlot from '../common/MediaUploadSlot';
import {
  Star,
  Users,
  Quote,
  Edit3,
  Award,
  BookOpen,
  Target,
  Lightbulb,
  Code2,
  TrendingUp,
  Trophy,
  Flame,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

export default function StarsPhotoActivity() {
  const { data, updateActivity } = usePortfolio();

  const activity = data?.activities?.starsPhoto || {};
  const meta = data?.meta || {};

  const [isEditingReflection, setIsEditingReflection] = useState(false);
  const [tempReflection, setTempReflection] = useState(
    activity.reflection || ''
  );

  const uploadedPhotoCount = [
    activity.cat1Image,
    activity.userUploadedImage,
    activity.cat2Image
  ].filter(Boolean).length;

  const learningImpact = [
    {
      icon: Lightbulb,
      title: 'Developing Interest in Python',
      description:
        'Receiving recognition made me more curious about Python. I started looking forward to understanding concepts, exploring how they work and learning something new in every class.'
    },
    {
      icon: BookOpen,
      title: 'Building Strong Fundamentals',
      description:
        'Assignments and classroom learning encouraged me to focus on the basics, understand programming concepts clearly and build a foundation instead of simply memorising code.'
    },
    {
      icon: Code2,
      title: 'Gaining Practical Knowledge',
      description:
        'Working through assignments and programming exercises helped me connect theoretical concepts with practical implementation and become more confident in writing and understanding code.'
    },
    {
      icon: Trophy,
      title: 'Healthy Competition and Participation',
      description:
        'Classroom recognition encouraged me to answer questions, participate actively and challenge myself to improve. Comparing approaches with classmates also helped me learn from different perspectives.'
    },
    {
      icon: Flame,
      title: 'Overcoming Procrastination',
      description:
        'The appreciation I received motivated me to reduce laziness, take my coursework more seriously and become more regular and consistent in my learning efforts.'
    },
    {
      icon: TrendingUp,
      title: 'Growing Confidence',
      description:
        'Every small achievement gave me confidence to attempt more questions, approach programming challenges with a positive mindset and continue improving throughout the semester.'
    }
  ];

  const learningJourney = [
    {
      stage: 'The Beginning',
      title: 'Moving beyond hesitation',
      description:
        'I began by learning the subject concepts and understanding the expectations of the course. Gradually, I became more comfortable engaging with Python.'
    },
    {
      stage: 'Learning',
      title: 'Strengthening the basics',
      description:
        'Assignments, classroom activities and examination preparation encouraged me to understand programming fundamentals and practise the concepts covered in class.'
    },
    {
      stage: 'Participation',
      title: 'Becoming more involved',
      description:
        'I started taking a more active interest in classroom discussions, attempting questions and learning through the explanations and approaches shared by my classmates.'
    },
    {
      stage: 'Improvement',
      title: 'Applying what I learned',
      description:
        'With continued practice, I became more interested in solving programming questions, applying concepts and improving my practical understanding.'
    },
    {
      stage: 'Growth',
      title: 'Learning with consistency',
      description:
        'The recognition encouraged me to stay motivated, avoid postponing my work and maintain a more consistent approach towards learning Python throughout the semester.'
    }
  ];

  const handleSaveReflection = () => {
    updateActivity('starsPhoto', { reflection: tempReflection });
    setIsEditingReflection(false);
  };

  return (
    <div
      id="stars-photo"
      className="scroll-mt-24 bg-white rounded-2xl border border-navy-100 shadow-editorial p-6 sm:p-10 mb-12"
    >
      {/* Activity Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-ivory-200">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-violetAccent-100 text-violetAccent-700 flex items-center justify-center font-mono font-bold text-sm shadow-sm">
            01
          </span>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violetAccent-600 font-semibold block">
              Mandatory Activity 1 • Honors & Recognition
            </span>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950">
              {activity.title || 'Stars Photo — My Achievements'}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            {activity.badge || 'Recognition Award'}
          </span>

          <span className="text-xs text-navy-500 font-mono bg-ivory-100 px-3 py-1 rounded-full border border-ivory-200">
            {activity.date || 'Course Recognition'}
          </span>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-3">
          More Than Just a Star
        </p>

        <p className="text-sm sm:text-base text-navy-700 leading-7">
          These nine stars represent the appreciation and recognition I
          received throughout my Advanced Python Programming course.
          Seven stars were awarded for assignments and classroom activities,
          one for lab consistency and one for CAT-2 examination performance.
          Each recognition encouraged me to take greater interest in Python,
          participate more actively, practise consistently and improve my
          understanding of the subject.
        </p>
      </section>

      {/* Achievement Overview */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                Total Recognition
              </span>
            </div>
            <p className="text-2xl font-mono font-bold text-navy-950">
              9 Stars
            </p>
            <p className="text-xs text-navy-600 mt-1">
              Recognition received across assignments, lab consistency and CAT-2.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-violetAccent-600" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                Photo Evidence
              </span>
            </div>
            <p className="text-2xl font-mono font-bold text-navy-950">
              {uploadedPhotoCount} / 3
            </p>
            <p className="text-xs text-navy-600 mt-1">
              Recognition photographs currently uploaded.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-700" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                Personal Growth
              </span>
            </div>
            <p className="text-lg font-serif font-bold text-navy-950">
              Continuous Learning
            </p>
            <p className="text-xs text-navy-600 mt-1">
              Motivation to become more curious, active and consistent.
            </p>
          </div>
        </div>
      </section>

      {/* Recognition Photographs */}
      <section className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-violetAccent-600" />
              <h3 className="text-xl font-serif font-bold text-navy-900">
                My Star Achievements
              </h3>
            </div>

            <p className="text-sm text-navy-600 mt-2">
              Photographic evidence of the recognition received during the course.
            </p>
          </div>

          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-violetAccent-50 text-violetAccent-700 border border-violetAccent-100">
            9 Stars Earned
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <MediaUploadSlot
            activityKey="starsPhoto"
            fieldKey="cat1Image"
            currentImage={activity.cat1Image}
            defaultImage={null}
            aspectRatio="aspect-[4/3]"
            title="Recognition Photo 1"
            caption="Assignments and classroom activities — 7 Stars"
            label="Upload Photo 1"
          />

          <MediaUploadSlot
            activityKey="starsPhoto"
            fieldKey="userUploadedImage"
            currentImage={activity.userUploadedImage}
            defaultImage={null}
            aspectRatio="aspect-[4/3]"
            title="Recognition Photo 2"
            caption="Lab consistency — 1 Star"
            label="Upload Photo 2"
          />

          <MediaUploadSlot
            activityKey="starsPhoto"
            fieldKey="cat2Image"
            currentImage={activity.cat2Image}
            defaultImage={null}
            aspectRatio="aspect-[4/3]"
            title="Recognition Photo 3"
            caption="CAT-2 examination recognition — 1 Star"
            label="Upload Photo 3"
          />
        </div>

        <p className="text-xs text-navy-500 mt-4">
          My nine stars include seven for assignments and classroom activities,
          one for lab consistency and one for CAT-2 examination recognition.
        </p>
      </section>

      {/* Star Distribution */}
      <section className="mb-10">
        <div className="mb-5">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-2">
            Recognition Breakdown
          </p>
          <h3 className="text-xl font-serif font-bold text-navy-900">
            How I Earned My 9 Stars
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-violetAccent-600" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                Assignments & Classroom
              </span>
            </div>
            <p className="text-3xl font-mono font-bold text-navy-950">7</p>
            <p className="text-sm text-navy-700 mt-1">Stars earned</p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                Lab Consistency
              </span>
            </div>
            <p className="text-3xl font-mono font-bold text-navy-950">1</p>
            <p className="text-sm text-navy-700 mt-1">Star earned</p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-mono uppercase tracking-wider text-navy-600">
                CAT-2 Examination
              </span>
            </div>
            <p className="text-3xl font-mono font-bold text-navy-950">1</p>
            <p className="text-sm text-navy-700 mt-1">Star earned</p>
          </div>
        </div>
      </section>

      {/* Reasons for Recognition */}
      <section className="mb-10">
        <div className="mb-5">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-2">
            The Effort Behind the Recognition
          </p>
          <h3 className="text-xl font-serif font-bold text-navy-900">
            Why I Received These Stars
          </h3>
          <p className="text-sm text-navy-600 mt-2">
            The activities and academic efforts that contributed to my recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-navy-900 text-sm">
                Assignments — 7 Stars
              </h4>
            </div>
            <p className="text-sm text-navy-700 leading-relaxed">
              Completing programming assignments with effort and dedication
              helped me practise the concepts taught in class and strengthen
              my understanding.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-navy-900 text-sm">
                Classroom Activities
              </h4>
            </div>
            <p className="text-sm text-navy-700 leading-relaxed">
              Taking part in classroom activities and responding to questions
              encouraged me to become more attentive and actively involved
              in the learning process. These activities are included in the
              seven-star recognition category above.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-navy-900 text-sm">
                CAT-2 Examination — 1 Star
              </h4>
            </div>
            <p className="text-sm text-navy-700 leading-relaxed">
              Receiving a star on my CAT-2 answer sheet was encouraging.
              It motivated me to prepare better and pay attention to my
              understanding of the subject.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-50 border border-ivory-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-navy-900 text-sm">
                Lab Consistency — 1 Star
              </h4>
            </div>
            <p className="text-sm text-navy-700 leading-relaxed">
              Maintaining consistency in lab sessions and participating
              regularly helped me develop a disciplined approach towards
              practical learning.
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl border border-violetAccent-100 bg-violetAccent-50/40">
          <p className="text-xs font-mono uppercase tracking-wider text-violetAccent-700 font-bold mb-2">
            What I Learned Through These Activities
          </p>
          <p className="text-sm text-navy-700 leading-relaxed">
            The recognition was connected to my assignments, classroom
            involvement, lab consistency and examination performance.
            These experiences gave me opportunities to practise and improve
            my understanding of the Python concepts covered in the course.
          </p>
        </div>
      </section>

      {/* Learning Impact */}
      <section className="mb-10">
        <div className="mb-5">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-2">
            Beyond the Reward
          </p>
          <h3 className="text-xl font-serif font-bold text-navy-900">
            How These Stars Changed My Learning
          </h3>
          <p className="text-sm text-navy-600 mt-2">
            The most valuable outcome was not the star itself, but the
            positive change it created in my attitude towards learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {learningImpact.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-navy-100 bg-white hover:border-violetAccent-200 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-violetAccent-50 text-violetAccent-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-xs font-mono text-violetAccent-600 mb-1">
                    0{index + 1}
                  </p>
                  <h4 className="text-sm font-serif font-bold text-navy-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Semester Learning Journey */}
      <section className="mb-10">
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold mb-2">
            My Semester Transformation
          </p>
          <h3 className="text-xl font-serif font-bold text-navy-900">
            My Progress Throughout the Semester
          </h3>
          <p className="text-sm text-navy-600 mt-2">
            Recognition became a source of motivation that helped me
            gradually change the way I approached the subject.
          </p>
        </div>

        <div className="relative pl-7 sm:pl-9">
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-5 w-px bg-violetAccent-200" />

          <div className="space-y-6">
            {learningJourney.map((item, index) => (
              <div key={item.stage} className="relative">
                <div className="absolute -left-7 sm:-left-9 top-1 w-6 h-6 rounded-full bg-violetAccent-100 border-2 border-white shadow-sm flex items-center justify-center">
                  <span className="text-[10px] font-bold text-violetAccent-700">
                    {index + 1}
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-ivory-50 border border-ivory-200">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-violetAccent-700 font-bold">
                    {item.stage}
                  </span>
                  <h4 className="text-base font-serif font-bold text-navy-950 mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Reflection */}
      <section className="relative mt-8 p-6 sm:p-7 rounded-xl bg-gradient-to-br from-ivory-100/90 to-violetAccent-50/40 border border-navy-100 shadow-sm">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-violetAccent-200 pointer-events-none" />

        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-violetAccent-700 font-bold">
              My Personal Reflection
            </span>
            <h3 className="text-xl font-serif font-bold text-navy-950 mt-2">
              Small Recognition, Big Motivation
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setIsEditingReflection(!isEditingReflection)}
            className="text-xs text-navy-500 hover:text-violetAccent-700 flex items-center gap-1 transition shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            {isEditingReflection ? 'Cancel' : 'Edit Reflection'}
          </button>
        </div>

        {isEditingReflection ? (
          <div className="space-y-3">
            <textarea
              value={tempReflection}
              onChange={(e) => setTempReflection(e.target.value)}
              rows={5}
              className="w-full text-sm p-3 border border-violetAccent-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-violetAccent-500"
              placeholder="Write your personal learning reflection..."
            />

            <button
              type="button"
              onClick={handleSaveReflection}
              className="px-4 py-2 bg-violetAccent-600 text-white rounded-lg text-xs font-medium hover:bg-violetAccent-700 transition"
            >
              Save Reflection
            </button>
          </div>
        ) : (
          <p className="text-navy-900 font-subserif text-base sm:text-lg italic leading-relaxed">
            {activity.reflection ||
              'Every star I received reminded me that my efforts were being noticed. What started as a small appreciation gradually became a reason to be more curious, practise more regularly and participate with confidence. I learned that progress does not happen in a single day. It comes from asking questions, attempting problems, learning from mistakes and showing up consistently. These recognitions helped me move beyond studying Python just for marks and develop a genuine interest in understanding and applying it.'}
          </p>
        )}

        <div className="mt-5 pt-4 border-t border-navy-100/60 flex flex-wrap items-center justify-between gap-2 text-xs text-navy-600">
          <span className="font-semibold text-navy-900">
            {meta.studentName || ''}
          </span>
          <span className="font-mono">
            {meta.courseCode || ''}
          </span>
        </div>
      </section>

      {/* Closing Message */}
      <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-ivory-200">
        <GraduationCap className="w-5 h-5 text-violetAccent-700 shrink-0 mt-0.5" />
        <p className="text-sm text-navy-700 leading-relaxed">
          <strong className="text-navy-950">My biggest takeaway:</strong>{' '}
          Recognition gave me the motivation to begin, but consistent
          practice, curiosity and the willingness to improve are what
          helped me grow as a learner.
        </p>
      </div>

      {/* Participants and Tags */}
      <div className="mt-8 p-4 rounded-xl bg-ivory-50 border border-ivory-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <Users className="w-4 h-4 text-violetAccent-600" />
          <span className="font-semibold text-navy-900">
            Cohort Members Featured:
          </span>
          <span className="text-navy-600">
            {(activity.participants || []).join(', ')}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {(activity.tags || []).map((tag, index) => (
            <span
              key={index}
              className="bg-white px-2 py-1 rounded text-[11px] font-mono border border-ivory-300 text-navy-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
