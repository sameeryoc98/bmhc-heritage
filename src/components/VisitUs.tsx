
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Car, Train, Accessibility } from "lucide-react";

const VisitUs = () => {
  const openingHours = [
    { day: "Monday - Friday", time: "10:00 AM - 5:00 PM" },
    { day: "Saturday", time: "10:00 AM - 6:00 PM" },
    { day: "Sunday", time: "12:00 PM - 5:00 PM" },
    { day: "Bank Holidays", time: "12:00 PM - 4:00 PM" }
  ];

  const transportOptions = [
    {
      icon: Train,
      title: "By Public Transport",
      description: "Nearest tube: Manchester Oxford Road (5 min walk)",
      details: "Bus routes: 42, 43, 142, 143"
    },
    {
      icon: Car,
      title: "By Car",
      description: "Limited parking available on-site",
      details: "Public parking nearby on Grosvenor Street"
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description: "Fully accessible with lift access",
      details: "Wheelchair accessible toilets available"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Us & Explore the Centre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your visit to discover our heritage collections, exhibitions, and historic building
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location & Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  <MapPin className="h-6 w-6 text-rose-600 mr-3" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    British Muslim Heritage Centre<br />
                    8-10 Grosvenor Street<br />
                    Manchester, M1 7HL<br />
                    United Kingdom
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-2" />
                    <span className="text-gray-600">0161 222 3344</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-2" />
                    <span className="text-gray-600">info@bmhc.org.uk</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full font-semibold"
                  >
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  <Clock className="h-6 w-6 text-teal-600 mr-3" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>Free admission</strong> for all visitors. Donations welcome to support our work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Transport */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-80 bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Map showing BMHC location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold mb-1">Find Us Here</h4>
                    <p className="text-sm opacity-90">Heart of Manchester's cultural quarter</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How to Get Here</h3>
                  <div className="space-y-4">
                    {transportOptions.map((option, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <option.icon className="h-5 w-5 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{option.title}</h4>
                          <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                          <p className="text-xs text-gray-500">{option.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-r from-rose-50 to-teal-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Visit</h3>
                <p className="text-gray-600 mb-6">
                  Book a guided tour for a deeper understanding of our collections and heritage
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold"
                  >
                    Book a Tour
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white rounded-full font-semibold"
                  >
                    Group Visits
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
