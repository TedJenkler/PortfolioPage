import React from 'react'
import logo from "../assets/text-1706704224671.png"
import github from "../assets/githubicon.png"
import linkdin from "../assets/linkdinicon.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-grey-dark-blue py-14 flex flex-col items-center text-center md:flex-row md:px-10 md:justify-between md:h-20 lg:px-40'>
      <div className='md:flex md:items-center md:gap-12'>
        <img className='' src={logo} alt='logo' />
        <ul className='text-white flex flex-col gap-8 font-p mb-10 md:flex-row md:mb-0'>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="contacts/1">Contact Me</Link>
        </ul>
      </div>
        <div className='flex gap-4'>
            <a href='https://github.com/TedJenkler'><img src={github} alt='githublink' /></a>
            <a href='https://www.linkedin.com/in/tedjenklerwebdeveloper/'><img src={linkdin} alt='linkdinlink' /></a>
        </div>
    </footer>
  )
}

export default Footer