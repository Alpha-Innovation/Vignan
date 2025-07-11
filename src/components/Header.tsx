import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import vignanLogo from "@/assets/vignan-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={vignanLogo} 
              alt="Vignan's Online" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-vignan-blue font-medium">
              ABOUT US
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-vignan-blue font-medium flex items-center">
                PROGRAMS
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown would go here */}
            </div>
            <Button variant="outline" className="border-vignan-red text-vignan-red hover:bg-vignan-red hover:text-white">
              ENQUIRE NOW
            </Button>
            <Button className="bg-vignan-red hover:bg-vignan-red-dark text-white">
              APPLY NOW
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-vignan-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-vignan-blue font-medium">
                ABOUT US
              </a>
              <a href="#" className="text-gray-700 hover:text-vignan-blue font-medium">
                PROGRAMS
              </a>
              <Button variant="outline" className="border-vignan-red text-vignan-red hover:bg-vignan-red hover:text-white w-full">
                ENQUIRE NOW
              </Button>
              <Button className="bg-vignan-red hover:bg-vignan-red-dark text-white w-full">
                APPLY NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;