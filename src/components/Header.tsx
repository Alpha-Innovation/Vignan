import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  onCtaClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow relative z-50">
      {/* Precaution Notice with infinite marquee */}
      <div className="w-full flex justify-end bg-transparent pt-2 pr-2 md:pr-8 overflow-hidden">
        <div className="w-full max-w-full md:max-w-[600px]">
          <div className="whitespace-nowrap animate-marquee-infinite text-[#15396A] font-bold text-xs px-2 md:px-0">
            Precautions to be taken by the students before enrolling in programmes offered under Open & Distance Learning (ODL) and/or Online Learning mode - <a href="https://api.vignanonline.com/media/UGC_20240319152222_1.pdf" target="_blank" className="underline text-[#15396A]">Link</a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between py-0 px-2 md:px-6 mb-0 h-16 md:h-auto">
        {/* Logo Block */}
        <div className="flex items-center h-16 md:h-auto">
          <img src="/img/vignan-logo.03d83441.webp" alt="Vignan Logo" className="h-12 md:h-20 w-auto align-middle" />
        </div>
        {/* Navigation */}
        <nav className="flex flex-wrap items-center space-x-2 md:space-x-6 h-16 md:h-auto w-full md:w-auto justify-end">
          <button
            className="uppercase font-bold text-black hover:text-[#CA2526] tracking-wide text-xs md:text-sm bg-transparent border-none outline-none cursor-pointer hidden md:inline-flex"
            style={{ padding: 0, background: 'none' }}
            onClick={onCtaClick}
            type="button"
          >
            About Us
          </button>
          <div className="relative group hidden md:inline-flex">
            <button className="uppercase font-bold text-black flex items-center hover:text-[#CA2526] tracking-wide text-xs md:text-sm">
              Programs
              <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            </button>
          </div>
          <button
            className="bg-[#CA2526] text-white font-bold rounded-full px-3 md:px-4 py-1 uppercase hover:bg-[#d02829] transition tracking-wide text-xs md:text-sm hidden md:inline-flex"
            onClick={onCtaClick}
            type="button"
          >
            Enquire Now
          </button>
          <button
            className="uppercase font-bold text-black hover:text-[#CA2526] tracking-wide text-xs md:text-sm bg-transparent border-none outline-none cursor-pointer hidden md:inline-flex"
            style={{ padding: 0, background: 'none' }}
            onClick={onCtaClick}
            type="button"
          >
            Apply Now
          </button>
          {/* Desktop Menu Button */}
          <button
            className="ml-2 md:ml-4 hidden md:block text-xl focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          {/* Mobile Hamburger Button aligned right */}
          <div className="flex-1 flex justify-end md:hidden">
            <button className="ml-2 text-xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open mobile menu">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      </div>
      {/* Desktop Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-2 md:right-8 top-[100%] mt-2 w-64 md:w-72 bg-white border shadow-lg z-50">
          <ul className="divide-y divide-gray-200">
            <li>
              <button onClick={onCtaClick} className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-[#15396A] bg-transparent border-none outline-none cursor-pointer">BLOGS</button>
            </li>
            <li>
              <button onClick={onCtaClick} className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-[#15396A] bg-transparent border-none outline-none cursor-pointer">CONTACT US</button>
            </li>
            <li>
              <button onClick={onCtaClick} className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-[#15396A] bg-transparent border-none outline-none cursor-pointer">STUDENT SUPPORT</button>
            </li>
            <li>
              <button onClick={onCtaClick} className="block w-full text-left px-6 py-3 hover:bg-gray-100 text-[#15396A] bg-transparent border-none outline-none cursor-pointer">REFER A FRIEND</button>
            </li>
          </ul>
        </div>
      )}
      {/* Mobile Menu (unchanged) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col items-center text-center">
          <button className="self-end mb-4" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
            <span className="text-3xl">&times;</span>
          </button>
          <button
            className="uppercase font-bold text-black mb-4 bg-transparent border-none outline-none cursor-pointer text-base w-full"
            style={{ padding: 0, background: 'none' }}
            onClick={onCtaClick}
            type="button"
          >
            About Us
          </button>
          <button
            className="uppercase font-bold text-black mb-4 bg-transparent border-none outline-none cursor-pointer text-base w-full"
            style={{ padding: 0, background: 'none' }}
            type="button"
            disabled
          >
            Programs
          </button>
          <button
            className="bg-[#CA2526] text-white font-bold rounded-full px-6 py-2 uppercase mb-4 text-base w-full"
            onClick={onCtaClick}
            type="button"
          >
            Enquire Now
          </button>
          <button
            className="uppercase font-bold text-black mb-4 bg-transparent border-none outline-none cursor-pointer text-base w-full"
            style={{ padding: 0, background: 'none' }}
            onClick={onCtaClick}
            type="button"
          >
            Apply Now
          </button>
          <a href="/blogs" className="text-black mb-2 w-full block">Blogs</a>
          <a href="/contact-us" className="text-black mb-2 w-full block">Contact Us</a>
          <a href="https://support.vignanonline.com" target="_blank" rel="noopener noreferrer" className="text-black mb-2 w-full block">Student Support</a>
          <a href="https://refer.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="text-black w-full block">Refer a Friend</a>
        </div>
      )}
    </header>
  );
};

export default Header; 

// Tailwind CSS for marquee effect (add to your global CSS if not present):
// .animate-marquee {
//   display: inline-block;
//   animation: marquee 15s linear infinite;
// }
// @keyframes marquee {
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// } 