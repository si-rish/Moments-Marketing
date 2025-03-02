import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen flex flex-col"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://cdn.prod.website-files.com/671090cced2357e525689338/6747f7119425c65cf05bc99e_Home-Hero-image-p-2000.webp')" }} // Replace with actual image URL
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white py-4 px-6 w-full"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Moments Marketing</h1>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li className="hover:text-gray-400 cursor-pointer">About</li>
            <li className="hover:text-gray-400 cursor-pointer">Project</li>
            <li className="hover:text-gray-400 cursor-pointer">Services</li>
            {/* <li className="hover:text-gray-400 cursor-pointer">Pricing</li> */}
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            
          </ul>

          {/* Right Side (Cart & Button) */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            {/* <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <div className="bg-white text-black p-2 rounded-full flex items-center justify-center text-lg shadow-lg">
                <FaShoppingCart />
              </div>
              <span className="absolute -bottom-1 -right-1 bg-green-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </motion.div> */}

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-green-400 text-black flex items-center px-6 py-2 text-lg font-semibold rounded-full hover:bg-green-500 transition"
            >
              Let’s Talk
              <HiArrowUpRight className="ml-2" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex items-center px-10 md:px-20 lg:px-32 text-white">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
          {/* Left Content (Heading) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-black/50 px-4 py-1 rounded-full text-sm mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Empowering Agencies
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Crafting Success <br /> Elevating Brands
            </h1>
          </motion.div>

          {/* Right Content (Subtext & CTA) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 text-right"
          >
            <p className="text-lg mt-4 max-w-lg ml-auto">
              We deliver custom-crafted digital solutions that help agencies elevate their brands
              and achieve remarkable growth.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-6 bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition ml-auto"
            >
              Let’s Get Started
              <HiArrowUpRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
