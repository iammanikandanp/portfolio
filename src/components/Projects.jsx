import React from 'react';

const projects = [
    {
          title: 'Hostel Management System',
            description:
              'A web-based system for efficient hostel administration that manages student registration, fee tracking, outpass requests, and room allocation with secure role-based access using the MERN stack.',
            tech: [
              'React.js', 
              'Tailwind CSS', 
              'GSAP', 
              'Node.js', 
              'Express.js', 
              'MongoDB', 
              'JWT', 
              'Bcrypt.js'
            ],
            link: 'https://hostel-management-frontenddist.onrender.com/'
          
          
      },
  {
    title: 'Student Mark List',
    description:
      'Web app to manage student marks, roles: admin, faculty, student. Built with HTML, CSS, JS, Python CGI, MySQL.',
    tech: ['HTML', 'CSS', 'JS', 'PythonCGI', 'MySQL'],
    link: 'https://github.com/iammanikandanp/recentstdmark',
  },
  {
    title: 'Weather App',
    description:
      'Real-time weather app using React and OpenWeather API with location-based search.',
    tech: ['React', 'API', 'Tailwind'],
    link: 'https://weather-xi-rust.vercel.app/',
  },
  {
    title: 'Book Inventory (MERN)',
    description:
      'Inventory management system using Node.js, Express, MongoDB, and EJS, hosted on AWS.',
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    link: 'https://book-inventories.onrender.com/',
  },
  {
    title: 'Booksy',
    description: 'A simple and intuitive calculator designed to compute BMI based on weight and height, featuring a clean and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://iammanikandanp.github.io/Booky/'
  },{
    title: 'Netflix Clone',
    description: 'A front-end clone of the Netflix homepage featuring a responsive layout, modern design, and smooth hover effects. Built to mimic the look and feel of the original using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://iammanikandanp.github.io/netflix/'
  }
  
  
];

const Project = () => {
  return (
    <section className="w-full min-h-screen bg-[#081b29] text-white px-4 py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold  mb-10">My <span className='text-[#0ef]'>Projects</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0c2435] p-6 rounded-2xl shadow-lg border border-[#0ef]/30 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-[#0ef]">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#0ef]/10 text-[#0ef] text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-[#081b29] bg-[#0ef] px-4 py-2 rounded hover:bg-cyan-400 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
