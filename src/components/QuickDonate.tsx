
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, PoundSterling } from "lucide-react";

const QuickDonate = () => {
  const donationAmounts = [10, 25, 50, 100];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Support Our Heritage
            </CardTitle>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your donation helps preserve Muslim heritage in Britain for future generations
            </p>
          </CardHeader>
          
          <CardContent className="pb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant="outline"
                  className="h-16 text-lg font-semibold border-2 border-teal-200 hover:border-teal-600 hover:bg-teal-50 transition-all duration-200"
                >
                  <PoundSterling className="h-5 w-5 mr-1" />
                  {amount}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold flex-1 sm:flex-none transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-full font-semibold flex-1 sm:flex-none transition-all duration-300"
              >
                Monthly Giving
              </Button>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Your donation is secure and goes directly to heritage preservation
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickDonate;
