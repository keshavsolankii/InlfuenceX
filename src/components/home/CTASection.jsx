import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-teal-500/20 rounded-full filter blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-500/20 rounded-full filter blur-[80px] md:blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          Ready to Grow{" "}
          <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Your Brand?
          </span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
          Book a consultation with our team and discover how we can help you achieve your marketing goals and scale your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center bg-teal-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-2xl shadow-teal-600/30 hover:shadow-teal-600/50 hover:scale-105 text-sm md:text-base"
          >
            Schedule a Call
            <ArrowRight size={18} className="md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center border-2 border-gray-600 text-gray-200 px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold hover:border-gray-500 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 text-sm md:text-base"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
