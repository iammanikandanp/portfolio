import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText = () => {
  const el = useRef(null); 
  const typedInstance = useRef(null); 

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "MERN Stack Developer",
        "Backend Developer"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true
    };

    typedInstance.current = new Typed(el.current, options);

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <span
      id="typed-output"
      ref={el}
      className="text-cyan-400 font-bold md:text-4xl text-2xl"
    ></span>
  );
};

export default TypingText;
