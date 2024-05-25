import React from 'react';
import { Image } from '../assets/Image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Home = () => {
  return (
    <div className=' bg-white'>
      <div className='flex flex-col justify-around items-center space-y-10'>
        <div className='flex justify-center items-center'>
          <Carousel
            infiniteLoop
            autoPlay
            swipeable={true}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
            interval={3500}
            transitionTime={2000}
          >
            <img alt='B1' className=' h-[100%] w-[100%] object-contain' src={Image.b1} />
            <img alt='B1' className=' h-[100%] w-[100%] object-contain' src={Image.b1} />
            <img alt='B1' className=' h-[100%] w-[100%] object-contain' src={Image.b1} />
          </Carousel>
        </div>
        <div className=' w-[88%] flex justify-between'>
          <div className='w-[55%]'>
            <h1 className=' text-xl font-semibold font-Poppins text-primary-bg-color uppercase underline underline-offset-8 '>
              <span className=' text-secondary-text-color font-bold'>
                WELCOME TO
              </span>&nbsp;
              RUDRA HAMMAM & SPA
            </h1>
            <p className=' text-md font-light font-Poppins mt-5 w-3/4 text-gray-500 text-justify'>
              Named after the sacred source of inspiration, Rudra Hammam Spa has been founded to bring to you the immense benefits of Ayurveda; the ancient Indian system of healing, and the traditional Thai massage therapies, all at affordable prices. We offer comprehensive holistic & wellness treatments with a blend of Indian & Thai culture, combined with body purification techniques, body scrubs & slimming packages, amongst other services, that relax, refresh & rejuvenate you completely, thoroughly, and from within.
              Rudra Hammam Spa embodies a groundbreaking concept in the Indian spa & salon industry: offering a pool of talented professionals the opportunity to breathe life into their passion and establish a platform for your business within the untapped and largely self-sufficient US $500 Million Spa & Salon Industry.
              Rudra Hammam Spa is proud to introduce the first-ever Authentic traditional Thai foot reflexology treatments in the heart of Ahmedabad through our Xpress model. Soon, you'll witness this model expanding to cities across the country, with the aim of providing the same Thai reflexology experience to customers as offered in the USA.
            </p>
            <div className='flex items-center gap-5 mt-5'>
              <button className='uppercase bg-secondary-text-color font-Poppins font-semibold text-white p-3 rounded-md hover:bg-primary-bg-color hover:text-black transition-all duration-100 delay-75 ease-linear'>
                Explore
              </button>
              <button className='uppercase bg-secondary-text-color font-Poppins font-semibold text-white p-3 rounded-md hover:bg-primary-bg-color hover:text-black transition-all duration-100 delay-75 ease-linear'>
                Contact
              </button>
            </div>
          </div>
          <div className='w-[45%] space-y-4'>
            <h1 className=' text-xl font-semibold font-Poppins text-primary-bg-color underline underline-offset-8 '>
              <span className=' text-secondary-text-color font-bold'>
                Franchise Opportunities
              </span>
            </h1>
            <img alt='B1' className=' object-contain w-full ' src={Image.partner} />
            <p className=' text-md font-light font-Poppins text-gray-500 text-justify'>
              <span className=' font-semibold text-base'>Explore the opportunity to spa franchise with Rudra Hammam & Spa.</span><br /> <br />
              Invest in India’s Fastest Growing Spa Chain Franchise Opportunity. Most profitable business with minimum investment <br /> <br />
              We have largest spa franchise network across all India including states like Uttar Pradesh, Jharkhand, Madhya Pradesh,Rajasthan, Punjab, Maharashtra, Telangana, Chennai, Karnataka, Andhra Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
