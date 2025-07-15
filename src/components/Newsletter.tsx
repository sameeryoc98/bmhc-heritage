
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, Calendar, BookOpen } from "lucide-react";

const Newsletter = () => {
  const benefits = [
    {
      icon: Calendar,
      text: "Early access to events"
    },
    {
      icon: BookOpen,
      text: "Exclusive heritage stories"
    },
    {
      icon: Gift,
      text: "Special member discounts"
    }
  ];

  return (
    <section className="py-20 bg-rose-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-rose-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Stay Connected with Our Heritage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our community newsletter and be the first to know about new exhibitions, 
                events, and heritage discoveries at BMHC.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 h-12 px-4 rounded-full border-2 border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
                <Button 
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Get More Involved?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Become a Member
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
