import React from "react";
import { HiCheck, HiArrowUpRight } from "react-icons/hi2";

const SubHero2 = () => {
    return (
        <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24">

            {/* Content Section */}
            <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row items-center gap-10 border border-green-500 rounded-2xl p-6 md:p-12">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                        DIGITAL BOARD ADVERTISING
                    </h3>
                    <p className="text-gray-400 text-lg mb-6">
                    Boost your brand visibility with high-impact digital billboards. Our team creates eye-catching outdoor ads designed to captivate audiences and drive engagement. Whether for brand awareness or targeted promotions, we ensure your message stands out in prime locations.
                    </p>
                    {/* List */}
                    <ul className="space-y-4">
                        <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
                            <HiCheck className="text-green-400 mr-2" /> High-Resolution Ad Creatives
                        </li>
                        <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
                            <HiCheck className="text-green-400 mr-2" /> Strategic Placement & Targeting
                        </li>
                        <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
                            <HiCheck className="text-green-400 mr-2" /> Dynamic & Interactive Displays
                        </li>
                        <li className="flex items-center text-lg bg-gray-800 py-2 px-4 rounded-full">
                            <HiCheck className="text-green-400 mr-2" /> Data-Driven Performance Tracking
                        </li>
                    </ul>
                    {/* Button */}
                    <button className="mt-6 bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition">
                        Explore Development
                        <HiArrowUpRight className="ml-2" />
                    </button>
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/474x/b9/3b/12/b93b124eaf52476650de3df87614316a.jpg"
                        alt="Developer at Work"
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>


    );
};

export default SubHero2;
