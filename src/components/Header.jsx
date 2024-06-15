import React from 'react'
import { IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className=' w-full h-24 bg-red-100 px-4 py-2 shadow-md' >
      <div className=' max-w-[1240px] w-full h-full  mx-auto gap-2 flex items-center justify-between px-4 py-2 ' >
         <div className='w-full' >
            <h2 className=' font-bold text-xl text-black '><span className=' text-red-500 ' >KISMI</span>CODE </h2>
         </div>
         <div className=' w-full max-w-full bg-white px-2 py-2 ' >
            <form action="./" className='flex justify-between items-center ' >
                <input type="text" placeholder='search..' className='w-full outline-none' />
                <IoSearch size={20} className=' cursor-pointer ' />
            </form>
         </div>
            <ul  className=' w-full max-w-full cursor-pointer font-semibold flex justify-around ' >
                  <NavLink to={"/"} className={({isActive}) => isActive ? " border-b-2 " : "" } >
                        <li >Home</li>
                  </NavLink>
                  <NavLink to={"/about"} className={({isActive}) => isActive ? " border-b-2 " : "  " }  >
                        <li className=' md:block hidden ' >About</li>
                  </NavLink>
                  <NavLink to={"/sign-in"} className={({isActive}) => isActive ? " border-b-2 " : "  " } >
                        <li className=' md:block hidden' >SignIn</li>
                  </NavLink>
                
            </ul>
      </div>
    </div>
  )
}

export default Header
