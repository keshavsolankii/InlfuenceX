import React from 'react';
import { motion } from "framer-motion";

// ==================== STATS SECTION ====================
export default function StatsSection() {
  const stats = [
    { number: "100+", label: "Campaigns Launched" },
    { number: "100+", label: "Influencer Partners" },
    { number: "5k+", label: "Total Customer Reach All over India" },
    { number: "156%", label: "Avg. ROI Increase" }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-16 flex justify-center">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-10 px-6 md:py-14 md:px-12 rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full mx-4 sm:mx-6">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:3rem_3rem]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-snug">
            Our Impact in Numbers
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Real results that demonstrate our commitment to client success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700/50 text-center hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <motion.div 
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.15 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-400 mb-1 md:mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
