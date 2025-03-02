import React from "react";
import { FaFacebookF, FaPinterestP, FaTimes } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Bae",
    role: "SEO & Organic Growth",
    image: "https://via.placeholder.com/300", // Replace with actual image
  },
  {
    name: "Liberti Jane",
    role: "Remarketing & CRO Expert",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Nessy Alica",
    role: "Content Marketing Specialist",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Manuel Perdi",
    role: "Paid Ads & SEM Manager",
    image: "https://via.placeholder.com/300",
  },
];

const Teams = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <span className="bg-gray-200 px-4 py-1 rounded-full text-sm font-bold">
          Our Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-4">
          Experts Driving Your Digital Success
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-lime-400 text-black font-semibold px-6 py-3 mt-4 rounded-lg hover:bg-lime-500 transition">
          Learn More
        </button>
      </div>

      {/* Team Members Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden text-center p-4 hover:shadow-lg transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-green-900">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3">
                <FaFacebookF className="text-green-900 hover:text-lime-500 cursor-pointer" />
                <FaTimes className="text-green-900 hover:text-lime-500 cursor-pointer" />
                <FaPinterestP className="text-green-900 hover:text-lime-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
