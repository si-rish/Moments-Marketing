import React from "react";

const Newsletter = () => {
  return (
    <section className="flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-5xl">
        {/* Background Image */}
        <div
          className="relative rounded-xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1200x600')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-6 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Subscribe Our Newsletter
            </h2>
            <p className="mt-2 text-sm sm:text-base max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-lime-600 transition">
                Subscribe Now
              </button>
              <button className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
