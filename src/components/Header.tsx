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
      <div className="w-full flex justify-end bg-transparent pt-2 pr-8 overflow-hidden">
        <div className="w-full max-w-[600px]">
          <div className="whitespace-nowrap animate-marquee-infinite text-[#15396A] font-bold text-xs">
            Precautions to be taken by the students before enrolling in programmes offered under Open & Distance Learning (ODL) and/or Online Learning mode - <a href="https://api.vignanonline.com/media/UGC_20240319152222_1.pdf" target="_blank" className="underline text-[#15396A]">Link</a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1 px-6">
        {/* Logo Block */}
        <div className="flex flex-col items-start min-w-[340px]">
          <div className="flex items-center">
            <img src="/img/vignan-logo.03d83441.webp" alt="Vignan Logo" className="h-12 w-auto" />
            <div className="ml-2 flex flex-col">
              <span className="text-[#D02829] font-bold text-xl leading-none">VIGNAN'S</span>
              <span className="text-[#15396A] font-bold text-lg leading-none">ONLINE</span>
              <span className="text-xs text-[#15396A] leading-none">Driving your future</span>
            </div>
              </div>
          <div className="bg-[#15396A] text-white text-[10px] px-2 py-1 mt-1 rounded">
            (Deemed to be University) - Estd. u/s 3 of UGC Act 1956
              </div>
          <div className="font-bold text-xs mt-1">
            Centre for Distance and Online Education
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex items-center space-x-6 mx-auto">
          <a href="/about-us" className="uppercase font-bold text-black hover:text-[#CA2526] tracking-wide text-sm">About Us</a>
          <div className="relative group">
            <button className="uppercase font-bold text-black flex items-center hover:text-[#CA2526] tracking-wide text-sm">
              Programs
              <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
            </button>
          </div>
          <button
            className="bg-[#CA2526] text-white font-bold rounded-full px-4 py-1 uppercase hover:bg-[#d02829] transition tracking-wide text-sm"
            onClick={onCtaClick}
            type="button"
          >
            Enquire Now
          </button>
          <a href="https://apply.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="uppercase font-bold text-black hover:text-[#CA2526] tracking-wide text-sm">Apply Now</a>
          {/* Desktop Menu Button */}
          <button
            className="ml-4 hidden md:block text-xl focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          {/* Mobile Hamburger Button */}
          <button className="ml-4 md:hidden block" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open mobile menu">
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
        </nav>
                    </div>
      {/* Desktop Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-8 top-[100%] mt-2 w-72 bg-white border shadow-lg z-50">
          <ul className="divide-y divide-gray-200">
            <li>
              <a href="/blogs" className="block px-6 py-3 hover:bg-gray-100 text-[#15396A]">BLOGS</a>
            </li>
            <li>
              <a href="/contact-us" className="block px-6 py-3 hover:bg-gray-100 text-[#15396A]">CONTACT US</a>
            </li>
            <li>
              <a href="https://support.vignanonline.com" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 hover:bg-gray-100 text-[#15396A]">STUDENT SUPPORT</a>
            </li>
            <li>
              <a href="https://refer.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 hover:bg-gray-100 text-[#15396A]">REFER A FRIEND</a>
                              </li>
                          </ul>
              </div>
            )}
      {/* Mobile Menu (unchanged) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 flex flex-col">
          <button className="self-end mb-4" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close mobile menu">
            <span className="text-3xl">&times;</span>
          </button>
          <a href="/about-us" className="uppercase font-bold text-black mb-4">About Us</a>
          <a href="#programs" className="uppercase font-bold text-black mb-4">Programs</a>
          <button
            className="bg-[#CA2526] text-white font-bold rounded-full px-6 py-2 uppercase mb-4"
            onClick={onCtaClick}
            type="button"
          >
            Enquire Now
          </button>
          <a href="https://apply.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="uppercase font-bold text-black mb-4">Apply Now</a>
          <a href="/blogs" className="text-black mb-2">Blogs</a>
          <a href="/contact-us" className="text-black mb-2">Contact Us</a>
          <a href="https://support.vignanonline.com" target="_blank" rel="noopener noreferrer" className="text-black mb-2">Student Support</a>
          <a href="https://refer.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="text-black">Refer a Friend</a>
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