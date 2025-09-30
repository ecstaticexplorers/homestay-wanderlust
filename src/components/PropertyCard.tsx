import { Star, Users } from "lucide-react";
import { Property } from "@/data/homestayData";
import { Card } from "@/components/ui/card";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-elevated cursor-pointer group">
      <div className="relative h-48 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🏡</span>
            </div>
            <p className="text-xs text-muted-foreground px-4">{property.image}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {property.name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">
          {property.subLocation.charAt(0).toUpperCase() + property.subLocation.slice(1)}
        </p>
        
        <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{property.capacity} guests</span>
          </div>
          <span>•</span>
          <span>{property.reviews} reviews</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-3">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="text-xs px-2 py-1 rounded-full bg-accent/50 text-accent-foreground"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-xs px-2 py-1 text-muted-foreground">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-baseline gap-1 pt-3 border-t">
          <span className="text-2xl font-bold text-foreground">₹{property.price}</span>
          <span className="text-sm text-muted-foreground">/ night</span>
        </div>
      </div>
    </Card>
  );
};
