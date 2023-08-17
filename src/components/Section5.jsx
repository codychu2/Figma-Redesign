import React from 'react';


const Section5 = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='bg-[#D8D9DA] h-1 w-full mx-auto mt-2 rounded'></div> {/* Full width */}
            <p className='text-center text-xl mt-3'>Basic</p>
            <h2 className='text-2xl font-bold text-center py-8'>Free</h2>
            <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>3 Figma and 3 FigJam files</p>
                  <p className='py-2 border-b mx-8'>Unlimited collaborators</p>
                  <p className='py-2 border-b mx-8'>Plugins and templates</p>
              </div>
            <button className='bg-[#D8D9DA] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='bg-[#33973D] h-1 w-full mx-auto mt-2 rounded'></div> {/* Full width */}
            <p className='text-center text-xl mt-3'>Figma Professional</p>
            <h2 className='text-2xl font-bold text-center py-8'>$12 per editor/month</h2>
            <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Unlimited Figma files</p>
                  <p className='py-2 border-b mx-8'>Unlimited version history</p>
                  <p className='py-2 border-b mx-8'>Dev Mode</p>
              </div>
            <button className='bg-[#33973D] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <div className='bg-[#5551FF] h-1 w-full mx-auto mt-2 rounded'></div> {/* Full width */}
            <p className='text-center text-xl mt-3'>Figma Organization</p>
            <h2 className='text-2xl font-bold text-center py-8'>$45 per editor/month</h2>
            <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Org-wide libraries</p>
                  <p className='py-2 border-b mx-8'>Branching and merging</p>
                  <p className='py-2 border-b mx-8'>Centralized file management</p>
              </div>
            <button className='bg-[#5551FF] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
          </div>
      </div>
    </div>
  );
};

export default Section5;