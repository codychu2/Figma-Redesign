import React, { useState } from 'react';
import figmaLogo from '../images/figmalogo1.png';

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full bg-white'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7 relative'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <img className='h-11' src={figmaLogo} alt='Figma Logo' />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white top-[70px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'opacity-100' : 'opacity-0 invisible md:visible'}`}>
          {
            Links.map((link, index) => (
              <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}

export default Nav;