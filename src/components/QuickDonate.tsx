
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Heart, PoundSterling, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const QuickDonate = () => {
  const [customAmount, setCustomAmount] = useState([50]);
  const [donationType, setDonationType] = useState("oneoff");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const donationAmounts = [10, 25, 50, 100];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount([amount]);
  };

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-6xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
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
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Why Donate */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-rose-600 mr-2" />
                    Why Donate to Us?
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p>Preserve authentic Muslim heritage artifacts and stories for future generations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p>Support educational programs and community outreach initiatives</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p>Maintain and restore our historic building and exhibition spaces</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p>Create inclusive spaces for intercultural dialogue and understanding</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-teal-600 mr-2" />
                    100% Donation Policy
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We guarantee that 100% of your donation goes directly to heritage preservation activities. 
                    All administrative costs are covered separately, ensuring your contribution makes the maximum impact 
                    on preserving Muslim heritage in Britain.
                  </p>
                </div>
              </div>

              {/* Right Column - Donation Form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Choose Your Donation
                  </h3>
                  
                  {/* Donation Type Selection */}
                  <div className="mb-6">
                    <RadioGroup 
                      value={donationType} 
                      onValueChange={setDonationType}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oneoff" id="oneoff" />
                        <label htmlFor="oneoff" className="text-sm font-medium text-gray-700">
                          One-off
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <label htmlFor="monthly" className="text-sm font-medium text-gray-700">
                          Monthly
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => handleAmountSelect(amount)}
                        className={`h-12 text-lg font-semibold transition-all duration-200 ${
                          selectedAmount === amount 
                            ? "bg-rose-600 hover:bg-rose-700 text-white" 
                            : "border-2 border-rose-200 hover:border-rose-600 hover:bg-rose-50"
                        }`}
                      >
                        <PoundSterling className="h-4 w-4 mr-1" />
                        {amount}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount Slider */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium mb-3 text-center">Or choose your amount</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>£10</span>
                        <span>£500</span>
                      </div>
                      <Slider
                        value={customAmount}
                        onValueChange={(value) => {
                          setCustomAmount(value);
                          setSelectedAmount(value[0]);
                        }}
                        max={500}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                      <div className="text-center">
                        <span className="text-xl font-bold text-rose-600">
                          £{selectedAmount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Donation Buttons */}
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Donate £{selectedAmount} {donationType === "monthly" ? "Monthly" : "Now"}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500">
                    Your donation is secure and goes directly to heritage preservation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickDonate;
