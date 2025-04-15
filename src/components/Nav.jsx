import React, { useEffect, useState } from 'react';
import {gsap} from "gsap";
import { Link } from 'react-scroll';


export const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{

    gsap.fromTo(".brand", { opacity:0, x: -40},{opacity:1,x:0,ease:"sine.in",duration:1});
    gsap.fromTo(".list", { opacity:0, y: -30},{opacity:1,y:0,ease:"bounce",duration:0.6,stagger:0.2,delay:1});

  },[])

  return (
    <>

      <nav  className='w-screen bg-[#081b29] p-3 fixed top-0 left-0 z-50 shadow-md overflow-x-hidden'>
        <div className="flex justify-between items-center mr-4">
          <div className="text-3xl brand">
            <h1 className='text-2xl text-cyan-300 cursor-pointer hover:text-white max-[500px]:text-lg max-[500px]:max-w-fit'>Portfolio</h1>
          </div>
          <div>
            <ul className='flex flex-wrap gap-5 text-xl cursor-pointer items-center max-[600px]:gap-3'>
              

              <li className='list text-white hover:text-amber-300 max-[600px]:text-lg'>
  <Link to="home" smooth={true} duration={500} offset={-60}>Home</Link>
</li>
<li className='list text-white hover:text-amber-300 max-[600px]:hidden'>
  <Link to="about" smooth={true} duration={500} offset={-60}>About</Link>
</li>
<li className='list text-white hover:text-amber-300 max-[600px]:hidden'>
  <Link to="Service" smooth={true} duration={500} offset={-60}>Services</Link>
</li>
<li className='list text-white hover:text-amber-300 max-[600px]:hidden'>
  <Link to="skill" smooth={true} duration={500} offset={-60}>Skills</Link>
</li>
<li className='list text-white hover:text-amber-300 max-[600px]:hidden'>
  <Link to="projects" smooth={true} duration={500} offset={-60}>Projects</Link>
</li>
<li className='list text-white hover:text-amber-300 max-[600px]:hidden'>
  <Link to="contact" smooth={true} duration={500} offset={-60}>Contact</Link>
</li>

              <li className='list text-white hover:text-amber-300 min-[600px]:hidden '>
                <button className='cursor-pointer text-md min-[600px]:text-sm ' onClick={toggleOpen}><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {open && (
       <ul className='fixed top-[55px] right-0 bg-[#081b29] text-sm text-white p-3 rounded-md shadow-lg z-[999] min-[600px]:hidden'>
       <li>
         <Link to="about" smooth={true} duration={500} offset={-60} onClick={toggleClose}>
           <span className='cursor-pointer text-left w-full py-1 block hover:text-amber-300'>About</span>
         </Link>
       </li>
       <li>
         <Link to="service" smooth={true} duration={500} offset={-60} onClick={toggleClose}>
           <span className='cursor-pointer text-left w-full py-1 block hover:text-amber-300'>Services</span>
         </Link>
       </li>
       <li>
         <Link to="skill" smooth={true} duration={500} offset={-60} onClick={toggleClose}>
           <span className='cursor-pointer text-left w-full py-1 block hover:text-amber-300'>Skills</span>
         </Link>
       </li>
       <li>
         <Link to="projects" smooth={true} duration={500} offset={-60} onClick={toggleClose}>
           <span className='cursor-pointer text-left w-full py-1 block hover:text-amber-300'>Projects</span>
         </Link>
       </li>
       <li>
         <Link to="contact" smooth={true} duration={500} offset={-60} onClick={toggleClose}>
           <span className='cursor-pointer text-left w-full py-1 block hover:text-amber-300'>Contact</span>
         </Link>
       </li>
     </ul>
      )}
    </>
  );
};
