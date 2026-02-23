export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  bannerImage: string;
  drivingDistance: string;
  driveLabel: string;
  commercialArea: string;
  commercialAreaLabel: string;
  district: string;
  districtLabel: string;
  apartments: string;
  apartmentsLabel: string;
  features: Feature[];
  propertyTypes: PropertyType[];
  sights: Sight[];
}

export interface Feature {
  id: string;
  name: string;
  icon: string;
}

export interface PropertyType {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Sight {
  id: string;
  image: string;
  title: string;
}

export const projects: Project[] = [
  {
    slug: "davochi-multihomes-onex-deidei",
    title: "Davochi Multihomes Onex",
    subtitle: "Deidei",
    description: "A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.",
    fullDescription: "For comfort matters and investors seeking high yields commercial spaces. Davochi offers exclusive residential apartments. Invest for commercial spaces and gain high percent appreciation in the real estate market.",
    image: "/image/projects/onex-landing.png",
    bannerImage: "/image/projects/onex-landing.png",
    drivingDistance: "1",
    driveLabel: "mins Drive Distance",
    commercialArea: "20",
    commercialAreaLabel: "mins Commercial Area",
    district: "1+",
    districtLabel: "Commercial District",
    apartments: "4+",
    apartmentsLabel: "Apartments/units",
    features: [
      { id: "1", name: "Garage Security Guard", icon: "garage" },
      { id: "2", name: "Automated Waste Management", icon: "waste" },
      { id: "3", name: "Imported Materials", icon: "materials" },
      { id: "4", name: "Fitted Kitchens", icon: "kitchen" },
      { id: "5", name: "Micro Apartments", icon: "apartments" },
      { id: "6", name: "Smart Homes", icon: "smart" },
    ],
    propertyTypes: [
      {
        id: "1",
        name: "Studio Flats",
        image: "/image/projects/onex-landing.png",
        description: "Compact studio apartments perfect for professionals",
      },
      {
        id: "2",
        name: "2-Bedroom Flats",
        image: "/image/projects/luxury-villa.png",
        description: "Spacious 2-bedroom units for growing families",
      },
    ],
    sights: [
      {
        id: "1",
        image: "/image/projects/onex-landing.png",
        title: "Panoramic Views",
      },
      {
        id: "2",
        image: "/image/projects/luxury-villa.png",
        title: "Modern Architecture",
      },
      {
        id: "3",
        image: "/image/projects/davochi-mall.png",
        title: "Community Center",
      },
      {
        id: "4",
        image: "/image/projects/nirvana-landing.png",
        title: "Recreational Area",
      },
    ],
  },
  {
    slug: "davochi-luxury-villa-dape",
    title: "Davochi Luxury Villa",
    subtitle: "Dape District",
    description: "A stunning luxury villa featuring modern architecture, state-of-the-art amenities, and breathtaking views.",
    fullDescription: "Experience elevated living with premium finishes, world-class facilities, and exclusive amenities designed for the discerning homeowner.",
    image: "/image/projects/luxury-villa.png",
    bannerImage: "/image/projects/luxury-villa.png",
    drivingDistance: "5",
    driveLabel: "mins Drive Distance",
    commercialArea: "15",
    commercialAreaLabel: "mins Commercial Area",
    district: "2+",
    districtLabel: "Premium Districts",
    apartments: "3",
    apartmentsLabel: "Villas",
    features: [
      { id: "1", name: "Garage Security Guard", icon: "garage" },
      { id: "2", name: "Automated Waste Management", icon: "waste" },
      { id: "3", name: "Imported Materials", icon: "materials" },
      { id: "4", name: "Fitted Kitchens", icon: "kitchen" },
      { id: "5", name: "Swimming Pool", icon: "pool" },
      { id: "6", name: "Smart Homes", icon: "smart" },
    ],
    propertyTypes: [
      {
        id: "1",
        name: "3-Bedroom Villas",
        image: "/image/projects/luxury-villa.png",
        description: "Luxurious 3-bedroom villas with private gardens",
      },
      {
        id: "2",
        name: "4-Bedroom Villas",
        image: "/image/projects/davochi-mall.png",
        description: "Premium 4-bedroom villas with exclusive amenities",
      },
    ],
    sights: [
      {
        id: "1",
        image: "/image/projects/luxury-villa.png",
        title: "Luxury Exteriors",
      },
      {
        id: "2",
        image: "/image/projects/nirvana-landing.png",
        title: "Premium Design",
      },
      {
        id: "3",
        image: "/image/projects/onex-landing.png",
        title: "Garden Spaces",
      },
      {
        id: "4",
        image: "/image/projects/acacia-landing.jpg",
        title: "Poolside Areas",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
