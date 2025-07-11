import { Button } from "@/components/ui/button";
import vignanLogo from "@/assets/vignan-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src={vignanLogo} 
              alt="Vignan's Online" 
              className="h-12 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Vignan's Online offers world-class education through innovative online programs, 
              empowering students to achieve their academic and career goals from anywhere in the world.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="bg-vignan-red hover:bg-vignan-red-dark">
                BLOGS
              </Button>
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Student Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Refer a Friend</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">MBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">MCA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">BBA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">BCA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Vignan's Online. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">UGC Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;