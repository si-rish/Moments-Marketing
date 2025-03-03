import React from 'react'
import PageHero from "../../components/PageHero";

function Projects() {
  return (
    <div>
      <PageHero 
        title="Our Projects" 
        backgroundImage="https://example.com/services-bg.jpg"
      />
      <div className="p-10 text-center text-white">
        <p>Discover what we offer.</p>
      </div>
    </div>
  )
}

export default Projects