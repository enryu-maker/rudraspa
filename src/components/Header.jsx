import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';
export const NavLinkData = [
  { title: 'Home', path: '/' },
  {
    title: 'Services',
    path: '/service',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Our Branches',
    path: '/branch',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between px-10 bg-white sticky top-0 z-50 shadow-md'>
        <div className='flex items-center justify-center p-2'>
          <img
            src={Logo}
            alt='logo'
            className='w-20 h-20 object-contain'
          />
        </div>
        <div className=' space-y-5'>
          <div className='flex items-center justify-end gap-5 self-end  '>
            {NavLinkData.map(({ title, path }) => (
              <NavLink
                key={title}
                to={path}
                className=' uppercase tracking-widest font-semibold font-Poppins text-sm text-slate-600 hover:text-primary-bg-color active:text-primary-text-color'>
                {title}
              </NavLink>
            ))}
          </div>
          <motion.p className=' text-sm font-semibold font-Poppins  text-black '>
            FOR MASTER FRANCHISE / FRANCHISE INQUIRY CONTACT : PHONE :{' '}
            <span className='text-primary-bg-color'>+91 90338 35777 </span> |
            EMAIL US :{' '}
            <span className='text-primary-bg-color'>
              franchise@rudrahammamspa.in
            </span>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Header;
