import React from "react";

const Section = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <div className="inline-flex items-center bg-gray-800 px-4 py-1 rounded-full text-sm mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          How We Work
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Our Simple Process for Success
        </h2>
        <p className="text-gray-400 text-lg mt-2">
          We believe in a structured yet flexible approach to delivering high-quality digital solutions. Our three-step process ensures that every project is executed with precision, creativity, and a results-driven mindset.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center gap-10 ">
        {/* Step 1 */}
        <div className="bg-gray-900 p-6 rounded-xl md:w-1/3 min-h-[250px] md:min-h-[300px] relative md:top-[-20px] shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-green-400 text-3xl mr-3">⚛</span>
            <h3 className="text-xl font-semibold">Understanding Your Vision</h3>
            <span className="ml-auto text-gray-500 text-3xl font-bold">01</span>
          </div>
          <p className="text-gray-400 text-base p-4">
            Every great project starts with a deep understanding of your goals. We take the time to analyze your business, industry, and specific challenges to create solutions that align with your vision. Our team conducts in-depth research to identify key opportunities, ensuring a strong foundation for success.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900 p-6 rounded-xl md:w-1/3 min-h-[250px] md:min-h-[300px] relative shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-green-400 text-3xl mr-3">🧠</span>
            <h3 className="text-xl font-semibold">Crafting the Right Plan</h3>
            <span className="ml-auto text-gray-500 text-3xl font-bold">02</span>
          </div>
          <p className="text-gray-400 text-base p-4">
            A well-thought-out strategy is crucial for impactful results. We meticulously design a strategic roadmap that outlines every step of the project, from concept to execution. Whether it’s website development, branding, or marketing, our approach ensures seamless integration with your business objectives, keeping efficiency and scalability in mind.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900 p-6 rounded-xl md:w-1/3 min-h-[250px] md:min-h-[300px] relative md:top-[20px] shadow-lg">
          <div className="flex items-center mb-4">
            <span className="text-green-400 text-3xl mr-3">🚀</span>
            <h3 className="text-xl font-semibold">Bringing Ideas to Life</h3>
            <span className="ml-auto text-gray-500 text-3xl font-bold">03</span>
          </div>
          <p className="text-gray-400 text-base p-4">
            Execution is where innovation meets reality. Our team transforms your vision into a tangible, high-performance solution that drives business growth. We focus on implementing cutting-edge technology, user-centric designs, and effective marketing strategies to ensure your brand stands out in the digital space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
