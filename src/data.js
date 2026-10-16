/**
 * Hiimesh | Auto Creator - Official Portfolio Data Configuration
 * Streamlined single-page configuration focused on Skills and Selected Work.
 */

export const creatorInfo = {
  name: "Hiimesh",
  brandTitle: "Hiimesh | Auto Creator",
  tagline: "Built Around the Love of Machines.",
  bio: "I’m Hiimesh — an automotive content creator passionate about cars, bikes, performance machines, and fitness. I create short-form content that combines automotive knowledge, strong visuals, and engaging storytelling.",
  positioning: "An emerging automotive content creator who produces engaging short-form videos, automotive explainers, product-focused content, and visual storytelling. Open to relevant brand partnerships and UGC projects.",
  email: "autoaddicthiimesh@gmail.com",
};

export const socialPlatforms = {
  instagram: {
    handle: "@autoaddicthiimesh",
    url: "https://www.instagram.com/autoaddicthiimesh/",
    description: "Automotive Reels, car and bike facts, performance content, and creator updates.",
    buttonText: "Follow on Instagram",
    followers: "1,149",
    posts: "36"
  },
  youtube: {
    handle: "@autoaddicthimesh14",
    url: "https://www.youtube.com/@autoaddicthimesh14",
    description: "Automotive videos, educational content, performance topics, and Shorts.",
    buttonText: "Subscribe on YouTube"
  }
};

export const insightsSnapshot = {
  periodLabel: "Displayed 30-Day Period Snapshot",
  disclaimer: "Metrics sourced directly from creator's Instagram Insights screenshot. All figures reflect actual organic reach during the captured 30-day window. Figures do not imply guarantees of future performance.",
  metrics: [
    {
      id: "views",
      value: 73878,
      display: "73,878",
      label: "Reel Views",
      sublabel: "30-Day Snapshot",
      highlight: true
    },
    {
      id: "viewers",
      value: 54978,
      display: "54,978",
      label: "Accounts Reached",
      sublabel: "30-Day Snapshot",
      highlight: false
    },
    {
      id: "followers",
      value: 1149,
      display: "1,149",
      label: "Followers",
      sublabel: "+19 in 30 Days",
      highlight: false
    },
    {
      id: "top-reel",
      value: 33700,
      display: "33.7K",
      label: "Top Trial Reel",
      sublabel: "2,033+ Likes",
      highlight: true
    }
  ]
};

export const creatorSkills = [
  {
    id: "mechanical-facts",
    title: "Automotive Facts & Engineering Deconstruction",
    category: "Technical Breakdown",
    icon: "cogs",
    description: "Translating complex mechanical engineering concepts (tyre wear physics, horsepower vs torque, braking dynamics, and downforce) into high-retention, visual short-form explainers.",
    tags: ["Tire Science", "Powertrain Physics", "Braking Systems", "Aerodynamics"]
  },
  {
    id: "short-form-storytelling",
    title: "High-Retention Short-Form Storytelling",
    category: "Content Production",
    icon: "film",
    description: "Crafting vertical video concepts engineered for Instagram Reels and YouTube Shorts. Strong opening hooks, tight pacing, and engaging voiceovers that hold viewer attention.",
    tags: ["Hook Strategy", "Viral Pacing", "Voiceover Direction", "Audience Retention"]
  },
  {
    id: "product-features-ugc",
    title: "Automotive Product Features & UGC",
    category: "Commercial Fit",
    icon: "package",
    description: "Showcasing automotive aftermarket products, carbon fiber aero components (e.g. Carbonetics), detailing accessories, and riding gear with macro detail and real enthusiast enthusiasm.",
    tags: ["Product Demos", "Macro B-Roll", "UGC Ad Creatives", "Carbonetics Ready"]
  },
  {
    id: "cars-supercars",
    title: "Cars, Supercars & Automotive Culture",
    category: "Culture & Lore",
    icon: "car",
    description: "Exploring automotive heritage, legendary model naming codes (GT, RS, GTR), design evolution, and modern sports car engineering.",
    tags: ["Supercar Culture", "Model Naming Heritage", "Exotic Styling", "GT Racing Lore"]
  },
  {
    id: "motorcycles-bikes",
    title: "Motorcycles & Two-Wheeled Mechanics",
    category: "Two-Wheeled Tech",
    icon: "bike",
    description: "Deep knowledge of high-performance superbikes, radial calipers, floating brake discs, suspension ergonomics, and rider dynamics.",
    tags: ["Superbike Hardware", "Rider Dynamics", "Chassis & Calipers", "Component Safety"]
  },
  {
    id: "driver-fitness",
    title: "Driver Conditioning & Peak Athletic Fitness",
    category: "Lifestyle & Discipline",
    icon: "activity",
    description: "Highlighting functional gym training, grip strength, neck resilience, and cardiovascular fitness required to pilot high-G machines.",
    tags: ["Driver Conditioning", "Grip Strength", "Gym Lifestyle", "Athletic Composure"]
  }
];

export const portfolioCategories = [
  { id: "all", label: "All Work" },
  { id: "facts", label: "Automotive Facts" },
  { id: "cars", label: "Cars & Supercars" },
  { id: "bikes", label: "Motorcycles & Bikes" },
  { id: "motorsport", label: "Motorsport & Aero" },
  { id: "fitness", label: "Fitness & Lifestyle" }
];

