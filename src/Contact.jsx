import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import github from "../src/assets/githubicondark.png"
import linkdin from "../src/assets/linkdinicondark.png"
import ContactForm from './components/ContactForm'

function Contact() {
  return (
    <div className='w-screen h-full'>
        <div className='border-t border-b pt-6 pb-8 mx-8 mb-8 md:mx-10'>
        <h1 className='font-display mb-6'>Get in Touch</h1>
        <p className='font-p mb-6'>
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. 
            But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
        </p>
        <div className='flex gap-4'>
            <img src={github} alt='githublink' />
            <img src={linkdin} alt='linkdinlink' />
        </div>
        </div>
        <ContactForm />
    </div>
  )
}

export default Contact