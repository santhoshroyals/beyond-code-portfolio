
import React from 'react';
import { Heart, GraduationCap } from 'lucide-react';

export default function ThankYouNote() {
  return (
    <section
      id="thank-you-note"
      className="scroll-mt-24 py-10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-2xl border border-violetAccent-200 bg-white shadow-editorial p-8 sm:p-10 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-violetAccent-50 flex items-center justify-center">
              <Heart className="w-6 h-6 text-violetAccent-600" />
            </div>
          </div>

          {/* Heading */}
          <p className="text-xs font-mono uppercase tracking-widest text-violetAccent-600 font-semibold mb-3">
            A Note of Gratitude
          </p>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mb-6">
            Thank You, Ma'am!
          </h2>

          {/* Thank You Message */}
          <div className="text-sm sm:text-base text-navy-700 leading-relaxed max-w-3xl mx-auto space-y-5">

            <p>
              A heartfelt thank you to <strong>Dr. Shamila Banu K</strong>
              {' '}for making our learning journey so special.
            </p>

            <p>
              Thank you for always creating such a friendly and comfortable
              environment where we never felt afraid to speak, make mistakes,
              or give a wrong answer. Even when we got things wrong, you never
              made us feel guilty or embarrassed. Instead, you encouraged us,
              appreciated our efforts, and motivated us to try again.
            </p>

            <p>
              Thank you for calling us to the dais, giving us stars,
              appreciating even our little efforts, and making us feel that
              we could do better every day. Those small moments meant a lot
              to us and gave us the confidence to participate more freely.
            </p>

            <p>
              Your encouragement has genuinely helped me improve my
              confidence. You made learning enjoyable and reminded us
              that it is okay to make mistakes as long as we keep trying.
            </p>

            <p>
              Thank you for being so approachable, patient, encouraging,
              and for always keeping us motivated. I'll always cherish
              these little moments and the positive impact you've had on us.
            </p>

          </div>

          {/* Closing */}
          <div className="mt-7">
            <p className="text-sm font-semibold text-violetAccent-700">
              With lots of gratitude and respect,
            </p>

            <p className="text-base font-serif font-bold text-navy-950 mt-2">
              Thank you, Ma'am!🩷
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <GraduationCap className="w-6 h-6 text-violetAccent-500" />
          </div>

        </div>
      </div>
    </section>
  );
}
