import React from "react";
import { HiCheck, HiArrowUpRight } from "react-icons/hi2";

const SubHero2 = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="inline-flex items-center bg-gray-800 px-4 py-1 rounded-full text-sm mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          What We Do
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        We specialize in strategic marketing, branding, and engagement, helping agencies grow online and offline.
        </h2>
      </div>

      {/* Content Section */}
      {/* <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row items-center gap-10 border border-green-500 rounded-2xl p-6 md:p-12"> */}
        {/* Left Content */}
        {/* <div className="lg:w-1/2">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          WEB DESIGN
          </h3>
          <p className="text-gray-400 text-lg mb-6">
            Our team builds scalable websites focused on performance, responsive design, and seamless functionality to meet your agency’s needs.
          </p> */}
          {/* List */}
          {/* <ul className="space-y-4">
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> Custom Web Development
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> E-Commerce Solutions
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> Responsive Design
            </li>
            <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
              <HiCheck className="text-green-400 mr-2" /> CMS Integration
            </li>
          </ul> */}
          {/* Button */}
          {/* <button className="mt-6 bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition">
            Explore Development
            <HiArrowUpRight className="ml-2" />
          </button>
        </div> */}

        {/* Right Content */}
        {/* <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Developer at Work"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default SubHero2;
