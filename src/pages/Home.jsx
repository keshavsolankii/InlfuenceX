import React from 'react';
import Hero from '../components/home/Hero';
import { ServicesSection } from '../components/home/ServiceCard';
import { TestimonialsSection } from '../components/home/TestimonialCard';
import CTASection from '../components/home/CTASection';
import Brands from '../components/home/Brands';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <Brands />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
