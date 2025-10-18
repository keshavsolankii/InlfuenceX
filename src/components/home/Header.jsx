import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="/" className="group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent tracking-tight">
          RevuVerse
          </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-sm font-medium text-white hover:text-teal-300 transition-colors duration-200 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
          <a
            href="/contact"
            className="bg-teal-500/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-400/40 transition-all duration-200"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-teal-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-lg">
          <nav className="flex flex-col px-6 py-6 space-y-3">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-white hover:text-teal-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-teal-500/90 text-white px-6 py-3 rounded-lg text-sm font-semibold text-center hover:bg-teal-600 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
