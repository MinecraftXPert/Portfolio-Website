import Header from "./Header"
import Hero from "./Hero"
import Skills from "./SkillsPage"
import Projects from "./Projects";
import About from "./About";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    )
}