const a1 = { url: "/media/a1.webp" };
const a2 = { url: "/media/a2.webp" };
const a3 = { url: "/media/a3.webp" };
const a4 = { url: "/media/a4.webp" };
const a5 = { url: "/media/a5.webp" };
const a6 = { url: "/media/a6.webp" };
const a7 = { url: "/media/a7.webp" };
const a8 = { url: "/media/a8.webp" };
const a9 = { url: "/media/a9.webp" };
const a10 = { url: "/media/a10.webp" };
const a11 = { url: "/media/a11.webp" };
const a12 = { url: "/media/a12.webp" };
const a13 = { url: "/media/a13.webp" };
const a14 = { url: "/media/a14.webp" };
const a15 = { url: "/media/a15.webp" };
const a16 = { url: "/media/a16.webp" };
const a17 = { url: "/media/a17.webp" };
const a18 = { url: "/media/a18.webp" };
const a19 = { url: "/media/a19.webp" };
const a20 = { url: "/media/a20.webp" };
const a21 = { url: "/media/a21.webp" };
const a22 = { url: "/media/a22.webp" };
const a23 = { url: "/media/a23.webp" };
const a24 = { url: "/media/a24.webp" };
const a25 = { url: "/media/a25.webp" };
const a26 = { url: "/media/a26.webp" };
const a27 = { url: "/media/a27.webp" };
const a28 = { url: "/media/a28.webp" };
const a29 = { url: "/media/a29.webp" };
const a30 = { url: "/media/a30.webp" };
const pdm = { url: "/media/pdm.webp" };
const beauty = { url: "/media/beauty.webp" };
const MVE = { url: "/media/MVE.webp" };
const btlsampling = { url: "/media/btlsampling.webp" };
const RTT = { url: "/media/RTT.webp" };
const compliance = { url: "/media/compliance.webp" };
const fractionalhr = { url: "/media/fractionalhr.webp" };

export const logoUrl = "/media/logo.jpg";
export const heroVideoUrl = "/media/hero.mp4";
export const madhaviUrl = "/media/madhavi.webp";
export const virenUrl = "/media/viren.webp";


export const contactDetails = {
  email: "madhavi@ingeniousmanagement.com",
  phone: "+91 98202 34332",
  phoneLabel: "Madhavi, +91 98202 34332",
  office: "Kandivali West, Mumbai",
  branches: "Branches in Bengaluru and New Delhi",
};

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  summary: string;
  body: string[];
  includes: string[];
  outcome: string;
  image: string;
  secondImage: string;
  caption: string;
};

