import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <>
      <div className='flex flex-col gap-2 w-[350px] shadow-lg rounded-md '>
        <div>
          <img
            src={image}
            alt=''
            className='w-[350px] h-[300px] rounded-t-md px-0'
          />
        </div>
        <div className='px-2 h-[220px] '>
          <h1 className='text-2xl p-2 font-Poppins  font-semibold text-primary-bg-color'>
            {title}
          </h1>
          <p className=' p-2 text-pretty text-sm font-Poppins'>{description}</p>
        </div>
        <div className='px-2 py-2'>
          <button className='uppercase  bg-secondary-text-color font-Poppins text-white w-full p-2 rounded-md hover:bg-primary-bg-color hover:text-black hover:scale-95 transition-all duration-100 delay-75 ease-linear'>
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
