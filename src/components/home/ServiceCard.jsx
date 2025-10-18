import React from 'react';
import { Users, TrendingUp, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // each card animates after 0.2s
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-center mx-auto">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            Comprehensive solutions to elevate your brand presence and drive sustainable growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          
          <ServiceCard 
            title="E-Commerce Reputation Boost" 
            description={
            <>
            We connect real customers with your brand to generate <strong>authentic reviews, improve ratings, and strengthen your overall online trust score</strong>, driving higher sales and visibility
            </>
            }
          />
          <ServiceCard 
            title="Influencer-Driven Product Promotions" 
            description={
              <>
              Amplify your brand reach through <strong>authentic collaborations</strong> with <strong>micro and niche influencers</strong> who genuinely connect with your target audience, delivering engaging content that <strong>boosts visibility, awareness, and customer trust</strong>.
              </> 
            }
          />
          <ServiceCard 
            title="Social Media Management" 
            description={
              <>
              Comprehensive <strong> social media account management, content creation, community management</strong> and analytics to build your brand presence across all major social media platforms.
              </>
            } 
          />
        </motion.div>
      </div>
    </section>
  );
}

// ==================== SERVICE CARD ====================
export function ServiceCard({ title, description }) {
  const iconMap = {
    "Influencer Marketing": Users,
    "E-Commerce Management": TrendingUp,
    "Social Media Management": Share2,
  };

  const Icon = iconMap[title] || Users;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-teal-500 transition-all duration-300 flex flex-col shadow-sm"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300 shadow-sm">
        <Icon size={24} className="md:w-7 md:h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg flex-grow">
        {description}
      </p>
    </motion.div>
  );
}
