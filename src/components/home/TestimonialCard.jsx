import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Instagram Reach",
      feedback: "We successfully managed multiple Instagram accounts, achieving a 3x increase in reach. Our data-driven content strategies consistently boosted engagement and enhanced overall visibility."
    },
    {
      name: "Clothing Brands",
      feedback: "We helped several clothing brands achieve a remarkable 5x growth in organic sales within just two months by leveraging customer feedback and fostering authentic engagement."
    },
    {
      name: "Cosmetics and More",
      feedback: "We transformed the online presence of numerous cosmetics brands, driving significant increases in engagement and visibility while converting followers into loyal customers."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 md:mb-16 text-center mx-auto">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            Our Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            See what we have achieved and offered brands with our partnership. Real results from real businesses.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} name={t.name} feedback={t.feedback} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIAL CARD.JSX ====================
export function TestimonialCard({ name, feedback, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-50 p-6 md:p-8 rounded-3xl border-2 border-gray-200 hover:border-teal-500 hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14 bg-teal-100 rounded-xl flex items-center justify-center shadow-inner">
        <Quote size={24} className="md:w-6 md:h-6 text-teal-600" />
      </div>
      <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-base md:text-lg flex-grow">
        "{feedback}"
      </p>
      <div className="pt-4 md:pt-6 border-t-2 border-gray-200">
        <h4 className="font-bold text-gray-900 text-base md:text-lg">{name}</h4>
      </div>
    </motion.div>
  );
}
