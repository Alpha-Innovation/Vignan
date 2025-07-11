import { Button } from "@/components/ui/button";
import studentHero from "@/assets/student-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="relative z-10">
            {/* Decorative dots */}
            <div className="absolute -top-8 -left-8 w-20 h-20 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-vignan-red rounded-full"></div>
                ))}
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The door to endless{" "}
              <span className="text-vignan-red">opportunities</span>
              <br />
              has opened for you!
            </h1>
            
            <div className="mt-8 p-6 bg-vignan-red text-white rounded-lg">
              <p className="text-xl font-semibold mb-2">Admissions closing soon</p>
              <p className="text-3xl font-bold mb-4">MBA | MCA | BBA | BCA</p>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
              >
                Apply Now
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-2xl font-semibold text-gray-800">
                #Driving<span className="text-vignan-red">Your</span>
                <span className="text-vignan-red">Future</span>
              </p>
            </div>
          </div>

          {/* Right Side - Image and Academic Excellence */}
          <div className="relative">
            {/* 48 Years Badge */}
            <div className="absolute top-0 left-0 z-20">
              <div className="relative">
                {/* Red geometric background */}
                <div className="w-80 h-80 bg-vignan-red relative overflow-hidden">
                  {/* Diagonal cut */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-white"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 pr-16">
                    <div className="text-white">
                      <div className="text-8xl font-bold leading-none">4</div>
                      <div className="text-6xl font-bold leading-none mt-2">8</div>
                      <div className="text-xl font-medium mt-4 uppercase tracking-wider">
                        YEARS
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Academic Excellence text */}
                <div className="absolute -bottom-4 left-8 bg-white px-4 py-2 shadow-lg">
                  <div className="text-gray-900 font-bold text-sm uppercase tracking-wider">
                    OF ACADEMIC
                  </div>
                  <div className="text-vignan-red font-bold text-sm uppercase tracking-wider">
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>

            {/* Student Image */}
            <div className="ml-32 mt-32">
              <img 
                src={studentHero} 
                alt="Student with laptop" 
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;