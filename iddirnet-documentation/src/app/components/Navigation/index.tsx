'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Code Structure', href: '/#code-structure' },
    { name: 'Setup Instructions', href: '/#setup-instructions' },
    { name: 'Testing', href: '/#testing' },
    { name: 'Deployment', href: '/#deployment' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.split('#')[1]).filter(id => id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {

    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <aside className="fixed left-0 top-0 w-64 bg-white  z-50 flex flex-col">

      <div className="p-6 border-b border-gray-100">
        <Link href="/" className="inline-block focus:outline-none">
          <Image
            src="/images/iddir.png"
            alt="IddirNet Logo"
            width={70}
            height={40}
            className="h-auto w-auto"
          />
        </Link>
      </div>


      <nav className="px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const sectionId = item.href.split('#')[1];
          const isActive = activeSection === sectionId;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}