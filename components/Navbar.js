import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-20 bg-violet-400 flex justify-between px-7 items-center'>
      <div className='logo font-bold mr-8 font-mono text-2xl text-amber-50'>
        BlinkURL
      </div>
      <ul className='flex justify-center gap-4 items-center text-amber-50 font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Shorten</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar