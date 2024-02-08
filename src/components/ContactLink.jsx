import React from 'react'
import { Link } from 'react-router-dom'

function ContactLink() {
  return (
    <section className='px-8 mb-20 text-center md:flex md:px-10 md:text-start md:items-center md:mb-24 md:gap-8 lg:mx-40' >
        <h1 className='font-display mb-10'>Interested in doing a project together?</h1>
        <div className='border-t w-3/4'></div>
        <Link to="/contacts/1" className='border py-4 px-8 whitespace-nowrap hover:bg-grey-dark-blue hover:text-white'>CONTACT ME</Link>
    </section>
  )
}

export default ContactLink