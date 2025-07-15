
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-teal-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23129A9E%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Preserving Our
            <span className="text-teal-600"> Muslim Heritage</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
            Discover the rich history and vibrant culture of Muslims in Britain. From historical artifacts to contemporary stories, we celebrate our shared heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button 
              size="lg" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visit Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore Heritage
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">74,587</div>
              <div className="text-sm text-gray-600">Visitors</div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Events</div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-cyan-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Historic</div>
              <div className="text-sm text-gray-600">Building</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-600 rounded-3xl blur opacity-20"></div>
            <img 
              src="/public/hero.jpg"
              alt="British Muslim Heritage Centre historic building"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Historic Building</h3>
              <p className="text-sm text-gray-600">Home to centuries of Muslim heritage in Britain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
