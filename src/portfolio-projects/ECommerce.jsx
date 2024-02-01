import React from 'react'
import ECommerceImg from "../assets/e-commerce-site.png"

function ECommerce() {
  return (
    <div className='mx-8 mb-16'>
        <img className='mb-8' src={ECommerceImg} alt='project Ecommerce' />
        <div className='py-6 border-t border-b'>
            <h1 className='font-display mb-6'>E-commerce</h1>
            <p className='font-p mb-6'>This project required me to build a fully responsive E-commerce page to the designs provided. I used HTML5, along with Tailwind and React for the areas that required interactivity.</p>
            <button className='border py-4 px-8'>VIEW PROJECT</button>
        </div>
    </div>
  )
}

export default ECommerce