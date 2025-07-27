

import React from 'react';
import ContactImg from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-full font-Poppins'>
      <div className='flex flex-col justify-center items-center md:items-start p-8 md:p-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-primary-bg-color font-Poppins uppercase mb-4'>
          Contact us
        </h1>
        <div className='flex flex-col gap-4 items-start text-black'>
          <h2 className='text-lg md:text-xlfont-Poppins '>Rudra Hammam & Spa Corporate office</h2>
          <p className='text-base md:text-lg'>
            Address: Roongta Bellavista, 606/607,
            near Bhujbal Farm Road,
            Sadashiv Nagar, Sadguru Nagar,
            Nashik, Maharashtra 422009
          </p>
          <p className='text-base md:text-lg'>Phone: <span className='text-primary-bg-color font-semibold'>+91 8329419201</span></p>
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
