import React from 'react'
import logo from "../assets/text-1706626276251.png"
import burger from "../assets/burgermenu.png"
import { useState } from 'react'
import DropDownMenu from './DropDownMenu'
import { Link } from 'react-router-dom'

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    console.log(toggleMenu)
  return (
    <>
    <nav className='relative h-8 mt-8 mx-8 flex justify-between mb-10 md:mx-10 md:mt-16 md:mb-14 lg:mx-40'>
        <Link to="/"><img className='h-full' src={logo} alt='logo' /></Link>
        <img onClick={() => {setToggleMenu(!toggleMenu)}} className='h-3 md:hidden' src={burger} alt='mobilemenu' />
        <ul className='hidden md:flex gap-10 font-p'>
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/contacts/1">CONTACT ME</Link>
        </ul>
    </nav>
    {toggleMenu === true ? <DropDownMenu setToggleMenu={setToggleMenu} /> : null}
    </>
  )
}

export default Header