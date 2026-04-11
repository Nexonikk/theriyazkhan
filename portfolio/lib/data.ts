export const experience = [
  {
    role: "GTM & Revenue Operations Practicum Active",
    company: "HireForSkillz",
    period: "Jan 2026 - Present",
    location: "Remote",
    achievements: [
      "Built end-to-end ICP research workflows using Clay + Apollo — enriching data with technographics, hiring signals, and funding triggers for B2B SaaS outreach",
      "Designed multi-channel outbound sequences (cold email + LinkedIn) with signal-based personalization; developed proficiency in email infrastructure (SPF/DKIM/DMARC, domain warmup)",
      "Created GTM tools tracker mapping 40+ tools across enrichment, sequencing, deliverability, dialers, and intent data — adopted as reference by program mentors",
      "Executed founder-level outreach campaigns for early-stage SaaS; trained on MEDDIC/MEDDPICC qualification frameworks for complex B2B sales cycles",
    ],
  },
  {
    role: "Manager — Sales Operations & Revenue",
    company: "PW (PhysicsWallah)",
    period: "Nov 2022 - Sep 2025",
    location: "Noida, India (Remote)",
    achievements: [
      "Built and led 25-member sales pod generating ₹1.5 Cr+ MRR (~$170K+), consistently ranking #1 org-wide in revenue, product knowledge, and call quality",
      "Consistently exceeded monthly revenue targets through structured pipeline management, consultative selling, and disciplined deal progression",
      "Achieved 27% YoY revenue growth through disciplined pipeline management, BANT/CHAMP qualification frameworks, and process standardization",
      "Redesigned lead allocation end-to-end — built routing logic by source, geography, and capacity; reduced lead-to-contact time from 120→5 min (96% improvement)",
      "Designed team rostering system single-handedly for 250+ counselor org — balancing shift coverage, capacity planning, and performance distribution",
      "Doubled MQL→SQL conversion rate through structured qualification frameworks and targeted coaching on objection handling",
      "Managed post-sale customer relationships to drive retention and expansion through regular value-based engagement",
      "Hired, trained, and mentored 250+ sales professionals; acted as Senior Hiring Panelist across 200+ interviews with highest quality-to-selection ratio",
      "Scaled Kota, Rajasthan POD from zero-to-revenue, establishing it as a high-performing regional vertical",
      "Led cross-functional projects with Product, Support, and Content teams to align GTM execution with customer outcomes",
      "Recognized by CFO and GM at org event for maintaining highest audit scores at team level",
    ],
  },
  {
    role: "Sales Manager",
    company: "Scaler",
    period: "Apr 2021 - Nov 2022",
    location: "Bengaluru, India (Remote)",
    achievements: [
      "Managed and scaled sales pods generating ₹13L+ monthly revenue per associate",
      "Executed full sales cycles — discovery, demo, negotiation, closing — for premium tech career platform targeting working professionals",
      "Consistently delivered against quota in high-volume sales environment; drove 15% revenue improvement through accurate forecasting and CRM accountability",
      "Designed sales training bootcamps and onboarding playbooks reducing new-hire ramp-up time; used CRM analytics to identify conversion opportunities",
      "Collaborated with Product, Finance & Operations to streamline performance dashboards and incentive models",
    ],
  },
  {
    role: "Senior Sales Trainer",
    company: "Relevel by Unacademy",
    period: "Dec 2019 - Mar 2021",
    location: "Bengaluru, India (Remote)",
    achievements: [
      "Designed and delivered sales enablement curricula for 1,000+ professionals across cohorts of 80+ — achieving 80% placement success rate and 4.8+ NPS",
      "Built CRM-integrated referral and alumni feedback funnels improving pipeline fill; audited IIT/IIM educator sessions establishing quality standards org-wide",
    ],
  },
  {
    role: "Business Development Manager",
    company: "Vedantu",
    period: "Sep 2018 - Nov 2019",
    location: "Guwahati, India (Remote)",
    achievements: [
      "Ranked 3rd PAN India in revenue performance; grew monthly revenue by 150% through structured outbound, referral campaigns, and disciplined pipeline management",
      "Managed and coached team of 25 Senior Academic Counselors across multiple regions",
    ],
  },
  {
    role: "Area Sales Manager",
    company: "Unity Pharma",
    period: "Jun 2017 - Aug 2018",
    location: "Lucknow, India",
    achievements: [
      "Led 15-member institutional B2B/B2G sales team to ₹1.5 Cr+ annual revenue; introduced Marg ERP CRM automating reporting and boosting accountability",
      "Conducted international product training seminars for healthcare professionals in UK & UAE — demonstrating comfort engaging senior stakeholders across cultures",
    ],
  },
];


