import React from 'react'
import logo from "../assets/text-1706626276251.png"
import burger from "../assets/burgermenu.png"

function Header() {
  return (
    <nav className='h-8 mt-8 mx-8 flex justify-between mb-10'>
        <img className='h-full' src={logo} alt='logo' />
        <img className='h-3' src={burger} alt='mobilemenu' />
    </nav>
  )
}

export default Header