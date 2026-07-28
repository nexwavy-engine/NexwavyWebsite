export const SITE = {
  company: "Nexwavy Solutions Ltd",
  shortName: "Nexwavy",
  publicDescription:
    "Nexwavy Solutions Ltd is a Lagos-based business automation, AI training, and IT advisory company. We help growing teams replace scattered manual work with clear digital systems, better reporting, and cleaner day-to-day execution.",
  longDescription:
    "Nexwavy Solutions Ltd helps growing businesses improve how work gets done. We design automation tools, reporting workflows, AI training sessions, and advisory support for teams that want cleaner records, faster approvals, and better visibility across daily operations.",
  tagline:
    "Nexwavy helps growing businesses move from manual operations to structured digital execution — through automation, AI training, and IT advisory.",
  location: "Lagos, Nigeria",
  email: "hello@nexwavy.com",
  privacyEmail: "privacy@nexwavy.com",
  phoneRaw: "08169697844",
  phoneDisplay: "+234 816 969 7844",
  phoneLink: "tel:+2348169697844",
  whatsappLabel: "Chat on WhatsApp",
  whatsappUrl:
    "https://wa.me/2348169697844?text=Hi%20Nexwavy%2C%20I%27d%20like%20to%20talk%20about%20a%20project",
  siteUrl: "https://nexwavy.com",
  ogImagePath: "/brand/og-default.png",
  socials: {
    linkedin: "https://www.linkedin.com/company/nexwavy",
    x: "https://x.com/nexwavy",
    instagram: "https://instagram.com/nexwavy",
  },
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/contact", label: "Contact" },
  { href: "/register", label: "Register" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/refunds", label: "Refund Policy" },
] as const;

export const HERO = {
  title: "We help growing businesses replace manual work with smarter digital systems.",
  subtitle:
    "We turn scattered spreadsheets, WhatsApp threads, and paper forms into simple digital systems your team can actually use — so approvals move faster, records stay clean, and you can see what is happening across the business.",
  primaryCta: { label: "Start a Project", href: "/contact" },
  secondaryCta: { label: SITE.whatsappLabel, href: SITE.whatsappUrl },
  statusLine: "Now onboarding businesses for AI training and automation projects.",
  trustLine: "Business Automation · AI Training · IT Advisory",
} as const;

export const HOME_INTRO = {
  title: "Manual work is quietly slowing too many growing businesses down.",
  body: [
    "Many businesses still run critical operations through WhatsApp messages, Excel sheets, paper forms, scattered approvals, and repeated follow-ups.",
    "The result is predictable: delayed execution, weak reporting, avoidable errors, missed opportunities, and poor visibility for decision-makers.",
    "The companies that improve fastest are not always the biggest. They are the ones that build better systems earlier.",
  ],
} as const;

export const PROBLEMS = [
  {
    title: "Slow approvals",
    body: "Requests sit in chats, emails, or paper forms with no clear owner, status, or timeline.",
  },
  {
    title: "Weak reporting",
    body: "Owners and managers cannot see what is happening in real time across operations.",
  },
  {
    title: "Manual follow-up",
    body: "Teams spend too much time checking records, reminding people, and repeating admin work.",
  },
  {
    title: "Scattered tools",
    body: "Important information lives across WhatsApp, Excel, email, notebooks, and different staff phones.",
  },
] as const;

export const HIGHLIGHTS = [
  {
    title: "Business automation and productivity systems",
    body: "We design and build usable systems for request tracking, approvals, attendance, field reporting, customer intake, dashboards, and simple internal portals.",
    cta: "Explore Our Services",
    href: "/services",
  },
  {
    title: "AI productivity training",
    body: "We help professionals and teams use AI for writing, research, reporting, planning, spreadsheet support, and better day-to-day execution.",
    cta: "View AI Training",
    href: "/ai-training",
  },
  {
    title: "IT advisory and process review",
    body: "We help business owners and teams understand what to fix, what to automate, and whether the best answer is a tool, a workflow change, or both.",
    cta: "Start a Project",
    href: "/contact",
  },
] as const;

export const EXECUTION_LOOP = {
  title: "The Nexwavy Execution Loop",
  intro:
    "We keep the work simple and disciplined: understand the workflow, build only what is needed, train the users, and improve from real usage.",
  steps: [
    {
      step: "Diagnose the workflow",
      body: "We study how the work currently moves, where delays happen, and what the team is already using.",
    },
    {
      step: "Map the pain",
      body: "We identify the repeated manual steps, missing records, unclear approvals, and reporting gaps.",
    },
    {
      step: "Design the simplest fix",
      body: "We recommend the lightest tool or process that can solve the problem properly.",
    },
    {
      step: "Build the working version",
      body: "We create the form, dashboard, portal, automation, or workflow needed to run the process better.",
    },
    {
      step: "Train the users",
      body: "We help the team understand how to use the system and what changes in their daily routine.",
    },
    {
      step: "Measure and improve",
      body: "We review adoption, fix what is not working, and improve the system based on real usage.",
    },
  ],
} as const;

export const PROCESS = EXECUTION_LOOP.steps;

export const WHY_NEXWAVY = {
  title: "Technology only earns its place when it changes the result.",
  body:
    "We focus on the workflow first. That means understanding the request, record, approval, report, or training problem before deciding whether the answer is a spreadsheet cleanup, a form, a no-code tool, or a custom build.",
  points: [
    "Business-first thinking",
    "Clear reporting",
    "Clean records",
    "Usable tools",
    "Measured rollout",
    "Dependable support",
  ],
} as const;

export const AUDIENCES = [
  {
    title: "SMEs and growing teams",
    body: "Teams that need a cleaner way to manage requests, approvals, tracking, reporting, and follow-up.",
  },
  {
    title: "Schools and training businesses",
    body: "Organizations that need better coordination around attendance, registration, records, communication, and reporting.",
  },
  {
    title: "Retail and inventory-led businesses",
    body: "Businesses that want clearer sales visibility, stock tracking, customer records, and branch-level reporting.",
  },
  {
    title: "Service businesses",
    body: "Teams that need a more structured way to handle customer requests, job status, field activity, and open work.",
  },
  {
    title: "Corporate departments",
    body: "Departments that want practical AI enablement and a more disciplined approach to repetitive internal processes.",
  },
  {
    title: "Founders and business owners",
    body: "Leaders who want clarity on what to fix first before spending on the wrong tool or build.",
  },
] as const;

export const OFFERS = [
  {
    title: "Paid Discovery Session",
    price: "From NGN 100,000",
    body: "A focused review of your current workflow, friction points, reporting gaps, and next sensible system decision.",
    cta: "Book a Discovery Session",
    href: "/contact",
  },
  {
    title: "AI Productivity Masterclass",
    price: "NGN 75,000 per participant",
    body: "Hands-on AI training for professionals, business owners, and teams that want a clearer and safer way to use AI at work.",
    cta: "Register for AI Training",
    href: "/register",
  },
  {
    title: "Starter Automation Project",
    price: "From NGN 500,000",
    body: "A focused automation build for one business process such as attendance, request tracking, dashboards, intake, or approvals.",
    cta: "Discuss Automation",
    href: "/contact",
  },
  {
    title: "Team & Corporate AI Training — From NGN 500,000 per session",
    price: "Corporate training",
    body: "Private AI productivity training for SMEs and teams, with corporate department and executive programmes available. Full pricing is on the AI Training page.",
    cta: "Request Corporate Training",
    href: "/ai-training",
  },
] as const;

export const PROOF_NOTE = {
  title: "Building proof the right way",
  body:
    "Nexwavy is currently focused on selected pilot and early client engagements across automation, reporting, and AI productivity training. As these projects conclude, we will publish verified outcomes, lessons, and client-approved case notes.",
} as const;

export const ABOUT = {
  intro: SITE.longDescription,
  whoWeAre:
    "Nexwavy Solutions Ltd is a Lagos-based business automation, AI training, and IT advisory company. We help growing teams replace scattered manual work with clear digital systems, better reporting, and cleaner day-to-day execution.",
  mission:
    "To help businesses replace slow, manual, and scattered ways of working with structured, reliable, and intelligent digital systems.",
  vision:
    "To become a dependable technology partner for businesses across Africa, building practical systems that improve productivity, unlock growth, and prepare organizations for the future of work.",
  belief:
    "We do not build technology for decoration. We start by understanding the workflow, the friction, and the decision the business is trying to improve.",
  approach: [
    "Understand the workflow",
    "Identify the real pain points",
    "Recommend the lightest fix that will work",
    "Build only what is needed",
    "Train the users properly",
    "Review and improve from real usage",
  ],
  teamCopy:
    "Nexwavy is led by founders with experience across business operations, technology delivery, process improvement, and digital systems. The team works with clients to understand the real workflow first, then design the simplest system that can improve it.",
  founders: [
    { name: "Femi Olawuyi", role: "Co-founder" },
    { name: "Oloyede Akinmade", role: "Co-founder" },
  ],
} as const;

export const SERVICE_CATEGORIES = [
  {
    id: "business-automation",
    title: "Business Automation",
    summary:
      "For teams relying on spreadsheets, WhatsApp follow-ups, paper forms, or repeated manual approvals.",
    bullets: [
      "request tracking",
      "approvals",
      "attendance and field reporting",
      "customer intake",
      "task assignment",
      "operational dashboards",
      "simple internal portals",
    ],
  },
  {
    id: "ai-productivity-training",
    title: "AI Productivity Training",
    summary:
      "For professionals and teams that want to use AI properly at work without turning it into noise.",
    bullets: [
      "clear prompting",
      "daily work use cases",
      "document and email support",
      "spreadsheet and reporting support",
      "data safety",
      "team usage rules",
    ],
  },
  {
    id: "it-advisory",
    title: "IT Advisory",
    summary:
      "For businesses that need a clear view of what to fix before spending money on tools.",
    bullets: [
      "workflow review",
      "automation readiness",
      "tool selection",
      "reporting structure",
      "build-versus-buy decisions",
      "implementation planning",
    ],
  },
] as const;

export const DISCOVERY = {
  title: "Start with clarity before building.",
  body:
    "A discovery session helps you see what is actually slowing the work down, what should change first, and what kind of solution fits the business now.",
  fee: "From NGN 100,000",
  steps: [
    "Share the workflow or process you want to improve",
    "Join a structured review session",
    "Map the pain points and reporting gaps",
    "Identify the simplest viable fix",
    "Receive a clearer next-step recommendation",
  ],
} as const;

export const BUILD_VS_BUY = {
  title: "We do not build custom software where a simple existing tool is enough.",
  body:
    "Sometimes the right answer is a spreadsheet cleanup, a no-code tool, a form, or a better reporting process. Sometimes the business needs a custom system. Nexwavy helps you make that call before money is wasted.",
} as const;

export const SERVICE_FAQ = [
  {
    question: "Do you always recommend a custom build?",
    answer:
      "No. We only recommend a custom build when the workflow genuinely needs one. Sometimes a simpler tool or cleaner process is enough.",
  },
  {
    question: "Can you review our process before any build starts?",
    answer:
      "Yes. That is exactly what our discovery and advisory work is for.",
  },
  {
    question: "Do you work with small and growing businesses?",
    answer:
      "Yes. Most of our positioning is built around growing teams that need more structure without unnecessary complexity.",
  },
  {
    question: "Can you support adoption after rollout?",
    answer:
      "Yes. We can train users, refine the workflow, and support improvement after launch.",
  },
] as const;

export const SOLUTION_EXAMPLES = [
  {
    title: "Attendance & Field Check-In",
    body: "Track attendance, location-based check-ins, exceptions, and daily field activity in one place.",
    label: "Sample dashboard",
    sampleRows: [
      "Amina Bello · Checked in · 08:07",
      "Tunde Afolabi · On route · 08:19",
      "Grace Okon · Exception logged · 08:26",
    ],
  },
  {
    title: "Sales & Inventory Tracker",
    body: "Give small teams a cleaner way to record sales, monitor stock, and understand what is moving.",
  },
  {
    title: "Approval Workflow",
    body: "Move requests from submission to review, approval, and closure with clear ownership at each step.",
    label: "Illustrative workflow",
    sampleRows: ["Submitted", "Review", "Approved", "Closed"],
  },
  {
    title: "Customer Request Portal",
    body: "Collect customer requests through a simple form or portal and route each one to the right person or team.",
  },
  {
    title: "Reporting Dashboard",
    body: "Turn daily activity into simple views that help managers see progress, delays, and open work.",
    label: "Sample dashboard",
    sampleRows: ["Open work · 18", "Delayed items · 4", "Closed today · 11"],
  },
] as const;

export const MASTERCLASS = {
  name: "AI Productivity Masterclass",
  promise:
    "AI training should make work clearer, not noisier. The Nexwavy AI Productivity Masterclass helps individuals and teams learn how to use AI for everyday work: writing, research, reporting, planning, analysis, and better decision support.",
  intro:
    "This is practical, hands-on training for professionals, SMEs, and teams that want to use AI confidently, responsibly, and with better judgment at work.",
  participantsLearn: [
    "write clear prompts",
    "use AI for everyday work tasks",
    "review and improve AI outputs",
    "avoid sharing sensitive data carelessly",
    "build a personal AI routine for work",
    "apply AI to documents, emails, spreadsheets, planning, and reporting",
  ],
  audiences: [
    "Professionals",
    "SME teams",
    "Business owners",
    "Corporate departments",
    "Executives and decision-makers",
  ],
  pricing: [
    "AI Productivity Masterclass — NGN 75,000 per participant",
    "SME Team Training — From NGN 500,000 per session",
    "Corporate Department Training — From NGN 1,500,000 per session",
    "Executive AI Workshop — From NGN 2,000,000 per session",
  ],
  noPaymentCopy:
    "No payment is taken on this page. After registration, the Nexwavy team will contact you with the next step for payment and seat confirmation.",
} as const;
