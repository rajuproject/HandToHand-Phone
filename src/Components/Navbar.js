import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import PrimaryButton from '../Components/Button/PrimaryButton'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)




  return (
    <header className='text-gray-900 body-font shadow-sm'>
      <div className=' mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-transparent bg-clip-text bg-indigo-500 from-emerald-500 to-lime-500 mb-4 md:mb-0'
        >
          <span className='ml-3 text-2xl font-bold '>HandToHand-Phone</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>

          {/* <Link to='/dashboard' className='flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>Dashboard</Link> */}
          {user?.email ? (
            <>
              <div className='relative flex inline-block '>
              <Link to='/dashboard' className='flex mr-10 items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>Dashboard</Link>
              <Link to='/dashboard'  onClick={logout} className='flex mr-48 items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 '>Log out</Link>
                    </div> 
            </>
          ) : (
            <>
              <Link to='/login' className='mr-5 hover:text-green-600'>
                Login
              </Link>
              <Link to='/signup' className='mr-5'>
                <PrimaryButton classes='rounded-full px-2 py-1'>
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
