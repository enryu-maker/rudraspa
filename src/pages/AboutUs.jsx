import AboutImg from '../assets/about.png';

const AboutUs = () => {
  return (
    <>
      <h1 className='flex justify-start items-start p-5 font-semibold text-primary-bg-color underline text-xl'>
        About Us
      </h1>
      <div className='grid grid-cols-2 min-h-[80vh] font-Poppins'>
        <div
          className='flex
          justify-center
          items-center
          px-10'>
          <h1 className='flex justify-center items-center  text-md  '>
            The daily grind of work and personal life needs takes a toll on your
            body and mind. A regular self-care routine helps you unwind, relax
            and re-energize. Rudra Spa therapies will help keep your body
            running smoothly, so you can run that half marathon or that whole
            day of meetings. At Rudra Thai Spa experience holistic wellness
            services based on the traditional principles of healing and
            wellbeing.
          </h1>
        </div>

        <div
          className='flex
          justify-center
          items-center
          px-10'>
          <img
            src={AboutImg}
            alt=''
            className='w-full h-3/4 object-cover rounded-md'
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
