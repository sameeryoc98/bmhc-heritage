
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Camera, Music, Paintbrush, Coffee } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      title: "Heritage Tours",
      description: "Guided tours through our historic collections and exhibits",
      icon: Users,
      category: "Educational",
      frequency: "Daily",
      participants: "15-30"
    },
    {
      title: "Islamic Calligraphy Workshops",
      description: "Learn the beautiful art of Arabic calligraphy from expert instructors",
      icon: Paintbrush,
      category: "Arts & Crafts",
      frequency: "Weekly",
      participants: "8-12"
    },
    {
      title: "Community Reading Circle",
      description: "Monthly discussions of Islamic literature and contemporary Muslim authors",
      icon: BookOpen,
      category: "Literary",
      frequency: "Monthly",
      participants: "10-20"
    },
    {
      title: "Photography Club",
      description: "Capture the beauty of Islamic architecture and community life",
      icon: Camera,
      category: "Creative",
      frequency: "Bi-weekly",
      participants: "6-15"
    },
    {
      title: "Traditional Music Sessions",
      description: "Learn and perform traditional Islamic music and nasheeds",
      icon: Music,
      category: "Musical",
      frequency: "Weekly",
      participants: "8-25"
    },
    {
      title: "Community Coffee Mornings",
      description: "Informal gatherings for community members to connect and share stories",
      icon: Coffee,
      category: "Social",
      frequency: "Weekly",
      participants: "20-50"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in various activities that celebrate our heritage and bring our community together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <activity.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {activity.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Frequency:</span>
                    <span className="font-medium">{activity.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Participants:</span>
                    <span className="font-medium">{activity.participants}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Join Activity
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
          >
            View All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
