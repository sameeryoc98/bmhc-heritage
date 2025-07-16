
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HistoricBuildingSlider = () => {
  const buildings = [
    {
      id: 1,
      image: "/hero.jpg",
      title: "Historic Main Building",
      description: "Home to centuries of Muslim heritage in Britain",
    },
    {
      id: 2,
      image: "/hero-1.jpg",
      title: "Heritage Gallery",
      description: "Showcasing Islamic art and cultural artifacts",
    },
    {
      id: 3,
      image: "/hero-2.jpg",
      title: "Prayer Hall",
      description: "Beautiful architecture from the 19th century",
    },
    {
      id: 4,
      image: "/hero-3.jpg",
      title: "Library Wing",
      description: "Preserving Islamic manuscripts and literature",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-teal-600 rounded-3xl blur opacity-20"></div>
      <Carousel className="relative w-full max-w-lg mx-auto">
        <CarouselContent>
          {buildings.map((building) => (
            <CarouselItem key={building.id}>
              <Card className="border-0  rounded-3xl">
                <CardContent className="p-0">
                  <div className="relative rounded-3xl">
                    <img
                      src={building.image}
                      alt={building.title}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-3xl"
                    />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {building.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {building.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default HistoricBuildingSlider;
