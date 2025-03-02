import React from "react";
import { HiCheck, HiArrowUpRight } from "react-icons/hi2";

const SubHero3 = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row items-center gap-10 border border-green-500 rounded-2xl p-6 md:p-12">
        {/* Left Content (Image) */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/221179/pexels-photo-221179.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Developer at Work"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content (Text) */}
        <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          SOCIAL MEDIA ADS
          </h3>
          <p className="text-gray-400 text-lg mb-6">
          Drive engagement, generate leads, and maximize conversions with our strategic social media advertising. We create data-driven campaigns that connect your brand with the right audience on platforms like Facebook, Instagram, and more. Elevate your business with targeted ads that deliver measurable results.
          </p>
          {/* List */}
          <ul className="space-y-4">
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> Performance-Driven Ad Campaigns
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> Audience Targeting & Retargeting
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" />  Conversion Optimization
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> A/B Testing & Analytics
            </li>
          </ul>
          {/* Button */}
          <button className="mt-6 bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition">
            Explore Development
            <HiArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>

  );
};

export default SubHero3;
