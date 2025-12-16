export type ServiceItem = {
  slug: string;
  title: string;
  body: string;
};

export type ProductItem = {
  slug: string;
  title: string;
  body: string;
};

export const services: ServiceItem[] = [
  { slug: 'box-cricket', title: 'Box Cricket', body: 'Premium turf for intense matches.' },
  { slug: 'volleyball-court', title: 'Volleyball Court', body: 'Standard courts for pro play.' },
  { slug: 'basketball-court', title: 'Basketball Court', body: 'High-quality flooring systems.' },
  { slug: 'pickleball-court', title: 'Pickleball Court', body: 'Trending racket sport surfacing.' },
  { slug: 'football-court', title: 'Football Court', body: 'FIFA-standard artificial turf.' },
  { slug: 'paddleball-court', title: 'Paddleball Court', body: 'Durable courts for fast action.' },
  { slug: 'badminton-court', title: 'Badminton Court', body: 'Shock-absorbing wooden floors.' },
  { slug: 'swimming-pool', title: 'Swimming Pool', body: 'Temperature-controlled pools.' },
  { slug: 'tennis-court', title: 'Tennis Court', body: 'Acrylic, clay, and synth courts.' },
  { slug: 'multisport-tracks', title: 'Multisport Tracks', body: 'All-weather athletic tracks.' },
];

export const products: ProductItem[] = [
  { slug: 'sports-net', title: 'Sports Net', body: 'High-quality safety and practice nets.' },
  { slug: 'football-turf', title: 'Football Turf', body: 'Professional-grade football surfaces.' },
  { slug: 'cricket-turf', title: 'Cricket Turf', body: 'Durable turf for cricket pitches.' },
  {
    slug: 'artificial-grass',
    title: 'Artificial Grass',
    body: 'Lush, low-maintenance synthetic grass.',
  },
  { slug: 'landscape-turf', title: 'Landscape Turf', body: 'Aesthetic solutions for outdoor spaces.' },
  { slug: 'outdoor-gym', title: 'Outdoor Gym', body: 'Robust fitness gear for parks.' },
  { slug: 'pitch-equipment', title: 'Pitch Equipment', body: 'Essential gear for pitch maintenance.' },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return products.find((product) => product.slug === slug);
}


