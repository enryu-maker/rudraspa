import React from 'react';
import ContactImg from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <div className='grid grid-cols-2 h-screen w-full '>
      <div className=''>
        <form className='flex flex-col w-full '>
          <div className=' w-full'>
            <input
              type='text'
              placeholder='Name'
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type='number'
              placeholder='Contact No'
            />
          </div>
          <div>
            <textarea placeholder='Message' />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <div className='flex justify-end'>
        <img
          src={ContactImg}
          alt=''
          className=' object-cover'
        />
      </div>
    </div>
  );
};

export default ContactUs;
