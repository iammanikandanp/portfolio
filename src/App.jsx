import { About } from "./components/About.jsx"
import { Certificates } from "./components/Certificates.jsx"
import { ContactUs } from "./components/ContactUs.jsx"
import { Home } from "./components/Home.jsx"
import { Internship } from "./components/Internship.jsx"
import { Nav } from "./components/Nav.jsx"

import Project from "./components/Projects.jsx"
import { Servives } from "./components/Servives.jsx"
import { Skill } from "./components/Skill.jsx"



function App() {
  
  return (
    <>
     <Nav/>
     <main className=''> 
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="Service">
          <Servives/>
        </section>
        <section id="skill">
          <Skill/>
        </section>
        <section id="internship">
          <Internship/>
        </section>
        <section id="projects">
          <Project/>
        </section>
        <section id="certificates">
          <Certificates/>
        </section>
        <section id="contact">
          <ContactUs/>
        </section>
        </main>
    </>
  )
}

export default App
