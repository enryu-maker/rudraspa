import React from 'react';
import { Link } from 'react-router-dom';

export const StoreInCities = [
  {
    city: 'Mumbai',
    img: 'https://i.ibb.co/MsG5FVs/Mumbai-42b4bffdd6b38798a062.png',
    store: '10 stores',
    link: '',
  },
  {
    city: 'Mumbai',
    img: 'https://i.ibb.co/MsG5FVs/Mumbai-42b4bffdd6b38798a062.png',
    store: '18 stores',
    link: '',
  },
  {
    city: 'Mumbai',
    img: 'https://i.ibb.co/MsG5FVs/Mumbai-42b4bffdd6b38798a062.png',
    store: '6 stores',
    link: '',
  },
  {
    city: 'Mumbai',
    img: 'https://i.ibb.co/MsG5FVs/Mumbai-42b4bffdd6b38798a062.png',
    store: '7 stores',
    link: '',
  },
];

export default function Branch() {
  return (
    <div className='flex flex-col gap-5 font-Raleway min-h-screen'>
      <div className='flex flex-col gap-3 items-center justify-center mt-10'>
        <h1 className=' text-4xl font-semibold text-primary-bg-color uppercase'>
          Welcome to Rudra Spa
        </h1>
        <p className=' text-xl font-extralight text-gray-700 text-center'>
          Shop from a wide range of exquisite designs for all occasions.
        </p>
      </div>
      <div className='flex flex-col gap-3 items-center justify-center mt-5 '>
        <h1 className='text-4xl font-semibold text-primary-color'>
          Popular Cities
        </h1>
        <div className='flex md:flex-row flex-col justify-center items-centers gap-5 mt-5 w-full px-5'>
          {StoreInCities.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center shadow-lg rounded-md md:hover:scale-110 hover:scale-105 transition-all ease-linear '>
              <h2 className=' bg-gradient-to-r from-lime-200 to-lime-100 w-full h-10 rounded-t-md flex items-center p-2 text-sm'>
                {item.store}
              </h2>
              <img
                src={item.img}
                alt=''
                className='w-36 h-36 px-5'
              />
              <h1 className=' text-primary-color font-medium mb-2'>
                {item.city}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
