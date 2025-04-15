import React, { useEffect } from 'react'
import gsap from 'gsap'
import logo from "../assets/img/mani.jpg"
import useInView from '../hooks/useInView';



export const About = () => {

    const [ref, isVisible] = useInView({ threshold: 0.4 });

    useEffect(() => {
        if (isVisible) {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    ".profile-img",
                    { opacity: 0, scale: 0.5, y: -100 },
                    { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo", delay: 0.3 }
                );
                gsap.fromTo(".about", { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 1, ease: "power2" });
                gsap.fromTo(".aboutpara", { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1, ease: "power2", delay: 0.3 });
            });

            return () => ctx.revert();
        }
    }, [isVisible]);
    return (
        <>

<div
  ref={ref}
  id='about'
  className="w-screen min-h-screen bg-[#081b29] flex justify-around gap-5 items-center max-[600px]:flex-col max-[600px]:justify-evenly max-[600px]:p-[40px]"
>

                <div className="">
                    <img src={logo} alt="my profile" className='profile-img shadow-lg w-72 h-72 max-[600px]:w-52 max-[600px]:h-52  rounded-full object-cover drop-shadow-[0_5px_15px_rgba(0,255,255,2)] max-w-full' />
                </div>
                <div className="w-[450px] max-[600px]:w-[200px]">
                    <h1 className='text-cyan-400 text-3xl font-bold shadow-cyan-400 about'> “About Me”</h1>
                    <p className=' text-white indent-8 text-justify aboutpara'>
                    
     I am Manikandan P, a dedicated and results-driven MCA graduate with a robust foundation in full-stack web development. I specialize in designing and developing dynamic, user-centric web applications using cutting-edge technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
<br></br>
&emsp;&emsp;Through a series of internships and personal projects, I have successfully developed practical solutions such as the Student Mark List System, Book Inventory Application, and a Weather Application. These projects highlight my ability to seamlessly integrate frontend and backend technologies, ensuring scalability and performance.
<br></br>

&emsp;&emsp;I am deeply passionate about continuously learning emerging technologies, solving complex problems, and delivering high-quality applications. Currently, I am actively seeking challenging opportunities in the IT sector, where I can leverage my skills, contribute meaningfully, and grow professionally in a collaborative and innovative environment.


                    </p>
                </div>
            </div>
        </>
    )
}
