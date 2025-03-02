import React from "react";

const Section1 = () => {
  return (
    <section className="bg-green-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Image */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl p-4">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Team working"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Maximize Your Growth with Our <br />
            <span className="text-white">Expert Digital Marketing</span>
          </h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <a
            href="#"
            className="inline-block bg-lime-400 text-black font-semibold py-2 px-6 rounded-md"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right: Stats Box */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Success Box */}
        <div className="bg-gray-100 text-gray-900 p-6 rounded-xl flex items-center gap-4 shadow-md">
          <div className="text-4xl">💰</div>
          <div>
            <h3 className="text-xl font-bold">Success Our Priority</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-lime-400 text-black p-6 rounded-xl flex justify-between text-center shadow-md">
          <div>
            <h4 className="text-3xl font-bold">172+</h4>
            <p className="text-sm">Drive Engagement</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">283+</h4>
            <p className="text-sm">Digital Presence</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">453+</h4>
            <p className="text-sm">Creating Impactful</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
