import React from "react";
import PageHero from "../../components/PageHero";

const Blogs = () => {
  return (
    <div>
      <PageHero 
        title="Our Blog" 
        backgroundImage="https://example.com/blog-bg.jpg"
      />
      <div className="p-10 text-center text-white">
        <p>Explore our latest articles.</p>
      </div>
    </div>
  );
};

export default Blogs;
