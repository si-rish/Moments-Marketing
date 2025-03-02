import React from "react";

const Content = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight">
            We are an <br />
            <span className="text-white">Advertising & Marketing</span> firm erat
            sed fermentum.
          </h1>
          <p className="mt-4 text-gray-300">
            Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra.
          </p>
          <a href="#" className="mt-6 inline-block text-white font-semibold underline">
            READ MORE
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Team working"
            className="w-full rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
