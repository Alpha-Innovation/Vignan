import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "MBA Graduate",
      image: "👨‍💼",
      rating: 5,
      text: "Vignan Online transformed my career. The flexible schedule allowed me to work while studying, and the quality of education is outstanding."
    },
    {
      name: "Priya Sharma",
      role: "BCA Student",
      image: "👩‍💻",
      rating: 5,
      text: "The online platform is user-friendly and the faculty support is excellent. I'm gaining practical knowledge that's directly applicable to my career."
    },
    {
      name: "Amit Patel",
      role: "MCA Graduate",
      image: "👨‍🎓",
      rating: 5,
      text: "48 years of academic excellence shows in every aspect of their online programs. Highly recommended for working professionals."
    }
  ];

  return (
    <section className="py-16 bg-vignan-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-vignan-red">Students</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our successful graduates who have transformed their careers with Vignan Online
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-vignan-red mr-3" />
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-vignan-blue">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;