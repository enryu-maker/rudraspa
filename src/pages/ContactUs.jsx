import React from 'react';
import ContactImg from '../assets/contact.jpg';

const ContactUs = () => {
  return (
    <div className='grid grid-cols-2 h-screen w-full '>
      <div className='px-10 mt-5 py-5'>
        <form className='flex flex-col gap-7 w-full '>
          <div className='w-full'>
            <input
              type='text'
              placeholder='Name'
              className='w-full p-3 outline-none border-b border-b-black hover:border-b-primary-bg-color '
            />
          </div>
          <div>
            <input
              type='email'
              placeholder='Email'
              className='w-full p-3 outline-none border-b border-b-black hover:border-b-primary-bg-color'
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Contact No'
              className='w-full p-3 outline-none border-b border-b-black hover:border-b-primary-bg-color'
            />
          </div>
          <div>
            <textarea
              placeholder='Message'
              className='w-full p-3 outline-primary-bg-color border border-gray-400 rounded-sm h-40 placeholder:justify-center'
            />
          </div>
          <div>
            <button
              type='submit'
              className='uppercase  bg-secondary-text-color font-Poppins text-white w-full p-2 rounded-md hover:bg-primary-bg-color hover:text-black transition-all duration-100 delay-75 ease-linear'>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='flex justify-end'>
        <img
          src={ContactImg}
          alt=''
          className=' object-cover w-5/6 h-screen'
        />
      </div>
    </div>
  );
};

export default ContactUs;
