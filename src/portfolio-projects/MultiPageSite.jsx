import React from 'react'
import designo from "../assets/designo.webp"
import { Link } from 'react-router-dom'

function MultiPageSite() {
  return (
    <div className='mx-8 mb-16 md:flex md:mx-10 md:items-center'>
        <img className='mb-8 md:w-1/2 md:mr-16' src={designo} alt='Multi Page Website' />
        <div className='py-6 border-t border-b md:pb-12'>
            <h1 className='font-display mb-6'>Multi Page Website</h1>
            <p className='font-p mb-6'>(Getting Rebuilded in Tailwind)</p>
            <p className='font-p mb-6'>This project required me to build a fully responsive website to the designs provided. I used HTML5, along with Tailwind.</p>
            <Link to="/portfolio/multipagesite" className='border py-4 px-8'>VIEW PROJECT</Link>
        </div>
    </div>
  )
}

export default MultiPageSite