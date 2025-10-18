import React, { useState } from 'react';
import { Send, User, Mail, Phone, Building, Briefcase } from 'lucide-react';
import emailjs from 'emailjs-com';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brandName: '',
    serviceRequired: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    try {
      // 1️⃣ Send email with EmailJS
      await emailjs.send(
        "YOUR_SERVICE_ID",   // 🔹 replace with EmailJS service ID
        "YOUR_TEMPLATE_ID",  // 🔹 replace with EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY"    // 🔹 replace with EmailJS public key
      );

      // 2️⃣ Save to Google Sheet using SheetDB
      await axios.post("https://sheetdb.io/api/v1/YOUR_API_KEY", {
        data: [formData],
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        brandName: '',
        serviceRequired: '',
        message: ''
      });

      setStatus({ loading: false, success: true });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({ loading: false, success: false });
    }
  };

  const services = [
    'Influencer Marketing',
    'E-Commerce Management',
    'Social Media Management',
    'Brand Strategy',
    'Content Creation',
    'Other'
  ];

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border-2 border-gray-200 hover:border-teal-500 transition-all duration-300">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
          Let's Work Together
        </h3>
        <p className="text-base md:text-lg text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="block w-full pl-9 md:pl-10 pr-3 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
                  text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="block w-full pl-9 md:pl-10 pr-3 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
                  text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="block w-full pl-9 md:pl-10 pr-3 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
                  text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
            </div>
          </div>

          {/* Brand Name */}
          <div>
            <label htmlFor="brandName" className="block text-sm font-semibold text-gray-700 mb-2">
              Brand Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Enter your brand/company name"
                className="block w-full pl-9 md:pl-10 pr-3 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
                  focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
                  text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
            </div>
          </div>
        </div>

        {/* Service Required */}
        <div>
          <label htmlFor="serviceRequired" className="block text-sm font-semibold text-gray-700 mb-2">
            Service Required *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
            </div>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="block w-full pl-9 md:pl-10 pr-3 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
                text-gray-900 appearance-none bg-white text-sm md:text-base"
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, and how we can help you..."
            rows={5}
            className="block w-full px-3 md:px-4 py-3 md:py-4 border-2 border-gray-200 rounded-xl 
              focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 
              text-gray-900 placeholder-gray-500 resize-none text-sm md:text-base"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 md:pt-4">
          <button
            type="submit"
            disabled={status.loading}
            className="group w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 md:px-8 
              py-3 md:py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition-all 
              duration-300 shadow-xl shadow-teal-600/20 hover:shadow-2xl hover:shadow-teal-600/30 
              hover:scale-[1.02] flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
          >
            {status.loading ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Status Messages */}
        {status.success === true && (
          <p className="text-green-600 text-center text-sm mt-2">
            ✅ Message sent successfully!
          </p>
        )}
        {status.success === false && (
          <p className="text-red-600 text-center text-sm mt-2">
            ❌ Something went wrong. Please try again.
          </p>
        )}

        <div className="text-center text-xs md:text-sm text-gray-500 pt-2 md:pt-4">
          * Required fields. We'll respond within 24 hours.
        </div>
      </form>
    </div>
  );
}
