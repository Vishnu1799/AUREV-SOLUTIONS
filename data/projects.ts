import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "PRJ-01",
    slug: "temple-finance-tracker",
    title: "Temple Finance Tracker",
    category: "Financial Technology",
    status: "Commercially Delivered",
    isPublic: true,
    tagline: "Simplified administrative financial recordkeeping and expense management.",
    summary:
      "A dedicated financial management application engineered to streamline income recording, expense auditing, and financial documentation for temple administrative committees.",
    problem:
      "Traditional temple administration frequently relies on physical ledgers and dispersed receipt notes, leading to manual reconciliation delays, vulnerability to lost records, and cumbersome audit preparation.",
    objectives: [
      "Simplify temple financial accounting and transaction entry.",
      "Systematically categorize and organize income and expenditure records.",
      "Improve immediate accessibility of historical financial documentation.",
      "Eliminate tedious manual bookkeeping errors.",
      "Generate clean, printable financial balance sheets and summaries.",
    ],
    implementedFeatures: [
      "Income & donation financial entry logging.",
      "Expense recording categorized by administrative purpose.",
      "Structured financial record maintenance and historical ledger.",
      "Automated summary reporting and balance generation.",
      "Printable, auditor-ready documentation views.",
    ],
    commercialDetails: {
      deliveredFor: "Temple administrative clients in Tamil Nadu",
      saleValue: "₹15,000",
      invoiceNumber: "#2894",
      invoiceDate: "January 24, 2026",
    },
    keyTakeaway:
      "A delivered financial software system providing accountability and audit compliance for administrative trust bodies.",
    relatedSlugs: ["customer-relationship-payment-tracking", "aurev-ai-payment-recovery"],
  },
  {
    id: "PRJ-02",
    slug: "customer-relationship-payment-tracking",
    title: "Customer Relationship & Payment Tracking System",
    category: "Business Management",
    status: "Developed",
    isPublic: true,
    tagline: "Centralized client ledger and pending receivables management system.",
    summary:
      "A focused business management platform engineered to help enterprises track customer profiles, monitor payment activities, and maintain receivable timelines.",
    problem:
      "Small and mid-scale businesses lose revenue through unmonitored receivables, delayed client payment follow-ups, and fragmented customer payment history.",
    objectives: [
      "Centralize all client directory details in a single accessible console.",
      "Organize incoming payment records and outstanding client balances.",
      "Provide real-time visibility into pending and overdue receivables.",
      "Improve collection follow-up workflows through automated tracking.",
      "Minimize repetitive manual accounting friction.",
    ],
    implementedFeatures: [
      "Customer profile and contact management.",
      "Payment entry recording and ledger attribution.",
      "Real-time outstanding balance calculation.",
      "Search and record retrieval across historical transactions.",
      "Exportable and printable payment summaries.",
    ],
    keyTakeaway:
      "A developed business tool providing clarity on pending collections and customer transaction timelines.",
    relatedSlugs: ["temple-finance-tracker", "aurev-ai-payment-recovery"],
  },
  {
    id: "PRJ-03",
    slug: "personal-finance-manager",
    title: "Personal Finance Manager",
    category: "Financial Technology",
    status: "Internal Review",
    isPublic: false, // Internal review only
    tagline: "Personal budgeting and transaction categorization engine.",
    summary:
      "A personal financial management application concept designed to help individuals record income, categorize expenditures, and observe spending patterns.",
    problem:
      "Individuals struggle with tracking daily variable expenses and maintaining budget discipline across multiple payment channels.",
    objectives: [
      "Track daily personal expenses and income streams.",
      "Categorize transactions automatically.",
      "Visualize monthly spending patterns and budget limits.",
    ],
    implementedFeatures: [
      "Transaction entry and category assignment.",
      "Monthly expense aggregation.",
    ],
    relatedSlugs: [],
  },
  {
    id: "PRJ-04",
    slug: "psna-student-feedback-portal",
    title: "PSNA Student Feedback & Academic Portal",
    category: "Educational Technology",
    status: "In Development",
    isPublic: true,
    tagline: "Departmental academic feedback, batch isolation, and assignment management architecture.",
    summary:
      "An institutional academic platform engineered to support departmental feedback, serial test assignments, and isolated batch administration with zero cross-batch interference.",
    problem:
      "Academic portals managing concurrent student batches often encounter cross-batch record interference, duplicated test assignments, and partial database mutations during student promotion cycles.",
    objectives: [
      "Isolate serial test assignments per student batch with zero cross-contamination.",
      "Enable reliable batch promotion and demotion with atomicity checks.",
      "Ensure absolute backend and database consistency across academic terms.",
      "Preserve historical student and departmental performance records.",
    ],
    implementedFeatures: [
      "Departmental feedback intake and analytics reporting.",
      "Independent serial test assignment structure per student batch.",
      "Batch configuration validation preventing duplicate assignments.",
    ],
    plannedFeatures: [
      "Unified Promote/Demote Batch workflow with pre-execution safety confirmation.",
      "Atomic database transaction rollbacks preventing partial batch updates.",
      "Role-based departmental authorization guards.",
    ],
    keyTakeaway:
      "Engineering institutional infrastructure for batch isolation, data consistency, and transactional safety.",
    relatedSlugs: ["temple-finance-tracker"],
  },
  {
    id: "PRJ-05",
    slug: "nivora",
    title: "NIVORA Grocery Platform",
    category: "E-commerce / Grocery",
    status: "Working Prototype",
    isPublic: true,
    tagline: "Customer grocery ordering platform engineered with resilient checkout flows.",
    summary:
      "A working grocery ordering platform prototype engineered as the retail interface integrated with AUREV AI payment verification architecture.",
    problem:
      "Retail grocery e-commerce experiences frequently suffer dropped carts and duplicate charges when users face network fluctuations during checkout payment confirmation.",
    objectives: [
      "Provide a clean, rapid digital grocery browsing and ordering experience.",
      "Support streamlined shopping basket and checkout workflows.",
      "Integrate resilient payment confirmation handling.",
      "Prevent accidental duplicate order transactions.",
    ],
    implementedFeatures: [
      "Dynamic catalog browsing and product categorization.",
      "Real-time basket management and order assembly.",
      "Controlled payment simulator and sandbox gateway integration.",
      "Real-time order state updates via Server-Sent Events / WebSockets.",
      "Immediate handoff to transaction verification services.",
    ],
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
    ],
    keyTakeaway:
      "A grocery platform prototype focused on seamless purchasing and robust checkout failure handling.",
    relatedSlugs: ["aurev-ai-payment-recovery"],
  },
  {
    id: "PRJ-06",
    slug: "aurev-ai-payment-recovery",
    title: "AUREV AI: Payment Failure Recovery System",
    category: "Agentic AI / FinTech",
    status: "Working Prototype",
    isPublic: true,
    tagline: "Intelligent payment failure verification before initiating secondary attempts.",
    summary:
      "An intelligent backend verification engine designed to intercept and resolve ambiguous, interrupted, and failed digital payment transactions before users are prompted to pay again.",
    problem:
      "In digital payments, a frontend timeout or error message does not prove that money wasn't deducted. Retrying blindly causes duplicate debiting, customer panic, support overhead, and chargeback disputes.",
    objectives: [
      "Detect and classify payment anomalies immediately upon gateway signal interruption.",
      "Interrogate payment gateway logs and transaction ledgers for definitive status evidence.",
      "Enforce idempotency to eliminate double-charging on identical orders.",
      "Safely automate recovery decisions (reconcile, wait, or clear for retry).",
      "Maintain strict ledger consistency between customer orders and financial records.",
    ],
    implementedFeatures: [
      "Payment failure diagnosis engine distinguishing network drops from bank rejections.",
      "Transaction status verification probe across gateway simulation endpoints.",
      "Strict order idempotency keys preventing secondary charge attempts.",
      "Safe recovery state machine with customer transparency notifications.",
      "Audit trail logging for financial event inspection.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "React.js",
      "Socket.IO / SSE",
    ],
    keyTakeaway:
      "Foundational architectural principle: 'Never retry a payment blindly. Verify the previous transaction before initiating another payment attempt.'",
    relatedSlugs: ["nivora", "temple-finance-tracker"],
  },
  {
    id: "PRJ-07",
    slug: "aurev-ai-personal-assistant",
    title: "AUREV AI: Personal AI Assistant",
    category: "Personal AI / Automation",
    status: "Concept",
    isPublic: true,
    tagline: "Permission-governed autonomous agent for cross-device task execution.",
    summary:
      "An architectural concept for a secure, localized personal AI assistant designed to execute complex digital workflows across personal computers and mobile devices with explicit user consent.",
    problem:
      "Current virtual assistants answer queries but lack secure autonomy to execute multi-step desktop and mobile actions without compromising user credentials or initiating unverified operations.",
    objectives: [
      "Enable voice and natural language command execution across operating systems.",
      "Assist with sensitive operations with strict confirmation boundaries.",
      "Provide meeting audio transcription and actionable task extraction.",
      "Establish an unbreakable permission-based authorization architecture.",
    ],
    implementedFeatures: [
      "System architectural specification and security model design.",
      "Workflow dispatch and permission boundary schemas.",
    ],
    plannedFeatures: [
      "Trust Core: Isolated security layer for identity and approval verification.",
      "Verification Ring: Multi-step recipient validation for financial flows.",
      "Hash Chain: Tamper-evident ledger of executed local automation tasks.",
      "Voice intent interpretation and contextual task scheduling.",
    ],
    keyTakeaway:
      "A forward-looking agentic AI concept emphasizing zero-trust security and explicit user confirmation.",
    relatedSlugs: ["aurev-ai-payment-recovery"],
  },
  {
    id: "PRJ-08",
    slug: "neochill",
    title: "NEOCHILL: Zero-Electricity Produce Cooling",
    category: "Hardware & Sustainable Innovation",
    status: "Design / Demonstration",
    isPublic: true,
    tagline: "Evaporative cooling container preserving fresh produce for street vendors.",
    summary:
      "An engineering concept and demonstration prototype exploring zero-electricity cooling to help street vendors and small roadside sellers preserve fresh fruits and vegetables without expensive grid power.",
    problem:
      "Small street vendors face severe produce spoilage in tropical heat. Conventional refrigeration requires continuous electricity and capital investment that micro-retailers cannot sustain.",
    objectives: [
      "Develop a passive, zero-electricity cooling chamber using thermodynamic principles.",
      "Lower internal temperature and raise relative humidity to prolong produce freshness.",
      "Drastically cut inventory spoilage and daily operational loss for street vendors.",
      "Create an affordable, repairable hardware design built for rugged everyday use.",
    ],
    implementedFeatures: [
      "Thermodynamic concept engineering and dimensional schematics.",
      "Engineering CAD drawings and physical chamber structure specifications.",
      "Chamber prototype demonstration display.",
    ],
    keyTakeaway:
      "Sustainable hardware engineering demonstrating passive evaporative preservation to protect micro-vendor livelihoods.",
    relatedSlugs: ["arctic-mesh", "smart-ai-sanitation-system"],
  },
  {
    id: "PRJ-09",
    slug: "arctic-mesh",
    title: "ARCTIC-MESH: Sustainable Produce Storage",
    category: "Hardware & Sustainable Innovation",
    status: "Concept",
    isPublic: true,
    tagline: "Perforated High-Density Polyethylene produce preservation container.",
    summary:
      "A dedicated produce preservation concept engineered with High-Density Polyethylene (HDPE) mesh architecture to optimize airflow, hygiene, and mechanical longevity for fruit and vegetable sellers.",
    problem:
      "Produce containers for street vendors often use poor airflow geometry or toxic, non-food-safe plastics that trap heat, condense moisture, and accelerate bacterial rot.",
    objectives: [
      "Improve produce storage ventilation through engineered structural mesh patterns.",
      "Utilize durable, food-grade High-Density Polyethylene (HDPE) as the primary material.",
      "Prevent moisture pooling and reduce post-harvest deterioration.",
      "Design an accessible, lightweight, and stackable modular container.",
    ],
    implementedFeatures: [
      "Material specification analysis selecting food-grade HDPE.",
      "Structural ventilation pattern and airflow channel concepts.",
      "Independent architectural separation from the NEOCHILL cooling unit.",
    ],
    plannedFeatures: [
      "Tooling and injection mold prototypes.",
      "Comparative field testing on leafy vegetable shelf-life extension.",
    ],
    keyTakeaway:
      "Engineering clean, food-safe HDPE materials to safeguard fresh produce distribution in micro-retail markets.",
    relatedSlugs: ["neochill"],
  },
  {
    id: "PRJ-10",
    slug: "smart-ai-sanitation-system",
    title: "Smart AI Sanitation System",
    category: "IoT & Smart Infrastructure",
    status: "Concept",
    isPublic: true,
    tagline: "Sensor-driven environmental monitoring and automated sanitation for public facilities.",
    summary:
      "A proposed IoT and automation architecture designed to monitor public sanitation facilities using gas sensors, optical footfall detection, and automated cleaning actuation.",
    problem:
      "Public restrooms frequently suffer from irregular maintenance cycles, unmonitored odor escalation, and water shortages, creating hazardous and unsanitary conditions for communities.",
    objectives: [
      "Continuously monitor ammonia, methane, and odor levels using gas sensors.",
      "Track usage frequency with contact-free footfall tracking.",
      "Automate high-pressure water pump and valve cycles based on actual usage thresholds.",
      "Ensure reliable fluid level telemetry to prevent dry-pump operation.",
    ],
    implementedFeatures: [
      "Hardware architecture and sensor circuit diagrams.",
      "ESP32 microcontroller integration schematic.",
      "Actuation logic for relay-driven pumps and misting spray nozzles.",
    ],
    techStack: [
      "ESP32 / ESP32-S3 Microcontroller",
      "MQ-135 Gas Sensor",
      "MQ-136 Gas Sensor",
      "Infrared Footfall Sensors",
      "Hydrostatic Water Level Sensors",
      "Relay Actuator Modules",
      "Solenoid Valves & High-Pressure Mist Nozzles",
    ],
    keyTakeaway:
      "Engineering IoT architecture for proactive public sanitation automation.",
    relatedSlugs: ["neochill"],
  },
  {
    id: "PRJ-11",
    slug: "bharatplay",
    title: "BHARATPLAY: Traditional Gaming Platform",
    category: "Cultural Technology",
    status: "Concept",
    isPublic: true,
    tagline: "Revitalizing traditional Indian indigenous games through interactive technology.",
    summary:
      "A cultural technology concept aimed at preserving, documenting, and teaching indigenous Indian board and outdoor games to future generations.",
    problem:
      "Centuries of rich Indian indigenous games and cultural storytelling are disappearing as youth attention shifts exclusively to modern international digital gaming titles.",
    objectives: [
      "Document rules, historical context, and strategy of traditional Indian games.",
      "Digitize gameplay mechanics into engaging, interactive digital experiences.",
      "Introduce youth to cultural folklore through gamified historical narratives.",
      "Design intelligent algorithmic opponents based on ancient game tactics.",
    ],
    implementedFeatures: [
      "Problem statement analysis and concept documentation.",
      "Curated repository architecture of verified historical games and oral traditions.",
      "Conceptual UX design for interactive rule discovery and match playing.",
    ],
    plannedFeatures: [
      "Interactive digital match boards for traditional games.",
      "AI-powered algorithmic opponent modeling traditional play strategies.",
    ],
    keyTakeaway:
      "Cultural preservation through engineering interactive digital narratives and traditional gameplay logic.",
    relatedSlugs: ["nivora"],
  },
];

export function getPublicProjects(): Project[] {
  return projects.filter((p) => p.isPublic);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.isPublic) return undefined;
  return project;
}
