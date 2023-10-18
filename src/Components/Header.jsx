import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Nikhil</span>
                <span className='text-slate-800'>Estate</span>
            </h1>
          </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' className='bg-transparent focus:outline-none nw-24 sm:w-64' placeholder='Search.......'  />
                <FaSearch className='text-slate-700' />
            </form>
            <ul className='flex gap-6'>
              <Link to='/'>
              <li className='hidden sm:inline text-slate-700 hover:underline hover:translate-y-2'>Home</li>
              </Link>
              <Link to='/about'>
              <li className='hidden sm:inline text-slate-700 hover:underline hover:translate-y-2'>About</li>
              </Link>
              <Link to='/sign-in'>
              <li className=' text-slate-700 hover:underline hover:translate-y-2 '>Sign In</li>
              </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header