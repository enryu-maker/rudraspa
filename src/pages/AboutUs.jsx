

import React from 'react';

import { aboutData } from '../data';

const PhilosophySection = () => {
  return (
    <section className="flex flex-col bg-gray-100 p-6 md:p-12 space-y-0">
      {aboutData.map((section, index) => (
        <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`} key={index}>
          <div className="md:w-1/2 p-6 flex justify-center">
            <img 
              src={section.imgSrc} 
              alt={section.imgAlt} 
              className="w-full h-auto md:max-w-lg max-w-screen-lg rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h2 className="text-3xl font-bold mb-4 text-primary-bg-color">{section.title}</h2>
            {section.text.map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-700 text-justify">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default PhilosophySection;



