import Banner from '../components/Banner';
import About from '../components/About';
import Project from '../components/Project';
import Blog from '../components/Blog';
import PersonalInterest from '../components/PersonalInterest';
import Contact from '../components/Contact';
import SkillSection from '../components/SkillSection';

export default function Homepage() {
    return (
        <>
            <Banner />
            <About />
            <SkillSection />
            <Project />
            <Blog />
            <PersonalInterest />
            <Contact />
        </>
    );
}
