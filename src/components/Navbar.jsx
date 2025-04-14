import React, { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className='flex justify-between w-full bg-amber-300 p-3  relative'>
        <div className="text-3xl">
          <h1 className='max-[500px]:text-xl'>Portfolio</h1>
        </div>
        <div>
          <ul className='flex gap-5 mr-3 pr-3 text-2xl cursor-pointer items-center'>
            <li className='hover:text-white max-[600px]:text-lg'>Home</li>
            <li className='hover:text-white max-[600px]:hidden'>About</li>
            <li className='hover:text-white max-[600px]:hidden'>Services</li>
            <li className='hover:text-white max-[600px]:hidden'>Skills</li>
            <li className='hover:text-white max-[600px]:hidden'>Projects</li>
            <li className='hover:text-white max-[600px]:hidden'>Contact</li>
            <li className='hover:text-white min-[600px]:hidden relative'>
              <button className='cursor-pointer text-3xl max-[600px]:text-lg' onClick={toggleOpen}>⋮</button>
              {open && (
                <ul className='absolute bg-black text-sm text-white p-3 right-[-30px] top-[50px]  rounded-md shadow-lg z-50'>
                  <li><button className='cursor-pointer text-left' onClick={toggleClose}>About</button></li>
                  <li><button className='cursor-pointer text-left' onClick={toggleClose}>Services</button></li>
                  <li><button className='cursor-pointer text-left' onClick={toggleClose}>Skills</button></li>
                  <li><button className='cursor-pointer text-left' onClick={toggleClose}>Projects</button></li>
                  <li><button className='cursor-pointer text-left' onClick={toggleClose}>Contact</button></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
