import React from 'react'
import Section4image from '../images/Section4image.png';

function Section4() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#FDB13F]'>
    <div className='max-w-[1240px] px-4'>
      <div className='flex flex-col md:flex-row justify-center items-center md:space-x-16 py-16'>
        <img className='w-full md:w-[500px] my-4 md:my-0' src={Section4image} alt='/' />
        <div className='flex flex-col justify-center text-center md:text-left'>
          <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Create consistency with an open design system
          </h1>
          <p className='text-black'>
          Foster a unified visual identity using Figma's Design Systems accessible to every corner of your organization. Empower all to craft uniform and seamless encounters through shared libraries and reusable assets, ensuring a harmonious and collaborative design journey.
          </p>
        </div>
      </div>
    </div>
  </div>   
  )
}

export default Section4