import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black-300 bg-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>Figma</h1>

        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-bold text-black-400'>Use Cases</h6>
          <ul>
            <li className='py-2 text-sm'>UI design</li>
            <li className='py-2 text-sm'>UX design</li>
            <li className='py-2 text-sm'>Wireframing</li>
            <li className='py-2 text-sm'>Diagramming</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black-400'>Explore</h6>
          <ul>
            <li className='py-2 text-sm'>Design features</li>
            <li className='py-2 text-sm'>Prototyping features</li>
            <li className='py-2 text-sm'>Design systems features</li>
            <li className='py-2 text-sm'>Development Features</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black-400'>Resources</h6>
          <ul>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Best practices</li>
            <li className='py-2 text-sm'>Support</li>
            <li className='py-2 text-sm'>Developers</li>
            <li className='py-2 text-sm'>Resource library</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black-400'>Compare</h6>
          <ul>
            <li className='py-2 text-sm'>Sketch</li>
            <li className='py-2 text-sm'>Adobe XD</li>
            <li className='py-2 text-sm'>Invision Studio</li>
            <li className='py-2 text-sm'>Framer</li>
            <li className='py-2 text-sm'>Design on Windows</li>
            <li className='py-2 text-sm'>Miro</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;