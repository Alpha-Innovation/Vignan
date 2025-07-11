import { Button } from "@/components/ui/button";
import campusImage from "@/assets/campus-image.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-vignan-blue-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-vignan-red">Vignan's Online</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vignan's Institute of Information Technology, established in 2004, 
                is one of the leading educational institutions in India with a legacy 
                of 48 years in academic excellence.
              </p>
              <p>
                Our online programs are designed to provide world-class education 
                through innovative digital platforms, ensuring that geographical 
                boundaries don't limit your educational aspirations.
              </p>
              <p>
                With UGC approval and industry-aligned curriculum, we prepare 
                students for successful careers in the digital age.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-vignan-red">48+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-vignan-blue">100%</div>
                <div className="text-sm text-gray-600">UGC Approved</div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-vignan-red hover:bg-vignan-red-dark text-white mr-4"
              >
                Learn More About Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-vignan-blue text-vignan-blue hover:bg-vignan-blue hover:text-white"
              >
                View Programs
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img 
              src={campusImage} 
              alt="Vignan Campus" 
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;