/*Eight services*/
export const services: Service[] = [
  {
    slug: "promoter-deployment",
    name: "Promoter Deployment and Management",
    navLabel: "Promoter Deployment & Management",
    tagline: "A trained sell-out unit, not bodies in uniform.",
    summary:
      "A trained sell-out unit that engages the shopper, explains the product and helps close the sale.",
    body: [
      "Anyone can put a person in a store. Whether that person engaged the shopper, explained the product and helped close the sale is a different question, and the one we hold ourselves to.",
      "Every promoter is recruited against a defined profile, trained on your product story, groomed to your brand standard, supervised weekly and reviewed on conversion, not attendance.",
    ],
    includes: [
      "Recruitment",
      "Screening",
      "Onboarding",
      "Product training",
      "Store deployment",
      "Attendance tracking",
      "Supervisor management",
      "Performance review",
    ],
    outcome: "Higher shopper interaction, higher conversion, lower attrition at the shelf.",
    image: pdm.url,
    secondImage: pdm.url,
    caption: "Trained promoters at the shelf",
  },
  {
    slug: "beauty-advisors",
    name: "Beauty Advisors and Product Counsellors",
    navLabel: "Beauty Advisors & Product Counsellors",
    tagline: "Specialist closers for guided categories.",
    summary: "Specialist closers for categories where the shopper needs a guide, not a shelf.",
    body: [
      "Beauty, personal care and wellness shoppers do not buy from a shelf. They buy from a person they trust.",
      "Trained for consultation-led selling across brands such as Olay, Kaya Skin, Asta Berry, Rivela, Mamaearth, Streax Hair Colour, Bolly Glow and Soul Tree.",
    ],
    includes: [
      "Consultation-led selling",
      "Product demonstration",
      "Benefit explanation",
      "Usage guidance",
      "Premium product selling",
      "Customer reassurance",
    ],
    outcome: "Premium SKUs justified, baskets built, repeat purchase earned.",
    image: beauty.url,
    secondImage: beauty.url,
    caption: "Assisted beauty selling",
  },
  {
    slug: "merchandising",
    name: "Merchandising and Visibility Execution",
    navLabel: "Merchandising & Visibility Execution",
    tagline: "Make the shelf sell before anyone speaks.",
    summary:
      "If the shopper cannot find it, or does not trust how it looks, they will not buy it. We make the shelf sell.",
    body: [
      "Share of shelf is share of mind. Planograms drift, POSM disappears, facings shrink and nobody tells the brand team until the month closes.",
      "We audit, correct and photograph the shelf on every visit, so visibility spend actually shows up in the store.",
    ],
    includes: [
      "Planogram execution",
      "Shelf management",
      "POSM deployment",
      "Visual merchandising",
      "Share-of-shelf checks",
      "Display compliance",
      "Stock visibility",
    ],
    outcome: "Seen, stocked, presented right, every week.",
    image: MVE.url,
    secondImage: MVE.url,
    caption: "Seen, stocked, presented right",
  },
  {
    slug: "btl-activations",
    name: "BTL Activations and Sampling",
    navLabel: "BTL Activations & Sampling",
    tagline: "Turn a walk-past into a first try.",
    summary: "Turn a walk-past into a first try, and a first try into a habit.",
    body: [
      "Activations are only worth the footfall they convert. We plan for reach and frequency first, then design the interaction that earns the trial.",
      "Every campaign closes with a post-activation report: contacts made, samples given, trials converted, cost per trial.",
    ],
    includes: [
      "Product demonstrations",
      "Sampling campaigns",
      "In-store engagement",
      "Trial generation",
      "New launch activation",
      "Post-campaign reporting",
    ],
    outcome: "Measured trial, measured cost per conversion, measured repeat.",
    image: btlsampling.url,
    secondImage: btlsampling.url,
    caption: "Activation and sampling",
  },
  {
    slug: "retail-intelligence",
    name: "Real-Time Tracking and Reporting",
    navLabel: "Real-Time Tracking & Reporting",
    tagline: "Every shift, the shelf reports back to you.",
    summary:
      "Live sales and stock tracking at shelf level through the Recibo platform, with MIS reporting brand teams can act on.",
    body: [
      "You should not have to wait for a month-end deck to learn that a top store went out of stock in week one.",
      "Store-level data flows in every shift and lands in dashboards your activation, sales and trade marketing teams can act on the same day.",
    ],
    includes: [
      "Sales tracking",
      "Stock tracking",
      "Beat plan tracking",
      "Daily dashboards",
      "Market intelligence",
      "SKU-level visibility",
      "Field performance monitoring",
    ],
    outcome: "Decisions in days, not quarters.",
    image: RTT.url,
    secondImage: RTT.url,
    caption: "Field intelligence, live",
  },
  {
    slug: "workforce-compliance",
    name: "Compliant Workforce Management",
    navLabel: "Compliant Workforce Management",
    tagline: "The risk never lands on you.",
    summary:
      "A field force that stays trained, paid and compliant, so the risk never lands on you.",
    body: [
      "Automated HRMS for field staff through FactoHR, with transparent employee records available to every employee on mobile.",
      "Strict adherence to all government acts and norms: PF, ESIC, minimum wages, bonus, gratuity and state-specific labour requirements.",
    ],
    includes: [
      "Payroll management",
      "HRMS records",
      "Labour compliance",
      "Attendance records",
      "Appointment documentation",
      "Employee lifecycle support",
    ],
    outcome: "Zero compliance exposure, full audit trail.",
    image: compliance.url,
    secondImage: compliance.url,
    caption: "Trained, compliant field teams",
  },
  {
    slug: "payroll-services",
    name: "Payroll Services",
    navLabel: "Payroll Services",
    tagline: "Third-party payroll, run to the day.",
    summary:
      "End-to-end third-party payroll management for MSMEs, SMEs, start-ups and MNCs, delivered on a mobile-first HRMS with complete statutory cover.",
    body: [
      "We have run payroll as a service since 2019 for organisations that want the workforce without the back office. Salary processing, statutory filings, reimbursements and exits are handled on one automated platform.",
      "Every employee gets salary slips, income tax statements and Form 16 on their phone. Every client gets a single monthly reconciliation and a clean audit trail.",
    ],
    includes: [
      "Salary processing and disbursement",
      "PF, ESIC, PT and TDS filings",
      "Form 16 and income tax statements",
      "Automated expense and reimbursement claims",
      "Full and final settlement",
      "Statutory registers and audit support",
    ],
    outcome: "Payroll closed on time, every cycle, with zero statutory leakage.",
    image: a12.url,
    secondImage: a8.url,
    caption: "Payroll on an automated HRMS",
  },
  {
    slug: "fractional-hr",
    name: "Fractional HR Services",
    navLabel: "Fractional HR Services",
    tagline: "A senior HR function, at the size you actually need.",
    summary:
      "Senior HR leadership and shared HR operations on a part-time engagement, for teams too big to run without HR and too lean to hire a full department.",
    body: [
      "You get a named HR partner backed by our shared services bench: policy, hiring, onboarding, performance frameworks and employee relations, at a fraction of a full-time cost.",
      "Ideal for growing D2C brands, start-ups and regional businesses that need industry-benchmark HR practice without building it from scratch.",
    ],
    includes: [
      "Dedicated fractional HR partner",
      "Policy and handbook design",
      "Talent acquisition support",
      "Onboarding and induction frameworks",
      "Performance review systems",
      "Employee engagement and grievance handling",
    ],
    outcome: "An HR function that scales with headcount, not ahead of it.",
    image: fractional.url,
    secondImage: fractional.url,
    caption: "HR shared services",
  },
];

//STATISTICS//
export const stats = [
  { value: 18, suffix: "+", label: "Years of retail execution" },
  { value: 2150, suffix: "+", label: "Trained personnel" },
  { value: 2000, suffix: "+", label: "MT & GT outlets" },
  { value: 31, suffix: "", label: "States & UTs" },
];
export const aboutStats = stats;

export const problemSignals = [
  { n: "01", title: "Listed, but not moving", body: "Your product is in stores, but offtake is below expectation." },
  { n: "02", title: "Visible, but not chosen", body: "Your brand is seen, but shoppers still pick competition." },
  {
    n: "03",
    title: "Promoters present, but not productive",
    body: "Attendance is happening, but shopper interaction and conversion are weak.",
  },
  {
    n: "04",
    title: "Activations running, but not converting",
    body: "Sampling and demos are happening, but not translating into purchase.",
  },
  {
    n: "05",
    title: "Reports coming, but not revealing",
    body: "You get data, but not enough insight into what is blocking sell-out.",
  },
  {
    n: "06",
    title: "Competitors winning silently",
    body: "Competitor offers, promoters, displays and retailer push are influencing shopper decisions.",
  },
  {
    n: "07",
    title: "Trade spends leaking",
    body: "Displays, POSM, promoters and schemes are not translating into measurable store performance.",
  },
];

export const shelfModel = [
  {
    letter: "S",
    title: "See the Store Reality",
    body: "We identify what is happening at the shelf: availability, placement, displays, stock, competition and shopper behaviour.",
  },
  {
    letter: "H",
    title: "Humanize the Selling Moment",
    body: "We put trained human influence at the point of purchase: engagement, explanation, objection handling, nudging.",
  },
  {
    letter: "E",
    title: "Execute with Discipline",
    body: "Right promoter, right store, trained, groomed, supervised, compliant, covered and reported. Every week.",
  },
  {
    letter: "L",
    title: "Learn from the Last Mile",
    body: "Every store interaction becomes intelligence: objections, competitor offers, stock-outs, price resistance, switching triggers.",
  },
  {
    letter: "F",
    title: "Fix and Fuel Performance",
    body: "Intelligence becomes action: refresher training, store interventions, stock alerts, better scripts, weekly reviews.",
  },
];

export const sellModel = [
  {
    letter: "S",
    title: "Stimulate Interest",
    body: "We help the brand get noticed and considered: active shopper approach, visibility prompts, sampling triggers, launch hooks.",
  },
  {
    letter: "E",
    title: "Educate Shoppers",
    body: "We help shoppers understand why the brand is worth buying: benefits, usage, variants, price-value, honest comparison.",
  },
  {
    letter: "L",
    title: "Lead Purchase",
    body: "We help shoppers decide: objection handling, trial conversion, SKU recommendation, offer-led closing, basket building.",
  },
  {
    letter: "L",
    title: "Lift Performance",
    body: "Every interaction creates a sale or a learning: productivity reviews, competitor tracking, weak-store action plans.",
  },
];

export const industries = [
  { title: "FMCG", body: "Higher offtake, stronger visibility, better store throughput." },
  {
    title: "Beauty & Personal Care",
    body: "Assisted selling, demonstration, consultation, benefit explanation.",
  },
  { title: "Health & Wellness", body: "Education, trust-building, claim explanation." },
  { title: "Food & Beverage", body: "Sampling, trial, feedback, faster adoption." },
  { title: "D2C Entering Offline", body: "Converting online awareness into offline purchase." },
  { title: "Premium Brands", body: "Value justification and guided purchase." },
  { title: "Challenger Brands", body: "Shifting shoppers from legacy competitors." },
];

export const reports = [
  {
    title: "Weekly Sell-Out Acceleration Report",
    lead: "The flagship report. Shows whether retail presence is moving towards sales.",
    items: [
      "Outlet coverage",
      "Promoter deployment",
      "Shopper interactions",
      "Demos and samples",
      "Sales influenced",
      "Stock and display issues",
      "Competitor activity",
      "Best and weak stores",
      "Recommended actions",
    ],
  },
  {
    title: "Promoter Productivity Scorecard",
    lead: "Performance, not just attendance.",
    items: [
      "Attendance",
      "Grooming",
      "Product knowledge",
      "Shopper conversations",
      "Star performers and coaching needs",
      "Replacement risk",
    ],
  },
  {
    title: "Store Performance Dashboard",
    lead: "Where the brand is winning or losing, outlet by outlet.",
    items: [
      "Store-level coverage",
      "Promoter assigned",
      "Shopper interactions",
      "Sales influenced",
      "Weak and strong stores",
      "High-opportunity outlets",
    ],
  },
  {
    title: "Competitor Shelf Intelligence Report",
    lead: "Live market intelligence from the shelf.",
    items: [
      "Competitor offers",
      "Competitor promoters",
      "Shelf dominance",
      "New launches",
      "Price and pack activity",
      "Switching triggers",
    ],
  },
  {
    title: "Monthly Sell-Out Business Review Deck",
    lead: "Store-level execution turned into business-level decisions.",
    items: [
      "Executive summary",
      "Coverage and deployment",
      "Promoter productivity",
      "Store performance",
      "Competitor landscape",
      "Next-month action plan",
    ],
  },
];

//Testimonial//
export const testimonials = [
  {
    brand: "P&G",
    label: "P&G Partnership",
    author: "Senior Manager, Shopper Marketing",
    company: "Procter & Gamble",
    quote:
      "I have had a great experience working with you and value the Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
    spine: "oklch(0.352 0.126 295.3)",
  },
  {
    brand: "Axiom",
    label: "Axiom Gen Nxt India",
    author: "Head of Events & Activation",
    company: "Axiom Gen Nxt India",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
    spine: "oklch(0.602 0.215 27.7)",
  },
  {
    brand: "National Retail",
    label: "National Retail Brand",
    author: "National Retail Sales Head",
    company: "Leading National Retail Brand",
    quote:
      "The team at NM Ingenious are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in big stores across the country.",
    spine: "oklch(0.434 0.155 295.3)",
  },
  {
    brand: "Marico",
    label: "Soap Opera (Marico)",
    author: "Trade Marketing Manager",
    company: "Soap Opera, Marico",
    quote:
      "Thank you for your ongoing help and assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
    spine: "oklch(0.279 0.098 295.9)",
  },
  {
    brand: "Cipla Health",
    label: "Cipla Health",
    author: "Regional Field Force Lead",
    company: "Cipla Health",
    quote:
      "Store coverage plans were delivered on time, month after month, and the reporting gave us a clear read on what was actually happening at the counter.",
    spine: "oklch(0.551 0.151 295.8)",
  },
  {
    brand: "Capital Foods",
    label: "Capital Foods",
    author: "Modern Trade Manager",
    company: "Capital Foods",
    quote:
      "Merchandising discipline in modern trade improved visibly within a quarter. Facings held, planograms held, and the team flagged issues before we asked.",
    spine: "oklch(0.602 0.215 27.7)",
  },
];


