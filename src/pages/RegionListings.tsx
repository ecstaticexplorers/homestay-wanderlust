import { useState, useMemo } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { locations, properties, Property } from "@/data/homestayData";
import { LocationFilter } from "@/components/LocationFilter";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [selectedSubLocations, setSelectedSubLocations] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleSubLocationToggle = (subLocationId: string) => {
    setSelectedSubLocations((prev) =>
      prev.includes(subLocationId)
        ? prev.filter((id) => id !== subLocationId)
        : [...prev, subLocationId]
    );
  };

  const filteredProperties = useMemo(() => {
    if (selectedSubLocations.length === 0) {
      return properties;
    }
    return properties.filter((property) =>
      selectedSubLocations.includes(property.subLocation)
    );
  }, [selectedSubLocations]);

  const FilterSidebar = () => (
    <div className="h-full bg-card border-r border-border overflow-y-auto">
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
        <h2 className="font-semibold text-lg flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Locations
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {selectedSubLocations.length > 0
            ? `${selectedSubLocations.length} filter${selectedSubLocations.length > 1 ? 's' : ''} applied`
            : 'All destinations'}
        </p>
      </div>
      
      {selectedSubLocations.length > 0 && (
        <div className="p-4 border-b border-border bg-muted/30">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedSubLocations([])}
            className="w-full"
          >
            Clear all filters
          </Button>
        </div>
      )}
      
      <div>
        {locations.map((location) => (
          <LocationFilter
            key={location.id}
            location={location}
            selectedSubLocations={selectedSubLocations}
            onSubLocationToggle={handleSubLocationToggle}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <div>
              <h1 className="font-bold text-lg">Himalayan Homestays</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Discover authentic mountain experiences
              </p>
            </div>
          </div>
          
          {/* Mobile Filter Toggle */}
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="sm">
                <Menu className="w-4 h-4 mr-2" />
                Filters
                {selectedSubLocations.length > 0 && (
                  <span className="ml-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {selectedSubLocations.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <SheetHeader className="p-4 border-b">
                <SheetTitle>Filter by Location</SheetTitle>
              </SheetHeader>
              <FilterSidebar />
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 h-[calc(100vh-4rem)] sticky top-16">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 lg:p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {selectedSubLocations.length > 0
                  ? 'Filtered Properties'
                  : 'All Properties'}
              </h2>
              <p className="text-muted-foreground">
                Showing {filteredProperties.length} homestay{filteredProperties.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters to see more results
                </p>
                <Button onClick={() => setSelectedSubLocations([])}>
                  Clear filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
