import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero2 from './components/Hero2';
import Project from './components/Project';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />   
                <Hero2/>
                <Routes>
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
