import React from 'react'

function ContactForm() {
  return (
    <form netlify onSubmit={(e) => {e.preventDefault()}} className='flex flex-col mx-8 mb-20 lg:mx-40'>
        <h1 className='font-display mb-6'>Contact Me</h1>
        <label className='font-bold font-p mb-2'>Name</label>
        <input className='bg-light-grey mb-6 h-12 px-4 invalid:text-error-red invalid:outline-error-red' placeholder='Jane Appleseed' required></input>
        <label className='font-bold font-p mb-2'>Email Address</label>
        <input type='email' className='bg-light-grey mb-6 h-12 px-4 invalid:text-error-red invalid:outline-error-red' placeholder='email@example.com required'></input>
        <label className='font-bold font-p mb-2'>Message</label>
        <textarea className='bg-light-grey mb-6 h-24 px-4 pt-2 invalid:text-error-red invalid:outline-error-red' placeholder='How can I help?' required></textarea>
        <button type='submit' className='bg-dark-blue text-white py-4 px-8 md:w-1/3'>SEND MESSAGE</button>
    </form>
  )
}

export default ContactForm