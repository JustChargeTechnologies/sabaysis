export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceWhyChoose = {
  title: string;
  description: string;
};

export type ServiceDetailData = {
  slug: string;
  bannerTitle: string;
  bannerImage?: string;
  welcomeText: string;
  servicesTitle: string;
  servicesDescription: string;
  features: ServiceFeature[];
  whyChooseTitle: string;
  whyChooseItems: ServiceWhyChoose[];
  whyChooseOurTitle?: string;
  whyChooseOurItems?: ServiceWhyChoose[];
  typesTitle?: string;
  typesItems?: ServiceFeature[];
  companyWhyTitle?: string;
  companyWhyItems?: ServiceWhyChoose[];
};

export const serviceDetails: ServiceDetailData[] = [
  {
    slug: 'box-cricket',
    bannerTitle: 'Box Cricket Services',
    bannerImage:
      'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "Welcome to Sabaysis Sports & Infra, your trusted partner in building world-class cricket turfs. We specialize in providing high-quality cricket ground services, ensuring that you get the perfect playing surface for both professional and amateur cricket matches. Whether you're setting up a turf for a sports complex, school, or private facility, we have the expertise and experience to deliver exceptional results.",
    servicesTitle: 'Our Cricket Turf Services',
    servicesDescription:
      'Comprehensive solutions for cricket turf installation, maintenance, and refurbishment tailored to your needs.',
    features: [
      {
        title: 'Cricket Turf Installation',
        description:
          'We design and install high-quality turfs that meet international standards, ensuring optimal performance and durability.',
      },
      {
        title: 'Turf Maintenance',
        description:
          'Regular maintenance to keep your turf level, lush, and consistent throughout the year.',
      },
      {
        title: 'Artificial Turf Solutions',
        description:
          'Durable, low-maintenance artificial turfs for both practice fields and match grounds.',
      },
      {
        title: 'Customized Turf Design',
        description:
          "Tailored turf solutions based on your ground's size, location, and usage.",
      },
      {
        title: 'Turf Renovation & Refurbishment',
        description:
          'Revitalize worn-out turfs with re-leveling, patch replacement, and surface restoration.',
      },
    ],
    whyChooseTitle: 'Why Choose Sabaysis Sports & Infra?',
    whyChooseItems: [
      {
        title: 'Expertise',
        description:
          'Our team has years of experience in the sports infrastructure industry, specifically in cricket turf installation and maintenance.',
      },
      {
        title: 'Quality Assurance',
        description:
          'We only use the best materials and technologies to ensure that your cricket turf lasts for years and provides a professional-quality playing surface.',
      },
      {
        title: 'End-to-End Service',
        description:
          'From design to installation, maintenance to refurbishment, we offer a full suite of services to meet your cricket turf needs.',
      },
      {
        title: 'Affordable Solutions',
        description:
          'We provide cost-effective options tailored to your budget without compromising on quality.',
      },
    ],
  },
  {
    slug: 'volleyball-court',
    bannerTitle: 'Premium Volleyball Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At SABAYSIS SPORTS & INFRA, we specialize in designing and constructing high-performance volleyball courts for schools, sports clubs, residential areas, and professional arenas. Our courts are built with top-quality materials, precision engineering, and innovative designs to ensure durability, safety, and optimal playability for both indoor and outdoor settings.",
    servicesTitle: 'Our Volleyball Court Services',
    servicesDescription:
      'Comprehensive volleyball court construction, installation, and maintenance services tailored to your needs.',
    features: [
      {
        title: 'Volleyball Court Installation',
        description:
          'Full-scale construction of indoor and outdoor courts with professional-grade materials and precision engineering.',
      },
      {
        title: 'Synthetic & Wooden Flooring',
        description:
          'High-durability surfaces for professional and recreational play, designed for optimal performance and safety.',
      },
      {
        title: 'Beach Volleyball Courts',
        description:
          'Sand-based courts designed for smooth and high-energy gameplay, built to FIVB standards.',
      },
      {
        title: 'Volleyball Court Resurfacing & Repair',
        description:
          'Upgrade or restore your existing court for better performance, extending its lifespan and playability.',
      },
      {
        title: 'Line Marking & Customization',
        description:
          'Precision marking for different volleyball court sizes, ensuring accurate dimensions and professional appearance.',
      },
      {
        title: 'LED Lighting Solutions',
        description:
          'High-quality illumination for nighttime matches, providing optimal visibility and energy efficiency.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Our Volleyball Courts?',
    whyChooseOurItems: [
      {
        title: 'Superior Court Surfaces',
        description:
          'Choose from synthetic, acrylic, sand, or wooden flooring based on your needs and preferences.',
      },
      {
        title: 'Shock-Absorbent & Anti-Skid',
        description:
          'Engineered for player safety, reducing impact on joints and preventing slips during intense gameplay.',
      },
      {
        title: 'Indoor & Outdoor Courts',
        description:
          'Custom-built solutions for various environments, ensuring optimal performance in any setting.',
      },
      {
        title: 'Weather & UV Resistant',
        description:
          'Long-lasting surfaces designed to withstand extreme conditions, maintaining quality over time.',
      },
      {
        title: 'FIVB Standard',
        description:
          'Courts built to meet International Volleyball Federation standards for professional-level play.',
      },
    ],
    typesTitle: 'Types of Volleyball Courts We Offer',
    typesItems: [
      {
        title: 'Indoor Volleyball Courts',
        description:
          'Wooden, synthetic, or cushioned flooring for professional and recreational use in indoor facilities.',
      },
      {
        title: 'Outdoor Volleyball Courts',
        description:
          'Acrylic or synthetic surfaces designed for durability in all weather conditions, perfect for outdoor venues.',
      },
      {
        title: 'Beach Volleyball Courts',
        description:
          'Sand courts built to FIVB standards for international-level gameplay and competitive tournaments.',
      },
      {
        title: 'Multipurpose Volleyball Courts',
        description:
          'Courts designed for flexible use with other sports like badminton and futsal, maximizing space utility.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Industry Experts',
        description:
          'Extensive experience in sports infrastructure development, ensuring professional-quality results.',
      },
      {
        title: 'Eco-Friendly & Sustainable Materials',
        description:
          'Non-toxic and durable surfaces for long-term use, prioritizing environmental responsibility.',
      },
      {
        title: 'Custom Court Designs',
        description:
          'Tailored solutions to meet specific space and budget requirements, maximizing value and functionality.',
      },
      {
        title: 'Affordable & Competitive Pricing',
        description:
          'Get the best quality courts at cost-effective rates, delivering exceptional value for your investment.',
      },
    ],
  },
  {
    slug: 'basketball-court',
    bannerTitle: 'Basketball Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1519869325934-21c5bf1a2666?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At SABAYSIS SPORTS & INFRA, we specialize in creating high-quality basketball courts that cater to both professional athletes and recreational players. Whether you're designing a court for a school, sports facility, or private residence, our synthetic grass and sports area solutions ensure superior performance, durability, and aesthetics. We're committed to crafting basketball courts that elevate the game, encourage active lifestyles, and transform any outdoor space into a hub for fun and fitness.",
    servicesTitle: 'Our Basketball Court Services',
    servicesDescription:
      'Comprehensive basketball court construction, installation, and maintenance services for professional and recreational use.',
    features: [
      {
        title: 'Basketball Court Installation',
        description:
          'From foundation to finishing, we handle the complete installation process with precision and expertise.',
      },
      {
        title: 'Acrylic & Synthetic Court Surfacing',
        description:
          'High-performance surfaces for smooth gameplay and injury prevention, designed for optimal ball bounce and player safety.',
      },
      {
        title: 'Basketball Court Resurfacing & Repair',
        description:
          'Upgrade or restore your existing court for enhanced performance and durability, extending its lifespan.',
      },
      {
        title: 'LED Court Lighting Solutions',
        description:
          'Proper illumination for night games and tournaments, ensuring optimal visibility and energy efficiency.',
      },
      {
        title: 'Customization & Line Marking',
        description:
          'Precision marking for different court dimensions, including half-court and full-court setups.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Our Basketball Courts?',
    whyChooseOurItems: [
      {
        title: 'High-Quality Materials',
        description:
          'We use top-grade synthetic surfaces, acrylic coatings, and shock-absorbent layers for maximum durability.',
      },
      {
        title: 'Custom Design Options',
        description:
          'Choose from a variety of court sizes, colors, and markings tailored to your requirements.',
      },
      {
        title: 'Slip-Resistant & All-Weather',
        description:
          'Our courts are designed to provide superior grip and withstand all climatic conditions.',
      },
      {
        title: 'Low Maintenance & Long-Lasting',
        description:
          'Our surfaces require minimal upkeep while offering long-term performance and reliability.',
      },
      {
        title: 'FIBA & NBA Standard Courts',
        description:
          'We construct courts that align with professional basketball standards for competitive play.',
      },
    ],
    typesTitle: 'Types of Basketball Courts We Offer',
    typesItems: [
      {
        title: 'Indoor Basketball Courts',
        description:
          'Designed for gyms, sports arenas, and multi-sport facilities with professional-grade flooring.',
      },
      {
        title: 'Outdoor Basketball Courts',
        description:
          'Weather-resistant courts for schools, parks, and residential areas, built to last.',
      },
      {
        title: '3×3 Half-Courts',
        description:
          'Perfect for compact spaces and urban play areas, maximizing space efficiency.',
      },
      {
        title: 'Portable Basketball Courts',
        description:
          'Movable court systems for temporary events and tournaments, offering flexibility and convenience.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Industry Experts',
        description:
          'Years of experience in sports infrastructure development, ensuring professional-quality results.',
      },
      {
        title: 'Eco-Friendly Materials',
        description:
          'Sustainable and non-toxic materials for a greener environment and long-term sustainability.',
      },
      {
        title: 'End-to-End Solutions',
        description:
          'From consultation to execution, we ensure seamless project completion with dedicated support.',
      },
      {
        title: 'Affordable Pricing',
        description:
          'Competitive rates without compromising on quality, delivering exceptional value for your investment.',
      },
    ],
  },
  {
    slug: 'pickleball-court',
    bannerTitle: 'Pickleball Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At Sabaysis Sports & Infra, we are proud to offer top-tier, durable, and eco-friendly pickleball court solutions designed to meet the growing demand for this fast-paced, fun, and community-building sport. With our advanced synthetic grass and sports area technologies, we provide exceptional court surfaces that deliver the perfect balance of performance, safety, and sustainability.",
    servicesTitle: 'Our Pickleball Court Services',
    servicesDescription:
      'Comprehensive pickleball court design, installation, and maintenance services for residential, commercial, and tournament use.',
    features: [
      {
        title: 'Custom Court Design',
        description:
          'Tailored designs to suit your space, aesthetic preferences, and functional needs.',
      },
      {
        title: 'Professional Installation',
        description:
          'Expert installation using advanced equipment and techniques for a precise, high-quality court.',
      },
      {
        title: 'High-Performance Synthetic Surfaces',
        description:
          'Durable, shock-absorbing artificial grass for superior playability and safety.',
      },
      {
        title: 'Residential Pickleball Courts',
        description:
          'Design and build of private, high-quality courts for family and recreational use.',
      },
      {
        title: 'Commercial Pickleball Courts',
        description:
          'Durable courts designed for parks, clubs, and sports complexes with high foot traffic.',
      },
      {
        title: 'Indoor Pickleball Courts',
        description:
          'Weather-proof indoor courts designed for consistent, year-round play.',
      },
      {
        title: 'Multi-Sport Courts',
        description:
          'Versatile courts that can accommodate multiple sports, including pickleball, tennis, and basketball.',
      },
      {
        title: 'Tournament-Grade Courts',
        description:
          'Precise, competition-level courts built to meet professional standards for tournaments.',
      },
      {
        title: 'Maintenance-Free Solutions',
        description:
          'Low-maintenance courts that eliminate the need for mowing, watering, and frequent repairs.',
      },
      {
        title: 'Eco-Friendly Options',
        description:
          'Sustainable materials that reduce water consumption and waste while offering top-tier performance.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Sabaysis Sports & Infra for Your Pickleball Court?',
    whyChooseOurItems: [
      {
        title: 'High-Performance Grass',
        description:
          'Durable, shock-absorbing surface for a safe, consistent game experience.',
      },
      {
        title: 'Long-Lasting',
        description:
          'Resists fading, wear, and harsh weather for years of reliable use.',
      },
      {
        title: 'Eco-Friendly',
        description:
          'Sustainable materials that reduce water use and waste, promoting environmental responsibility.',
      },
      {
        title: 'Custom Designs',
        description:
          'Tailored courts to fit your space and style, ensuring perfect integration with your property.',
      },
      {
        title: 'Expert Installation',
        description:
          'Precision-built for long-term performance by experienced professionals.',
      },
      {
        title: 'Low Maintenance',
        description:
          'No mowing or watering—just a high-quality court year-round with minimal upkeep.',
      },
    ],
    typesTitle: 'Types of Pickleball Courts We Offer',
    typesItems: [
      {
        title: 'Residential Pickleball Courts',
        description:
          "Create a private pickleball court that's perfect for family fun and casual games. We customize the design to fit your home's available space while ensuring top-tier performance and low-maintenance care.",
      },
      {
        title: 'Commercial Pickleball Courts',
        description:
          'Our commercial-grade pickleball courts are designed for high-traffic use in parks, clubs, and sports complexes. These courts are built to withstand heavy foot traffic, offering durability and lasting performance for public and recreational use.',
      },
      {
        title: 'Indoor Pickleball Courts',
        description:
          'Looking for a year-round pickleball experience? Our indoor court solutions ensure consistent play regardless of weather conditions, with specialized materials that enhance the playing surface and reduce glare.',
      },
      {
        title: 'Multi-Sport Courts',
        description:
          "If you're looking to maximize space, we offer multi-sport courts that can accommodate pickleball, tennis, basketball, and more. These versatile courts are perfect for schools, recreational centers, and community complexes.",
      },
      {
        title: 'Tournament-Ready Courts',
        description:
          'For professional or competitive-level play, we offer tournament-grade courts with precise specifications for optimal performance. These courts meet all the standards for serious competitions, providing a smooth, consistent surface every time.',
      },
    ],
    whyChooseTitle: 'Ready to Build Your Pickleball Court?',
    whyChooseItems: [
      {
        title: 'Expert Consultation',
        description:
          "Whether you're looking to install a pickleball court for a community center, school, sports club, or residential property, we provide expert guidance to bring your vision to life.",
      },
      {
        title: 'Innovative Solutions',
        description:
          'Our innovative solutions ensure that your pickleball court will not only look amazing but also perform at the highest level.',
      },
      {
        title: 'Free Consultation',
        description:
          'Contact us today to discuss your project and get a free consultation on how we can help you create the perfect pickleball court tailored to your needs.',
      },
      {
        title: 'End-to-End Service',
        description:
          'From initial design to final installation, we handle every aspect of your pickleball court project with professionalism and care.',
      },
    ],
  },
  {
    slug: 'football-court',
    bannerTitle: 'Football Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At Sabaysis Sports & Infra, we are dedicated to providing top-quality, durable, and eco-friendly football court solutions designed for both professional and recreational play. Our advanced synthetic turf and sports area technologies offer a perfect blend of performance, safety, and sustainability, making your football field stand out in both function and aesthetics.",
    servicesTitle: 'Our Football Court Services',
    servicesDescription:
      'Comprehensive football court design, installation, and maintenance services for residential, commercial, and tournament use.',
    features: [
      {
        title: 'Custom Court Design',
        description:
          'Tailored designs to fit your space, style, and functional needs, ensuring optimal playability.',
      },
      {
        title: 'Professional Installation',
        description:
          'Expert installation with precision to ensure the highest-quality playing surface that meets professional standards.',
      },
      {
        title: 'High-Performance Synthetic Turf',
        description:
          'Durable, shock-absorbing surfaces for superior ball control and player safety, even during intense matches.',
      },
      {
        title: 'Residential Football Courts',
        description:
          'Create your own private football court, designed for family fun and casual play, with minimal upkeep.',
      },
      {
        title: 'Commercial Football Courts',
        description:
          'High-traffic, commercial-grade courts built for parks, sports clubs, and recreational centers, offering durability and longevity.',
      },
      {
        title: 'Indoor Football Courts',
        description:
          'Weather-proof indoor football courts, ensuring a consistent playing experience year-round.',
      },
      {
        title: 'Multi-Sport Courts',
        description:
          'Versatile courts that accommodate football, tennis, basketball, and more—ideal for schools and community centers.',
      },
      {
        title: 'Tournament-Grade Courts',
        description:
          'Professional-grade football fields built to meet competitive standards, with top-quality materials and precise specifications.',
      },
      {
        title: 'Maintenance-Free Solutions',
        description:
          'Low-maintenance synthetic turf courts that save time and resources, providing a reliable playing surface without constant upkeep.',
      },
      {
        title: 'Eco-Friendly Options',
        description:
          'Sustainable, eco-conscious materials that help reduce water consumption and minimize your environmental footprint.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Sabaysis Sports & Infra for Your Football Court?',
    whyChooseOurItems: [
      {
        title: 'High-Performance Turf',
        description:
          'Durable, shock-absorbing surface for a safe, consistent game that enhances player comfort and ball control.',
      },
      {
        title: 'Long-Lasting',
        description:
          'Resists fading, wear, and harsh weather conditions, ensuring your football field stays in top condition for years.',
      },
      {
        title: 'Eco-Friendly',
        description:
          'Sustainable materials designed to reduce water consumption and minimize environmental impact.',
      },
      {
        title: 'Custom Designs',
        description:
          'Courts tailored to your space, needs, and design preferences, whether for residential or commercial use.',
      },
      {
        title: 'Expert Installation',
        description:
          'Precision-built with advanced techniques and equipment to ensure a high-quality, long-lasting surface.',
      },
      {
        title: 'Low Maintenance',
        description:
          'Enjoy a low-maintenance football court with no mowing, watering, or constant repairs required.',
      },
    ],
    typesTitle: 'Types of Football Courts We Offer',
    typesItems: [
      {
        title: 'Residential Football Courts',
        description:
          'Design and build your very own private football court for family fun and recreational use, customized to fit your home and lifestyle.',
      },
      {
        title: 'Commercial Football Courts',
        description:
          'Ideal for parks, sports clubs, and large venues, our commercial-grade football courts withstand heavy traffic, ensuring durability and performance for public use.',
      },
      {
        title: 'Indoor Football Courts',
        description:
          'With our indoor football court solutions, you can enjoy a consistent playing experience no matter the weather. Designed to enhance safety and performance in any indoor space.',
      },
      {
        title: 'Multi-Sport Football Courts',
        description:
          'Make the most of your available space with courts that can host multiple sports, including football, basketball, tennis, and more—perfect for schools, recreation centers, and community hubs.',
      },
      {
        title: 'Tournament-Ready Football Courts',
        description:
          'Perfect for competitive play, our tournament-grade football courts meet all professional standards for top-tier performance, ensuring a consistent and high-quality experience for players.',
      },
    ],
    whyChooseTitle: 'Ready to Build Your Football Court?',
    whyChooseItems: [
      {
        title: 'Expert Consultation',
        description:
          "Whether you're looking to install a football court for a community center, school, sports club, or residential property, we provide expert guidance to bring your vision to life.",
      },
      {
        title: 'Innovative Solutions',
        description:
          'Our innovative solutions ensure that your football court will not only perform at the highest level but also meet your unique needs.',
      },
      {
        title: 'Free Consultation',
        description:
          'Contact us today for a free consultation, and let us help you design and build the perfect football court for your space!',
      },
      {
        title: 'End-to-End Service',
        description:
          'From initial design to final installation, we handle every aspect of your football court project with professionalism and care.',
      },
    ],
  },
  {
    slug: 'paddleball-court',
    bannerTitle: 'Paddleball Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At Sabaysis Sports & Infra, we specialize in crafting top-notch, durable, and eco-friendly paddleball court solutions. Whether you're designing a personal court for your home or a professional facility for community use, our cutting-edge synthetic surfaces, expert designs, and commitment to quality ensure you'll have the best playing experience possible. We combine innovation, sustainability, and performance for the ultimate paddleball court.",
    servicesTitle: 'Our Paddleball Court Services',
    servicesDescription:
      'Comprehensive paddleball court design, installation, and maintenance services for residential, commercial, and tournament use.',
    features: [
      {
        title: 'Custom Court Design',
        description:
          'Tailored designs to suit your space and vision for a functional and appealing court.',
      },
      {
        title: 'Expert Installation',
        description:
          'Precision installation for a durable, level court that ensures safety and performance.',
      },
      {
        title: 'High-Performance Synthetic Turf',
        description:
          'Durable turf offering superior ball control, shock absorption, and long-lasting play.',
      },
      {
        title: 'Residential Paddleball Courts',
        description:
          'Private courts designed for minimal maintenance and maximum enjoyment.',
      },
      {
        title: 'Commercial Paddleball Courts',
        description:
          'Durable courts built for high-traffic use in parks, sports clubs, and community centers.',
      },
      {
        title: 'Indoor Paddleball Courts',
        description:
          'Year-round, weatherproof courts that ensure consistent performance indoors.',
      },
      {
        title: 'Multi-Sport Courts',
        description:
          'Versatile courts for paddleball, tennis, basketball, and more.',
      },
      {
        title: 'Tournament-Ready Courts',
        description:
          'Professional-grade courts designed for competitive play.',
      },
      {
        title: 'Maintenance-Free Solutions',
        description:
          'Low-maintenance courts that save time and ensure consistent quality.',
      },
      {
        title: 'Eco-Friendly Options',
        description:
          'Sustainable materials offering top-tier performance with minimal environmental impact.',
      },
    ],
    whyChooseOurTitle: 'Why Sabaysis Sports & Infra for Your Paddleball Court?',
    whyChooseOurItems: [
      {
        title: 'High-Performance Surfaces',
        description:
          'Our paddleball courts are built with premium synthetic turf that ensures excellent ball bounce, superior grip, and shock absorption, providing players with a consistent, high-quality experience.',
      },
      {
        title: 'Long-Lasting Durability',
        description:
          'Withstanding heavy play and harsh weather, our courts are designed to remain in top condition, season after season.',
      },
      {
        title: 'Eco-Friendly Approach',
        description:
          'Our courts are constructed with sustainable materials that help reduce water consumption and minimize environmental impact, all while maintaining excellent performance.',
      },
      {
        title: 'Custom Designs',
        description:
          'We work with you to design a paddleball court that meets your specific needs, space, and aesthetic preferences, ensuring a court that fits perfectly in your environment.',
      },
      {
        title: 'Expert Installation',
        description:
          'Our installation team is skilled in providing precise, high-quality setups to guarantee that your court is level, durable, and safe for play.',
      },
      {
        title: 'Low Maintenance',
        description:
          'Our courts require minimal upkeep, allowing you to enjoy a hassle-free, consistently high-performing court year-round—no mowing, watering, or constant repairs needed.',
      },
    ],
    typesTitle: 'Types of Paddleball Courts We Offer',
    typesItems: [
      {
        title: 'Residential Paddleball Courts',
        description:
          'Private courts for family fun and casual play, requiring minimal upkeep.',
      },
      {
        title: 'Commercial Paddleball Courts',
        description:
          'Ideal for parks and fitness centers, built to withstand heavy traffic.',
      },
      {
        title: 'Indoor Paddleball Courts',
        description:
          'Perfect for year-round play, regardless of weather conditions.',
      },
      {
        title: 'Multi-Sport Paddleball Courts',
        description:
          'Flexible courts for paddleball, tennis, basketball, and more.',
      },
      {
        title: 'Tournament-Ready Paddleball Courts',
        description:
          'Courts built to meet professional standards for competitive tournaments.',
      },
    ],
    whyChooseTitle: 'Ready to Build Your Paddleball Court?',
    whyChooseItems: [
      {
        title: 'Expert Consultation',
        description:
          "If you're looking to add a paddleball court to your property, community center, or sports facility, we provide expert guidance to bring your vision to life.",
      },
      {
        title: 'Innovative Solutions',
        description:
          'We bring your vision to life with innovative solutions, exceptional quality, and a commitment to excellence in every project.',
      },
      {
        title: 'Free Consultation',
        description:
          'Contact us today for a free consultation, and let us help you create the perfect paddleball court that will perform at the highest level and stand the test of time.',
      },
      {
        title: 'End-to-End Service',
        description:
          'From initial design to final installation, we handle every aspect of your paddleball court project with professionalism and care.',
      },
    ],
  },
  {
    slug: 'badminton-court',
    bannerTitle: 'Premium Badminton Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1622163642999-ea55c66550ac?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "Welcome to Sabaysis Sports & Infra, your trusted partner in building world-class badminton courts. We specialize in providing high-quality badminton court services, ensuring that you get the perfect playing surface for both professional and amateur badminton matches. Whether you're setting up a court for a sports complex, school, or private facility, we have the expertise and experience to deliver exceptional results.",
    servicesTitle: 'Our Badminton Court Services',
    servicesDescription:
      'Comprehensive badminton court construction, installation, and maintenance services tailored to your needs.',
    features: [
      {
        title: 'Badminton Court Installation',
        description:
          'Full-scale installation of indoor and outdoor courts with professional-grade materials and precision engineering.',
      },
      {
        title: 'Synthetic & Wooden Flooring',
        description:
          'Durable and high-grip surfaces for professional and recreational play, designed for optimal performance.',
      },
      {
        title: 'Badminton Court Resurfacing & Repair',
        description:
          'Restore worn-out courts to top condition, extending their lifespan and improving playability.',
      },
      {
        title: 'Line Marking & Customization',
        description:
          'Precision marking for singles and doubles courts, ensuring accurate dimensions and professional appearance.',
      },
      {
        title: 'LED Lighting Solutions',
        description:
          'Optimal illumination for high-visibility gameplay, providing excellent visibility for competitive matches.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Our Badminton Courts?',
    whyChooseOurItems: [
      {
        title: 'Superior Court Surfaces',
        description:
          'Choose from synthetic, wooden, acrylic, or PU flooring for a seamless playing experience.',
      },
      {
        title: 'Shock-Absorbent & Anti-Skid',
        description:
          'Engineered for player safety and reduced impact on joints, ensuring a comfortable playing experience.',
      },
      {
        title: 'Indoor & Outdoor Courts',
        description:
          'Custom-built solutions for different environments, ensuring optimal performance in any setting.',
      },
      {
        title: 'Weather & UV Resistant',
        description:
          'Long-lasting performance with minimal maintenance, designed to withstand various weather conditions.',
      },
      {
        title: 'BWF Standard',
        description:
          'Courts built to Badminton World Federation professional standards for tournaments and training.',
      },
    ],
    typesTitle: 'Types of Badminton Courts We Offer',
    typesItems: [
      {
        title: 'Indoor Badminton Courts',
        description:
          'High-quality wooden or synthetic flooring for professional gameplay in indoor facilities.',
      },
      {
        title: 'Outdoor Badminton Courts',
        description:
          'Weather-resistant acrylic or PU-coated surfaces designed for outdoor use and durability.',
      },
      {
        title: 'Synthetic Badminton Courts',
        description:
          'Low-maintenance and high-durability court options, perfect for long-term use.',
      },
      {
        title: 'Portable Badminton Courts',
        description:
          'Movable court solutions for temporary setups, offering flexibility and convenience.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Expert Craftsmanship',
        description:
          'Years of experience in sports infrastructure development, ensuring professional-quality results.',
      },
      {
        title: 'Eco-Friendly & Sustainable Materials',
        description:
          'Environmentally responsible court solutions that reduce environmental impact while maintaining performance.',
      },
      {
        title: 'Custom Court Designs',
        description:
          'Tailored solutions to meet specific needs, ensuring perfect integration with your space and requirements.',
      },
      {
        title: 'Affordable & Competitive Pricing',
        description:
          'Best value without compromising quality, delivering exceptional results at competitive rates.',
      },
    ],
  },
  {
    slug: 'swimming-pool',
    bannerTitle: 'Swimming Pool Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At SABAYSIS SPORTS, we offer comprehensive swimming pool services, from design and construction to maintenance and repair. Whether you're planning to build a new pool, upgrade an existing one, or need professional maintenance, our expert team is here to ensure your swimming pool remains pristine, functional, and ready for enjoyment year-round.",
    servicesTitle: 'Our Swimming Pool Services',
    servicesDescription:
      'Comprehensive swimming pool design, construction, maintenance, and repair services for residential and commercial use.',
    features: [
      {
        title: 'Custom Pool Design and Construction',
        description:
          'Tailored designs from infinity pools to family-friendly options, customized to your space, style, and budget.',
      },
      {
        title: 'Pool Renovations and Upgrades',
        description:
          'Refresh your pool with resurfacing, new tiles, and energy-efficient equipment for improved beauty and functionality.',
      },
      {
        title: 'Pool Equipment Installation',
        description:
          'Install top-quality pumps, heaters, filters, and lighting for optimal performance and durability.',
      },
      {
        title: 'Pool Maintenance Services',
        description:
          'Ensure your pool stays clean and safe with regular cleaning, water testing, and equipment checks.',
      },
      {
        title: 'Pool Repairs and Troubleshooting',
        description:
          'Quick resolution of issues like leaks, cracks, and faulty equipment to restore pool performance.',
      },
      {
        title: 'Pool Safety and Accessories',
        description:
          'Enhance safety with covers, fences, alarms, plus stylish poolside lighting and landscaping.',
      },
      {
        title: 'Eco-Friendly Pool Solutions',
        description:
          'Sustainable options, including energy-efficient systems and water-saving technologies, to reduce environmental impact.',
      },
    ],
    whyChooseOurTitle: 'Why Choose SABAYSIS SPORTS for Your Swimming Pool?',
    whyChooseOurItems: [
      {
        title: 'Comprehensive Services',
        description:
          'From design and construction to maintenance and repair, we offer complete swimming pool solutions under one roof.',
      },
      {
        title: 'Expert Team',
        description:
          'Our experienced professionals ensure your pool remains pristine, functional, and ready for enjoyment year-round.',
      },
      {
        title: 'Customized Solutions',
        description:
          'Tailored designs and services customized to your space, style, and budget requirements.',
      },
      {
        title: 'Quality Equipment',
        description:
          'We install top-quality pumps, heaters, filters, and lighting for optimal performance and durability.',
      },
      {
        title: 'Eco-Friendly Options',
        description:
          'Sustainable solutions including energy-efficient systems and water-saving technologies to reduce environmental impact.',
      },
      {
        title: 'Safety First',
        description:
          'We prioritize safety with covers, fences, alarms, and other essential safety accessories.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Expert Craftsmanship',
        description:
          'Years of experience in swimming pool design, construction, and maintenance, ensuring professional-quality results.',
      },
      {
        title: 'End-to-End Service',
        description:
          "From initial design to ongoing maintenance, we provide comprehensive support throughout your pool's lifecycle.",
      },
      {
        title: 'Quality Materials',
        description:
          "We use only the finest materials and equipment to ensure your pool's longevity and performance.",
      },
      {
        title: 'Affordable Solutions',
        description:
          'Competitive pricing without compromising on quality, delivering exceptional value for your investment.',
      },
    ],
  },
  {
    slug: 'tennis-court',
    bannerTitle: 'Premium Tennis Court Solutions',
    bannerImage:
      'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      'At SABAYSIS SPORTS & INFRA, we specialize in designing and constructing world-class tennis courts for residential communities, sports clubs, schools, and professional arenas. Our courts are built using high-quality materials, precision engineering, and cutting-edge technology, ensuring durability, safety, and optimal performance for players of all skill levels.',
    servicesTitle: 'Our Tennis Court Services',
    servicesDescription:
      'Comprehensive tennis court construction, installation, and maintenance services for professional and recreational use.',
    features: [
      {
        title: 'Tennis Court Installation',
        description:
          'Full-scale construction of indoor and outdoor courts with professional-grade materials and precision engineering.',
      },
      {
        title: 'Synthetic & Acrylic Court Surfacing',
        description:
          'Durable, high-grip surfaces for smooth and fast-paced play, designed for optimal performance.',
      },
      {
        title: 'Clay & Grass Tennis Courts',
        description:
          'Traditional surfaces for professional and recreational play, offering unique playing experiences.',
      },
      {
        title: 'Tennis Court Resurfacing & Repair',
        description:
          'Enhance or restore existing courts for long-term performance, extending their lifespan.',
      },
      {
        title: 'Line Marking & Customization',
        description:
          'Precision marking for singles, doubles, and multi-purpose courts, ensuring accurate dimensions.',
      },
      {
        title: 'LED Lighting Solutions',
        description:
          'High-quality illumination for night matches and extended play hours, ensuring optimal visibility.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Our Tennis Courts?',
    whyChooseOurItems: [
      {
        title: 'Professional-Grade Surfaces',
        description:
          'Choose from synthetic, acrylic, clay, or cushioned flooring tailored to your needs and playing style.',
      },
      {
        title: 'Weather & UV Resistant',
        description:
          'Our courts are built to withstand extreme weather conditions with minimal maintenance required.',
      },
      {
        title: 'Shock-Absorbent & Non-Slip Surfaces',
        description:
          'Reduces player fatigue and prevents injuries, ensuring a safe and comfortable playing experience.',
      },
      {
        title: 'Indoor & Outdoor Tennis Courts',
        description:
          'Custom-built solutions for different playing environments, ensuring optimal performance in any setting.',
      },
      {
        title: 'ITF Standard Courts',
        description:
          'We design and install courts that comply with International Tennis Federation (ITF) standards for professional play.',
      },
    ],
    typesTitle: 'Types of Tennis Courts We Offer',
    typesItems: [
      {
        title: 'Hard Courts (Acrylic & Synthetic Surfaces)',
        description:
          'Durable and fast surfaces, ideal for professional and recreational play with consistent ball bounce.',
      },
      {
        title: 'Clay Courts',
        description:
          'Traditional red clay surfaces for controlled ball bounce and enhanced footwork, perfect for strategic play.',
      },
      {
        title: 'Grass Courts',
        description:
          'Classic surfaces offering speed and a unique playing experience, ideal for traditional tennis enthusiasts.',
      },
      {
        title: 'Cushioned Tennis Courts',
        description:
          'Designed for reduced impact and enhanced player comfort, perfect for extended play sessions.',
      },
      {
        title: 'Portable & Modular Courts',
        description:
          'Temporary or movable courts for events and tournaments, offering flexibility and convenience.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Industry Experts',
        description:
          'Years of experience in sports infrastructure development, ensuring professional-quality results.',
      },
      {
        title: 'High-Quality & Eco-Friendly Materials',
        description:
          'Sustainable court solutions for long-lasting performance, reducing environmental impact.',
      },
      {
        title: 'Custom Court Designs',
        description:
          'Tailored solutions to meet specific requirements, ensuring perfect integration with your space.',
      },
      {
        title: 'Affordable & Competitive Pricing',
        description:
          'Get premium tennis courts at the best value, delivering exceptional quality without compromising on affordability.',
      },
    ],
  },
  {
    slug: 'multisport-running-tracks',
    bannerTitle: 'Multisport & Running Tracks',
    bannerImage:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
    welcomeText:
      "At Sabaysis Sports & Infra, we specialize in designing, constructing, and maintaining high-performance multisport and running tracks that meet the needs of athletes, schools, sports clubs, and recreational facilities. Our tracks are engineered for durability, safety, and optimal performance, ensuring an exceptional experience for every user. Whether you're building a new track or upgrading an existing one, our team of experts is dedicated to delivering solutions that stand the test of time and provide outstanding results.",
    servicesTitle: 'Our Multisport & Running Tracks Services',
    servicesDescription:
      'Comprehensive track design, construction, and maintenance services for professional and recreational facilities.',
    features: [
      {
        title: 'Custom Design & Planning',
        description:
          'Tailored solutions for optimal track layout and functionality, designed to fit your specific needs.',
      },
      {
        title: 'Track Construction & Installation',
        description:
          'End-to-end construction with high-quality materials for smooth, reliable athletic surfaces.',
      },
      {
        title: 'Surface Options',
        description:
          'Synthetic Rubber: Durable and shock-absorbent. Polyurethane: High-performance for elite facilities. Tartan & Acrylic: Versatile surfaces for various sports. Grass Tracks: Eco-friendly and natural.',
      },
      {
        title: 'Renovation & Resurfacing',
        description:
          "Restore and extend your track's lifespan with resurfacing and repairs.",
      },
      {
        title: 'Maintenance Services',
        description:
          'Regular cleaning, crack repair, re-coating, and line marking to ensure longevity and safety.',
      },
      {
        title: 'Multisport Integration',
        description:
          'Tracks designed for multiple sports, including running, football, basketball, and more.',
      },
      {
        title: 'Compliance & Safety',
        description:
          'Built to meet IAAF, FIFA, and other safety standards for athlete protection.',
      },
    ],
    whyChooseOurTitle: 'Why Choose Sabaysis for Your Multisport & Running Track?',
    whyChooseOurItems: [
      {
        title: 'Expert Design & Construction',
        description:
          'Our experienced team delivers high-performance, durable tracks tailored to your needs.',
      },
      {
        title: 'Tailored Solutions',
        description:
          'Custom layouts and surface options to fit your unique requirements.',
      },
      {
        title: 'Quality Assurance',
        description:
          'We use top-quality materials and strict quality control for safety and longevity.',
      },
      {
        title: 'Timely Delivery & Budget-Friendly',
        description:
          'On-time, cost-effective solutions without compromising quality.',
      },
      {
        title: 'Sustainability',
        description:
          'Eco-friendly options that minimize environmental impact.',
      },
    ],
    whyChooseTitle: 'Why SABAYSIS SPORTS & INFRA?',
    whyChooseItems: [
      {
        title: 'Industry Experts',
        description:
          'Years of experience in sports infrastructure development, ensuring professional-quality results.',
      },
      {
        title: 'Comprehensive Solutions',
        description:
          'From design and construction to maintenance and renovation, we offer complete track solutions.',
      },
      {
        title: 'Safety Standards',
        description:
          'All tracks are built to meet IAAF, FIFA, and other international safety standards.',
      },
      {
        title: 'Affordable & Competitive Pricing',
        description:
          'Get premium quality tracks at competitive rates, delivering exceptional value for your investment.',
      },
    ],
  },
];

export function getServiceDetailBySlug(slug: string): ServiceDetailData | undefined {
  return serviceDetails.find((detail) => detail.slug === slug);
}

