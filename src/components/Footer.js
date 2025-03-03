import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-gray-400 text-4xl">⬢</span> Moments Marketing
          </h2>
          <p className="text-gray-500 mt-2">
          We start by deeply understanding your business goals and challenges to craft tailored solutions that drive success.
          </p>
          <div className="mt-4">
            <span className="font-semibold">Follow Us :</span>
            <div className="flex gap-2 mt-2">
              <div className="bg-gray-700 text-white p-2 rounded-full">
                <FaFacebookF />
              </div>
              <div className="bg-gray-700 text-white p-2 rounded-full">
                <FaTwitter />
              </div>
              <div className="bg-gray-700 text-white p-2 rounded-full">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg text-gray-200">Navigation</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg text-gray-200">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>Services</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg text-gray-200">Contact Info</h3>
          <ul className="mt-2 space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-500" /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-500" /> momentsmarketing@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-gray-500" /> Gondia, Maharashtra 441614
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-gray-400 text-center py-4 text-sm flex flex-col md:flex-row justify-between px-6">
        <span>CopyRight 2025 By Enative</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 font-semibold">Term & Services</a>
          <a href="#" className="text-gray-400 font-semibold">Privacy Policy</a>
          <a href="#" className="text-gray-400 font-semibold">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;