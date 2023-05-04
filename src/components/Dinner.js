import React from 'react';
// import data
import { DineData } from '../data';

const Dinner = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {DineData.map((item, index) => {
        return (
          <a
            className={item.className + ' border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-accent hover:border-accent transition-all'} 
            href={item.href}
            key={index}
            target={item.target}
            rel={item.ref}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Dinner;
