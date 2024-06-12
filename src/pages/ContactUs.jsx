

import React from 'react';
import ContactImg from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full'>
      <div className='flex flex-col justify-center items-center md:items-start p-8 md:p-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-primary-bg-color font-Poppins uppercase mb-4'>
          Contact us
        </h1>
        <div className='flex flex-col gap-4 items-start text-black'>
          <h2 className='text-lg md:text-xlfont-Poppins '>Rudra Spa Corporate office</h2>
          <p className='text-base md:text-lg'>
            Address: Shop No : 122/123 1st Floor Powai Plaza Opp Hiranandani
            Garden Powai Mumbai – 400076
          </p>
          <p className='text-base md:text-lg'>Phone: <span className='text-primary-bg-color font-semibold'>+91 90338 35777</span></p>
          <p className='text-base md:text-lg'>Email: <span className='text-primary-bg-color font-semibold'>franchise@rudrahammamspa.in</span></p>
        </div>
      </div>
      <div className='relative md:h-screen'>
        <img
          src={ContactImg}
          alt='Contact'
          className='object-cover w-full h-full md:absolute md:inset-0'
        />
      </div>
    </div>
  );
};

export default ContactUs;
