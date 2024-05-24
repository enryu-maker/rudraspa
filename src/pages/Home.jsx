import React from 'react';
import BgImg from '../assets/bg.png';

const Home = () => {
  return (
    <div className=' bg-primary-bg-color bg-opacity-30'>
      <div className='flex justify-around items-center space-y-10 h-screen '>
        <div className='ml-5'>
          <h1 className=' text-5xl font-semibold text-primary-text-color w-1/2 '>
            WELCOME TO RUDRA SPA BEST SPA IN POWAI
          </h1>
          <p className=' text-lg font-light mt-5 w-3/4 text-gray-500'>
            Inspired by the time honoured therapies for beauty and wellness,
            Rudra Spa offers you an uplifting ambience and rejuvenating
            therapies that will refresh your body and mind holistically.
          </p>
          <div className='flex items-center gap-5 mt-5'>
            <button className='uppercase bg-secondary-text-color text-white p-3 rounded-md hover:bg-primary-bg-color hover:text-black transition-all duration-100 delay-75 ease-linear'>
              Explore
            </button>
            <button className='uppercase bg-secondary-text-color text-white p-3 rounded-md hover:bg-primary-bg-color hover:text-black transition-all duration-100 delay-75 ease-linear'>
              Contact
            </button>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            src={BgImg}
            alt=''
            className=''
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
