import React from 'react'
import profile from "../assets/replacewithimgofme2.jpg"

function AboutMe() {
  return (
    <section className='mx-8 mb-28 md:flex md:mx-10 md:mb-24 lg:mx-40'>
        <img className='mb-8 w-2/5' src={profile} alt='aboutme' />
        <div className='pt-8 pb-12 border-t border-b md:ml-16 md:py-12'>
            <h1 className='font-display mb-6 md:mb-7'>About Me</h1>
            <p className='font-p mb-6'>
                I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML,
                 using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required.
                  I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors.
                   I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
            </p>
            <button className='border py-4 px-8'>GO TO PORTFOLIO</button>
        </div>
    </section>
  )
}

export default AboutMe