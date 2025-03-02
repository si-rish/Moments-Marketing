import { HiArrowUpRight } from "react-icons/hi2";
const images = [
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
    "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
    "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"
  ];

const Expertise = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-gray-800 px-4 py-1 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Showcasing Our Expertise
          </h2>
          <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
            Explore some of our recent projects where we’ve transformed ideas into powerful digital experiences. From web development to branding, our work speaks for itself.
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="max-w-6xl mx-auto p-4"></div>


    <div className="max-w-6xl mx-auto p-4">
      <div className="columns-3 md:columns-4 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-400 text-black flex items-center px-6 py-3 text-lg font-semibold rounded-full hover:bg-green-500 transition">
            View All Projects
            <HiArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
