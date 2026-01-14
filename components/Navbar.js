
'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="h-16 bg-cyan-700 flex justify-between px-4 md:px-7 items-center relative z-30 shadow-md">
      <Link href="/" className="logo font-extrabold font-mono text-xl text-amber-50 tracking-tight">
        BlinkURL
      </Link>
      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-amber-50 focus:outline-none z-40"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 rounded bg-amber-50 mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 rounded bg-amber-50 mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 rounded bg-amber-50 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Menu */}
      <ul
        className={`
          ${menuOpen ? 'flex' : 'hidden'}
          md:flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center text-amber-50 font-semibold
          absolute md:static top-16 left-0 w-full md:w-auto bg-cyan-700 md:bg-transparent transition-all duration-300
          shadow-lg md:shadow-none z-30
        `}
      >
        <li className="w-full md:w-auto text-center">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-3 md:py-0 hover:text-cyan-200 transition">Home</Link>
        </li>
        <li className="w-full md:w-auto text-center">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-3 md:py-0 hover:text-cyan-200 transition">About</Link>
        </li>
        <li className="w-full md:w-auto text-center">
          <Link href="/shorten" onClick={() => setMenuOpen(false)} className="block py-3 md:py-0 hover:text-cyan-200 transition">Shorten</Link>
        </li>
        <li className="w-full md:w-auto text-center">
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-3 md:py-0 hover:text-cyan-200 transition">Contact Us</Link>
        </li>
        <li className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto mt-2 md:mt-0">
          <Link href="/shorten" onClick={() => setMenuOpen(false)}>
            <button className="bg-cyan-600 hover:bg-cyan-800 shadow-lg rounded-lg px-4 py-2 md:px-6 md:py-2 font-semibold border-2 border-cyan-800 w-full md:w-auto transition block md:inline-block text-base md:text-base">Try Now</button>
          </Link>
          <Link href="/github" onClick={() => setMenuOpen(false)}>
            <button className="bg-cyan-600 hover:bg-cyan-800 shadow-lg rounded-lg px-4 py-2 md:px-6 md:py-2 font-semibold border-2 border-cyan-800 w-full md:w-auto transition block md:inline-block text-base md:text-base">Github</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar