import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const NavLinkData = [
  { title: 'Home', path: '/' },
  {
    title: 'Services',
    path: '/services',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between px-10 bg-primary-bg-color bg-opacity-30'>
        <div className='flex items-center justify-center p-2'>
          <img
            src={Logo}
            alt='logo'
            className='w-20 h-20'
          />
        </div>
        <div className='flex items-center gap-5 '>
          {NavLinkData.map(({ title, path, index }) => (
            <NavLink
              key={index}
              to={path}
              className=' uppercase font-semibold text-sm text-slate-600 hover:text-primary-text-color active:text-primary-text-color'>
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
