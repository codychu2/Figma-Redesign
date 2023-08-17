import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';


function Section2() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../figmalayout.json')
    });

    // Cleanup the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#F58484]'>
      <div className='max-w-[1240px] px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-16 py-16'>
          <div className='w-full md:w-1/2 my-4 md:my-0 relative z-1 flex-shrink-0'>
            <div className='w-full max-w-md mx-auto' ref={container} />
          </div>
          <div className='flex flex-col justify-center text-center md:text-left'>
            <h1 className='text-black md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Effortless Design Harmony
            </h1>
            <p className='text-black'>
              Figma's Auto Layout redefines design ease, automating responsive adjustments for seamless adaptability across screens. Streamlining the process, it empowers designers to focus on creativity, confident in consistent and polished outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;