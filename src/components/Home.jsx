import React, { useEffect } from 'react'
import logo from "../assets/img/mani.jpg"
import {gsap} from "gsap"
import TypingText from './TypedText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import resume from "../assets/Manikandan.pdf"

export const Home = () => {
    
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".title", {opacity:0,y:"-200px"}, {opacity:1,y:0,ease:"power1.in",duration:0.9})
      gsap.fromTo(".name", {opacity:0,x:"-200px"}, {opacity:1,x:0,ease:"power1.in",duration:0.9,delay:1})
      gsap.fromTo(".passion", {opacity:0,y:"100px"}, {opacity:1,y:0,ease:"power1.in",duration:0.9,delay:1})
      gsap.fromTo(".logo", {opacity:0,y:"-40px"}, {opacity:1,y:0,ease:"bounce.in",duration:0.9,stagger:0.5,delay:1})
      gsap.fromTo(".aboutme", {opacity:0,y:"100px"}, {opacity:1,y:0,ease:"power.in",duration:0.9,delay:4})
      gsap.fromTo(
        ".profile-img",
        { opacity: 0, scale: 0.5, y: -100 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease:"expo", delay: 1.5 }
      );
      
    });
  
    return () => ctx.revert(); 
  }, []);
  
  return (
    <>
    <div id='home' className="w-screen max-[600px]:mt-[50px] min-h-screen bg-[#081b29] flex justify-around items-center max-[600px]:flex-col-reverse max-[600px]:justify-evenly">
        <div className="text-white text-left">
<h3 className='md:text-3xl text-xl font-bold title'>Hello, It's Me</h3>
<h1 className='md:text-6xl text-4xl font-bold name'>ManiKandan </h1>
<h3 className='md:text-3xl text-xl font-bold passion'>And I'm a  <span><TypingText /></span> </h3>
<div className="flex gap-4 mt-8">
      <a
        href="https://wa.me/6382223981"
        target="_blank"
        rel="noopener noreferrer"
        className="logo w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-2xl text-cyan-400 hover:bg-cyan-400 hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition duration-500"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a
        href="https://instagram.com/solitariness_king"
        target="_blank"
        rel="noopener noreferrer"
        className="logo w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-2xl text-cyan-400 hover:bg-cyan-400 hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition duration-500"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://linkedin.com/in/mani-kandan-p-516bbb287/"
        target="_blank"
        rel="noopener noreferrer"
        className="logo w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-2xl text-cyan-400 hover:bg-cyan-400 hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition duration-500"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/iammanikandanp"
        target="_blank"
        rel="noopener noreferrer"
        className="logo w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-2xl text-cyan-400 hover:bg-cyan-400 hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition duration-500"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
   href="mailto:iammanikandanp@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="logo w-10 h-10 flex items-center justify-center border-2 border-cyan-400 rounded-full text-2xl text-cyan-400 hover:bg-cyan-400 hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] transition duration-500"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
     

    </div>
    <div className="mt-[50px]">
    <div className="flex gap-4 mt-6">
  
  <a
    href={resume}
    download
    className="aboutme inline-block px-5 py-3 font-bold bg-cyan-400 rounded-full text-[16px] text-[#081b29] tracking-wider no-underline shadow-[0_0_5px_#0ef,0_0_25px_#0ef] hover:shadow-[0_0_50px_cyan,0_0_100px_cyan] transition"
  >
    Resume
  </a>

  
  <a
    href={resume} 
    target="_blank"
    rel="noopener noreferrer"
    className="aboutme inline-block px-5 py-3 font-bold border border-cyan-400 rounded-full text-[16px] text-cyan-400 tracking-wider no-underline hover:bg-cyan-400 hover:text-[#081b29] transition"
  >
    Preview
  </a>
</div>

    </div>

        </div>
        <div className="">
<img src={logo} alt="my profile"  className='profile-img shadow-lg w-72 h-72 max-[600px]:w-52 max-[600px]:h-52  rounded-full object-cover drop-shadow-[0_5px_15px_rgba(0,255,255,2)]'/>
        </div>
    </div>
    </>
  )
}
