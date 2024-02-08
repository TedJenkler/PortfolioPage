import React from 'react'

function ContactForm() {
  return (
    <form className='flex flex-col mx-8 mb-20 lg:mx-40'>
        <h1 className='font-display mb-6'>Contact Me</h1>
        <label className='font-bold font-p mb-2'>Name</label>
        <input className='bg-light-grey mb-6 h-12 px-4' placeholder='Jane Appleseed'></input>
        <label className='font-bold font-p mb-2'>Email Address</label>
        <input className='bg-light-grey mb-6 h-12 px-4' placeholder='email@example.com'></input>
        <label className='font-bold font-p mb-2'>Message</label>
        <textarea className='bg-light-grey mb-6 h-24 px-4 pt-2' placeholder='How can I help?'></textarea>
        <button className='bg-dark-blue text-white py-4 px-8 md:w-1/3'>SEND MESSAGE</button>
    </form>
  )
}

export default ContactForm