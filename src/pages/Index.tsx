
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import VideoPortfolio from '../components/VideoPortfolio';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoPortfolio />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
