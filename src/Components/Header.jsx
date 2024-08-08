import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl p-3 mx-auto'>
        <NavLink to='/'>
          <h1 className='font-bold text-sm md:text-xl flex-flex-wrap'>
            <span className='text-slate-500'>HomeLand</span>
            <span className='text-slate-700'>Nepal</span>
          </h1>
        </NavLink>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
          <input className='bg-slate-100 focus:outline-none w-24 sm:w-64 '
            type="text" placeholder='Search...' />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4 font-semibold'>
          <NavLink to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </NavLink>

          <NavLink to='/About'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </NavLink>

          <NavLink to='/SignIn'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
          </NavLink>
        </ul>
      </div>


    </header>
  )
}

export default Header
