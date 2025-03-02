import React from "react";
import { FaBullhorn, FaGraduationCap, FaProjectDiagram, FaMoneyBillWave, FaMobileAlt, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn size={30} />,
    title: "Marketing Strategy",
    number: "01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Research & Planning",
    number: "02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-orange-400",
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: "Full Funnel Build",
    number: "03",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaMoneyBillWave size={30} />,
    title: "Digital Advertising",
    number: "04",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-orange-400",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Brand Building",
    number: "05",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-red-500",
  },
  {
    icon: <FaSearch size={30} />,
    title: "Media Strategy",
    number: "06",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgColor: "bg-orange-400",
  },
];

const Cards = () => {
  return (
    <section className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className={`p-6 text-white ${service.bgColor} rounded-md shadow-lg`}>
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-sm opacity-80">{service.number}</p>
            <p className="mt-2 text-sm">{service.description}</p>
            <a href="#" className="mt-4 inline-block text-sm font-semibold underline">READ MORE</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
