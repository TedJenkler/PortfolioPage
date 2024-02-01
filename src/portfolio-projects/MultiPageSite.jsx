import React from 'react'
import designo from "../assets/designo.webp"

function MultiPageSite() {
  return (
    <div className='mx-8 mb-16'>
        <img className='mb-8' src={designo} alt='Multi Page Website' />
        <div className='py-6 border-t border-b'>
            <h1 className='font-display mb-6'>Multi Page Website</h1>
            <p className='font-p mb-6'>(Getting Rebuilded in Tailwind)</p>
            <p className='font-p mb-6'>This project required me to build a fully responsive website to the designs provided. I used HTML5, along with Tailwind.</p>
            <button className='border py-4 px-8'>VIEW PROJECT</button>
        </div>
    </div>
  )
}

export default MultiPageSite