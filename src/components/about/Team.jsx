import React, { useEffect, useRef } from 'react';

// ==================== TEAM SECTION ====================
export default function TeamSection() {
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = teamRef.current.querySelectorAll('.team-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            Meet the Experts
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A diverse team of marketing strategists, creative directors, and data analysts dedicated to your success.
          </p>
        </div>

        <div ref={teamRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((member, index) => (
            <div
              key={member}
              className="team-card bg-white rounded-2xl overflow-hidden border-2 border-gray-200 transition-all duration-500 group shadow-sm hover:shadow-xl hover:border-teal-500 opacity-0 translate-y-6"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-teal-900"></div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Team Member {member}</h3>
                <p className="text-teal-600 font-medium mb-3 text-sm md:text-base">Senior Marketing Strategist</p>
                <p className="text-gray-600 text-sm md:text-base">
                  Expert in influencer partnerships and campaign strategy with 8+ years of experience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
