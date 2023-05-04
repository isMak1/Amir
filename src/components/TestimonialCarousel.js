import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../slider.css';

const TestimonialCarousel = ({ slider }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const { message } = slider[currentSlide];

  useEffect(() => {
    setCurrentText('');
    let i = 0;
    const intervalId = setInterval(() => {
      if (i >= message.length) {
        clearInterval(intervalId);
      } else {
        setCurrentText((currentText) => currentText + message[i]);
        i++;
      }
    }, 68);

    return () => clearInterval(intervalId);
  }, [currentSlide, message]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      onChange={handleSlideChange}
      className='w-full max-w-[1024px] flex items-center justify-center'
    >
      {slider.map((item, index) => {
        // destructure item
        const { image, name } = item;
        return (
          <div className='max-w-[840px] mb-4 mx-auto px-20 text-white text-sm' key={index}>
            <div className='sm:text-sm mb-9 lg:text-2xl leading-snug'>
              {index === currentSlide ? currentText : message}
            </div>
            <div className='max-w-[70px] lg:max-w-[100px] mx-auto mb-3'>
              <img className='rounded-full' src={image} alt='' />
            </div>
            <div className='font-bold text-[22px] text-accent'>{name}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
