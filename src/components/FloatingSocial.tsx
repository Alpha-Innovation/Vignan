import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faVideo, faRobot } from '@fortawesome/free-solid-svg-icons';

interface FloatingSocialProps {
  onCtaClick?: () => void;
}
const FloatingSocial: React.FC<FloatingSocialProps> = ({ onCtaClick }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919972517336';
    const message = 'Hi, I would like to know more about Vignan Online programs.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleCallClick = () => {
    window.open('tel:+919972517336', '_self');
  };
  const handleVideoClick = () => {
    if (onCtaClick) onCtaClick();
  };
  const handleChatbotClick = () => {
    if (onCtaClick) onCtaClick();
  };

  return (
    <div className="floating-social flex flex-col gap-4 fixed right-6 bottom-6 z-50 items-end">
      <button 
        className="social-button bg-black hover:bg-gray-800 text-white"
        onClick={handleVideoClick}
        aria-label="Video Call"
      >
        <FontAwesomeIcon icon={faVideo} />
      </button>
      <button 
        className="social-button bg-[#0056a3] hover:bg-[#003366] text-white"
        onClick={handleCallClick}
        aria-label="Call Us"
      >
        <FontAwesomeIcon icon={faPhone} />
      </button>
      <button 
        className="social-button bg-[#25d366] hover:bg-[#128c7e] text-white"
        onClick={handleWhatsAppClick}
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>
      <button 
        className="social-button bg-white border-2 border-[#CA2526] hover:bg-[#CA2526] hover:text-white text-[#CA2526]"
        onClick={handleChatbotClick}
        aria-label="Chatbot"
      >
        <FontAwesomeIcon icon={faRobot} />
      </button>
    </div>
  );
};

export default FloatingSocial; 