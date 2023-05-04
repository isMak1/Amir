import React from 'react';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-full bg-pattern max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <Menu />
      <About />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  );
};

export default App;
