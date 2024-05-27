import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ ...service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <>
      <div className='flex flex-col gap-2 w-[350px]  shadow-lg rounded-md '>
        <div>
          <img
            src={service.image}
            alt=''
            className='w-[350px] h-[200px] rounded-t-md px-0 object-cover'
          />
        </div>
        <div className='px-2 h-[80px] '>
          <h1 className='text-2xl p-2 font-Poppins  font-semibold text-primary-bg-color'>
            {service.title}
          </h1>
        </div>

        <div className='px-2 py-2'>
          <button
            onClick={handleClick}
            className='uppercase  bg-secondary-text-color font-Poppins text-white w-full p-2 rounded-md hover:bg-primary-bg-color hover:text-black hover:scale-95 transition-all duration-100 delay-75 ease-linear'>
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
