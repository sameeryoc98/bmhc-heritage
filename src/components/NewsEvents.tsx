
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ArrowRight, Newspaper } from "lucide-react";

const NewsEvents = () => {
  const news = [
    {
      title: "New Exhibition: 'Voices of British Islam' Opens",
      excerpt: "Discover the stories of British Muslims through interactive displays and personal narratives...",
      date: "2024-01-15",
      category: "Exhibition",
      image: "/placeholder.svg"
    },
    {
      title: "Heritage Centre Receives National Recognition",
      excerpt: "BMHC awarded prestigious heritage preservation grant from the National Lottery...",
      date: "2024-01-10",
      category: "News",
      image: "/placeholder.svg"
    },
    {
      title: "Community Iftar Brings Together 500 Guests",
      excerpt: "Annual interfaith iftar celebration highlights unity and shared values...",
      date: "2024-01-05",
      category: "Community",
      image: "/placeholder.svg"
    }
  ];

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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            News & Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest news and join us for upcoming events and programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-3">
                <Newspaper className="h-5 w-5 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
            </div>
            
            <div className="space-y-6">
              {news.map((article, index) => (
                <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full mt-6 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            </div>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant="outline" 
                        className="border-teal-600 text-teal-600"
                      >
                        {event.category}
                      </Badge>
                      <span className="text-lg font-bold text-green-600">
                        {event.price}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
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
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full mt-6 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
