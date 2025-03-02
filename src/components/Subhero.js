import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const SubHero = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          {/* Badge */}
          <div className="inline-flex items-center bg-gray-800 px-4 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Who We Are
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          At Moments, we drive business growth with integrated digital and offline marketing strategies.
          </h2>
          <p className="text-gray-300 mb-6">
            Our team blends creativity, innovation, and expertise to deliver exceptional results, empowering brands to succeed in a rapidly evolving digital world as well as real world.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-10">
            <div>
              <h3 className="text-4xl font-bold">700+</h3>
              <p className="text-green-400">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">98%</h3>
              <p className="text-green-400">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-green-400">Industry Experience</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition">
            Discover Our Story
            <HiArrowUpRight className="ml-2" />
          </button>
        </div>

        {/* Right Image with Play Button */}
        <div className="md:w-1/2 relative">
          <img 
            src="https://cdn.prod.website-files.com/671090cced2357e525689338/67b43d4c75383125ae303ea1_home-about-img-p-800.webp" 
            alt="Who We Are" 
            className="w-full rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
            <div className="bg-black/60 p-4 rounded-full">
              <div className="bg-green-400 text-black w-12 h-12 flex items-center justify-center rounded-full">
                ▶
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
