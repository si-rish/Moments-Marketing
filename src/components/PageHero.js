import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";

const PageHero = ({ title, backgroundImage }) => {
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
                style={{ backgroundImage: `url(${backgroundImage})` }}
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
                    <Link to="/" className="text-2xl font-bold">⬢ Moments Marketing</Link>
                    {/* Navigation Links */}

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-8 text-lg">
                        <li className="hover:text-gray-400 cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-gray-400 cursor-pointer">
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className="hover:text-gray-400 cursor-pointer">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="hover:text-gray-400 cursor-pointer">
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li className="hover:text-gray-400 cursor-pointer">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Home Icon in Responsive Mode */}
                    <div className="md:hidden">
                        <Link to="/" className="text-white text-3xl">
                            <AiFillHome />
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Page Title */}
            <div className="relative z-10 flex-1 flex items-center justify-center text-white">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-7xl font-bold"
                >
                    {title}
                </motion.h1>
            </div>
        </motion.section>
    );
};

export default PageHero;
