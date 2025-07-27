



import React from 'react';
import { Link } from 'react-router-dom';
import nashik from '../assets/branches/nashik.png';
import ahmdabad from '../assets/branches/ahmdabad.png';
import surat from '../assets/branches/surat.png'
import pune from '../assets/branches/pune.jpg'
import mumbai from '../assets/branches/mumbai.png'
import vadodara from '../assets/branches/vadodara.png'
import Hyderabad from '../assets/branches/Hyderabad.png'
import rourkela from '../assets/branches/ROURKELA.png'
import korba from '../assets/branches/korba.png'
import Assam from '../assets/branches/Assam.png'



const StoreInCities = [
  {
    city: 'SURAT',
    img: surat,
    link: '/surat',
  },
  {
    city: 'NASHIK',
    img: nashik,
    link: '/nashik',
  },
  {
    city: 'HYDERABAD',
    img: Hyderabad, // Replace with: hyderabad (import image if available)
    link: '/hyderabad',
  },
  {
    city: 'VADODARA',
    img: vadodara,
    link: '/vadodara',
  },
  {
    city: 'ROURKELA',
    img: rourkela, // Replace with: rourkela (import image if available)
    link: '/rourkela',
  },
  {
    city: 'PUNE',
    img: pune,
    link: '/pune',
  },
  {
    city: 'KORBA',
    img: korba, // Replace with: korba (import image if available)
    link: '/korba',
  },
  {
    city: 'ASSAM',
    img: Assam, // Replace with: assam (import image if available)
    link: '/assam',
  },
];


export default function Branch() {
  return (
    <div className='flex flex-col gap-8 font-Raleway min-h-screen font-Poppins '>
      <div className='container mx-auto px-5'>
        <div className='flex flex-col gap-4 items-center justify-center mt-10'>
          <h1 className='text-4xl font-semibold text-primary-bg-color uppercase'>
            Welcome to Rudra Hammam & Spa
          </h1>
          <p className='text-xl font-extralight text-gray-700 text-center'>
            Experience Tranquility at Rudra Hammam & Spa.
          </p>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center mt-5'>
          <h1 className='text-4xl font-semibold text-primary-color'>
            Popular Cities
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 w-full'>
            {StoreInCities.map((item, index) => (
              <Link key={index} className='flex flex-col items-center rounded-md transition-transform transform hover:scale-105 p-4'>
                <img
                  src={item.img}
                  alt={item.city}
                  className='w-48 h-48 object-cover mb-4'
                />
                <h1 className='text-primary-color font-medium'>
                  {item.city}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
