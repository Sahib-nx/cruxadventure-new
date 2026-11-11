export interface Destination {
  id: string;
  name: string;
  badges: string[];
  description: string;
  actionText: string;
  image: string;
  alt: string;
}

export interface Experience {
  id: string;
  title: string;
  category: 'ALL' | 'ADVENTURE' | 'CULTURE' | 'NATURE' | 'HERITAGE';
  categoryLabel: string;
  location: string;
  subLocation: string;
  description: string;
  duration: string;
  exclusivity: string;
  image: string;
}

export interface PackageItem {
  id: string;
  title: string;
  durationDays: number;
  durationNights: number;
  pricePerPerson: number;
  isPopular?: boolean;
  summary: string;
  tags: string[];
  inclusions: string[];
}

export interface CircuitStage {
  id: string;
  stageNumber: string;
  name: string;
  title: string;
  altitude: string;
  transitTime: string;
  keyHighlight: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  aspect?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  stars: number;
}
