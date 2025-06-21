import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="font-sans bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>;
}
