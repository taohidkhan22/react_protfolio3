
import React from 'react';
import taohidpicture from '../assets/images/image2 new.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about" id="aboutme">
            <div className="a">
                <h2 className="horizontal"><span>About Me</span></h2>
            </div>
            <div className="container">
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent sit amet vestibulum felis.
                        Vivamus facilisis ligula id fringilla gravida.
                        Suspendisse ultricies sollicitudin lacus,
                        et rutrum nunc bibendum sed.
                    </p>
                    <p>
                        Donec tincidunt tellus sed libero ultricies, eu semper enim molestie.
                        Etiam lorem quam, tincidunt nec malesuada eu, interdum nec leo.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Morbi placerat tortor sed felis tristique.

                    </p>
                    <p>
                        Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis. Cras egestas magna sed nisl
                        pellentesque, sed lobortis felis convallis.
                        Phasellus eget ex at est lobortis iaculis eget non risus. Etiam ultricies at est sit amet
                        condimentum.
                    </p>
                    <Link to="/contact" className="nav_link">
                        <button>Contact Me</button>
                    </Link>
                </div>
                <div className="photo">
                    <img src={taohidpicture} height="160" width="" />
                </div>
            </div>
        </div>
    );
};

export default About;
