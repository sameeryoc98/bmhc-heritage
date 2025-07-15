
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Guided Heritage Tour",
      date: "2024-01-20",
      time: "10:00 AM - 12:00 PM",
      location: "BMHC Main Building",
      description: "Explore our collections with expert guides",
      category: "Tour",
      price: "Free"
    },
    {
      title: "Islamic Calligraphy Workshop",
      date: "2024-01-25",
      time: "2:00 PM - 5:00 PM",
      location: "Education Centre",
      description: "Learn traditional Arabic calligraphy techniques",
      category: "Workshop",
      price: "£15"
    },
    {
      title: "Interfaith Dialogue: Building Bridges",
      date: "2024-02-01",
      time: "7:00 PM - 9:00 PM",
      location: "Main Hall",
      description: "Join community leaders in meaningful conversation",
      category: "Discussion",
      price: "Free"
    },
    {
      title: "Community Eid Celebration",
      date: "2024-02-08",
      time: "11:00 AM - 4:00 PM",
      location: "Community Gardens",
      description: "Celebrate Eid with the whole community",
      category: "Celebration",
      price: "Free"
    },
    {
      title: "Youth Leadership Summit",
      date: "2024-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Hall",
      description: "Empowering the next generation of Muslim leaders",
      category: "Conference",
      price: "£25"
    },
    {
      title: "Traditional Cooking Class",
      date: "2024-02-22",
      time: "1:00 PM - 4:00 PM",
      location: "Community Kitchen",
      description: "Learn to cook traditional Middle Eastern dishes",
      category: "Cooking",
      price: "£20"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events and programs throughout the year
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge 
                    variant="outline" 
                    className="border-emerald-600 text-emerald-600"
                  >
                    {event.category}
                  </Badge>
                  <span className="text-lg font-bold text-teal-600">
                    {event.price}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {event.title}
                </h4>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  {event.description}
                </p>
                
                <Button 
                  size="sm" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          >
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
