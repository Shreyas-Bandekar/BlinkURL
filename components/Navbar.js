import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-violet-400 flex justify-between px-7 items-center'>
      <div className='logo font-extrabold font-mono text-xl text-amber-50'>
        BlinkURL
      </div>
      <ul className='flex justify-center gap-6 items-center text-amber-50 font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Shorten</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar