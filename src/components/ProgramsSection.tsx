import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const programs = {
    All: [
      { name: "MBA", fullName: "Master of Business Administration", duration: "2 Years" },
      { name: "MCA", fullName: "Master of Computer Applications", duration: "2 Years" },
      { name: "BBA", fullName: "Bachelor of Business Administration", duration: "3 Years" },
      { name: "BCA", fullName: "Bachelor of Computer Applications", duration: "3 Years" },
    ],
    MASTERS: [
      { name: "MBA", fullName: "Master of Business Administration", duration: "2 Years" },
      { name: "MCA", fullName: "Master of Computer Applications", duration: "2 Years" },
    ],
    BACHELORS: [
      { name: "BBA", fullName: "Bachelor of Business Administration", duration: "3 Years" },
      { name: "BCA", fullName: "Bachelor of Computer Applications", duration: "3 Years" },
    ],
  };

  const tabs = ["All", "MASTERS", "BACHELORS"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-vignan-blue">ONLINE DEGREE</span>{" "}
            <span className="text-vignan-red">PROGRAMS OFFERED</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-vignan-red shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs[activeTab as keyof typeof programs].map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-vignan-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{program.name}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{program.fullName}</p>
                <p className="text-vignan-red font-medium text-sm mb-4">{program.duration}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-vignan-blue text-vignan-blue hover:bg-vignan-blue hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-vignan-red to-vignan-red-dark text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6">Join thousands of students who have transformed their careers with our online programs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-vignan-red hover:bg-gray-100"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-vignan-red"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;