import React from 'react'
import logo from "../assets/text-1706704224671.png"
import github from "../assets/githubicon.png"
import linkdin from "../assets/linkdinicon.png"

function Footer() {
  return (
    <footer className='bg-grey-dark-blue py-14 flex flex-col items-center text-center md:flex-row md:px-10 md:justify-between md:h-20'>
        <img className='' src={logo} alt='logo' />
        <ul className='text-white flex flex-col gap-8 font-p mb-10 md:flex-row md:mb-0'>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
        </ul>
        <div className='flex gap-4'>
            <img src={github} alt='githublink' />
            <img src={linkdin} alt='linkdinlink' />
        </div>
    </footer>
  )
}

export default Footer