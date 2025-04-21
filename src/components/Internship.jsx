import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mern from "../assets/img/mernintern.jpeg"
import nest from "../assets/img/nest.jpg"
import tech from "../assets/img/tech.jpg"
import frontend from "../assets/img/frontend.jpg"

const internships = [
  {
    img:mern,
    company: 'San TECHNOVATION',
    role: 'MERN Stack Developer Intern',
    days: '15 Days',
    description: 'Built full-stack applications using MongoDB, Express.js, React.js, and Node.js. Gained experience in REST APIs, database management, and deployment.'
  },
  {
    img:tech,
    company: 'Tech Volt Company',
    role: 'Web Developer Intern',
    days: '15 days',
    description: 'Worked on web development using Python CGI, MySQL. Developed a student mark list project with admin, faculty, and student roles.'
  },
  {
    img:frontend,
    company: 'San TECHNOVATION',
    role: 'Frontend Developer Intern',
    days: '15 days',
    description: 'Focused on HTML, CSS, JavaScript, Bootstrap. Designed responsive web pages and improved UI/UX.'
  },
  {
    img:nest,
    company: 'Nest Digital Pvt Ltd',
    role: 'Cyber Security Intern',
    days: '15 days',
    description: 'Learned about cyber security, types of attacks, prevention methods, and tools like Pursuit.'
  }
];

export const Internship = () => {
  return (
    <>
      <section id="internship" className="w-full min-h-screen bg-[#081b29] text-white px-4 py-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">My <span className="text-[#0ef]">Internships</span></h2>
        <div className="w-full max-w-screen-xl "> 
          <Carousel 
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            emulateTouch={true}
            
          >
           {internships.map((intern, index) => (
  <div key={index} className="flex flex-col md:flex-row items-center bg-[#0f2a3f] rounded-2xl shadow-lg p-6 w-full">
    <img 
      src={intern.img} 
      alt={intern.company} 
      className="w-[300px] h-[300px]  rounded-xl object-cover" 
    />
    <div className="md:ml-6 mt-4 md:mt-0 w-full text-center md:text-left">
      <h3 className="text-2xl font-semibold text-[#0ef]">{intern.company}</h3>
      <p className="text-lg mt-1">{intern.role}</p>
      <p className="text-sm text-gray-300 mt-1">{intern.days}</p>
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
