import { Button } from "@/components/ui/button";
import studentSupport from "@/assets/student-support.jpg";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-vignan-red to-vignan-red-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful professionals who have advanced their careers 
              with Vignan Online. Start your journey today!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span>UGC Approved Online Degrees</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span>Flexible Learning Schedule</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span>Industry Expert Faculty</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span>24/7 Student Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-vignan-red hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Apply Now - Limited Seats
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-vignan-red font-semibold px-8 py-4"
              >
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img 
              src={studentSupport} 
              alt="Student Support" 
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            
            {/* Overlay Badge */}
            <div className="absolute top-6 right-6 bg-white text-vignan-red p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">Admissions</div>
                <div className="text-sm">Closing Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;