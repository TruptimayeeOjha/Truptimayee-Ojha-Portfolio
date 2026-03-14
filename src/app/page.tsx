import About from './_sections/about'
import Projects from './_sections/projects'
import Contact from './_sections/contact'
import Education from './_sections/education'
import Experience from './_sections/experience'
import Landing from './_sections/landing'
import Skills from './_sections/skills'

const Home = () => {
    return (
        <>
            <Landing />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Home
