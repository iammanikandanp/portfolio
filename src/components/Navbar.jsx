import React, { useEffect, useState } from 'react';
import {gsap} from "gsap";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    gsap.fromTo(".navbar1", { opacity:0, y: -40},{opacity:1,y:0,ease:"power1.in",duration:1});
    gsap.fromTo(".brand", { opacity:0, x: -40},{opacity:1,x:0,ease:"sine.in",duration:1,delay:1});
    gsap.fromTo(".list", { opacity:0, y: -30},{opacity:1,y:0,ease:"bounce",duration:0.6,stagger:0.2,delay:2});

  },[])

  return (
    <>

      <nav  className='navbar1 w-screen bg-[#081b29] p-3 fixed top-0 left-0 z-50 shadow-md overflow-x-hidden'>
        <div className="flex justify-between items-center">
          <div className="text-3xl brand">
            <h1 className='text-2xl text-amber-300 cursor-pointer hover:text-white max-[500px]:text-lg max-[500px]:max-w-fit'>Portfolio</h1>
          </div>
          <div>
            <ul className='flex flex-wrap gap-5 text-xl cursor-pointer items-center max-[600px]:gap-3'>
              <li className='list text-white hover:text-amber-300 max-[600px]:text-lg'>Home</li>
              <li className='list text-white hover:text-amber-300 max-[600px]:hidden'>About</li>
              <li className='list text-white hover:text-amber-300 max-[600px]:hidden'>Services</li>
              <li className='list text-white hover:text-amber-300 max-[600px]:hidden'>Skills</li>
              <li className='list text-white hover:text-amber-300 max-[600px]:hidden'>Projects</li>
              <li className='list text-white hover:text-amber-300 max-[600px]:hidden'>Contact</li>
              <li className='list text-white hover:text-amber-300 min-[600px]:hidden '>
                <button className='cursor-pointer text-md min-[600px]:text-sm ' onClick={toggleOpen}><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {open && (
        <ul className='fixed top-[55px] right-0 bg-[#081b29] text-sm text-white p-3 rounded-md shadow-lg z-[999] min-[600px]:hidden'>
          <li><button className='cursor-pointer text-left w-full py-1 hover:text-amber-300' onClick={toggleClose}>About</button></li>
          <li><button className='cursor-pointer text-left w-full py-1 hover:text-amber-300' onClick={toggleClose}>Services</button></li>
          <li><button className='cursor-pointer text-left w-full py-1 hover:text-amber-300' onClick={toggleClose}>Skills</button></li>
          <li><button className='cursor-pointer text-left w-full py-1 hover:text-amber-300' onClick={toggleClose}>Projects</button></li>
          <li><button className='cursor-pointer text-left w-full py-1 hover:text-amber-300' onClick={toggleClose}>Contact</button></li>
        </ul>
      )}
    </>
  );
};