export const gallery = [
  { url: a5.url, alt: "Merchandised FMCG facings in a modern trade aisle" },
  { url: a6.url, alt: "New-launch sampling activation booth" },
  { url: a3.url, alt: "Promoter presenting a product to a shopper at the shelf" },
  { url: a9.url, alt: "Shelf visibility execution in a modern trade store" },
  { url: a11.url, alt: "In-store engagement during a brand activation" },
  { url: a4.url, alt: "Promoter team on the store floor" },
  { url: a10.url, alt: "Assisted selling at a beauty counter" },
  { url: a8.url, alt: "Field team capturing store data during an activation" },
  { url: a2.url, alt: "Product counsellor explaining benefits to a shopper" },
  { url: a7.url, alt: "Sampling activation with shoppers" },
  { url: a12.url, alt: "Field team training session before store deployment" },
  { url: a16.url, alt: "Snack category shelf merchandised across multiple facings in modern trade" },
  { url: a17.url, alt: "Branded gondola header and shelf strips installed in a supermarket aisle" },
  { url: a18.url, alt: "Limited edition floor display unit built at store entrance" },
  { url: a15.url, alt: "Brand promoter at a haircare exhibition stall" },
  { url: a14.url, alt: "Beauty advisor presenting a hair colour pack in a general trade store" },
  { url: a13.url, alt: "Promoter at a haircare shelf in a general trade outlet" },
  { url: a19.url, alt: "Sampling promoter carrying an edible oil display tray through a store aisle" },
  { url: a20.url, alt: "Assisted-selling team demonstrating a bulk oil pack in modern trade" },
  { url: a21.url, alt: "Premium chocolate display manned by a brand advisor in Mumbai" },
  { url: a22.url, alt: "Haircare advisor detailing a shampoo range in Kolkata" },
  { url: a23.url, alt: "Exhibition hostess at a branded haircare counter" },
  { url: a24.url, alt: "" },
  { url: a25.url, alt: "" },
  { url: a26.url, alt: "" },
  { url: a27.url, alt: "" },
  { url: a28.url, alt: "" },
  { url: a29.url, alt: "" },
  { url: a30.url, alt: "" },
];



// ---------------------------------------------------------------------------
// Founder's Journey Gallery
// Dedicated visual storytelling section for the About page.
// Images should be uploaded to /public/media/founders/.
// ---------------------------------------------------------------------------
export const foundersGallery = [
  {
    image: "/media/founders-01.webp",
    alt: "NM Ingenious leadership receiving recognition at MSME Honours",
    size: "large",
  },
  {
    image: "/media/founders-02.webp",
    alt: "NM Ingenious founders together at a company event",
    size: "medium",
  },
  {
    image: "/media/founders-03.webp",
    alt: "NM Ingenious leadership addressing an audience at a company event",
    size: "medium",
  },
  {
    image: "/media/founders-04.webp",
    alt: "NM Ingenious leadership presenting a business growth plan",
    size: "large",
  },
  {
    image: "/media/founders-05.webp",
    alt: "NM Ingenious leadership at an industry networking event",
    size: "medium",
  },
  {
    image: "/media/founders-06.webp",
    alt: "Recognition moment from the Goldman Sachs 10,000 Women programme",
    size: "medium",
  },
  {
    image: "/media/founders-07.webp",
    alt: "NM Ingenious leadership speaking at an industry event",
    size: "large",
  },
] as const;

export const clientLogos = [
  { name: "Procter & Gamble", url: "https://nm-ingenious.vercel.app/media/logos/logo-pg.png" },
  { name: "Johnson & Johnson", url: "https://nm-ingenious.vercel.app/media/logos/image-42.png" },
  { name: "Amul", url: "https://nm-ingenious.vercel.app/media/logos/logo-amul.png" },
  { name: "Marico", url: "https://nm-ingenious.vercel.app/media/logos/logo-marico.webp" },
  { name: "Castrol", url: "https://nm-ingenious.vercel.app/media/logos/image-39.png" },
  { name: "Cipla Health", url: "https://nm-ingenious.vercel.app/media/logos/image-37.png" },
  { name: "Ariel", url: "https://nm-ingenious.vercel.app/media/logos/image-40.png" },
  { name: "Ambi Pur", url: "https://nm-ingenious.vercel.app/media/logos/image-41.png" },
  { name: "Cadbury Bournvita", url: "https://nm-ingenious.vercel.app/media/logos/image-43.png" },
  { name: "Complan", url: "https://nm-ingenious.vercel.app/media/logos/image-36.png" },
  { name: "Pillsbury", url: "https://nm-ingenious.vercel.app/media/logos/image-44.png" },
  { name: "Capital Foods", url: "https://nm-ingenious.vercel.app/media/logos/image-46.png" },
  { name: "Clorox", url: "https://nm-ingenious.vercel.app/media/logos/logo-5cb.png" },
  { name: "Axiom", url: "https://nm-ingenious.vercel.app/media/logos/logo-axiom.png" },
];

export const timeline = [
  {
    date: "2008",
    body: "Started with 5 people, one idea: retail execution run with real discipline.",
  },
  {
    date: "2011",
    body: "Running promotions for Gillette, Pampers, Whisper, Ariel, Saffola, Horlicks and Parachute.",
  },
  {
    date: "2013",
    body: "Marico's own MD recognised the work directly.",
  },
  {
    date: "2017",
    body: "Training became its own function: formal programs for promoters, merchandisers, beauty advisors and product counsellors.",
  },
  {
    date: "2019 January",
    body: "Incorporated as NM Ingenious Management Services Pvt. Ltd. Same company, same team, formally structured.",
  },
  {
    date: "2019 August",
    body: "Opened offices in Delhi, Bengaluru, Kolkata, Pune, Hyderabad, Chennai and Amritsar.",
 },
  {
    date: "2020",
    body: "Kept every field team working through COVID. Distributed free sanitizers to hospitals and clinics across six states.",
  },
  {
    date: "2023 January",
    body: "Founder and Director Madhavi Mhatre was conferred with MSME Honours and awarded Wonder Women Business Person by the MSME organization.",
  },
  {
    date: "2023 June",
    body: "Voted into the top 40 SME workplaces in India by our own employees.",
  },
  {
    date: "Today",
    body: "50+ active clients, 100+ brands, still the same people who started at one table.",
  },
];

