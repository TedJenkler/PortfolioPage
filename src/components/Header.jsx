import React from 'react'
import logo from "../assets/text-1706626276251.png"
import burger from "../assets/burgermenu.png"
import { useState } from 'react'
import DropDownMenu from './DropDownMenu'
import { Link } from 'react-router-dom'

function Header() {
    const [toggleMenu, setToggleMenu] = useState("false")
    console.log(toggleMenu)
  return (
    <>
    <nav className='relative h-8 mt-8 mx-8 flex justify-between mb-10'>
        <Link to="/"><img className='h-full' src={logo} alt='logo' /></Link>
        <img onClick={() => {setToggleMenu(!toggleMenu)}} className='h-3' src={burger} alt='mobilemenu' />
    </nav>
    {toggleMenu === true ? <DropDownMenu setToggleMenu={setToggleMenu} /> : null}
    </>
  )
}

export default Header