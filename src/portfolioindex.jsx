import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ECommerce from './portfolio-projects/ECommerce'
import HuddleTailwind from './portfolio-projects/HuddleTailwind'
import MultiPageSite from './portfolio-projects/MultiPageSite'

function portfolioindex() {
  return (
    <div className='w-screen h-screen'>
        <Header />
        <ECommerce />
        <HuddleTailwind />
        <MultiPageSite />
        <Footer />
    </div>
  )
}

export default portfolioindex