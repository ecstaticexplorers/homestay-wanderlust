import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Location } from "@/data/homestayData";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface LocationFilterProps {
  location: Location;
  selectedSubLocations: string[];
  onSubLocationToggle: (subLocationId: string) => void;
}

export const LocationFilter = ({
  location,
  selectedSubLocations,
  onSubLocationToggle,
}: LocationFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const totalSubLocations = location.subLocations.length;
  const selectedCount = location.subLocations.filter(sub => 
    selectedSubLocations.includes(sub.id)
  ).length;

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          )}
          <span className="font-medium text-foreground text-left">
            {location.name}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {selectedCount > 0 ? `${selectedCount}/` : ''}{totalSubLocations}
        </span>
      </button>
      
      {isExpanded && (
        <div className="bg-accent/20 py-2">
          {location.subLocations.map((subLocation) => (
            <div
              key={subLocation.id}
              className="px-4 py-2 hover:bg-accent/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={subLocation.id}
                  checked={selectedSubLocations.includes(subLocation.id)}
                  onCheckedChange={() => onSubLocationToggle(subLocation.id)}
                />
                <Label
                  htmlFor={subLocation.id}
                  className="flex-1 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">{subLocation.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {subLocation.propertyCount}
                  </span>
                </Label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
