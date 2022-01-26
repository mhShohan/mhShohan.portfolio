import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Layout from './components/Layout';

function App() {
    return (
        <>
            <Layout>
                <Banner />
                <About />
            </Layout>
        </>
    );
}

export default App;
