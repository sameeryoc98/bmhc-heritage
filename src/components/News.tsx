
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Newspaper } from "lucide-react";

const News = () => {
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
    },
    {
      title: "Youth Program Launches New Initiative",
      excerpt: "Empowering young Muslims through mentorship and leadership development programs...",
      date: "2024-01-03",
      category: "Youth",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-3">
              <Newspaper className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Latest News</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings and developments at BMHC
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-4 p-0 text-teal-600 hover:text-teal-700"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
