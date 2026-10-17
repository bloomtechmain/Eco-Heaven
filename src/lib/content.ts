// Site content migrated from the WordPress install at ecoohaven.codxinework.com.
// Media lives in /public/media (same file names as wp-content/uploads).

export const m = (file: string) => `/media/${file}`;

export const site = {
  name: "EcooHaven",
  email: "info@smartecoheaven.com",
  phone: "(323) 949-5323",
  phoneHref: "tel:+13239495323",
  address: "4140 Parker Rd. Allentown, New Mexico 31134",
  mapQuery: "London Eye, London, United Kingdom",
  socials: [
    { label: "facebook", href: "#" },
    { label: "instagram", href: "#" },
    { label: "twitter", href: "#" },
    { label: "linkedin", href: "#" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "Smart Living", href: "/smart-living" },
  { label: "Our Homes", href: "/our-homes" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export const footerNav = [
  [
    { label: "home", href: "/" },
    { label: "about us", href: "/about-us" },
    { label: "services", href: "/our-services" },
    { label: "our homes", href: "/our-homes" },
  ],
  [
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "privacy policy", href: "#" },
    { label: "terms and conditions", href: "#" },
  ],
];

export const instagram = [
  "V3-mp4-image.jpg",
  "v2-mp4-image.jpg",
  "v1-mp4-image.jpg",
  "Modern-Glass-Mansion-at-Sunset.png",
  "ChatGPT-Image-Sep-17-2026-04_22_26-AM.png",
].map(m);

export const searchTags = ["Modern", "Classical", "Sustainable", "Urban", "Landscape"];

/* ---------------------------------- Home ---------------------------------- */

export const hero = {
  title: "Where Intelligent Living Meets Luxury",
  words: ["Smart & Modern", "AI Integrated", "Eco Conscious", "Future Ready"],
  bigTitle: "Architecture",
  slides: [
    "ChatGPT-Image-Sep-17-2026-01_27_37-AM.png",
    "ChatGPT-Image-Sep-17-2026-01_35_29-AM.png",
    "ChatGPT-Image-Sep-17-2026-01_32_42-AM.png",
  ].map(m),
  thumbs: [
    "ChatGPT-Image-Sep-17-2026-01_26_47-AM.png",
    "ChatGPT-Image-Sep-17-2026-01_35_29-AM.png",
    "ChatGPT-Image-Sep-17-2026-01_32_42-AM.png",
  ].map(m),
};

export const coreFeatures = [
  {
    title: "Smart Technology",
    icon: m("ChatGPT-Image-Sep-17-2026-01_43_42-AM.png"),
    text: "AI-powered systems and intelligent automation designed to make everyday living simpler, safer, and more connected.",
  },
  {
    title: "Sustainable Living",
    icon: m("ChatGPT-Image-Sep-17-2026-01_45_20-AM.png"),
    text: "Eco-conscious solutions that reduce energy use, support healthier living, and create a more sustainable future.",
  },
  {
    title: "Modern Architecture",
    icon: m("ChatGPT-Image-Sep-17-2026-01_47_51-AM.png"),
    text: "Contemporary spaces combining innovative design, premium materials, natural light, and seamless indoor-outdoor living.",
  },
  {
    title: "Intelligent Comfort",
    icon: m("ChatGPT-Image-Sep-17-2026-01_49_14-AM.png"),
    text: "Smart lighting, climate control, security, and home automation that adapt to your lifestyle and preferences.",
  },
];

export const aboutTeaser = {
  title: "Building A Smarter Future Through Innovative Architecture.",
  text: "At Smart Ecoo Haven, we create homes that think, adapt, and evolve. By combining modern architecture, AI technology, smart lighting, automation, and sustainable design, we create smarter, more comfortable living spaces for the future.",
  features: [
    {
      title: "modern Design",
      text: "Innovative spaces designed with modern architecture, smart technology, and timeless style.",
    },
    {
      title: "quality work",
      text: "Quality materials, intelligent systems, and thoughtful solutions built for lasting comfort.",
    },
  ],
  projectBg: m("09267c7c58d2265b5396ad1e7bdd2806-1.jpg"),
  image: m("74708f698253e0976e5e80e16c031798.png"),
};

export const services = [
  {
    title: "100% Solar Roof",
    pageImage: m("Luxury-Solar-Roof-Home-at-Sunset.png"),
    short: "Sustainable solar power and zero-energy-cost concept.",
    image: m("ChatGPT-Image-Sep-17-2026-02_41_34-AM.png"),
    text: "Our 100% Solar Roof combines sustainable energy with modern luxury living. Designed to harness clean solar power, it helps reduce dependence on traditional electricity while improving overall energy efficiency. Integrated with smart energy systems, the roof can support greater energy independence and a more sustainable lifestyle without compromising the architectural beauty of the home.",
  },
  {
    title: "Military-Grade Safety",
    pageImage: m("Fortified-Luxury-Home-at-Dusk.png"),
    short: "Fireproof, rustproof and seismic-resistant construction.",
    image: m("ChatGPT-Image-Sep-17-2026-02_47_11-AM.png"),
    text: "EcooHaven homes are designed with advanced safety and long-term protection in mind. High-performance construction materials and intelligent security solutions provide enhanced protection against fire, environmental conditions, and everyday risks. Every element is selected to create a secure and resilient living environment where homeowners can enjoy luxury with greater confidence and peace of mind.",
  },
  {
    title: "Tesla Powerwall",
    pageImage: m("Tesla-Powerwall-at-Sunset.png"),
    homeTitle: "whole house backup batteries",
    short: "Energy storage and reduced energy waste.",
    image: m("ChatGPT-Image-Sep-17-2026-02_56_02-AM.png"),
    text: "Powerwall provides intelligent energy storage that allows your home to make better use of solar power. Excess energy generated during the day can be stored and used when needed, including during power interruptions. This helps improve energy independence, maintain essential home systems, and create a more reliable and efficient power solution for modern living.",
  },
  {
    title: "AI Face Recognition",
    pageImage: m("AI-Face-Recognition-Entry.png"),
    short: "Keyless, AI-powered secure entry.",
    image: m("ChatGPT-Image-Sep-17-2026-02_58_22-AM.png"),
    text: "AI Face Recognition brings advanced technology directly into your home’s security system. Intelligent facial recognition can identify authorized residents and provide a seamless, keyless entry experience. By combining smart identification with connected security technology, EcooHaven creates a safer and more convenient environment while giving homeowners greater control over access to their property.",
  },
  {
    title: "Heated Floors + Smart Curtains",
    pageImage: m("Luxury-Smart-Home-at-Sunset.png"),
    short: "Automated comfort with voice control.",
    image: m("ChatGPT-Image-Sep-17-2026-02_59_57-AM.png"),
    text: "Experience everyday comfort with intelligent heated floors and automated smart curtains. Heated flooring creates a warm and welcoming environment, while smart curtains can adjust according to your preferred settings, natural light, and privacy needs. Together, these technologies create a seamless living experience where comfort, convenience, and luxury work effortlessly together.",
  },
  {
    title: "Signature LED Lighting",
    pageImage: m("Smart-LED-Luxury-Living-Space.png"),
    short: "Customizable, voice-controlled smart lighting.",
    image: m("ChatGPT-Image-Sep-17-2026-03_01_58-AM.png"),
    text: "Signature LED Lighting transforms the atmosphere of every room through intelligent and energy-efficient illumination. Homeowners can adjust brightness, create different lighting scenes, and control their environment through smart or voice-enabled systems. From relaxing evenings to entertaining guests, the lighting adapts to the moment while adding a sophisticated finishing touch to the home’s architecture.",
  },
];

export const keyFeatures = {
  title: "Key Features & Competitive Edge",
  intro:
    "Smart technology, sustainable energy, advanced security, and luxury design come together to create a smarter way of living.",
  items: [
    { title: "100% Solar + Powerwall", text: "Greater energy independence with smart power storage." },
    { title: "AI-Powered Security", text: "Advanced protection with intelligent security technology." },
    { title: "Luxury Architecture", text: "Premium finishes, Italian-style kitchens, and heated floors." },
    { title: "Smart Living", text: "Automated lighting, curtains, climate, and home systems." },
  ],
  image: m("6713611fb8a26c8e1a159c9ff6796e37.jpg"),
};

export const beforeAfter = {
  after: m("ChatGPT-Image-Sep-17-2026-04_21_25-AM.png"),
  before: m("ChatGPT-Image-Sep-17-2026-04_22_26-AM.png"),
};

export const expertiseTags = [
  "Luxury Home Design",
  "Smart Home Architecture",
  "Residential Architecture",
  "Modern Villa Design",
  "Sustainable Architecture",
  "3D Architectural Modeling",
];

export const whyChoose = {
  label: "WHY CHOOSE SMART ECOO HAVEN",
  title: "Where Luxury Architecture Meets Intelligent Living.",
  text: "Smart Ecoo Haven combines modern architecture, smart technology, sustainable energy, and premium design to create homes built for comfort, security, and the future.",
  progress: [
    { label: "SMART TECHNOLOGY", value: 95 },
    { label: "SUSTAINABLE DESIGN", value: 90 },
    { label: "LUXURY ARCHITECTURE", value: 98 },
    { label: "ENERGY EFFICIENCY", value: 92 },
  ],
  video: "https://www.youtube.com/watch?v=TdTudAOl37s",
  cards: [
    {
      title: "Target Buyers",
      text: "Eco-conscious homeowners in California seeking CBC (California Building Code)-compliant, sustainable homes.",
    },
    {
      title: "Market Growth",
      text: "Modern home market: $200 Billion as of 2025. Annual growth rate of 12.3% CAGR. Solar home demand surging 23% yearly through 2030.",
    },
    {
      title: "Competitive Advantage",
      text: "No competitor offers full solar integration and AI automation at this price.",
    },
    {
      title: "Smart Living",
      text: "AI-powered automation, smart lighting, advanced security, and intelligent home systems designed for a more connected and efficient lifestyle.",
    },
  ],
};

export const recentWorks = [
  "ChatGPT-Image-Sep-17-2026-03_45_02-AM.png",
  "ChatGPT-Image-Sep-17-2026-03_46_37-AM.png",
  "ChatGPT-Image-Sep-17-2026-03_47_51-AM.png",
  "ChatGPT-Image-Sep-17-2026-03_51_07-AM.png",
].map(m);

/* --------------------------------- About ---------------------------------- */

export const about = {
  intro:
    "EcooHaven is redefining modern living by bringing together intelligent technology, sustainable energy, and luxury architecture. We create homes designed to think, adapt, and evolve with the people who live in them.",
  story: [
    "At EcooHaven, we believe the home of the future should be more than beautiful. It should make everyday life smarter, safer, more comfortable, and more sustainable.",
    "Our approach combines modern architectural design with AI-powered technology, smart automation, renewable energy, intelligent security, and premium interiors. From smart lighting and automated curtains to solar energy and advanced home systems, every element is designed to work together seamlessly.",
    "We focus on creating residences where technology feels natural and luxury feels effortless.",
  ],
  vision:
    "Our vision is to create homes that combine architectural excellence with intelligent technology and sustainable innovation. We aim to make future-ready living more accessible, efficient, and extraordinary.",
  mission:
    "Our mission is to transform the way people experience their homes through smart technology, sustainable solutions, and exceptional design. Every EcooHaven home is built around comfort, efficiency, security, and long-term value.",
  image: m("ChatGPT-Image-Sep-17-2026-04_18_14-AM.png"),
  cta: {
    title: "Experience The Future Of Luxury Living",
    text: "Step into a new generation of living where intelligent technology, sustainable energy, and exceptional architecture come together. Discover homes designed to make everyday life smarter, safer, and more luxurious.",
  },
};

/* ------------------------------ Smart Living ------------------------------ */

// `highlight` is rendered bold, mirroring the emphasis on the original page.
export const smartLiving: {
  title: string;
  parts: (string | { highlight: string })[];
  videos: { src: string; poster: string }[];
}[] = [
  {
    title: "Smart Security at the Gate",
    parts: [
      "A hyper-realistic showcase of the EcooHaven smart home entrance, combining ",
      { highlight: "AI facial recognition, smart access control, CCTV surveillance, automated gate technology, and architectural security lighting" },
      " into one seamless luxury experience. The visual presents security as an integrated part of the home’s modern concrete architecture, delivering ",
      { highlight: "privacy, protection, and intelligent access without compromising luxury." },
    ],
    videos: [{ src: m("v1.mp4"), poster: m("v1-mp4-image.jpg") }],
  },
  {
    title: "Smart Outdoor Living",
    parts: [
      "A sophisticated outdoor environment where ",
      { highlight: "smart landscape lighting, automated irrigation, security monitoring, illuminated pathways, and luxury outdoor living" },
      " work together seamlessly. From precision garden lighting and water management to the fire feature and architectural water wall, every element is designed to create a ",
      { highlight: "secure, relaxing, and technology-driven outdoor experience" },
      ".",
    ],
    videos: [{ src: m("v2.mp4"), poster: m("v2-mp4-image.jpg") }],
  },
  {
    title: "Smart Luxury Living",
    parts: [
      "A sophisticated smart lounge where ",
      { highlight: "automated lighting, smart curtains, climate control, underfloor heating, integrated entertainment, and intelligent home controls" },
      " work together seamlessly. Every detail is designed around comfort, convenience, and energy efficiency, while premium materials, expansive glass, and warm architectural lighting create an elevated luxury living experience.",
    ],
    videos: [{ src: m("V3.mp4"), poster: m("V3-mp4-image.jpg") }],
  },
  {
    title: "The Smart Gourmet Kitchen",
    parts: [
      "A high-end smart kitchen designed around ",
      { highlight: "intelligent home control, integrated appliances, smart lighting, advanced ventilation, temperature management, and seamless everyday convenience" },
      ". The premium marble island, elegant cabinetry, built-in appliances, wine storage, and expansive glass create a sophisticated kitchen where ",
      { highlight: "luxury, technology, and functionality come together" },
      ".",
    ],
    videos: [{ src: m("v4.mp4"), poster: m("v4-mp4-image.jpg") }],
  },
  {
    title: "The Smart Master Suite",
    parts: [
      "A luxurious smart bedroom designed around ",
      { highlight: "comfort, automation, and intelligent control" },
      ". Integrated lighting, climate automation, motorized curtains, smart security, ambient under-bed lighting, and convenient bedside controls work together to create a private and relaxing environment. Floor-to-ceiling glass, premium finishes, and warm architectural lighting complete the ",
      { highlight: "ultra-luxury smart living experience" },
      ".",
    ],
    videos: [{ src: m("v5.mp4"), poster: m("v5-mp4-image.jpg") }],
  },
  {
    title: "Smart Energy & Solar Independence",
    parts: [
      "A next-generation energy system combining a ",
      { highlight: "high-performance solar roof, smart inverter, Tesla Powerwall, energy monitoring, and intelligent energy distribution" },
      ". The integrated system helps the home generate, store, monitor, and manage its own energy while maintaining the luxury lifestyle inside. From rooftop solar generation to advanced energy storage, every component works together to create a ",
      { highlight: "smarter, more sustainable home" },
      ".",
    ],
    videos: [{ src: m("v6.mp4"), poster: m("v6-mp4-image.jpg") }],
  },
];

/* -------------------------------- Our Homes ------------------------------- */

export const homesGallery = [
  "Smart-LED-Luxury-Living-Space.png",
  "Luxury-Smart-Home-at-Sunset.png",
  "Luxury-Infinity-Pool-Sunset-Retreat.png",
  "Modern-Glass-Mansion-at-Sunset.png",
  "V3-mp4-image.jpg",
  "v4-mp4-image.jpg",
  "v2-mp4-image.jpg",
  "v5-mp4-image.jpg",
  "v6-mp4-image.jpg",
  "v1-mp4-image.jpg",
].map(m);

/* ---------------------------------- Blog ---------------------------------- */

export type Block = { h2: string } | { p: string } | { strong: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: { name: string; slug: string };
  author: string;
  image: string;
  body: Block[];
};

const category = { name: "Clock Fly Strategy", slug: "clock-fly-strategy" };

export const posts: Post[] = [
  {
    slug: "the-future-of-luxury-living-how-smart-homes-are-changing-modern-life",
    title: "The Future of Luxury Living: How Smart Homes Are Changing Modern Life",
    date: "2026-10-07",
    category,
    author: "EcooHaven",
    image: m("ChatGPT-Image-Sep-17-2026-03_53_52-AM.png"),
    body: [
      { p: "Luxury living is no longer just about beautiful architecture and premium interiors. Today, a truly modern home combines intelligent technology, sustainability, security, and comfort to create a smarter way of living." },
      { h2: "Smart Technology for Modern Living" },
      { p: "Smart homes connect lighting, climate control, security, curtains, appliances, and entertainment into one intelligent ecosystem. AI-powered automation allows these systems to respond to your routines and preferences, making everyday life more convenient." },
      { h2: "Sustainable Energy & Smart Power" },
      { p: "Solar energy and intelligent battery storage are transforming how luxury homes use electricity. A 100% Solar Roof combined with a Powerwall can help increase energy independence, improve efficiency, and provide reliable power when it is needed." },
      { h2: "Advanced Security" },
      { p: "Modern luxury homes are becoming safer with smart security technology. AI-powered facial recognition, intelligent cameras, access control, and connected monitoring provide homeowners with greater control and peace of mind." },
      { h2: "Comfort Without Compromise" },
      { p: "From heated floors and smart curtains to intelligent climate control and signature LED lighting, technology can create a home environment that automatically adapts to your lifestyle." },
      { h2: "The Future of Luxury Living" },
      { p: "The future of luxury is not simply about having more. It is about living smarter." },
      { strong: "EcooHaven brings together intelligent technology, sustainable energy, advanced security, and modern architecture to create homes designed for the future." },
    ],
  },
  {
    slug: "ai-powered-smart-homes-the-next-generation-of-intelligent-living",
    title: "AI-Powered Smart Homes: The Next Generation of Intelligent Living",
    date: "2026-10-07",
    category,
    author: "EcooHaven",
    image: m("ChatGPT-Image-Sep-17-2026-03_56_03-AM.png"),
    body: [
      { p: "AI is transforming the way we interact with our homes. Modern smart homes can connect lighting, security, climate control, energy systems, and everyday devices into one intelligent environment." },
      { h2: "AI That Understands Your Lifestyle" },
      { p: "AI-powered systems can learn routines and preferences, helping automate everyday tasks. From adjusting the temperature to managing lighting, technology can make the home more comfortable with less manual control." },
      { h2: "Intelligent Lighting & Climate" },
      { p: "Smart lighting can automatically adjust brightness and scenes based on the time of day or your preferences. Intelligent climate systems can also help maintain a comfortable environment while improving energy efficiency." },
      { h2: "Smarter Home Security" },
      { p: "AI-powered security can provide advanced monitoring, facial recognition, smart access control, and real-time alerts. These technologies give homeowners greater awareness and control over their property." },
      { h2: "Intelligent Energy Management" },
      { p: "AI can work alongside solar panels, battery storage, and connected appliances to help manage energy more efficiently. This creates a smarter approach to sustainable and independent living." },
      { h2: "The Future of Intelligent Living" },
      { p: "AI-powered homes are becoming more than connected houses. They are evolving into intelligent environments designed around comfort, security, efficiency, and convenience." },
      { strong: "EcooHaven combines AI technology, smart automation, sustainable energy, and luxury architecture to create homes designed for the next generation of living." },
    ],
  },
  {
    slug: "sustainable-luxury-how-solar-energy-and-smart-technology-are-redefining-modern-homes",
    title: "Sustainable Luxury: How Solar Energy and Smart Technology Are Redefining Modern Homes",
    date: "2026-10-07",
    category,
    author: "EcooHaven",
    image: m("ChatGPT-Image-Sep-17-2026-03_58_31-AM.png"),
    body: [
      { p: "Luxury living is evolving beyond beautiful design. Today, modern homeowners want homes that offer comfort, intelligent technology, and greater energy efficiency. Sustainable luxury brings these elements together to create a smarter way of living." },
      { h2: "Solar Energy for a Smarter Home" },
      { p: "Solar technology allows homes to generate clean energy while reducing reliance on traditional power sources. A solar-powered home can support a more efficient and sustainable lifestyle without compromising modern luxury." },
      { h2: "Smart Technology Meets Sustainability" },
      { p: "Smart systems can monitor and manage lighting, climate control, appliances, and energy usage. By automating everyday systems, homeowners can improve comfort while making more efficient use of available energy." },
      { h2: "Intelligent Energy Storage" },
      { p: "Battery storage can store excess solar energy for later use. This gives homeowners greater control over their energy and can provide additional reliability when solar generation is unavailable." },
      { h2: "Luxury Without Compromise" },
      { p: "Sustainable homes no longer need to sacrifice style or comfort. Modern architecture, premium interiors, smart lighting, automated systems, and renewable energy can work together to create an exceptional living experience." },
      { h2: "The Future of Sustainable Luxury" },
      { p: "The future of luxury living is intelligent, efficient, and environmentally conscious. EcooHaven combines sustainable energy, smart technology, and modern architecture to create homes designed for a better tomorrow." },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

// Newest first, matching the WordPress archive order.
export const postsNewestFirst = [...posts].reverse();