export const strengths = [
  {
    group: "Excellence in Project Execution",
    points: [
      {
        title: "Right person, right store",
        body: "Selection built around fit for the specific counter, not just headcount.",
      },
      {
        title: "Training that never stops",
        body: "Promoters and merchandisers are coached on end-to-end selling, not just onboarded once.",
      },
      {
        title: "Performance that matches client goals",
        body: "Field teams consistently hit the growth numbers clients actually set.",
      },
      {
        title: "Technology-based monitoring",
        body: "Real-time tracking of sales, stock, and campaign execution at the last mile.",
      },
    ],
  },
  {
    group: "Process Excellence",
    points: [
      {
        title: "Efficient by design",
        body: "Processes built to maximise output from every promoter and merchandiser, not just headcount.",
      },
      {
        title: "Structured reporting",
        body: "Sales and stock reporting classified to what each client actually needs, not a generic template.",
      },
      {
        title: "Performance tracked, end-to-end",
        body: "Client and NM teams both see how people, processes and apps are performing, and where the next problem is.",
      },
      {
        title: "HR practices benchmarked to industry standard",
        body: "Backed by real qualitative and quantitative employee feedback, not box-ticking.",
      },
    ],
  },
  {
    group: "Strategic Regional Presence",
    points: [
      {
        title: "Where the real hiring intent is  ",
        body: "Strong presence in Mumbai, Delhi/NCR and Bengaluru, the three cities with the deepest FMCG hiring intent, backed by regional offices in Delhi and Bengaluru.",
      },
      {
        title: "One dedicated team per client",
        body: "Not a shared pool split across accounts. Full client control over the project; NM supplies the people and the execution.",
      },
    ],
  },
  {
    group: "Technology, Built-In",
    points: [
      {
        title: "HRMS that runs hire-to-retire",
        body: "Mobile-first HR platform automates the entire employee lifecycle.",
      },
      {
        title: "Tracking apps built for the field",
        body: "Fast, intuitive, live in a day, and built to each client's dashboard needs.",
      },
      {
        title: "Compliance, by default",
        body: "Every act and government norm, followed to the letter.",
      },
    ],
  },
{
    group: "Transparency as Practice",
    points: [
      {
        title: "Trust runs both ways",
        body: "Open reporting between HR, supervisors, promoters and clients, not top-down only.",
      },
      {
        title: "Attendance and HR, all on mobile",
        body: "Fewer gaps, faster resolution, cleaner compliance.",
      },
      {
        title: "Every document, on your phone",
        body: "Appointment letters, salary revisions, always accessible.",
      },
      {
        title: "Payslips, tax statements, Form 16",
        body: "Available to every staff member, always.",
      },
      {
        title: "Expense claims, fully automated",
        body: "No manual chasing, no delays.",
      },
    ],
  },
];

export const awards = [
  {
    title: "Wonder Women 2023",
    subtitle: "Madhavi Pundalik, Founder & CEO",
    body: "Recognising women entrepreneurs who are chasing their dreams and have redefined businesses today. Conferred with MSME Honours.",
  },
  {
    title: "Amazing Workplaces Certified",
    subtitle: "June 2023 to May 2024",
    body: "NM Ingenious Management Services Pvt Ltd is certified as an Amazing Workplace under the category of Large-Size Organization - II.",
  },
  {
    title: "Certificate of Commitment",
    subtitle: "Central Vigilance Commission",
    body: "For adopting the highest standards of integrity and good governance, and following ethical practices in conducting its activities.",
  },
  {
    title: "Award of Excellence",
    subtitle: "P&G, Madhavi Pundalik",
    body: "On successful completion of the women business empowerment programme 2018.",
  },
];

export const faqs = [
  {
    q: "Is Ingenious Management Services and NM Ingenious Management Services Private Limited the same company?",
    a: "Yes. IMS or Ingenious Management Services and NMIMSPL are the same company. IMS was founded in February 2008 and migrated to a private limited company in 2019 as NM Ingenious Management Services Private Limited.",
  },
  {
    q: "What is the business of NMIMSPL?",
    a: "Workforce outsourcing for the FMCG and retail sector, third-party payroll management for MSMEs, SMEs, start-ups, small businesses and MNCs, and staffing services for product promotion, beauty products, merchandizing and front-line sales promotion activities.",
  },
  {
    q: "Does NMIMSPL provide job opportunities to freshers?",
    a: "Yes. NMIMSPL provides job opportunities to freshers across beauty advisor, product promoter, merchandizer and product expert roles in both modern trade and general trade.",
  },
  {
    q: "What are the minimum qualifications required?",
    a: "The candidate should be 12th standard pass, at least 18 years of age, and should have an Aadhaar card, PAN card, self-bank account and residence proof.",
  },
  {
    q: "How old is NMIMSPL?",
    a: "The company was established as Ingenious Management Services in February 2008 and migrated to a private limited company in 2019. It has been serving the retail sector for over 18 years.",
  },
  {
    q: "Does NMIMSPL have the wherewithal to provide HR services?",
    a: "Yes. NMIMSPL runs HR shared services, an automated mobile-first HRMS, payroll management and fractional HR engagements, backed by full statutory compliance.",
  },
];

export const weeklyQuestions = [
  "Was the shopper engaged?",
  "Was the product explained?",
  "Was the display compliant?",
  "Was the stock available?",
  "Was competition tracked?",
  "Was the promoter productive?",
  "Was the store performing?",
  "What blocked the sale?",
  "What should be fixed next week?",
];

