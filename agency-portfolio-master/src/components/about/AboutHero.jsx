import React from "react";
import { Sparkles, Award, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e_1px,transparent_1px),linear-gradient(to_bottom,#0f766e_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-teal-500/20 rounded-full filter blur-[80px] md:blur-[120px]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-500/20 rounded-full filter blur-[80px] md:blur-[120px]"
      ></motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-teal-600/20 backdrop-blur-sm text-teal-300 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium border border-teal-500/30 mb-6 md:mb-8"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>About InfluenceX</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Empowering Brands Through{" "}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Authentic Influence
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto px-4"
          >
            We are a team of marketing experts passionate about growing brands
            through customers feedbacks to uplift your brand listings and strategic influencer partnerships.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 justify-center text-left">
            {[
              {
                icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />,
                title: "5+ Years",
                subtitle: "Industry Experience",
                delay: 0.9,
              },
              {
                icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />,
                title: "100+",
                subtitle: "Successful Campaigns",
                delay: 1.1,
              },
              {
                icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-teal-400" />,
                title: "150+",
                subtitle: "Happy Clients",
                delay: 1.3,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                className="flex items-start gap-3 max-w-xs mx-auto sm:mx-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {stat.title}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    {stat.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
        {/* Mouse-shaped scroll indicator */}
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
        <span className="mt-2 text-xs">Scroll</span>
      </div>
    </section>
  );
}
