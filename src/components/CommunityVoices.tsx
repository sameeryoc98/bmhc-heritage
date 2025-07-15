
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const CommunityVoices = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Visitor & Researcher",
      image: "/placeholder.svg",
      quote: "The BMHC has transformed how I understand British Muslim history. The collections are extraordinary and the staff incredibly knowledgeable. A truly inspiring place.",
      rating: 5
    },
    {
      name: "James Robertson",
      role: "Local Volunteer",
      image: "/placeholder.svg",
      quote: "Volunteering at BMHC has been one of the most rewarding experiences. It's wonderful to see how heritage brings communities together and builds understanding.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      role: "Regular Donor",
      image: "/placeholder.svg",
      quote: "Supporting BMHC means supporting our shared future. Every pound donated helps preserve stories that might otherwise be lost forever. It's an investment in understanding.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Community Voices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from visitors, volunteers, and supporters who are part of our heritage community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="h-8 w-8 text-rose-600" />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your visit or involvement with BMHC. Your story could inspire others to explore their heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Leave a Review
              </button>
              <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityVoices;
