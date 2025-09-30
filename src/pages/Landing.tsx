import { useNavigate } from "react-router-dom";
import { MapPin, Mountain, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  locationCount: number;
}

const regions: Region[] = [
  {
    id: "north-bengal",
    name: "North Bengal",
    description: "Explore Darjeeling, Kalimpong, Dooars, and Sikkim",
    image: "region-north-bengal",
    locationCount: 5,
  },
  {
    id: "kashmir",
    name: "Kashmir",
    description: "Discover the paradise on earth",
    image: "region-kashmir",
    locationCount: 4,
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    description: "Experience the land of gods",
    image: "region-himachal",
    locationCount: 6,
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    description: "Adventure in the Garhwal and Kumaon hills",
    image: "region-uttarakhand",
    locationCount: 5,
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <div>
              <h1 className="font-bold text-2xl">Himalayan Homestays</h1>
              <p className="text-sm text-muted-foreground">
                Discover authentic mountain experiences across the Himalayas
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Mountain Retreat
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choose your destination and explore authentic homestays in the most beautiful regions of the Himalayas
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-primary" />
                <span>Scenic Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <Trees className="w-5 h-5 text-primary" />
                <span>Nature Escapes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Authentic Stays</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Select Your Region</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <Card
                key={region.id}
                className="cursor-pointer group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                onClick={() => navigate(`/region/${region.id}`)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Mountain className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {region.name}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {region.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {region.locationCount} locations available
                      </span>
                      <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
