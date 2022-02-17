import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Layout from './components/Layout';
import PersonalInterest from './components/PersonalInterest';
import Project from './components/Project';
import Footer from './Footer';

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <About />
        <Project />
        <Blog />
        <PersonalInterest />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
