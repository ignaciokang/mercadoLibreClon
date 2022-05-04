import React from 'react'
import { navItems } from './NavItems'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useState } from 'react'

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className='text-gray-600 font-thin h-full pt-2'>
            <ul className='flex space-x-6 w-full '>
                {navItems.map ((item) => {
                   if (item.titulo == 'Categorias') {

                     return(
                       <li key={item.id} className="" onMouseEnter={()=> {setDropdown(true)}} onMouseLeave={()=> {setDropdown(false)}}>
                        {item.titulo}
                        {dropdown && <Dropdown setDropdown={setDropdown}/>}
                    </li>
                    )
                  } else {
                    return(
                      <li key={item.id}>
                       {item.titulo}
                   </li>)
                  }
                })}
            </ul>
    </div>
  )
}

export default Navbar


// if (params.id == ListadoProductos[i].id) {
//   console.log(params.id)
//   console.log(ListadoProductos[i])
//   setProd(ListadoProductos[i])
// }

// <div className='text-gray-700 font-thin'>
// <ul className='flex space-x-4 w-full '>
//     {navItems.map ((item) => {
//        if (item.titulo == 'Categorias') {

//          return(
//            <li key={item.id} className="" onMouseEnter={()=> {setDropdown(true)}} onMouseLeave={()=> {setDropdown(false)}}>
//             {item.titulo}
//             {dropdown && <Dropdown setDropdown={setDropdown}/>}
//         </li>
//         )
//       } else {
//         return(
//           <li key={item.id} className="" onMouseEnter={()=> {setDropdown(true)}} onMouseLeave={()=> {setDropdown(false)}}>
//            {item.titulo}
//        </li>)
//       }
//     })}
// </ul>
// </div>