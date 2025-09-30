export interface Property {
  id: string;
  name: string;
  subLocation: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  capacity: number;
  amenities: string[];
}

export interface SubLocation {
  id: string;
  name: string;
  propertyCount: number;
}

export interface Location {
  id: string;
  name: string;
  subLocations: SubLocation[];
}

export const locations: Location[] = [
  {
    id: "darjeeling",
    name: "Darjeeling & Offbeat",
    subLocations: [
      { id: "bijanbari", name: "Bijanbari", propertyCount: 8 },
      { id: "mirik", name: "Mirik", propertyCount: 12 },
      { id: "kurseong", name: "Kurseong", propertyCount: 10 },
      { id: "takdah", name: "Takdah", propertyCount: 6 },
      { id: "tinchuley", name: "Tinchuley", propertyCount: 7 },
    ],
  },
  {
    id: "kalimpong",
    name: "Kalimpong & Offbeat",
    subLocations: [
      { id: "lava", name: "Lava", propertyCount: 9 },
      { id: "lolegaon", name: "Lolegaon", propertyCount: 11 },
      { id: "kolakham", name: "Kolakham", propertyCount: 5 },
      { id: "rishop", name: "Rishop", propertyCount: 8 },
      { id: "pedong", name: "Pedong", propertyCount: 6 },
    ],
  },
  {
    id: "dooars",
    name: "Dooars & Offbeat",
    subLocations: [
      { id: "lataguri", name: "Lataguri", propertyCount: 14 },
      { id: "gorumara", name: "Gorumara", propertyCount: 10 },
      { id: "samsing", name: "Samsing", propertyCount: 7 },
      { id: "suntaleykhola", name: "Suntaleykhola", propertyCount: 5 },
      { id: "bindu", name: "Bindu", propertyCount: 6 },
    ],
  },
  {
    id: "sikkim",
    name: "Sikkim & Offbeat",
    subLocations: [
      { id: "gangtok", name: "Gangtok", propertyCount: 15 },
      { id: "pelling", name: "Pelling", propertyCount: 12 },
      { id: "lachung", name: "Lachung", propertyCount: 8 },
      { id: "namchi", name: "Namchi", propertyCount: 6 },
      { id: "ravangla", name: "Ravangla", propertyCount: 9 },
    ],
  },
  {
    id: "bhutan",
    name: "Bhutan Border Areas",
    subLocations: [
      { id: "jaigaon", name: "Jaigaon", propertyCount: 11 },
      { id: "phuentsholing", name: "Phuentsholing", propertyCount: 13 },
      { id: "samtse", name: "Samtse", propertyCount: 7 },
      { id: "haa", name: "Haa Valley", propertyCount: 5 },
    ],
  },
];

