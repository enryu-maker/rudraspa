import React from 'react';
import { NavLinkData } from './Header';
import { NavLink } from 'react-router-dom';
import { Image } from '../assets/Image';

const OurService = [
  { title: 'Hammam Massage', path: '/service' },
  { title: 'Aroma', path: '/service' },
  { title: 'Swedish', path: '/service' },
  { title: 'Deep Tissue', path: '/service' },
];

const Footer = () => {
  return (
    <div className="w-full bg-primary-bg-color pt-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 opacity-90 ">

          {/* Important Links */}
          <div>
            <h1 className="text-2xl font-Poppins font-semibold text-secondary-text-color uppercase mb-4">
              Important Links
            </h1>
            <div className="flex flex-col gap-3">
              {NavLinkData.map(({ title, path }) => (
                <NavLink
                  key={title}
                  to={path}
                  className="uppercase font-medium font-Poppins text-lg text-black hover:text-white"
                >
                  {title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h1 className="text-2xl font-Poppins font-semibold text-secondary-text-color uppercase mb-4">
              Our Services
            </h1>
            <div className="flex flex-col gap-3">
              {OurService.map(({ title, path }) => (
                <NavLink
                  key={title}
                  to={path}
                  className="uppercase font-medium font-Poppins text-lg text-black hover:text-white"
                >
                  {title}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Franchise Contact */}
          <div>
            <h1 className="text-2xl font-Poppins font-semibold text-secondary-text-color uppercase mb-4">
              Franchise Contact
            </h1>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918329419201"
                className="uppercase font-medium font-Poppins text-lg text-black hover:text-white"
              >
                Number: +91 83294 19201
              </a>
              <a
                href="mailto:franchise@rudrahammamspa.in"
                className="uppercase font-medium font-Poppins text-lg text-black hover:text-white"
              >
                Email: info@rudrahammamspa.com
              </a>
            </div>
          </div>

          {/* Image or Logo */}

        </div>
        <div className="flex items-center justify-center font-Poppins ">
          Made with ❤️ by
          <a
            href="www.nerdtech.in"
            className="text-secondary-text-color font-medium ml-1"
          >
            nerdtech LLC.
          </a>
        </div>

      </div >
    </div >
  );
};

export default Footer;
