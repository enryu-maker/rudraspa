import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { ServiceData } from '../data';

export default function Services() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mb-10'>
      <div className='flex flex-col gap-2 items-center justify-center mt-5'>
        <h1 className='text-2xl font-semibold uppercase text-primary-bg-color font-Poppins'>
          Massage Offered by Rudra Spa
        </h1>
        <p className='text-lg font-extralight'>
          We are offering following massage services…
        </p>
      </div>
      <div className='grid grid-cols-3 gap-10 '>
        {ServiceData.map(
          ({
            id,
            title,
            description,
            image,
            duration,
            price,
            RudraSignatureMassage,
          }) => (
            <ServiceCard
              key={id}
              id={id}
              title={title}
              description={description}
              image={image}
              duration={duration}
              price={price}
              RudraSignatureMassage={RudraSignatureMassage}
            />
          )
        )}
      </div>
    </div>
  );
}
