import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Servives = () => {
  const serviceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      serviceRef.current.querySelectorAll('.service-box'),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
       
      }
    );
  }, []);

  const services = [
    { icon: 'fas fa-code', title: 'Frontend Development' ,discription:'I design visually appealing and fully responsive user interfaces using modern frontend technologies like HTML, CSS, JavaScript, and React.js. My focus is on creating smooth user experiences, mobile compatibility, and pixel-perfect layouts that match the latest web standards.'},
    { icon: 'fas fa-paint-brush', title: 'Backend Integration',discription:'I build powerful and secure backend systems using Node.js, Express.js, and Python. My backend development ensures fast API responses, proper error handling, and seamless connection with databases to manage dynamic content and user data efficiently.' },
    { icon: 'fas fa-database', title: 'DataBase',discription:'I manage and structure databases using MySQL and MongoDB to store, retrieve, and manipulate data effectively. With a strong understanding of schema design and data relationships, I ensure both performance and scalability for all applications.'  },
  ];

  return (
    <section>
      <div
        id='Service'
        className="w-screen min-h-screen bg-[#081b29] text-white flex justify-center items-center p-8"
        ref={serviceRef}
      >
        <div className="container max-w-6xl mx-auto">
          <h1 className="sub-title text-center text-5xl font-bold mb-10">
            My <span className="text-[#0ef]">Services</span>
          </h1>
          <div className="services-list grid grid-cols-[repeat(auto-fit,minmax(259px,1fr))] gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-box bg-transparent p-10 rounded-[20px] shadow-[1px_1px_20px_#012290f7,1px_1px_40px_#0053b8f7] transition-transform duration-500 hover:-translate-y-2"
              >
                <i className={`${service.icon} text-[50px] text-[#0ef] mb-6`}></i>
                <h2 className="text-[30px] font-medium mb-4">{service.title}</h2>
                <p className="text-[16px] leading-relaxed mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat quis repellendus hic perspiciatis neque atque adipisci ducimus?
                </p>
                <a
                  href="#"
                  className="read bg-[#0ef] text-[#081b29] font-semibold py-3 px-7 inline-block shadow-[0_0_5px_#0ef,0_0_25px_#0ef] hover:shadow-[0_0_20px_#0ef,0_0_50px_#0ef,0_0_100px_#0ef] duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
