import React from 'react'
import profile from "../assets/replacewithimgofme.jpg"
import downarrow from "../assets/downarrow.png"

function AboutMeLink() {
  return (
    <section className='mx-8'>
        <img className='mb-6' src={profile} alt='TeodorJenkler'/>
        <h1 className='font-display mb-8'>Hey, I’m Ted Jenkler and I love building beautiful websites</h1>
        <button className='flex items-center w-48 h-12 bg-dark-blue mb-24 text-white'>
            <img className='h-12' src={downarrow} alt='downarrows' />
            ABOUT ME
        </button>
    </section>
  )
}

export default AboutMeLink