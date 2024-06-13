import React from 'react';
import { NavLinkData } from './Header';
import { NavLink } from 'react-router-dom';
import { Image } from '../assets/Image';

const OurService = [
  {
    title: 'Hammam Massage',
    path: '/service',
  },
  {
    title: 'Aroma',
    path: '/service',
  },
  {
    title: 'Swedish',
    path: '/service',
  },
  {
    title: 'Deep tissue',
    path: '/service',
  },
];

const Footer = () => {
  return (
    <div className='container bg-primary-bg-color mx-auto pt-20'>
      <div className='max-w-7xl mx-auto flex flex-col justify-evenly items-center'>
        <div className='grid grid-cols-1  sm:grid-cols-3 gap-10 min-h-[50vh]    opacity-70 px-5'>

          <div className='flex flex-col gap-5 items-start'>
            <h1 className='text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
              Important Links
            </h1>
            {NavLinkData.map(({ title, path }) => (
              <NavLink
                key={title}
                to={path}
                className='uppercase font-semibold font-Poppins text-lg text-black hover:text-white'>
                {title}
              </NavLink>
            ))}
          </div>


          <div className='flex flex-col gap-5 items-start'>
            <h1 className='text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
              Our Services
            </h1>
            <div className='flex flex-col gap-5 items-start'>
              {OurService.map(({ title, path }) => (
                <NavLink
                  key={title}
                  to={path}
                  className='uppercase font-semibold font-Poppins text-lg text-black hover:text-white'>
                  {title}
                </NavLink>
              ))}
            </div>
          </div>


          <div className='flex flex-col gap-5 items-start'>
            <h1 className='text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
              Franchise Contact
            </h1>
            <div className='flex flex-col gap-5 items-start'>
              <a className='uppercase font-semibold font-Poppins text-lg text-black hover:text-white' href="">number</a>
              <a className='uppercase font-semibold font-Poppins text-lg text-black hover:text-white' href="">email</a>

            </div>
          </div>
          <img src={Image.nt} className='self-center' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
