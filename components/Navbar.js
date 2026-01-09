import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-cyan-700 flex justify-between px-7 items-center'>
      <Link href="/" className='logo font-extrabold font-mono text-xl text-amber-50'>
        BlinkURL
      </Link>
      <ul className='flex justify-center gap-6 items-center text-amber-50 font-semibold'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>

        <li className='flex gap-4'>
          <Link href="/shorten"><button className='bg-cyan-600 shadow-lg rounded-lg p-3 py-2 font-semibold border-2'>Try Now</button></Link>
          <Link href="/github"><button className='bg-cyan-600 shadow-lg rounded-lg p-3 py-2 font-semibold border-2'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar