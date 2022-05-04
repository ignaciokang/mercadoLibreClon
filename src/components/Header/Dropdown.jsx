import { serviceDropdown } from "./NavItems"
import { Link } from 'react-router-dom'
import { useState } from "react"


const Dropdown = ({setDropdown}) => {


  return (
    <ul className="absolute bg-stone-700 text-white font-semibold w-64 space-y-4 py-8 z-40" onClick={() =>setDropdown(false)}>  
      {serviceDropdown.map(item => {
        return(
          <li key={item.id} className="hover:bg-CelesteML w-full pl-8 h-10 flex-col pt-2 ">
            <Link to={item.path}>
              {item.titulo}            
          </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown