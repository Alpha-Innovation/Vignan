import { MessageCircle, Phone, Mail } from "lucide-react";

const FloatingSocial = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a 
        href="https://wa.me/918888888888" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      
      {/* Phone */}
      <a 
        href="tel:+918888888888" 
        className="w-12 h-12 bg-vignan-blue hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="Call us"
      >
        <Phone size={20} />
      </a>
      
      {/* Email */}
      <a 
        href="mailto:info@vignanonline.com" 
        className="w-12 h-12 bg-vignan-red hover:bg-vignan-red-dark rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110"
        title="Email us"
      >
        <Mail size={20} />
      </a>
    </div>
  );
};

export default FloatingSocial;