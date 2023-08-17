import React from 'react';
import figmaMain from '../images/figmamain.png';

const Main = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#5551FF]'>
      <div className='max-w-[1240px] px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-16 py-16'>
          <div className='flex flex-col justify-center text-center md:text-left'>
            <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Unleash your creativity and innovation with us.
            </h1>
            <p className='text-white pb-5'>
              Unleash creativity with Figma—a collaborative platform for design, prototyping, and code translation. Empower innovation with intuitive tools.
            </p>
            <button className='hidden sm:inline-block md:inline-block bg-white text-[#5551FF] w-[200px] rounded-md font-medium my-6 md:my-0 py-3'>
              Get Started
            </button>
          </div>
          <img className='w-full md:w-[500px] my-4 md:my-0' src={figmaMain} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Main;