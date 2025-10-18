import React from "react";

const brands = [
  "Soulflower",
  "Oscar Home",
  "Calibar",
  "Svish On The Go",
  "Beco",
  "Boffit",
  "Conscious Chemist",
  "Earthen Story",
  "Nutrabud",
  "Ecosys",
  "Earthful",
];

export default function Brands() {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-14 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            Trusted Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Successful Brand Collaborations
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Trusted and liked by 100+ brands for amplifying their presence
            through impactful influencer marketing and brand storytelling.
          </p>

          <p className="text-gray-500 mt-8 text-base md:text-lg">
            Some of our esteemed collaborators include:
          </p>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="relative">
          {/* Gradient fade overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          {/* Scrolling Brand Cards */}
          <div className="flex space-x-6 md:space-x-10 animate-scroll">
            {[...brands, ...brands].map((brand, index) => {
              const initials = brand
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase();
              const colors = [
                "from-pink-500 to-yellow-400",
                "from-indigo-500 to-purple-400",
                "from-teal-400 to-blue-500",
                "from-orange-400 to-red-500",
                "from-green-400 to-emerald-500",
              ];
              const color =
                colors[index % colors.length]; // alternate gradients
              return (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer transition-all duration-300"
                >
                  <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl hover:shadow-teal-100 transition-all duration-300 flex flex-col items-center min-w-[130px] md:min-w-[160px]">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-md group-hover:scale-105 transition-transform duration-300`}
                    >
                      {initials}
                    </div>
                    <div className="text-sm md:text-base font-medium text-gray-700 text-center mt-4 group-hover:text-teal-600 transition-colors duration-300">
                      {brand}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation Styling */}
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

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
