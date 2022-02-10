import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Layout from './components/Layout';
import Project from './components/Project';

function App() {
    return (
        <>
            <Layout>
                <Banner />
                <About />
                <Project />
                <Blog />
            </Layout>
        </>
    );
}

export default App;
