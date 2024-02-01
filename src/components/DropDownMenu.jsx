import React from 'react'
import { Link } from "react-router-dom"

function DropDownMenu( {setToggleMenu} ) {
  return (
    <div className='absolute bg-grey-dark-blue text-white font-p flex py-10 px-16 top-20 right-8'>
        <ul className='flex flex-col items-center gap-8'>
            <Link onClick={() => {setToggleMenu(false)}} to={`/`}>HOME</Link>
            <Link onClick={() => {setToggleMenu(false)}} to={`/portfolio`}>PORTFOLIO</Link>
            <Link onClick={() => {setToggleMenu(false)}} to={`/contacts/1`}>CONTACT ME</Link>
        </ul>
    </div>
  )
}

export default DropDownMenu