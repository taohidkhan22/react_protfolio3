import React from 'react';
import Header from './components/Header';


import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
