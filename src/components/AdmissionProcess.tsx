import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, CreditCard, CheckCircle } from "lucide-react";

const AdmissionProcess = () => {
  const steps = [
    {
      step: "01",
      icon: <FileText className="w-6 h-6" />,
      title: "Register Yourself",
      description: "Fill the online application form with your basic details and course preference."
    },
    {
      step: "02",
      icon: <Download className="w-6 h-6" />,
      title: "Upload Documents",
      description: "Upload required documents including educational certificates and ID proof."
    },
    {
      step: "03",
      icon: <CreditCard className="w-6 h-6" />,
      title: "Make Payment",
      description: "Complete the fee payment through our secure online payment gateway."
    },
    {
      step: "04",
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Get Confirmation",
      description: "Receive admission confirmation and start your learning journey with us."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-vignan-blue">Admission</span> Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple 4-step process to start your online education journey with Vignan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-vignan-blue rounded-full flex items-center justify-center text-white mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-vignan-red rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-vignan-blue to-vignan-red text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Application Today!</h3>
          <p className="text-lg mb-6 opacity-90">
            Limited seats available. Apply now to secure your spot in the upcoming batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-vignan-blue hover:bg-gray-100 font-semibold"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-vignan-blue font-semibold"
            >
              Need Help? Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;