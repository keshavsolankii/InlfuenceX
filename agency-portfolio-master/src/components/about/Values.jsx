import React, { useEffect, useRef, useState } from 'react';
import { Heart, TrendingUp, Users, Zap } from 'lucide-react';

export default function ValueSection() {
  const values = [
    { icon: Heart, title: "Authenticity", description: "We believe in genuine partnerships that resonate with audiences and build trust." },
    { icon: TrendingUp, title: "Results-Driven", description: "Every strategy is backed by data and designed to deliver measurable business outcomes." },
    { icon: Users, title: "Collaboration", description: "We work closely with clients and influencers to create campaigns that exceed expectations." },
    { icon: Zap, title: "Innovation", description: "We stay ahead of trends and continuously evolve our strategies to maximize impact." }
  ];

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            Our Values
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            What Drives Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Our core values guide every decision we make and every campaign we create.
          </p>
        </div>

        <div ref={containerRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 group transform opacity-0 translate-y-12 hover:scale-105 hover:border-teal-500 hover:bg-white transition-all duration-500 shadow-sm`}
              style={{
                transitionDelay: visible ? `${index * 200}ms` : '0ms',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(3rem)'
              }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300 shadow-sm">
                <value.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
