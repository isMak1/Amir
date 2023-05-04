import React, { useState, useEffect} from 'react';
// import data
import { aboutData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerContainer, fadeIn } from '../variants';
// shapes CSS
import '../about.css'


const About = () => {
    const [configuration, setConfiguration] = useState(1);
    const [roundness, setRoundness] = useState(1);
  
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
    const uniqueRand = (min, max, prev) => {
      let next = prev;
  
      while (prev === next) next = rand(min, max);
  
      return next;
    };
  
    const combinations = [
      { configuration: 1, roundness: 1 },
      { configuration: 1, roundness: 2 },
      { configuration: 1, roundness: 4 },
      { configuration: 2, roundness: 2 },
      { configuration: 2, roundness: 3 },
      { configuration: 3, roundness: 3 },
    ];
  
    useEffect(() => {
      let prev = 0;
  
      const intervalId = setInterval(() => {
        const index = uniqueRand(0, combinations.length - 1, prev),
          combination = combinations[index];
  
        setConfiguration(combination.configuration);
        setRoundness(combination.roundness);
  
        prev = index;
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
  // destructure data
  const { pretitle, title, subtitle } = aboutData;

  return (
    <motion.section className='h-[350px] lg:h-[720px] bg-white' id="about">
      <div className='container mx-auto max-h-[720px]'>
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-col lg:flex-row items-center relative'
        >
          {/* text */}
          <motion.div
            variants={fadeIn('right', 'tween', 1.2, 1.8)}
            className='flex-1 text-center lg:text-left'
          >
            <div className='ctext relative p-3'>
              <div className='pretitle'>{pretitle}</div>
              <h2 className='h2 capitalize text-gray-600 title'>{title}</h2>
              <p className='message max-w-[560px]'>{subtitle}</p>
            </div>

          </motion.div>
          {/* image */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.1, 1)}
            className="body pt-10"
          >

              <div
                className=''
                id="wrapper"
                data-configuration={configuration}
                data-roundness={roundness}
              >
                <div className="shape overflow-hidden"></div>
                <div className="shape overflow-hidden"></div>
                <div className="shape z-20"></div>
                <div className="shape overflow-hidden"></div>
                <div className="shape overflow-hidden"></div>
                <div className="shape z-20"></div>
                <div className="shape z-20"></div>
              </div>

          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
