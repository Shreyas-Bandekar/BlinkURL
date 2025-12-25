import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-violet-400 flex justify-between px-7 items-center'>
      <div className='logo font-extrabold font-mono text-xl text-amber-50'>
        BlinkURL
      </div>
      <ul className='flex justify-center gap-6 items-center text-amber-50 font-semibold'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li>
          <button>Try Now</button>
          <button>Github</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar