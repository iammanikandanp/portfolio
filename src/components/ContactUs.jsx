import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useInView from '../hooks/useInView';
export const ContactUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
      const [ref, isVisible] = useInView({ threshold: 0.4 });

   useEffect(() => {
          if (isVisible) {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      descRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      inputRefs.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      formRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5 }
    );
}}, [isVisible]);

  return (
      <div  ref={ref}>
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[#081b29] text-white px-4 py-12 flex flex-col items-center"
    >
      <h1
        ref={titleRef}
        className="text-4xl font-bold mb-4 underline underline-offset-[10px] decoration-[5px] text-[#0ef]"
      >
        Contact <span className="text-white">Me</span>
      </h1>

      <p
        ref={descRef}
        className="mb-10 text-center max-w-xl text-gray-300"
      >
        Feel free to reach out for any questions, project collaborations, or just to say hi!
      </p>

      <form
        ref={formRef}
        className="w-full max-w-2xl bg-[#0a243e] p-8 rounded-xl shadow-lg space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="px-4 py-3 rounded-md bg-[#112e42] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0ef]"
            required
            ref={(el) => (inputRefs.current[0] = el)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md bg-[#112e42] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0ef]"
            required
            ref={(el) => (inputRefs.current[1] = el)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="px-4 py-3 rounded-md bg-[#112e42] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0ef]"
            required
            ref={(el) => (inputRefs.current[2] = el)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#0ef] text-[#081b29] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#00cfc8] transition"
          ref={(el) => (inputRefs.current[3] = el)}
        >
          Send Message
        </button>
      </form>
    </section>
    </div>
  );
};
