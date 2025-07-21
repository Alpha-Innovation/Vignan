import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A4377] text-white pt-0 pb-6 px-0 footer-montserrat">
      {/* Top Red Contact Bar - Centered and Rounded */}
      <div className="w-full flex justify-center">
        <div className="bg-[#CA2526] text-white py-4 px-4 rounded-xl w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4 -mt-8 z-10 relative shadow-lg">
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <FontAwesomeIcon icon={faPhone} className="mb-1 text-xl" />
            <span className="text-sm font-medium">+919391477061</span>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <FontAwesomeIcon icon={faWhatsapp} className="mb-1 text-xl" />
            <span className="text-sm font-medium">+919391477061</span>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <FontAwesomeIcon icon={faEnvelope} className="mb-1 text-xl" />
            <span className="text-sm font-medium">info@vignanonline.com</span>
          </div>
          <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mb-1 text-xl" />
            <span className="text-sm font-medium block">Vignan's Foundation for Science,<br/>Technology and Research (Deemed to be University),<br/>Vadlamudi, Guntur-522213</span>
          </div>
        </div>
      </div>
      {/* Main Blue Footer */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 pt-8 mt-4 px-2">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start min-w-[140px] md:pr-4">
          <img src="/img/logo-white.904fece1.webp" alt="Vignan Logo" className="h-10 w-auto mb-1" />
          <div className="text-[9px] text-white mb-2 text-center md:text-left">(Deemed to be University) - Estd. u/s 3 of UGC Act 1956</div>
          <div className="flex space-x-2 mb-1">
            <a href="https://www.instagram.com/vignanonline/" target="_blank" rel="noopener noreferrer" className="text-base"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/channel/UC9xOL6RM5DShuroZMecmEvg" target="_blank" rel="noopener noreferrer" className="text-base"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.facebook.com/vignanonline/" target="_blank" rel="noopener noreferrer" className="text-base"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/company/vignan-online" target="_blank" rel="noopener noreferrer" className="text-base"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://x.com/vignanonline" target="_blank" rel="noopener noreferrer" className="text-base"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        {/* Footer Columns with Dividers */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 w-full divide-y-0 md:divide-x md:divide-white/30">
          {/* VIGNAN ONLINE - CDOE */}
          <div className="px-2 md:px-4">
            <h3 className="font-bold mb-2 text-sm tracking-normal">VIGNAN ONLINE - CDOE</h3>
            <ul className="space-y-0.5">
              <li><a href="/about-us" className="hover:underline text-xs font-normal">About us</a></li>
              <li><a href="/programs" className="hover:underline text-xs font-normal">Programs</a></li>
              <li><a href="/blogs" className="hover:underline text-xs font-normal">Blogs</a></li>
              <li><a href="/refer-a-friend" className="hover:underline text-xs font-normal">Refer a friend</a></li>
              <li><a href="/apply-now" className="hover:underline text-xs font-normal">Apply Now</a></li>
            </ul>
          </div>
          {/* PROGRAMS */}
          <div className="px-2 md:px-4">
            <h3 className="font-bold mb-2 text-sm tracking-normal">PROGRAMS</h3>
            <ul className="space-y-0.5">
              <li><a href="/online-mba" className="hover:underline text-xs font-normal">MBA</a></li>
              <li><a href="/online-mca" className="hover:underline text-xs font-normal">MCA</a></li>
              <li><a href="/online-bba" className="hover:underline text-xs font-normal">BBA</a></li>
              <li><a href="/online-bca" className="hover:underline text-xs font-normal">BCA</a></li>
            </ul>
          </div>
          {/* SUPPORT */}
          <div className="px-2 md:px-4">
            <h3 className="font-bold mb-2 text-sm tracking-normal">SUPPORT</h3>
            <ul className="space-y-0.5">
              <li><a href="/contact-us" className="hover:underline text-xs font-normal">Contact us</a></li>
              <li><a href="/apna-advantage" className="hover:underline text-xs font-normal">Apna Advantage</a></li>
              <li><a href="/download-brochure" className="hover:underline text-xs font-normal">Download brochure</a></li>
              <li><a href="/student-support" className="hover:underline text-xs font-normal">Student Support</a></li>
              <li><a href="/privacy-policy" className="hover:underline text-xs font-normal">Privacy policy</a></li>
              <li><a href="/refund-policy" className="hover:underline text-xs font-normal">Refund policy</a></li>
            </ul>
          </div>
          {/* QUICK LINKS */}
          <div className="px-2 md:px-4">
            <h3 className="font-bold mb-2 text-sm tracking-normal">QUICK LINKS</h3>
            <ul className="space-y-0.5">
              <li><a href="/statutory-disclosures" className="hover:underline text-xs font-normal">Statutory Disclosures</a></li>
              <li><a href="/student-corner" className="hover:underline text-xs font-normal">Student Corner</a></li>
              <li><a href="/feedback-grievance" className="hover:underline text-xs font-normal">Feedback and Grievance Management</a></li>
              <li><a href="/quality-assurance" className="hover:underline text-xs font-normal">Quality and Assurance</a></li>
              <li><a href="/past-enrolments" className="hover:underline text-xs font-normal">Past Enrolments</a></li>
              <li><a href="/terms-conditions" className="hover:underline text-xs font-normal">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 