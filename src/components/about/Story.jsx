import React from "react";
import { TrendingUp, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-4 md:space-y-6"
          >
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Who We Are
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                We are an influencer marketing agency dedicated to helping brands grow through authentic collaborations and strategic campaigns. Our team combines creativity with data-driven strategies to deliver measurable results that exceed expectations.
              </p>
              <p>
                With over 5 years of experience and 100+ successful campaigns, we have helped brands of all sizes achieve their marketing goals and build lasting relationships with their audience. From startups to big brands, our approach remains the same—personalized, strategic, and results-focused.
              </p>
            </div>
          </motion.div>

          {/* Right Visual Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-6"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-xl"
              >
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4" />
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">156%</div>
                <div className="text-teal-100 text-sm md:text-base">Avg. ROI Increase</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-xl"
              >
                <Users className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 text-teal-400" />
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">100+</div>
                <div className="text-gray-400 text-sm md:text-base">Influencer Network</div>
              </motion.div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <Target className="w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 text-teal-600" />
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-gray-900">100%</div>
                <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
