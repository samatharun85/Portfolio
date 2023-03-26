import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <a href='#home' className='nav-title'>Portfolio</a>
        <div className='nav-items'>
            <a href='#about'>About</a>|
            <a href="#projects">Projects</a>|
            <a href="#contact">Contact</a>
        </div>
    </div>
  )
}

export default Navbar