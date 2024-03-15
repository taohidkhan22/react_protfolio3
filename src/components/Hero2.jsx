import React from 'react'
import heroarrow from '../assets/images/hero-arrow.png'
import "./Hero2.scss"
const Hero2 = () => {
  return (
    <>
    <div className="firstpage">
        <div className="hero">
          <h1>Hi, I’m Md. Arnob Islam (Taohid)</h1>
          <h4>I design and build things.</h4>
        </div>
        <div className="heroarro">
          <a href="#aboutme">
           
            <img src={heroarrow} alt="" />
          </a>
        </div>
      </div>
    
    </>
  )
}

export default Hero2