
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Building } from "lucide-react";

const AboutBMHC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Rich Heritage",
      description: "Preserving centuries of Muslim contributions to British society"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Bringing together diverse communities through shared history"
    },
    {
      icon: Award,
      title: "Educational Excellence",
      description: "Inspiring learning through interactive exhibitions and programs"
    },
    {
      icon: Building,
      title: "Historic Building",
      description: "A beautifully restored space that tells our story"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About the British Muslim Heritage Centre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to preserving, celebrating, and sharing the rich heritage of Muslims in Britain, 
            fostering understanding and unity through our shared history.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-teal-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                The British Muslim Heritage Centre stands as a beacon of cultural preservation and community unity. 
                We collect, preserve, and share the stories that have shaped Muslim communities across Britain for over a millennium.
              </p>
              <p className="text-lg text-gray-700">
                Through our exhibitions, educational programs, and community events, we bridge the past and present, 
                ensuring that future generations understand and appreciate the diverse tapestry of British Muslim heritage.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/our-mission.jpg" 
                alt="BMHC interior exhibition space"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Explore Our Collections</h4>
                <p className="text-sm opacity-90">Discover artifacts spanning centuries of history</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBMHC;
