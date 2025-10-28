
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ml-4">
            <Image
              src="/images/logo.png" 
              alt="IddirNet Logo"
              width={42}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 mr-4">
            <a href="#home" className="text-black hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#features" className="text-black hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#code-structure" className="text-black hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Code Structure
            </a>
            <a href="#testing" className="text-black hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Testing
            </a>
            <a href="#deployment" className="text-black hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Deployment
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a href="#home" className="text-black hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#features" className="text-black hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
            Features
          </a>
          <a href="#code-structure" className="text-black hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
            Code Structure
          </a>
          <a href="#testing" className="text-black hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
            Testing
          </a>
          <a href="#deployment" className="text-black hover:text-orange-500 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium">
            Deployment
          </a>
        </div>
      </div>
    </nav>
  );
}