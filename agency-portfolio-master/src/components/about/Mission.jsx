import React, { useEffect, useRef } from 'react';
import { Target, Sparkles } from 'lucide-react';

export default function MissionVisionSection() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission (Slide from Left) */}
          <div
            ref={missionRef}
            className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-lg border-2 border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-0 translate-x-[-50px]"
            style={{ transitionDelay: '0ms' }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-teal-600/30">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              To revolutionize brand marketing by creating authentic customers feedbacks and influencer partnerships that drive measurable growth. We believe in the power of genuine connections and strategic storytelling to transform businesses and build lasting customer relationships.
            </p>
          </div>

          {/* Vision (Slide from Right) */}
          <div
            ref={visionRef}
            className="bg-gradient-to-br from-gray-900 to-teal-900 rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-0 translate-x-[50px]"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/20 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-teal-400/30">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Our Vision</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              To become the global leader in influencer marketing, setting the standard for innovation, transparency, and results. We envision a future where every brand can harness the power of authentic influence to achieve extraordinary success.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
          transition: all 1s ease;
        }
      `}</style>
    </section>
  );
}
