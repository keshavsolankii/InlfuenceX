import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

export default function Hero({ title, subtitle }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // If title and subtitle are provided, use them (for About/Contact pages)
  if (title && subtitle) {
    return (
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen max-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 overflow-hidden pt-16 md:pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[128px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-500/20 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[128px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-center lg:text-left`}
          >
            

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white leading-tight">
              Grow Your Brand with{" "}
              <span className="bg-gradient-to-r from-teal-200 to-teal-400 bg-clip-text text-transparent">
                Our Huge Customer & Influencer Base
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Empowering brands with authentic customer connections, impactful reviews, and lasting credibility across e-commerce platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button className="group inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-xl shadow-teal-600/20 hover:shadow-2xl hover:shadow-teal-600/30 hover:scale-105">
                Book a Call
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <button className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:border-gray-500 hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300" >
                Learn More
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-gray-700/50 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-400 mb-1">
                  100+
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Influencers
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-400 mb-1">
                  4k+
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Customer Reach All Over India
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-400 mb-1">
                  100%
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Growth Rate
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } hidden lg:block`}
          >
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-700/50">
              {/* Campaign Growth Card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 mb-4 md:mb-6 hover:border-teal-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-2 md:p-2.5 bg-teal-600/20 rounded-lg md:rounded-xl">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                    </div>
                    <span className="text-gray-200 font-semibold text-sm md:text-base">
                      Campaign Growth
                    </span>
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-teal-400">
                    +156%
                  </span>
                </div>
                <div className="h-2 md:h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full w-3/4 shadow-lg shadow-teal-500/50"></div>
                </div>
              </div>

              {/* Engagement Rate Card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 hover:border-teal-600/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-2 md:p-2.5 bg-teal-600/20 rounded-lg md:rounded-xl">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />
                    </div>
                    <span className="text-gray-200 font-semibold text-sm md:text-base">
                      Engagement Rate
                    </span>
                  </div>
                  <span className="text-2xl md:text-3xl font-bold text-teal-400">
                    8.4%
                  </span>
                </div>
                <div className="h-2 md:h-2.5 bg-gray-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full w-4/5 shadow-lg shadow-teal-500/50"></div>
                </div>
              </div>

              {/* Trusted By */}
              {/* <div className="flex gap-3 md:gap-4 items-center pt-6 md:pt-8 mt-6 md:mt-8 border-t border-gray-700/50">
                <div className="text-gray-400 text-xs md:text-sm font-medium">
                  Trusted by
                </div>
                <div className="flex gap-2 md:gap-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full border border-gray-600"
                    ></div>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-teal-500 to-teal-600 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl shadow-teal-600/50 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-4 h-7 md:w-6 md:h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1 md:p-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 bg-teal-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
