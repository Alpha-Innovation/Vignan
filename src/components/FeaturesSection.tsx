import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Monitor, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "100% Online Learning",
      description: "Study from anywhere, anytime with our comprehensive online platform designed for working professionals."
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "UGC Approved Programs",
      description: "All our degree programs are approved by UGC and hold the same value as regular on-campus degrees."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Flexible Schedule",
      description: "Balance your work and studies with our flexible learning schedules designed for busy professionals."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Industry-Relevant Curriculum",
      description: "Our curriculum is designed with industry experts to ensure you learn skills that matter in today's job market."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-vignan-blue">Features</span> That Make Us{" "}
            <span className="text-vignan-red">Different</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our innovative approach to online learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-vignan-blue to-vignan-red rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;