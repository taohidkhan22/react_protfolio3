import React from 'react';

const Footer = () => {
    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 Rupkotha. All rights reserved.</p>
            </div>
            <button id="scrollToTopBtn" onClick={scrollToTop} title="Go to top" style={{ display: 'none' }}>Top</button>
        </footer>
    );
};

export default Footer;



