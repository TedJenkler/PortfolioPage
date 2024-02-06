import React from 'react'
import ECommerce from './portfolio-projects/ECommerce'
import HuddleTailwind from './portfolio-projects/HuddleTailwind'
import MultiPageSite from './portfolio-projects/MultiPageSite'

function portfolioindex() {
  return (
    <div className='w-screen h-full'>
        <ECommerce />
        <HuddleTailwind />
        <MultiPageSite />
    </div>
  )
}

export default portfolioindex