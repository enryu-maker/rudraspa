import React from 'react';
import { NavLinkData } from './Header';
import { NavLink } from 'react-router-dom';

const OurService = [
  {
    title: 'Ayurvedic Therapy ',
    path: '/#',
  },
  {
    title: 'Scrubs & Masks ',
    path: '/#',
  },
  {
    title: 'Spa Treatments',
    path: '/#',
  },
  {
    title: 'Ayurvedic Treatments',
    path: '/#',
  },
];

const Footer = () => {
  return (
    <div className='grid grid-cols-4 gap-10 min-h-[50vh] bg-primary-bg-color opacity-70 px-5'>
      <div className='flex flex-col gap-5 justify-center items-start text-start '>
        <h1 className=' text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
          Important Links
        </h1>
        {NavLinkData.map(({ title, path }) => (
          <NavLink
            key={title}
            to={path}
            className=' uppercase font-semibold font-Poppins text-lg  text-slate-600 hover:text-primary-text-color active:text-primary-text-color'>
            {title}
          </NavLink>
        ))}
      </div>
      <div className='flex flex-col gap-5 justify-center items-start text-start '>
        <h1 className=' text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
          Our Services
        </h1>
        <div className='flex flex-col gap-5 items-start'>
          {' '}
          {OurService.map(({ title, path }) => (
            <NavLink
              key={title}
              to={path}
              className=' uppercase font-semibold font-Poppins text-lg  text-slate-600 hover:text-primary-text-color active:text-primary-text-color'>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-center items-start text-start '>
        <h1 className=' text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
          Franchise
        </h1>
        <div className='flex flex-col gap-5 items-start'>
          {' '}
          {OurService.map(({ title, path }) => (
            <NavLink
              key={title}
              to={path}
              className=' uppercase font-semibold font-Poppins text-lg  text-slate-600 hover:text-primary-text-color active:text-primary-text-color'>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-center items-start text-start '>
        <h1 className=' text-2xl font-Poppins font-bold text-secondary-text-color uppercase'>
          Contact us
        </h1>
        <div className='flex flex-col gap-5 items-start'>
          <h1 className=' text-secondary-text-color'>
            Rudra Spa Corporate office
          </h1>
          <p className='text-sm '>
            Adress: Shop No : 122/123 1st Floor Powai Plaza Opp Hiranandani
            Garden Powai Mumbai – 400076
          </p>

          <p>Phone: +91 7045378510</p>
          <p>Email: rudraspapowai@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
