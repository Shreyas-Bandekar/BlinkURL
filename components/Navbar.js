import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-8 bg-cyan-400 flex justify-center items-center'>
      <ul className='flex justify-center gap-4 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Shorten</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar