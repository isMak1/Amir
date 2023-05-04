import React, { useState, useRef } from 'react';
// import data
import { reservationData } from '../data';
// import datepicker
import DatePicker from 'react-datepicker';
// import datepicker css
import 'react-datepicker/dist/react-datepicker.css';
// import timepicker
import TimePicker from 'react-time-picker';
// import timepicker css
import '../timepicker.css';
// import icons
import { FaUsers, FaCalendar, FaClock, FaRegCheckCircle } from 'react-icons/fa';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';
// import emailjs-com
import emailjs from '@emailjs/browser';
import "../hero.css";


const Reservation = () => {
  // destructure reservation data
  const { title, subtitle, modelImg, btnText } = reservationData;
  // date state
  const [date, setDate] = useState(new Date());
  // clock state
  const [time, setTime] = useState('10:00');
  // redirect home
  const [name, setName] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleButtonClick(){
    setShowSuccessMessage(true);
  }

  const [toSend, setToSend] = useState({
    Name: name,
    Date: date,
    Time: time,
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0kemtce', 'template_7rlz1i9', form.current, 'Gw5aMbJbCPZAlGjam')
      .then((success) => {
          console.log(success.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className='relative top-10 lg:top-96 z-30 lg:pb-20 lg:py-[100px] h-[300px] sm:h-auto' id="booking">
      <div className='container  mx-auto'>
        {/* text */}
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='text-center'
        >
          {/* title */}
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          >
            {title}
          </motion.h2>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.4, 1.6)}
            className='mb-8 text-dark'
          >
            {subtitle}
          </motion.p>
          {/* model */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className='flex justify-center mb-8'
          >
            <img src={modelImg} alt='' />
          </motion.div>
        </motion.div>
        {/* form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn('up', 'tween', 0.7, 1.6)}
          initial='hidden'
          whileInView={'show'}
        >
          <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8'>
            {/* datepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaCalendar />
                <div>Choose Date</div>
              </div>
              <DatePicker
                className='input'
                selected={date}
                name="Date"
                onChange={ setDate } 
                value={date}

              />
            </div>
            {/* timepicker */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaClock />
                <div>Choose Time</div>
              </div>
              <TimePicker
                id="tp"
                className='input'
                clearIcon={false}
                clockIcon={false}
                name="Time"
                onChange={ setTime }
                value={ time }
              />
            </div>
            {/* person number */}
            <div>
              <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
                <FaUsers />
                <div>Identifier</div>
              </div>
              <input 
                className='input' 
                type='text' 
                placeholder='Entrez votre nom de réservation ici' 
                name="Name"
                onChange={ setName } 
              />
            </div>
          </div>
          {/* button */}
          <div className='max-w-[316px] mx-auto'>
            <button 
            onClick={handleButtonClick} 
            type='submit'       
            className='btn capitalize w-full lg:w-auto'
            >
              {btnText}
            </button>
            {
              showSuccessMessage ? (
                <span className='text-green-400 flex gap-4 mt-5 success-message'>
                  <FaRegCheckCircle className='mt-1' />
                  Votre réservation est confirmée ! 
                </span>
              ) : ( '')
            }
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;