export const portfolioItems = [
  {
    id: "tyre-smooth",
    title: "Why Tyres Become Smooth: Tread Wear, Heat Cycles & Grip Limits",
    category: "facts",
    categoryLabel: "Automotive Facts",
    image: "/images/tyre-wear.jpg",
    verifiedStats: "33.7K Views • 2,033 Likes",
    isTopPerformer: true,
    tag: "Top Performer",
    hook: "Ever wondered why street tyres go bald while race slicks grip like glue?",
    summary: "A high-retention technical breakdown of tire compound science. Explains the difference between hydraulic aquaplaning risk on worn street radials versus thermal grip in racing slicks, heat cycling, and tire tread depth indicators.",
    technicalKeypoints: [
      "Groove function: Water evacuation vs surface contact patch",
      "Heat cycles and chemical vulcanization breakdown",
      "Why slicks need continuous operating temperatures to grip"
    ],
    niche: "Tires, Maintenance & Physics",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Ideal format for performance tire brands, wheel manufacturers, and vehicle maintenance products."
  },
  {
    id: "engine-torque",
    title: "Horsepower vs. Torque: The Mechanical Reality Explained",
    category: "motorsport",
    categoryLabel: "Motorsport & Aero",
    image: "/images/engine-torque.jpg",
    verifiedStats: "~2,416 Views • 94 Likes",
    isTopPerformer: false,
    tag: "Core Explainer",
    hook: "Torque is how hard you hit the wall. Horsepower is how fast you hit it.",
    summary: "Demystifying engine dyno charts with visual engineering clarity. Compares low-end rotational twisting force (torque) with work rate over time (horsepower), using twin-turbo and naturally aspirated architectures.",
    technicalKeypoints: [
      "Mathematical relation: HP = (Torque × RPM) / 5252",
      "Why diesel engines deliver punch without high revs",
      "Turbocharger spool dynamics and powerband delivery"
    ],
    niche: "Powertrain & Mechanical Engineering",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Perfect for ECU tuning houses, turbo/exhaust manufacturers, and engine oil brands."
  },
  {
    id: "car-naming",
    title: "Why Car Models Have Specific Names: Automotive Heritage & GT Badges",
    category: "cars",
    categoryLabel: "Cars & Supercars",
    image: "/images/car-badge.jpg",
    verifiedStats: "~2,387 Views • 93 Likes",
    isTopPerformer: false,
    tag: "Car Culture",
    hook: "What do 'GT', 'RS', and 'GTR' actually mean beyond marketing hype?",
    summary: "Exploring the historic racing lineages behind iconic model designations. From Gran Turismo homologation rules to displacement codes and aerodynamic badges.",
    technicalKeypoints: [
      "FIA Homologation origins of the GT moniker",
      "Numeric displacement traditions vs modern downsizing badges",
      "Design psychology behind performance sub-brands"
    ],
    niche: "Car Culture & Automotive Lore",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Great storytelling framework for OEM dealer launches, restomods, and premium automotive lifestyle goods."
  },
  {
    id: "superbike-brakes",
    title: "Motorcycle Braking Components: Drilled Rotors & Radial Calipers",
    category: "bikes",
    categoryLabel: "Motorcycles & Bikes",
    image: "/images/superbike-brakes.jpg",
    verifiedStats: "Technical Explainer",
    isTopPerformer: false,
    tag: "Two-Wheeled Tech",
    hook: "Why do high-end superbikes use floating brake discs instead of fixed ones?",
    summary: "A close-up exploration of motorcycle stopping power. Covers the engineering behind Brembo radial calipers, cross-drilled heat dissipation, thermal expansion bobbins, and brake fade prevention.",
    technicalKeypoints: [
      "Thermal expansion: Why full-floating rotors prevent brake warping",
      "Axial vs Radial master cylinder pressure efficiency",
      "Brake fluid boiling points: DOT 4 vs DOT 5.1 racing fluids"
    ],
    niche: "Motorcycle Hardware & Rider Safety",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Ideal showcase for motorcycle accessories, aftermarket braking components, and protective gear."
  },
  {
    id: "race-aero",
    title: "Motorsport Aerodynamics: Splitters, Canards & Downforce Physics",
    category: "motorsport",
    categoryLabel: "Motorsport & Aero",
    image: "/images/race-aero.jpg",
    verifiedStats: "Aero Deep-Dive",
    isTopPerformer: false,
    tag: "Track Engineering",
    hook: "How does air create 800 kg of invisible weight on a racecar?",
    summary: "Visualizing high-speed airflow over modern performance cars. Examines Bernoulli's principle, ground effect venturi tunnels, vortex generators, and balancing downforce against parasitic drag.",
    technicalKeypoints: [
      "Stagnation pressure zones and front splitter effectiveness",
      "Rear wing angle of attack and induced drag penalties",
      "Active aero flaps vs passive carbon dive planes"
    ],
    niche: "Aero & Track Machinery",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Tailored for aerodynamic carbon fiber body kits, wing manufacturers, and track car fabricators."
  },
  {
    id: "driver-fitness",
    title: "Driver Conditioning & Grip Endurance: Peak Athletic Fitness",
    category: "fitness",
    categoryLabel: "Fitness & Lifestyle",
    image: "/images/driver-fitness.jpg",
    verifiedStats: "Lifestyle & Conditioning",
    isTopPerformer: false,
    tag: "Driver Lifestyle",
    hook: "Piloting high-G machines requires an athlete's neck, core, and forearm resilience.",
    summary: "Bridging the gap between the gym and the cockpit. Highlights functional training for automotive enthusiasts and drivers: grip stamina, isometric neck strength for lateral G-forces, and cardiovascular composure.",
    technicalKeypoints: [
      "Forearm flexor endurance for sustained motorcycle throttle and clutch control",
      "Cervical spine resilience under sustained high-speed cornering",
      "Core stability to prevent driver fatigue on track days"
    ],
    niche: "Driver Fitness & Health",
    videoUrl: "https://www.instagram.com/autoaddicthiimesh/",
    brandApplication: "Targeted for fitness apparel, gym accessories, driver hydration, and health tech brands."
  }
];
