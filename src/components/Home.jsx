import React, { useEffect } from 'react'
import logo from "../assets/img/mani.jpg"
import {gsap} from "gsap"
import TypingText from './TypedText'


export const Home = () => {
    

  return (
    <>
    <div className="w-screen h-screen bg-[#081b29] flex justify-around items-center max-[600px]:flex-col-reverse max-[600px]:justify-evenly">
        <div className="text-white text-left">
<h3 className='md:text-3xl text-xl font-bold'>Hello, It's Me</h3>
<h1 className='md:text-6xl text-4xl font-bold'>ManiKandan </h1>
<h3 className='md:text-3xl text-xl font-bold'>And I'm a  <span><TypingText /></span> </h3>

        </div>
        <div className="">
<img src={logo} alt="my profile"  className='shadow-lg w-72 h-72 max-[600px]:w-52 max-[600px]:h-52  rounded-full object-cover drop-shadow-[0_5px_15px_rgba(0,255,255,2)]'/>
        </div>
    </div>
    </>
  )
}
