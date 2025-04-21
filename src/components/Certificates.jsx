import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mern from "../assets/img/mern_stack.jpg"
import data from "../assets/img/datavisual.jpg"
import tcds from "../assets/img/TCDS.jpg"

const certificate = [
 {
          title: "The Complete Full-Stack Web Development Bootcamp", 
          company: "Udemy",
          duration: "61.5 Hrs",
          status:"Completed",
          img: mern,
          description: "Completed a full MERN Stack development course covering MongoDB, Express.js, React.js, and Node.js. Built multiple real-world projects."
       
 },
 {
          title: "Data Analysis & Visualization", 
          company: "San Technovation",
          duration: "One Month",
          status: "Completed",
          img: data,
          description: "Completed Data Analysis & Visualization using  Excel, MySQL, PowerBI and Tableau. "
       
 },
 {
          title: "Microsoft Office & C,C++(basics)", 
          company: "TCDS Computer Education",
          duration: "Six Months",
          status: "Completed",
          img:tcds ,
          description: "Completed  Fundamental, Windows, Internet, MS Paint, Ms Excel, Ms Powerpoint, MS Word, C,C++(basics)."
       
 }
];

export const Certificates = () => {
  return (
    <>
      <section id="certificates" className="w-full min-h-screen bg-[#081b29] text-white px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My <span className="text-[#0ef]">Certificates</span></h2>
        <div className="w-full max-w-screen-xl"> 
          <Carousel 
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            emulateTouch={true}
           
          >
            {certificate.map((intern, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center bg-[#0f2a3f] rounded-2xl shadow-lg p-6 w-full">
                <img src={intern.img} alt={intern.company} className="w-[300px] h-[300px]  rounded-xl object-cover" />
                <div className="md:ml-6 mt-4 md:mt-0 w-full">
                  <h3 className="text-2xl font-semibold text-[#0ef]">{intern.title}</h3>
                  <p className="text-lg mt-1">{intern.company}</p>
                  <p className="text-sm text-gray-300 mt-1">{intern.duration}</p>
                  <p className="text-sm text-cyan-300 mt-1">{intern.status}</p>
                  <p className="mt-2 text-gray-200">{intern.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

