import React from 'react'
import { eventImages, teamImages } from '@/lib/data';
const GalleryPage = () => (
    <section
      id="gallery"
      className={`py-20 px-6 bg-[#0E0E0F] text-white`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Team Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
          Our Team
        </h2>
        <div className="w-20 h-1 bg-[#FF3B30] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
          {teamImages.slice(0, 8).map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden border border-[#0E0E0F] shadow-md hover:shadow-lg transition-all duration-200"
            >
               {/* hover:-translate-y-1 gap-6 rounded-xl  border-gray-800*/}
              <img
                src={src}
                alt={`Team member ${idx + 1}`}
                className="w-full h-36 object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Events Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
          Events
        </h2>
        <div className="w-20 h-1 bg-[#FF3B30] mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {eventImages.slice(0, 12).map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden border border-[#0E0E0F] shadow-md hover:shadow-lg transition-all duration-200"
            >
              <img
                src={src}
                alt={`Event ${idx + 1}`}
                className="w-full h-36 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default GalleryPage