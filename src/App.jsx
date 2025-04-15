import { About } from "./components/About"
import { ContactUs } from "./components/ContactUs"
import { Home } from "./components/Home"
import { Navbar } from "./components/navbar"
import Project from "./components/Projects"
import { Servives } from "./components/Servives"
import { Skill } from "./components/Skill"



function App() {
  
  return (
    <>
     < Navbar/>
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
        <section id="projects">
          <Project/>
        </section>
        <section id="contact">
          <ContactUs/>
        </section>
        </main>
    </>
  )
}

export default App
