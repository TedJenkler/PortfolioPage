import React from 'react'
import profile from "../assets/replacewithimgofme2.png"
import downarrow from "../assets/downarrow.png"

function AboutMeLink() {
  return (
    <section className='relative mx-8 md:mx-10 md:mb-24 lg:mx-40'>
        <img className='mb-6 w-full' src={profile} alt='TeodorJenkler'/>
        <div className='md:absolute md:bottom-0 md:bg-white md:w-3/4 md:pt-14'>
          <h1 className='font-display mb-8 md:mb-10'>Hey, I’m Ted Jenkler and I love building beautiful websites</h1>
          <a href="#aboutme" className='flex items-center w-48 h-12 bg-dark-blue mb-24 text-white md:mb-0 hover:bg-cyan'>
              <img className='h-12' src={downarrow} alt='downarrows' />
              ABOUT ME
          </a>
        </div>
    </section>
  )
}

export default AboutMeLink