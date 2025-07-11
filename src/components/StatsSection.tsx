import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Students Enrolled",
      description: "Across all programs"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "15+",
      label: "Academic Programs",
      description: "UGC approved courses"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "48",
      label: "Years of Excellence",
      description: "In academic leadership"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "100%",
      label: "Online Learning",
      description: "Flexible education"
    }
  ];

  return (
    <section className="py-16 bg-vignan-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-vignan-red">Vignan Online</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join India's leading online university with a legacy of academic excellence 
            and innovation in distance learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-vignan-blue rounded-full flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-vignan-red mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;