import React from 'react'
import {link,outlet} from 'react-router-dom';
const layout = () => {
  return (
    <>
      <nav className='nav-bar'>
        <ul className='nav-list'>
            <li><link to='/about'>About</link></li>
            <li><link to='/experience'>Experience</link></li>
            <li><link to='/contact'>Contact</link></li>
            <li><link to='/Project'>Project</link></li>

        </ul>
      </nav>
      <outlet/>
    </>
  )
}

export default layout