export const properties: Property[] = [
  // Darjeeling & Offbeat
  {
    id: "p1",
    name: "Mountain View Heritage Homestay",
    subLocation: "bijanbari",
    location: "darjeeling",
    image: "homestay-mountain-1",
    price: 2500,
    rating: 4.8,
    reviews: 127,
    capacity: 4,
    amenities: ["WiFi", "Mountain View", "Parking", "Kitchen"],
  },
  {
    id: "p2",
    name: "Sunrise Villa Bijanbari",
    subLocation: "bijanbari",
    location: "darjeeling",
    image: "homestay-sunrise-1",
    price: 3200,
    rating: 4.9,
    reviews: 95,
    capacity: 6,
    amenities: ["WiFi", "Garden", "Balcony", "Breakfast"],
  },
  {
    id: "p3",
    name: "Tea Garden Cottage",
    subLocation: "bijanbari",
    location: "darjeeling",
    image: "homestay-tea-1",
    price: 2800,
    rating: 4.7,
    reviews: 143,
    capacity: 5,
    amenities: ["Tea Garden", "WiFi", "Fireplace", "Parking"],
  },
  {
    id: "p4",
    name: "Mirik Lake View Stay",
    subLocation: "mirik",
    location: "darjeeling",
    image: "homestay-lake-1",
    price: 3500,
    rating: 4.9,
    reviews: 182,
    capacity: 6,
    amenities: ["Lake View", "WiFi", "Garden", "Breakfast"],
  },
  {
    id: "p5",
    name: "Kurseong Pine Retreat",
    subLocation: "kurseong",
    location: "darjeeling",
    image: "homestay-pine-1",
    price: 2900,
    rating: 4.6,
    reviews: 78,
    capacity: 4,
    amenities: ["Forest View", "WiFi", "Fireplace", "Kitchen"],
  },
  
  // Kalimpong & Offbeat
  {
    id: "p6",
    name: "Lava Forest Lodge",
    subLocation: "lava",
    location: "kalimpong",
    image: "homestay-forest-1",
    price: 3100,
    rating: 4.8,
    reviews: 156,
    capacity: 5,
    amenities: ["Forest View", "WiFi", "Bonfire", "Parking"],
  },
  {
    id: "p7",
    name: "Lolegaon Cloud Villa",
    subLocation: "lolegaon",
    location: "kalimpong",
    image: "homestay-cloud-1",
    price: 3800,
    rating: 4.9,
    reviews: 203,
    capacity: 7,
    amenities: ["Mountain View", "WiFi", "Garden", "Breakfast"],
  },
  {
    id: "p8",
    name: "Rishop Valley Homestay",
    subLocation: "rishop",
    location: "kalimpong",
    image: "homestay-valley-1",
    price: 2700,
    rating: 4.7,
    reviews: 89,
    capacity: 4,
    amenities: ["Valley View", "WiFi", "Kitchen", "Parking"],
  },
  
  // Dooars & Offbeat
  {
    id: "p9",
    name: "Gorumara Wildlife Stay",
    subLocation: "gorumara",
    location: "dooars",
    image: "homestay-wildlife-1",
    price: 4200,
    rating: 4.9,
    reviews: 245,
    capacity: 8,
    amenities: ["Wildlife Tours", "WiFi", "Garden", "Breakfast"],
  },
  {
    id: "p10",
    name: "Lataguri Jungle Cottage",
    subLocation: "lataguri",
    location: "dooars",
    image: "homestay-jungle-1",
    price: 3600,
    rating: 4.8,
    reviews: 167,
    capacity: 6,
    amenities: ["Jungle View", "WiFi", "Bonfire", "Parking"],
  },
  {
    id: "p11",
    name: "Samsing Tea Estate Stay",
    subLocation: "samsing",
    location: "dooars",
    image: "homestay-estate-1",
    price: 3200,
    rating: 4.7,
    reviews: 134,
    capacity: 5,
    amenities: ["Tea Garden", "WiFi", "Kitchen", "Breakfast"],
  },
  
  // Sikkim & Offbeat
  {
    id: "p12",
    name: "Gangtok Hill Resort",
    subLocation: "gangtok",
    location: "sikkim",
    image: "homestay-resort-1",
    price: 4500,
    rating: 4.9,
    reviews: 312,
    capacity: 8,
    amenities: ["City View", "WiFi", "Restaurant", "Parking"],
  },
  {
    id: "p13",
    name: "Pelling Monastery View",
    subLocation: "pelling",
    location: "sikkim",
    image: "homestay-monastery-1",
    price: 3900,
    rating: 4.8,
    reviews: 198,
    capacity: 6,
    amenities: ["Monastery View", "WiFi", "Garden", "Breakfast"],
  },
  {
    id: "p14",
    name: "Lachung Mountain Lodge",
    subLocation: "lachung",
    location: "sikkim",
    image: "homestay-lodge-1",
    price: 5200,
    rating: 4.9,
    reviews: 176,
    capacity: 7,
    amenities: ["Snow View", "WiFi", "Fireplace", "Breakfast"],
  },
  
  // Bhutan Border Areas
  {
    id: "p15",
    name: "Jaigaon Border Homestay",
    subLocation: "jaigaon",
    location: "bhutan",
    image: "homestay-border-1",
    price: 2400,
    rating: 4.6,
    reviews: 92,
    capacity: 4,
    amenities: ["WiFi", "Parking", "Kitchen", "City Access"],
  },
  {
    id: "p16",
    name: "Phuentsholing Gateway Stay",
    subLocation: "phuentsholing",
    location: "bhutan",
    image: "homestay-gateway-1",
    price: 3300,
    rating: 4.8,
    reviews: 145,
    capacity: 6,
    amenities: ["WiFi", "Garden", "Breakfast", "Parking"],
  },
];
