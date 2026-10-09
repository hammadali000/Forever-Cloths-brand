import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)

  const linkClass = 'group flex flex-col items-center gap-1 transition-colors duration-300 hover:text-black'

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-36 transition-transform duration-300 hover:scale-105' alt="" />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {[
          { to: '/', label: 'HOME' },
          { to: '/collection', label: 'COLLECTION' },
          { to: '/about', label: 'ABOUT' },
          { to: '/contact', label: 'CONTACT' },
        ].map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            <p>{link.label}</p>
            <hr className='w-0 group-hover:w-2/4 h-[1.5px] border-none bg-gray-700 transition-all duration-300' />
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt=""
          className='w-5 cursor-pointer transition-transform duration-300 hover:scale-125'
        />

        <div className='group relative'>
          <Link to='/Login'>         
           <img
            src={assets.profile_icon}
            alt=""
            className='w-5 cursor-pointer transition-transform duration-300 hover:scale-125'
          /></Link>

          <div className='absolute right-0 pt-4 z-10 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md'>
              <p className='cursor-pointer hover:text-black transition-colors'>My Profile</p>
              <p className='cursor-pointer hover:text-black transition-colors'>Orders</p>
              <p className='cursor-pointer hover:text-black transition-colors'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img
            src={assets.cart_icon}
            className='w-5 min-w-5 transition-transform duration-300 hover:scale-125'
            alt=""
          />
          <p
            key={getCartCount()}
            className='absolute right-[-5px] bottom-[-5px] w-4 aspect-square text-[8px] text-center leading-4 bg-black text-white rounded-full animate-pop'
          >
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className='w-5 cursor-pointer sm:hidden'
        />
      </div>

      {/* side bar menu for small screen */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-500 ease-in-out ${
          visible ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          {[
            { to: '/', label: 'Home' },
            { to: '/collection', label: 'Collection' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setVisible(false)}
              className='py-2 pl-6 border transition-colors duration-300 hover:bg-gray-100'
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar