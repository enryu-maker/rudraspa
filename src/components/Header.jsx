




import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';

export const NavLinkData = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/service' },
  { title: 'About', path: '/about' },
  { title: 'Our Branches', path: '/branch' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='flex items-center justify-between px-10 bg-white sticky top-0 z-50 shadow-md'>
        <div className='flex items-center justify-center p-2'>
          <img src={Logo} alt='logo' className='w-20 h-20 object-contain' />
        </div>
        <div className='space-y-5'>
          <div className='flex items-center justify-end gap-5 self-end'>

            <div className='hidden md:flex items-center justify-end gap-5'>
              {NavLinkData.map(({ title, path }) => (
                <NavLink
                  key={title}
                  to={path}
                  className={({ isActive }) =>
                    `uppercase tracking-widest font-semibold font-Poppins text-sm ${isActive ? 'text-primary-bg-color' : 'text-slate-600 hover:text-primary-bg-color'
                    }`
                  }
                >
                  {title}
                </NavLink>
              ))}
            </div>

            <button
              className='md:hidden text-primary-text-color'
              onClick={toggleMobileMenu}
            >
              {!isMobileMenuOpen ? '☰' : '✖'}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className='md:hidden py-10 flex flex-col items-end gap-2'>
              {NavLinkData.map(({ title, path }) => (
                <NavLink
                  key={title}
                  to={path}
                  className={({ isActive }) =>
                    `uppercase tracking-widest font-semibold font-Poppins text-sm ${isActive ? 'text-primary-bg-color' : 'text-slate-600 hover:text-primary-bg-color'
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  {title}
                </NavLink>
              ))}
            </div>
          )}


          <motion.p className='text-sm font-semibold font-Poppins text-black hidden md:block'>
            FOR MASTER FRANCHISE / FRANCHISE INQUIRY CONTACT : PHONE :{' '}
            <a
              href="tel:+918329419201"
              className='text-primary-bg-color'>+91 8329419201</a> |
            EMAIL US :{' '}
            <a href='mailto:info@rudrahammamspa.com' className='text-primary-bg-color'>
              info@rudrahammamspa.com
            </a>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Header;




