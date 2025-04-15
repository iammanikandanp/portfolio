import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaNodeJs,FaGitAlt, FaGithub  } from 'react-icons/fa';
import gsap from 'gsap';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
import useInView from '../hooks/useInView.js'; 


export const Skill = () => {
  const barRefs = useRef([]);
  const circleRefs = useRef([]);
  const percentRefs = useRef([]);
  const containerRef = useRef(null);
  const [ref, isInView] = useInView({ threshold: 0.4 });

useEffect(() => {
    if (isInView) {
      barRefs.current.forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: bar.dataset.width,
            duration: 1.5,
            ease: 'power3.out',
            delay: i * 0.2,
          }
        );
      });
  
      circleRefs.current.forEach((circle, i) => {
        const totalLength = 502;
        const percent = parseInt(circle.dataset.percent);
        const offset = totalLength - (percent / 100) * totalLength;
  
        gsap.fromTo(
          circle,
          { strokeDashoffset: totalLength },
          {
            strokeDashoffset: offset,
            duration: 2,
            ease: 'power3.out',
            delay: i * 0.3,
          }
        );
  
        // Animate number count
        gsap.fromTo(
          percentRefs.current[i],
          { innerText: 0 },
          {
            innerText: percent,
            duration: 2,
            delay: i * 0.3,
            snap: { innerText: 1 },
            onUpdate: function () {
              percentRefs.current[i].textContent = Math.round(this.targets()[0].innerText) + '%';
            },
          }
        );
      });
    }
  }, [isInView]);
  

  const technicalSkills = [
    { Icon: FaHtml5, color: '#c95d2e', name: 'HTML', width: '90%' },
    { Icon: FaCss3Alt, color: '#147bbc', name: 'CSS', width: '85%' },
    { Icon: FaJs, color: '#b0bc1e', name: 'JAVA SCRIPT', width: '80%' },
    { Icon: FaReact, color: '#69bcbc', name: 'REACT JS', width: '75%' },
    { Icon: FaBootstrap, color: '#903dbb', name: 'BOOTSTRAP', width: '85%' },
    { Icon: FaNodeJs, color: '#3da046', name: 'NODE JS', width: '80%' },
    { Icon: SiExpress, color: '#3da046', name: 'EXPRESS JS', width: '85%' },
    { Icon: SiMongodb, color: '#3da046', name: 'MONGODB', width: '80%' },
    { Icon: SiTailwindcss, color: '#3da046', name: 'TAILWIND', width: '80%' },
    { Icon: FaGitAlt,  color: '#3da046', name: 'GIT', width: '80%' },
    { Icon: FaGithub, color: '#3da046', name: 'GITHUB', width: '80%' },
    { Icon: FaPython, color: '#c32ec9', name: 'PYTHON', width: '70%' },
  ];
  const professionalSkills = [
    { percent: 90, text: 'Creativity' },
    { percent: 82, text: 'Communication' },
    { percent: 80, text: 'Problem Solving' },
    { percent: 90, text: 'Team Work' },
  ];

  return (
    <>
      <h1 className=" text-center bg-[#081b29] mb-0 pb-0 text-5xl font-bold ">
            <span className="text-white"> My</span>
            <span className="text-[#0ef]"> Skills</span>
          </h1>
    <section  className="w-screen min-h-screen bg-[#081b29] flex justify-around items-center max-[600px]:flex-col-reverse max-[600px]:justify-evenly ">
    <div ref={ref} className="w-full max-w-[600px] p-5">
  <h1 className="text-center underline underline-offset-[10px] decoration-[5px] text-white text-3xl font-bold mb-12">
    Technical Skills
  </h1>
  <div className="space-y-6">
    {technicalSkills.map(({ Icon, color, name, width }, index) => (
      <div className="text-white text-[23px]" key={index}>
        <div className="flex items-center mb-2">
          <Icon style={{ color }} className="inline-block mr-3 text-xl" />
          <span className="text-[17px] font-medium">{name}</span>
        </div>
        <div className="bg-black h-[8px] rounded-md w-full overflow-hidden">
          <span
            ref={el => (barRefs.current[index] = el)}
            data-width={width}
            className="block h-full bg-[#0ef] rounded-md"
          ></span>
        </div>
      </div>
    ))}
  </div>
</div>


      <div className="w-full max-w-[500px] p-5">
        <h1 className="text-center underline underline-offset-[10px] decoration-[5px] text-white text-3xl font-bold mb-12">Professional Skills</h1>
        <div className="grid grid-cols-2 gap-6">
          {professionalSkills.map(({ percent, text }, i) => (
            <div key={i} className="text-white flex flex-col items-center">
              <svg className="w-[100px] h-[100px]" viewBox="0 0 200 200">
                <circle className="stroke-gray-700 fill-none" cx="100" cy="100" r="80" strokeWidth="10" />
                <circle
                  ref={el => (circleRefs.current[i] = el)}
                  data-percent={percent}
                  className="stroke-[#0ef] fill-none"
                  cx="100"
                  cy="100"
                  r="80"
                  strokeWidth="10"
                  strokeDasharray="502"
                  strokeDashoffset="502"
                  strokeLinecap="round"
                />
              </svg>
              <div
                ref={el => (percentRefs.current[i] = el)}
                className="text-xl font-semibold mt-2"
              >
                0%
              </div>
              <div className="text-base mt-1">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
