
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Target, Clock, Users } from "lucide-react";

const Appeals = () => {
  const campaigns = [
    {
      title: "Preserve Historic Manuscripts",
      description: "Help us digitize and preserve rare Islamic manuscripts from the 12th century",
      raised: 15000,
      target: 25000,
      supporters: 89,
      daysLeft: 23,
      image: "/placeholder.svg"
    },
    {
      title: "Community Education Program",
      description: "Expand our educational outreach to schools across the UK",
      raised: 8500,
      target: 15000,
      supporters: 42,
      daysLeft: 45,
      image: "/placeholder.svg"
    },
    {
      title: "Heritage Building Restoration",
      description: "Restore the historic minaret and create accessible pathways",
      raised: 32000,
      target: 50000,
      supporters: 156,
      daysLeft: 67,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Appeals & Campaigns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in preserving our heritage for future generations. Every contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                  {Math.round((campaign.raised / campaign.target) * 100)}% funded
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {campaign.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{campaign.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">
                      £{campaign.raised.toLocaleString()} of £{campaign.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(campaign.raised / campaign.target) * 100} className="h-2" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="flex flex-col items-center">
                    <Users className="h-4 w-4 text-teal-600 mb-1" />
                    <span className="text-sm font-semibold text-gray-900">{campaign.supporters}</span>
                    <span className="text-xs text-gray-600">Supporters</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-rose-600 mb-1" />
                    <span className="text-sm font-semibold text-gray-900">{campaign.daysLeft}</span>
                    <span className="text-xs text-gray-600">Days left</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Target className="h-4 w-4 text-green-600 mb-1" />
                    <span className="text-sm font-semibold text-gray-900">
                      £{(campaign.target - campaign.raised).toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-600">To go</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full font-semibold transition-all duration-300"
                >
                  Support This Appeal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Appeals;
