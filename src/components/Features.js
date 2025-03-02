import React from "react";
import { FaChartLine, FaSearchDollar, FaUsers, FaCode } from "react-icons/fa";

const features = [
  {
    title: "Data-Driven Marketing Strategies",
    icon: <FaChartLine />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Cutting-Edge SEO & Organic Growth",
    icon: <FaSearchDollar />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Multi-Channel Social Media Growth",
    icon: <FaUsers />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Conversion-Optimized Web Development",
    icon: <FaCode />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Features = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lime-400 font-semibold text-sm">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          What Makes Our Digital Marketing Agency Stand Out?
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white text-black p-6 rounded-xl shadow-lg"
          >
            {/* Icon Badge */}
            <div className="absolute -top-5 right-5 bg-lime-400 text-black p-3 rounded-full text-xl">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-500 transition">
          Learn More →
        </button>
      </div>
    </section>
  );
};

export default Features;
