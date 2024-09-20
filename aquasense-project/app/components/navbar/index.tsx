
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative font-serif font-bold text-7xl">
      <header className="fixed w-full z-10 bg-white bg-opacity-90 shadow">
        <div className="container max-w-[1800px] mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-45 h-12 relative mr-8 mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Aquasense Logo"
                  width={170}
                  height={48}
                />
              </div>
              <div className="hidden sm:block"></div>
            </div>
            <nav className="hidden md:flex space-x-4 lg:space-x-8 font-semibold text-2xl">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#product">Product</NavLink>
              <NavLink href="#aboutus">About us</NavLink>
              <NavLink href="#team">Team</NavLink>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 z-50"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
            <div className="text-center">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#product" onClick={() => setIsMenuOpen(false)}>Product</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About us</MobileNavLink>
              <MobileNavLink href="#team" onClick={() => setIsMenuOpen(false)}>Team</MobileNavLink>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </header>
      <div className="pt-16"></div>
    </div>
  )
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-gray-600 hover:text-blue-500 px-2 py-1 text-2xl font-bold transition duration-150 ease-in-out">
      {children}
    </a>
  )
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="block px-3 py-4 text-3xl font-bold text-gray-600 hover:text-blue-500">
      {children}
    </a>
  )
}