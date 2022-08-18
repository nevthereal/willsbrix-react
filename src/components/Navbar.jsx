import React from 'react'
import Logo from '../assets/wb_logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between mx-4">
        <a href="/"><img className='my-auto w-16 md:w-24 hover:scale-105 duration-200' src={Logo} alt="logo" /></a>
        <div className="text-lg md:text-xl flex my-auto gap-4">
            <p className="font-bold hover:scale-105 duration-200"><a href="/products">Products</a></p>
            <p className="font-bold hover:scale-105 duration-200"><a href="/info">Info</a></p>
        </div>
        <a className="my-auto hover:scale-105 duration-200 text-2xl md:text-3xl" href="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=G8L6ZMR2Q8PGY&display=1"><i className="fa-solid fa-cart-shopping"></i></a>
        </nav>
    </div>
  )
}

export default Navbar