import React from "react";
import Image from "next/image";

const HomePage = () => (
  <section
    id="home"
    className="w-full min-h-screen px-4 sm:px-8 lg:px-16 py-20"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between  gap-12 pt-10">
      {/* Image + role text */}
      <div className="flex flex-col justify-start items-center md:items-start gap-6 w-full md:w-1/3">
        <Image
        src="https://placehold.co/800x800/white/[#eb4242]?text=Future"
        alt="A person diving towards the sky"
        width={800}
        height={800}
        className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-[1.03]"
        />
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3">
        <div className="space-y-1 text-center md:text-left mb-5">
          <h2 className="text-[#ff2f24] text-xl sm:text-2xl font-bold">
            Flutter Developer
          </h2>
          <p className="text-[#B3B3B3] text-base sm:text-lg">
            Provide you the best work of your time.
          </p>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
          Dive into a new era of innovation and creativity. Our journey begins
          where the sky meets the future, pushing the boundaries of what is
          possible. Dive into a new era of innovation and creativity. Our journey
          begins where the sky meets the future, pushing the boundaries of what is
          possible. Dive into a new era of innovation and creativity. Our journey
          begins where the sky meets the future, pushing the boundaries of what is
          possible. Dive into a new era of innovation and creativity. Our journey
          begins where the sky meets the future, pushing the boundaries of what is
          possible.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 mt-8">
          <a
            href="https://linktree.com"
            className="px-8 py-3 bg-[#fc2f23] text-white font-bold rounded-full shadow-lg transition-all hover:bg-[#fa2317] duration-300 ease-in-out w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-[#fc2f23] text-white font-bold rounded-full shadow-lg transition-all hover:bg-[#fa2317] duration-300 ease-in-out w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
