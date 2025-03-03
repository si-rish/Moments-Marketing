import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Feedback from "../../components/Feedback";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";

const Contact = () => {
  const [startMarquee, setStartMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartMarquee(true), 3000); // Start scrolling after 3s
  }, []);

  return (
    <> 
      <PageHero 
        title="Contact Us" 
        backgroundImage="https://img.freepik.com/free-photo/flat-lay-desk-dark-concept-with-copy-space_23-2148459477.jpg?ga=GA1.1.1116403944.1738924082&semt=ais_hybrid"
      />
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6 md:p-16">
      {/* Contact Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Let's Bring Your Vision to Life</h2>
        <p className="text-gray-400 mt-2 max-w-xl">
          Have a project in mind or need help with design and development? Reach out to us, and let's get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
            <FaMapMarkerAlt className="text-green-400" size={24} />
            <span>123 Creative Street, Innovation City, 56789</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
            <FaPhoneAlt className="text-green-400" size={24} />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
            <FaEnvelope className="text-green-400" size={24} />
            <span>hello@mail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-800 rounded text-white" />
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-800 rounded text-white" />
            </div>
            <input type="text" placeholder="Phone Number" className="w-full p-3 bg-gray-800 rounded text-white" />
            <textarea placeholder="Message" className="w-full p-3 bg-gray-800 rounded text-white h-32"></textarea>
            <button className="w-full bg-green-500 p-3 rounded-lg text-black font-bold hover:bg-green-600">Send Message</button>
          </form>
        </div>
      </div>

      {/* <Feedback/> */}
    </div>
    <Footer/>
    </>

  );
};

export default Contact;
