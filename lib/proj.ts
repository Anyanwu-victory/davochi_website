// data/projects.ts

export type PropertyType = {
  title: string
  description: string
  image: string
}

export type EstateFeature = {
  icon: string
  label: string
}

export type ProjectSight = {
  image: string
  category: 'all' | 'exterior' | 'interior'
}

export type ProjectStat = {
  value: string
  label: string
  icon: string
}

export type Project = {
  id: number
  slug: string
  title: string
  fullTitle: string
  subtitle: string
  location: string
  category: string
  shortDescription: string
  description: string
  heroImage: string
  mainImage: string
  brochureUrl?: string
  stats: ProjectStat[]
  estateFeatures: EstateFeature[]
  propertyTypes: PropertyType[]
  sights: ProjectSight[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'davochi-mall',
    title: 'Davochi Mall',
    fullTitle: 'Davochi Mall, Abuja',
    subtitle: 'Commercial Complex',
    location: 'Central Business District, Abuja',
    category: 'Mall Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'Cliffside represents the future of residential living with its stunning 4-bedroom smart terrace homes. Priced at ₦280 million, these 8 exclusive units feature panoramic glass-top views, integrated smart home technology, two spacious living rooms, and employee quarters. Located near quality schools and SPAR Supermarket with excellent road networks, Cliffside is perfect for tech-savvy families seeking convenience and sophistication. A flexible 70/30 payment plan makes ownership achievable.',
    heroImage: '/image/projects/davochi-mall.png',
    mainImage: '/image/projects/acacia-landing.jpg',
    stats: [
      { value: '2 mins', label: 'To Central Business District', icon: 'location' },
      { value: '10 mins', label: 'To Abuja City Centre', icon: 'clock' },
      { value: '3+', label: 'International Schools', icon: 'school' },
      { value: '6+', label: 'Major Development Projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'control', label: 'Central Security Control' },
      { icon: 'recognition', label: 'Automatic Numberplate Recognition' },
      { icon: 'biometric', label: 'Pedestrian Electronic Access Control' },
      { icon: 'facial', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
      { icon: 'camera', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Retail Units',
        description: 'Ground floor units of 30–120 sqm with high street frontage',
        image: '/image/projects/property_type_1.jpg',
      },
      {
        title: 'Office Spaces',
        description: 'Spacious layouts with 24/7 concierge and business facilities',
        image: '/image/projects/porperty_type_2.jpg',
      },
    ],
    sights: [
      { image: '/image/projects/davochi-mall.png', category: 'exterior' },
      { image: '/image/projects/davochi-mall.png', category: 'interior' },
      { image: '/image/projects/davochi-mall.png', category: 'exterior' },
      { image: '/image/projects/davochi-mall.png', category: 'interior' },
    ],
  },
  {
    id: 2,
    slug: 'luxury-villa',
    title: 'Luxury Villa',
    fullTitle: 'Luxury Villa, Asokoro',
    subtitle: '5-Bedroom Semidetached',
    location: 'Asokoro, Abuja',
    category: 'Villa Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'Set within one of Abuja\'s most prestigious neighborhoods, this 5-bedroom semidetached villa redefines luxury residential living. Each home is finished to the highest standard with imported fittings, smart home integration, and landscaped surroundings that create a true sanctuary.',
    heroImage: '/image/projects/luxury-villa.png',
    mainImage: '/image/projects/luxury-villa.png',
    stats: [
      { value: '5 mins', label: 'To Asokoro District', icon: 'location' },
      { value: '15 mins', label: 'To City Centre', icon: 'clock' },
      { value: '2+', label: 'International Schools', icon: 'school' },
      { value: '3+', label: 'Major Development Projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'shield', label: 'Central Security Control' },
      { icon: 'camera', label: 'Automatic Numberplate Recognition' },
      { icon: 'door', label: 'Pedestrian Electronic Access Control' },
      { icon: 'eye', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Type A Villa',
        description: '5-bedroom semidetached with BQ and private garden',
        image: '/image/projects/luxury-villa.png',
      },
      {
        title: 'Type B Villa',
        description: '5-bedroom fully detached with pool and carport',
        image: '/image/projects/luxury-villa.png',
      },
    ],
    sights: [
      { image: '/image/projects/luxury-villa.png', category: 'exterior' },
      { image: '/image/projects/luxury-villa.png', category: 'interior' },
      { image: '/image/projects/luxury-villa.png', category: 'exterior' },
      { image: '/image/projects/luxury-villa.png', category: 'interior' },
    ],
  },
  {
    id: 3,
    slug: 'mirvana-heights',
    title: 'Mirvana Heights',
    fullTitle: 'Mirvana Heights, Guzape',
    subtitle: 'Redevelopment Apartment',
    location: 'Guzape District, Abuja',
    category: 'Apartment Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'For business owners and investors seeking high-yield commercial spaces, Mirvana Heights stands as a landmark redevelopment at the heart of Guzape District. The complex provides a modern 4-floor residential campus with 28 units per floor, prices ranging from ₦85 million to ₦75 million depending on floor level.',
    heroImage: '/image/projects/nirvana-landing.png',
    mainImage: '/image/projects/nirvana-landing.png',
    stats: [
      { value: '1 mins', label: 'To Guzape district expressway', icon: 'location' },
      { value: '20 mins', label: 'To Abuja city centre', icon: 'clock' },
      { value: '1+', label: 'International school', icon: 'school' },
      { value: '4+', label: 'Major development projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'shield', label: 'Central Security Control' },
      { icon: 'camera', label: 'Automatic Numberplate Recognition' },
      { icon: 'door', label: 'Pedestrian Electronic Access Control' },
      { icon: 'eye', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Nirvana Height',
        description: 'Block of flats of 1, 2 & 3 bedroom unit',
        image: '/image/projects/nirvana-landing.png',
      },
      {
        title: 'Davochi Mill',
        description: 'Spacious Lounge and Store with 32 unit of commercial space',
        image: '/image/projects/davochi-mall.png',
      },
    ],
    sights: [
      { image: '/image/projects/nirvana-landing.png', category: 'exterior' },
      { image: '/image/projects/nirvana-landing.png', category: 'exterior' },
      { image: '/image/projects/nirvana-landing.png', category: 'interior' },
      { image: '/image/projects/nirvana-landing.png', category: 'exterior' },
    ],
  },
  {
    id: 4,
    slug: 'onex',
    title: 'Onex',
    fullTitle: 'Davochi Multihomes Onex, Deidei',
    subtitle: '5-Bedroom Townhouse',
    location: 'Deidei, Abuja',
    category: 'Villas Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'For business owners and investors seeking high-yield commercial spaces, Davochi offers two standout developments. Onex at Deidei is a modern 4-floor residential campus with 28 units per floor. Prices range from ₦85 million to ₦75 million depending on floor level, with over 28 species featuring contemporary design, ample parking, and luxurious Diedei-themed fittings perfect for retail, offices, or hospitality ventures.',
    heroImage: '/image/projects/onex-landing.png',
    mainImage: '/image/projects/onex-landing.png',
    stats: [
      { value: '1 mins', label: 'To Guzape district expressway', icon: 'location' },
      { value: '20 mins', label: 'To Abuja city centre', icon: 'clock' },
      { value: '1+', label: 'International school', icon: 'school' },
      { value: '4+', label: 'Major development projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'shield', label: 'Central Security Control' },
      { icon: 'camera', label: 'Automatic Numberplate Recognition' },
      { icon: 'door', label: 'Pedestrian Electronic Access Control' },
      { icon: 'eye', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Nirvana Height',
        description: 'Block of flats of 1, 2 & 3 bedroom unit',
        image: '/image/projects/nirvana-landing.png',
      },
      {
        title: 'Davochi Mill',
        description: 'Spacious Lounge and Store with 32 unit of commercial space',
        image: '/image/projects/davochi-mall.png',
      },
    ],
    sights: [
      { image: '/image/projects/onex-landing.png', category: 'exterior' },
      { image: '/image/projects/onex-landing.png', category: 'exterior' },
      { image: '/image/projects/onex-landing.png', category: 'interior' },
      { image: '/image/projects/onex-landing.png', category: 'exterior' },
    ],
  },
  {
    id: 5,
    slug: 'acacia',
    title: 'Acacia',
    fullTitle: 'Davochi Acacia Estate, Abuja',
    subtitle: '4-Bedroom Terrace',
    location: 'Life Camp, Abuja',
    category: 'Terrace Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'Acacia Estate offers beautifully designed 4-bedroom terrace homes in one of Abuja\'s fastest-growing neighbourhoods. Each unit is crafted with attention to detail, featuring open-plan living, top-tier finishes, and communal spaces that promote a connected lifestyle.',
    heroImage: '/image/projects/acacia-landing.jpg',
    mainImage: '/image/projects/acacia-landing.jpg',
    stats: [
      { value: '3 mins', label: 'To Life Camp Expressway', icon: 'location' },
      { value: '18 mins', label: 'To City Centre', icon: 'clock' },
      { value: '2+', label: 'International Schools', icon: 'school' },
      { value: '5+', label: 'Major Development Projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'shield', label: 'Central Security Control' },
      { icon: 'camera', label: 'Automatic Numberplate Recognition' },
      { icon: 'door', label: 'Pedestrian Electronic Access Control' },
      { icon: 'eye', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Acacia Terrace A',
        description: '4-bedroom terrace with BQ and 2 car parking',
        image: '/image/projects/acacia-landing.jpg',
      },
      {
        title: 'Acacia Terrace B',
        description: '4-bedroom corner terrace with extended garden',
        image: '/image/projects/acacia-landing.jpg',
      },
    ],
    sights: [
      { image: '/image/projects/acacia-landing.jpg', category: 'exterior' },
      { image: '/image/projects/acacia-landing.jpg', category: 'interior' },
      { image: '/image/projects/acacia-landing.jpg', category: 'exterior' },
      { image: '/image/projects/acacia-landing.jpg', category: 'interior' },
    ],
  },
  {
    id: 6,
    slug: 'oak',
    title: 'Oak',
    fullTitle: 'Davochi Oak Residences, Abuja',
    subtitle: '5-Bedroom Fully Detached Duplex',
    location: 'Maitama, Abuja',
    category: 'Duplex Project',
    shortDescription: 'A stunning luxury residential development featuring modern architecture, state-of-the-art amenities, and premium finishes.',
    description:
      'Oak Residences represents the pinnacle of Davochi\'s residential offering. These 5-bedroom fully detached duplexes in Maitama are designed for discerning buyers who demand space, privacy, and prestige. Each property features a swimming pool, BQ, and a private driveway within a fully-gated estate.',
    heroImage: '/image/projects/oak-landing.jpg',
    mainImage: '/image/projects/oak-landing.jpg',
    stats: [
      { value: '2 mins', label: 'To Maitama District', icon: 'location' },
      { value: '10 mins', label: 'To Transcorp Hilton', icon: 'clock' },
      { value: '4+', label: 'International Schools', icon: 'school' },
      { value: '6+', label: 'Major Development Projects', icon: 'building' },
    ],
    estateFeatures: [
      { icon: 'shield', label: 'Central Security Control' },
      { icon: 'camera', label: 'Automatic Numberplate Recognition' },
      { icon: 'door', label: 'Pedestrian Electronic Access Control' },
      { icon: 'eye', label: 'Facial Recognition' },
      { icon: 'sensor', label: 'Motion Sensors' },
      { icon: 'alarm', label: 'Security Alarm' },
    ],
    propertyTypes: [
      {
        title: 'Oak Duplex A',
        description: '5-bedroom fully detached with pool and 3-car garage',
        image: '/image/projects/oak-landing.jpg',
      },
      {
        title: 'Oak Duplex B',
        description: '5-bedroom fully detached corner unit with extra garden',
        image: '/image/projects/oak-landing.jpg',
      },
    ],
    sights: [
      { image: '/image/projects/oak-landing.jpg', category: 'exterior' },
      { image: '/image/projects/oak-landing.jpg', category: 'exterior' },
      { image: '/image/projects/oak-landing.jpg', category: 'interior' },
      { image: '/image/projects/oak-landing.jpg', category: 'exterior' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}