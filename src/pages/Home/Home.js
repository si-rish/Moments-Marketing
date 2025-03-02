import React from 'react'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import FAQ from '../../components/FAQ'
import SubHero from '../../components/Subhero'
import SubHero2 from '../../components/SubHero2'
import SubHero3 from '../../components/SubHero3'
import Section from '../../components/Section'
import Expertise from '../../components/Expertise'
import SubHero4 from '../../components/SubHero4'

function Home() {
  return (
    <div>
      <HeroSection />
      <SubHero/>
      <SubHero2 />
      <SubHero3 />
      <SubHero4 />
      <Section/>
      <Expertise/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home