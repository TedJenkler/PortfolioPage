import React from 'react'
import screenshot from "../assets/ecommercescreen.png"
import preview1 from "../assets/e-commerce-siteinner.png"
import preview2 from "../assets/e-commerce-sitecheckout.png"
import arrowleft from "../assets/arrowleft.png"
import arrowright from "../assets/arrowright.png"
import ContactLink from '../components/ContactLink'
import { Link } from 'react-router-dom'

function ECommerceinner() {
  return (
    <div className='w-screen h-full'>
        <div className='mx-8 md:mx-10'>
            <img className='mb-10' src={screenshot} alt='screenshot' />
        </div>
        <div className='mx-8 py-6 border-t border-b mb-12 md:flex md:items-center md:justify-between'>
            <div className='md:w-1/2'>
                <h1 className='font-display mb-6'>E-Commerce</h1>
                <p className='font-p mb-6'>This project required me to build a fully responsive E-commerce page to the designs provided. I used HTML5, along with Tailwind and React for the areas that required interactivity.</p>
            </div>
            <div className='md:flex md:flex-col'>
                <p className='font-p text-cyan'>E-commerce / Front End Development</p>
                <p className='font-p text-cyan mb-6'>HTML / TAILWIND / REACT</p>
                <a href='https://tedjenkler.github.io/ecommerce-react-tailwind/' className='border py-4 px-8'>VISIT WEBSITE</a>
            </div>
        </div>
        <div className='mx-8'>
            <h2 className='font-display mb-7'>Project Background</h2>
            <p className='font-p mb-10'>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
            <h2 className='font-display mb-10'>Static Previews</h2>
            <img className='mb-8' src={preview1} alt='preview1' />
            <img className='mb-16' src={preview2} alt='preview2' />
            <div className='flex mb-16'>
                <Link to="/portfolio/multipagesite" className='flex flex-col w-1/2 py-6 border-t border-r border-b md:flex-row md:items-center md:gap-6'>
                    <div className=''>
                        <img className='mb-4 h-4 w-2' src={arrowleft} alt='arrowleft' />
                    </div>
                    <div className='md:flex md:flex-col'>
                        <h3 className='font-display'>Multi Page Site</h3>
                        <p>Previous Project</p>
                    </div>
                </Link>
                <Link to="/portfolio/huddletailwind" className='flex flex-col items-end w-1/2 py-6 border-t border-b md:flex-row-reverse md:items-center md:gap-6'>
                    <div className=''>
                        <img className='mb-4 h-4 w-2' src={arrowright} alt='arrowleft' />
                    </div>
                    <div className='md:flex md:flex-col'>
                        <h3 className='font-display'>Huddle Tailwind</h3>
                        <p>Next Project</p>
                    </div>
                </Link>
            </div>
        </div>
        <ContactLink />
    </div>
  )
}

export default ECommerceinner