export interface Project {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
    {
      title: "ICP Enrichment Workflow — Clay + Apollo",
      description:
        "Built end-to-end B2B SaaS prospecting workflow targeting Series A–B companies by technographic fit, hiring signals, and funding recency. Enriched contact data with multi-source waterfall logic for high-accuracy outreach.",
      metrics: "Waterfall Enrichment Logic",
      tags: ["Clay", "Apollo", "ICP Research", "Signal-Based Targeting"],
    },
    {
      title: "GTM Tools Stack Tracker — 40+ Tools Mapped",
      description:
        "Comprehensive reference tracker mapping the modern B2B SaaS GTM landscape across enrichment, sequencing, deliverability, dialers, and intent data. Adopted as reference by program mentors at HireForSkillz.",
      metrics: "40+ GTM Tools Mapped",
      tags: ["GTM Strategy", "RevOps", "Tool Evaluation", "Sales Infrastructure"],
    },
    {
      title: "Lead Allocation System Redesign — 96% Faster",
      description:
        "Redesigned manual lead allocation at PhysicsWallah. Built routing logic by lead source, geography, and counselor capacity. Cut response time from 120 minutes to 5 minutes across a 250+ counselor org.",
      metrics: "96% Faster (120→5 min)",
      tags: ["Sales Ops", "Process Design", "Lead Routing", "Revenue Operations"],
    },
    {
      title: "Sales Playbook & Training System",
      description:
        "Designed and delivered sales enablement curricula across multiple organizations — training 1,000+ professionals with 80% placement success rate and 4.8+ NPS. Built onboarding playbooks reducing ramp-up time.",
      metrics: "80% Placement Rate",
      tags: ["Sales Enablement", "Playbook Design", "Team Training", "Onboarding"],
    },
  ];

export const tools = [
    { name: "Sales Navigator", image: "/sales_navigator.png" },
    { name: "Lusha", image: "/lusha.jpeg" },
    { name: "Apollo.io", image: "/appolo.png" },
    { name: "ZoomInfo", image: "/zoominfo.png" },
    { name: "HubSpot", image: "/hubspot.jpg" },
    { name: "LeadSquared", image: "/leadsquare.webp" },
    { name: "Clay", image: "/clay.webp" },
    { name: "Hunter.io", image: "/hunter.png" },
    { name: "Skrapp.io", image: "/scarp.jpg" },
    { name: "Crunchbase", image: "/crunchbase.avif" },
    { name: "Builtwith", image: "/builtwith.webp" },
    { name: "Canva", image: "/canva.jpg" },
    { name: "Instantly", image: "/instantly.webp" },
    { name: "Smartlead", image: "/smartlead.webp" },
    { name: "Lemlist", image: "/lemlist.webp" },
    { name: "Heyreach", image: "/heyreach.webp" },
    { name: "NeverBounce", image: "/neverbounce.webp" },
    { name: "Findymail", image: "/findymail.webp" },
    { name: "Prospeo", image: "/prospeo.webp" },
    { name: "Google Sheets", image: "/googlesheets.webp" },
    { name: "Slack", image: "/slack.webp" },
    { name: "Claude AI", image: "/claude.webp" },
    { name: "ChatGPT", image: "/chatgpt.webp" },
    { name: "Perplexity", image: "/perplexity.webp" },
  ];
