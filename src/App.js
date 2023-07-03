import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
import './App.css';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