export const leadership = [
  {
    name: "Madhavi",
    role: "Founder & Director",
    image: madhaviUrl,
    body: "A 35+ year veteran in business development, sales, marketing, product development and brand strategy in Indian markets, with a proven track record in brand establishment, market segmentation, networking, revenue growth and sales optimization. IIM Ahmedabad Goldman Sachs 10,000 Women programme graduate. MBA-educated and a boundless thinker.",
  },
  {
    name: "Viru Mhatre",
    role: "Director",
    image: virenUrl,
    body: "With over 37 years of diverse experience in corporate planning across EdTech, IT, BPO and telecom, Viren is a seasoned design thinker and MBA. His leadership extends to driving strategic roadmaps, contributing significantly to executive team planning at NMIMSPL.",
  },
];

// ---------------------------------------------------------------------------
// Deep, unique editorial content for each service page. No fold is shared
// across services: every slug has its own challenge, method, numbers and FAQs.
// ---------------------------------------------------------------------------
export type ServiceDetail = {
  challengeTitle: string;
  challenge: string[];
  approachTitle: string;
  approach: { step: string; title: string; body: string }[];
  metrics: { value: string; label: string }[];
  bestForTitle: string;
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "promoter-deployment": {
    challengeTitle: "Attendance is not selling",
    challenge: [
      "Most promoter programmes are measured on how many people showed up. That number tells a brand nothing about whether a shopper was approached, whether the product story landed, or whether a competitor walked away with the sale.",
      "The cost of a weak promoter is not the salary. It is the shopper who stood in front of your SKU, had one question, got no answer and bought something else.",
    ],
    approachTitle: "How a promoter reaches your shelf",
    approach: [
      {
        step: "01",
        title: "Profile before hiring",
        body: "We write the profile with your team: category familiarity, language, grooming standard, store format experience and shift pattern. Sourcing starts only after the profile is signed off.",
      },
      {
        step: "02",
        title: "Product-story training",
        body: "Two-part induction: your brand narrative and objection handling, then a live floor assessment before the promoter is billed to you.",
      },
      {
        step: "03",
        title: "Supervised deployment",
        body: "One supervisor per cluster, weekly store visits, photo-verified attendance and a documented coaching note for every underperformer.",
      },
      {
        step: "04",
        title: "Conversion review",
        body: "Monthly review on interactions per shift, conversion rate and bill value, not headcount. Bottom-quartile promoters are retrained or replaced.",
      },
    ],
    metrics: [
      { value: "2,150+", label: "Trained personnel on the ground" },
      { value: "72 hrs", label: "Typical replacement turnaround" },
      { value: "Weekly", label: "Supervisor store audits" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "Offtake is flat in stores where you are already listed",
      "Your existing agency reports attendance but not conversion",
      "You are entering modern trade and need a scalable floor team",
      "Attrition is eating your training investment every quarter",
    ],
    faqs: [
      {
        q: "What is the minimum deployment size?",
        a: "We run programmes from 10 promoters upward, and scale to several hundred across states without changing your point of contact.",
      },
      {
        q: "Who employs the promoter?",
        a: "We do. Payroll, PF, ESIC and statutory records sit with us, so the compliance exposure never reaches your books.",
      },
      {
        q: "How fast can we go live?",
        a: "Two to three weeks for a city-level rollout, including profiling, hiring and product training.",
      },
    ],
  },
  "beauty-advisors": {
    challengeTitle: "A beauty shopper buys a recommendation",
    challenge: [
      "In beauty and personal care, the shelf cannot answer the only question that matters: will this work for my skin, my hair, my concern? Without a credible advisor, the shopper defaults to the brand she already knows.",
      "Premium SKUs suffer the most. The price gap is only defensible when someone explains the formulation, the routine and the result.",
    ],
    approachTitle: "The consultation model",
    approach: [
      {
        step: "01",
        title: "Diagnose",
        body: "Advisors are trained to open with a skin, hair or concern question rather than a product pitch, which is what turns a browse into a consultation.",
      },
      {
        step: "02",
        title: "Demonstrate",
        body: "Patch tests, shade matching, texture demos and routine building on the counter, with hygiene protocol maintained through the shift.",
      },
      {
        step: "03",
        title: "Justify the ladder",
        body: "Advisors are scripted on trading a shopper up one step, from entry SKU to the variant that actually solves her stated concern.",
      },
      {
        step: "04",
        title: "Build the basket",
        body: "Regimen selling: cleanser with serum, colour with after-care. Basket size is tracked per advisor, per store, per week.",
      },
    ],
    metrics: [
      { value: "8+", label: "Beauty and wellness brands served" },
      { value: "3x", label: "Typical uplift in guided-category trials" },
      { value: "100%", label: "Advisors assessed on live floor before billing" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "Your premium variants sit while entry SKUs move",
      "You are launching a regimen or multi-step range",
      "Counter conversations decide the sale in your category",
      "You need brand-standard grooming and etiquette on the floor",
    ],
    faqs: [
      {
        q: "Are advisors category specialists?",
        a: "Yes. We hire from beauty, salon and wellness backgrounds, then layer your brand training on top.",
      },
      {
        q: "Do you handle counter hygiene and testers?",
        a: "Advisors follow a daily counter protocol covering tester condition, hygiene and stock of consumables, photographed on the reporting app.",
      },
      {
        q: "Can advisors work across our range and a retailer's own brands?",
        a: "They sell your range exclusively. Retailer-mandated support is agreed in writing before deployment.",
      },
    ],
  },
  merchandising: {
    challengeTitle: "The shelf drifts every single week",
    challenge: [
      "A planogram signed in a head office meeting survives about ten days in a live store. Facings shrink, POSM goes missing, new launches get pushed to the bottom shelf and nobody reports it.",
      "By the time a brand team notices, a full month of visibility spend has already been paid for and not delivered.",
    ],
    approachTitle: "Audit, correct, evidence",
    approach: [
      {
        step: "01",
        title: "Baseline the store",
        body: "First visit captures current facings, share of shelf, competitor blocks, POSM present and planogram deviation, with photographs.",
      },
      {
        step: "02",
        title: "Correct on the spot",
        body: "Merchandisers reset the block, restore facings, replace damaged POSM and escalate stock gaps to the store manager during the same visit.",
      },
      {
        step: "03",
        title: "Photo evidence",
        body: "Before-and-after images tagged to store, date and time, so visibility investment is verifiable and not a claim.",
      },
      {
        step: "04",
        title: "Compliance scoring",
        body: "Each store gets a weekly compliance score. Persistent low scorers get a joint visit with your regional lead.",
      },
    ],
    metrics: [
      { value: "2,000+", label: "MT and GT outlets covered" },
      { value: "Before / after", label: "Photo evidence on every visit" },
      { value: "Weekly", label: "Share-of-shelf scoring" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "You pay for displays you cannot verify",
      "New launches are not getting the agreed facings",
      "Competitors are quietly expanding their block",
      "Your team needs store-level visual proof for trade reviews",
    ],
    faqs: [
      {
        q: "Can merchandising run without promoters?",
        a: "Yes. Many brands start with a visibility-only beat and add assisted selling in priority stores later.",
      },
      {
        q: "How is coverage decided?",
        a: "We build a beat plan from your outlet universe, weighted by throughput, so high-value stores get higher frequency.",
      },
      {
        q: "Do you handle POSM logistics?",
        a: "We can receive, store and distribute POSM to the beat, and report deployment store by store.",
      },
    ],
  },
  "btl-activations": {
    challengeTitle: "Footfall is not a result",
    challenge: [
      "Most activation reports end with contacts and samples. Neither is a business outcome. The question a brand should ask is what a converted trial cost and how many of those shoppers came back.",
      "Activations also fail quietly on placement: the right idea at the wrong catchment, on the wrong day, in front of the wrong shopper.",
    ],
    approachTitle: "Planned for reach, judged on trial",
    approach: [
      {
        step: "01",
        title: "Catchment selection",
        body: "Sites chosen on shopper profile and footfall quality, not availability, with reach and frequency modelled before the calendar is locked.",
      },
      {
        step: "02",
        title: "Interaction design",
        body: "The demo is built around one behaviour change: taste it, feel it, try the shade, smell the difference. One clear ask per shopper.",
      },
      {
        step: "03",
        title: "Trained activation crew",
        body: "Crew rehearsed on the script, the sampling protocol and the data capture flow before day one.",
      },
      {
        step: "04",
        title: "Cost per conversion",
        body: "Every campaign closes with contacts, samples, conversions and cost per trial, plus a recommendation on which sites to repeat.",
      },
    ],
    metrics: [
      { value: "185+", label: "Cities and towns activated" },
      { value: "Per site", label: "Cost-per-trial reporting" },
      { value: "48 hrs", label: "Post-campaign report turnaround" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "You are launching into a new market or category",
      "Trial is the barrier, not awareness",
      "You want site-level proof before scaling a campaign",
      "Sampling budgets need a defensible conversion number",
    ],
    faqs: [
      {
        q: "Do you handle permissions and site rentals?",
        a: "Yes, including mall, society and modern trade tie-ups, with costs presented transparently.",
      },
      {
        q: "What formats do you run?",
        a: "In-store demos, sampling counters, society activations, RWA and corporate parks, and launch-day store takeovers.",
      },
      {
        q: "How is data captured?",
        a: "Digitally at the counter, with consent, so contacts flow to your CRM rather than sitting in a spreadsheet.",
      },
    ],
  },
  "retail-intelligence": {
    challengeTitle: "Month-end data is a post-mortem",
    challenge: [
      "If you learn in week four that a top store went dry in week one, the sale is already lost and the shopper has already switched.",
      "The other loss is invisible: competitor pricing, new schemes and shopper objections that never make it into a report because nobody was asked to record them.",
    ],
    approachTitle: "From shift to dashboard",
    approach: [
      {
        step: "01",
        title: "Capture at source",
        body: "Field staff log sales, stock, competitor activity and shopper objections on the Recibo app during the shift, not from memory at night.",
      },
      {
        step: "02",
        title: "Validate",
        body: "Geo-tagged, time-stamped entries with photo backup, reviewed by supervisors so the dashboard is not polluted with guesswork.",
      },
      {
        step: "03",
        title: "Surface exceptions",
        body: "Stock-out alerts, zero-sale stores and sudden competitor price moves are pushed the same day, not buried in a monthly deck.",
      },
      {
        step: "04",
        title: "Act on it",
        body: "A weekly action list per region: which store to fix, which promoter to retrain, which SKU to re-order.",
      },
    ],
    metrics: [
      { value: "Every shift", label: "Store-level data capture" },
      { value: "Same day", label: "Stock-out escalation" },
      { value: "SKU level", label: "Granularity of reporting" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "You cannot see store-level performance between month ends",
      "Stock-outs are discovered too late to fix",
      "You need competitor intelligence from the floor",
      "Trade marketing decisions are running on stale data",
    ],
    faqs: [
      {
        q: "Can reporting integrate with our systems?",
        a: "Dashboards are exportable and can be mapped to your internal reporting formats and review cadence.",
      },
      {
        q: "Who owns the data?",
        a: "You do. All store-level data collected for your brand is handed over in full.",
      },
      {
        q: "Is it available without a promoter programme?",
        a: "Yes, it can run on a merchandiser-only beat or as a standalone audit engagement.",
      },
    ],
  },
  "workforce-compliance": {
    challengeTitle: "The liability travels upstream",
    challenge: [
      "A missed PF filing or an unpaid minimum wage in a field team does not stay with the agency. In a principal-employer relationship, it eventually reaches the brand.",
      "Most brands discover the gap during an audit, when reconstructing two years of records for a workforce that has already turned over twice.",
    ],
    approachTitle: "Compliance as an operating system",
    approach: [
      {
        step: "01",
        title: "Documented onboarding",
        body: "Appointment letters, KYC, bank and statutory enrolments completed before day one on the floor, stored digitally.",
      },
      {
        step: "02",
        title: "Automated HRMS",
        body: "FactoHR maintains attendance, leave, salary and statutory records, with every employee able to see their own file on mobile.",
      },
      {
        step: "03",
        title: "Statutory cycle",
        body: "PF, ESIC, professional tax, minimum wages, bonus and gratuity filed on schedule, state by state.",
      },
      {
        step: "04",
        title: "Audit pack",
        body: "A standing, retrievable evidence pack per client covering registers, challans and employee records.",
      },
    ],
    metrics: [
      { value: "31", label: "States and UTs covered" },
      { value: "100%", label: "Statutory enrolment before deployment" },
      { value: "Mobile", label: "Employee record access" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "You engage field staff through multiple regional vendors",
      "Principal-employer exposure is a board-level concern",
      "Audits keep surfacing missing documentation",
      "You operate across states with different labour norms",
    ],
    faqs: [
      {
        q: "Are you the employer of record?",
        a: "Yes, for the field workforce we deploy, with full statutory responsibility held by us.",
      },
      {
        q: "How are wage revisions handled?",
        a: "Minimum wage notifications are tracked state-wise and applied in the cycle they take effect, with a cost note shared in advance.",
      },
      {
        q: "Can you take over an existing team?",
        a: "Yes. We run a documented transition covering records, dues and re-enrolment.",
      },
    ],
  },
  "payroll-services": {
    challengeTitle: "Payroll is small until it breaks",
    challenge: [
      "For a lean company, payroll consumes senior time every month and returns nothing when it goes right, while a single error damages trust with the whole team.",
      "The risk sits in the details: a late TDS deposit, a wrong PT slab, a missing Form 16, a full-and-final settlement that drags for months after an exit.",
    ],
    approachTitle: "One cycle, closed cleanly",
    approach: [
      {
        step: "01",
        title: "Inputs by a fixed date",
        body: "A locked monthly calendar for attendance, variable pay and reimbursement inputs, so nothing is chased on the last day.",
      },
      {
        step: "02",
        title: "Processing and checks",
        body: "Salary computation, statutory deductions and a reconciliation review before any disbursement is released.",
      },
      {
        step: "03",
        title: "Filing and evidence",
        body: "PF, ESIC, PT and TDS filed within due dates, with challans filed into your monthly compliance folder.",
      },
      {
        step: "04",
        title: "Employee self-service",
        body: "Slips, tax statements, Form 16 and claim status available to every employee on their phone, which removes the query load from your team.",
      },
    ],
    metrics: [
      { value: "Since 2019", label: "Running payroll as a service" },
      { value: "One", label: "Monthly reconciliation per client" },
      { value: "Mobile-first", label: "Employee self-service HRMS" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "Founders or finance leads are still running payroll manually",
      "You are hiring across states with different statutory rules",
      "Exits and settlements are taking too long to close",
      "You want audit-ready payroll records without a payroll hire",
    ],
    faqs: [
      {
        q: "What headcount do you support?",
        a: "From roughly 15 employees to multi-thousand rosters across MSMEs, start-ups and MNC back offices.",
      },
      {
        q: "Do you handle contractual and full-time staff together?",
        a: "Yes, on one platform, with separate statutory treatment where the law requires it.",
      },
      {
        q: "How is data kept confidential?",
        a: "Access is role-restricted, and salary data is visible only to the named client approvers and the processing team.",
      },
    ],
  },
  "fractional-hr": {
    challengeTitle: "Too big for no HR, too lean for a department",
    challenge: [
      "Somewhere between thirty and two hundred people, HR stops being an admin task and becomes a leadership function. Most companies notice only after an exit wave or a grievance that should never have escalated.",
      "Hiring a full-time HR head at that stage is expensive and often premature, so the work lands on a founder or a finance lead who has neither the time nor the benchmark.",
    ],
    approachTitle: "A senior partner, a shared bench",
    approach: [
      {
        step: "01",
        title: "Diagnostic",
        body: "A structured review of policy, hiring, onboarding, performance and attrition data, ending in a prioritised gap list.",
      },
      {
        step: "02",
        title: "Foundation build",
        body: "Handbook, contracts, leave and grievance policy written to industry benchmark and to the states you operate in.",
      },
      {
        step: "03",
        title: "Operating rhythm",
        body: "Fixed days on site or online each month: hiring reviews, manager coaching, confirmation and appraisal cycles.",
      },
      {
        step: "04",
        title: "Handover-ready",
        body: "Everything is documented so an in-house HR hire can take over without rebuilding from zero.",
      },
    ],
    metrics: [
      { value: "1 partner", label: "Named senior HR lead per client" },
      { value: "Fixed days", label: "Predictable monthly engagement" },
      { value: "Fraction", label: "Of a full-time leadership cost" },
    ],
    bestForTitle: "Deploy this when",
    bestFor: [
      "Headcount has crossed thirty without an HR function",
      "Managers are handling grievances with no framework",
      "Hiring quality is inconsistent across teams",
      "You want HR structure before, not after, the next funding round",
    ],
    faqs: [
      {
        q: "How much time do we get?",
        a: "Engagements are scoped in days per month, typically two to eight, and adjusted as the team grows.",
      },
      {
        q: "Does this include recruitment?",
        a: "Sourcing support and hiring process design are included; large-volume recruitment is scoped separately.",
      },
      {
        q: "What happens when we hire in-house HR?",
        a: "We hand over documented systems and can stay on in an advisory capacity during the transition.",
      },
    ],
  },
};
