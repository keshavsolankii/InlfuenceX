import React from 'react';
import {Instagram, Mail, Phone } from 'lucide-react';
import { color } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12 text-center sm:text-left">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-4">
              InfluenceX
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            A full-service marketing agency helping brands scale through genuine influencer collaborations, powerful reputation building, and data-driven growth strategies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base justify-center sm:justify-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal-400 flex-shrink-0" />
                <span>hello@influencex.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base justify-center sm:justify-start">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links - hidden on mobile */}
          <div className="hidden sm:flex flex-col items-start">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }, { name: "Contact", href: "/contact" }].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm md:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services - hidden on mobile */}
          <div className="hidden sm:flex flex-col items-start">
            <h3 className="text-base md:text-lg font-semibold text-white mb-4">Services</h3>
            <div className="space-y-3">
              {[
                "Authentic Customer feedbacks",
                "E-Commerce Management",
                "Social Media Management",
                "Brand Strategy and Influencer Marketing",
                "Content Creation"
              ].map((service) => (
                <div key={service} className="text-gray-400 hover:text-teal-400 transition-colors duration-200 cursor-pointer text-sm md:text-base">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 text-center">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400 text-center">
            <p>© {new Date().getFullYear()} InfluenceX. All rights reserved.</p>
          </div>

          {/* Social Media */}
          
          <div className="flex space-x-3 md:space-x-4 justify-center">
            
          <p class="text-white">Connect to us on Instagram</p>
            <a
              href="https://instagram.com/influencex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-teal-400 hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            >
              <Instagram size={18} className="md:w-35 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
