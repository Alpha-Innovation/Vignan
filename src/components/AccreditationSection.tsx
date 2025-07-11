import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Globe2 } from "lucide-react";

const AccreditationSection = () => {
  const accreditations = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "UGC Approved",
      description: "University Grants Commission approved online degree programs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "NAAC A+ Grade",
      description: "National Assessment and Accreditation Council certified"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AICTE Approved",
      description: "All India Council for Technical Education recognition"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Internationally recognized degree programs"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-vignan-blue to-vignan-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Accreditation & Recognition
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Our degrees are recognized and approved by all major educational bodies in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((item, index) => (
            <Card key={index} className="text-center bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;