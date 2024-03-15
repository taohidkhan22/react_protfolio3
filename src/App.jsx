import React from 'react';
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
        <div>
            <Header />   
            <Hero2/>
            <Experience />
            <Project />
            <About />
            <Contact />
            <Footer />
            
        </div>


    );
};

export default App;