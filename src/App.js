import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Layout from './components/Layout';
import Project from './components/Project';

function App() {
    return (
        <>
            <Layout>
                <Banner />
                <About />
                <Project />
            </Layout>
        </>
    );
}

export default App;
