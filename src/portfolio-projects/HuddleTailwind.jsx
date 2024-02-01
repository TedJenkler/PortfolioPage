import React from 'react'
import huddle from "../assets/huddle-alternative.webp"

function HuddleTailwind() {
  return (
    <div className='mx-8 mb-16'>
        <img className='mb-8' src={huddle} alt='huddle tailwind' />
        <div className='py-6 border-t border-b'>
            <h1 className='font-display mb-6'>Huddle Tailwind</h1>
            <p className='font-p mb-6'>This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with Tailwind.</p>
            <button className='border py-4 px-8'>VIEW PROJECT</button>
        </div>
    </div>
  )
}

export default HuddleTailwind