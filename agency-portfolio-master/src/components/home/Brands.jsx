import React from 'react';

const brands = [
  { name: "Soulflower", emoji: "🤝" },
  { name: "Oscar Home", emoji: "🤝" },
  { name: "Calibar", emoji: "🤝"  },
  { name: "Svish On The Go", emoji: "🤝" },
  { name: "Beco", emoji: "🤝" },
  { name: "Boffit", emoji: "🤝" },
  { name: "Conscious Chemist", emoji: "🤝" },
  { name: "Earthen Story", emoji: "🤝" },
  { name: "Nutrabud", emoji: "🤝" },
  { name: "Ecosys", emoji: "🤝" },
  { name: "Earthful", emoji: "🤝" },
];

export default function Brands() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Trusted Partners
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
            Successful Brand Collaborations
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Trusted and liked for our work by 100+ brands to amplify their presence through impactful shopping platform and influencer marketing.
          </p><br /><br />
          <p className="text-base md:text-lg text-gray-600 px-4">
            Some of our esteemed collaborators include:
          </p>
        </div>

        {/* Horizontal Scrolling Brands */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-8 md:w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-8 md:w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex space-x-4 md:space-x-8 animate-scroll">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg group min-w-[100px] md:min-w-[140px]">
                  <div className="text-2xl md:text-4xl mb-2 md:mb-3 text-center group-hover:scale-110 transition-transform duration-300">
                    {brand.emoji}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700 text-center">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 hover:shadow-lg group min-w-[100px] md:min-w-[140px]">
                  <div className="text-2xl md:text-4xl mb-2 md:mb-3 text-center group-hover:scale-110 transition-transform duration-300">
                    {brand.emoji}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-700 text-center">
                    {brand.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 25s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  /* Mobile faster scroll */
  @media (max-width: 768px) {
    .animate-scroll {
      animation: scroll 15s linear infinite;
    }
  }
`}</style>

    </section>
  );
}
