import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// ==================== WHY CHOOSE US SECTION ====================
export default function WhyChooseUsSection() {
  const reasons = [
    "Data-driven strategies with real-time analytics",
    "Extensive network of customers and authentic influencers",
    "End-to-end campaign management & optimization",
    "Transparent reporting and social media handeling",
    "Personalized approach tailored to your brand",
    "Proven success across multiple industries"
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:pr-12"
          >
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              What Sets Us Apart
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
              We combine creativity, data, and technology to drive measurable 
              results for your brand. Our strategies are customized, transparent, 
              and built to deliver long-term growth.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white p-3 md:p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 lg:pl-12"
          >
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl md:rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-between h-full">
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">99%</h3>
                  <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Campaign Success</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">95%</h3>
                  <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Client Retention</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">100+</h3>
                  <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Influencer Partners</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">5k+</h3>
                  <p className="text-white/80 text-xs md:text-sm mt-1 md:mt-2">Total Customer Reach All Over India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
