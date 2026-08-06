import a1 from "@/assets/a1.webp.asset.json";
import a2 from "@/assets/a2.webp.asset.json";
import a3 from "@/assets/a3.webp.asset.json";
import a4 from "@/assets/a4.webp.asset.json";
import a5 from "@/assets/a5.webp.asset.json";
import a6 from "@/assets/a6.webp.asset.json";
import a7 from "@/assets/a7.webp.asset.json";
import a8 from "@/assets/a8.webp.asset.json";
import a9 from "@/assets/a9.webp.asset.json";
import a10 from "@/assets/a10.webp.asset.json";
import a11 from "@/assets/a11.webp.asset.json";
import a12 from "@/assets/a12.webp.asset.json";
import logoAsset from "@/assets/logo.jpg.asset.json";
import heroVideoAsset from "@/assets/hero.mp4.asset.json";
import madhaviAsset from "@/assets/madhavi.webp.asset.json";
import virenAsset from "@/assets/viren.webp.asset.json";

export const logoUrl = logoAsset.url;
export const heroVideoUrl = heroVideoAsset.url;
export const madhaviUrl = madhaviAsset.url;
export const virenUrl = virenAsset.url;

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

export const services: Service[] = [
  {
    slug: "promoter-deployment",
    name: "Promoter Deployment and Management",
    navLabel: "Promoter Deployment & Management",
    tagline: "A trained sell-out unit, not bodies in uniform.",
    summary:
      "Not bodies in uniform. A trained sell-out unit that engages the shopper, explains the product and helps close the sale.",
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
    image: a3.url,
    secondImage: a4.url,
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
    image: a1.url,
    secondImage: a10.url,
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
    image: a5.url,
    secondImage: a9.url,
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
    image: a6.url,
    secondImage: a11.url,
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
    image: a8.url,
    secondImage: a3.url,
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
    image: a12.url,
    secondImage: a2.url,
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
    image: a2.url,
    secondImage: a12.url,
    caption: "HR shared services",
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years of retail execution" },
  { value: 2150, suffix: "+", label: "Trained personnel" },
  { value: 2000, suffix: "+", label: "MT & GT outlets" },
  { value: 31, suffix: "", label: "States & UTs" },
];

export const aboutStats = [
  { value: 1650, suffix: "+", label: "People are part of our family" },
  { value: 185, suffix: "+", label: "Cities and towns reached" },
  { value: 500, suffix: "+", label: "Clients have trusted in us" },
  { value: 1600, suffix: "+", label: "Outlets with our operations" },
];

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

export const testimonials = [
  {
    brand: "P&G",
    label: "P&G Partnership",
    quote:
      "I have had a great experience working with you and value the Ingenious team for being P&G's partner for so many years. I would hope for this partnership to continue and grow in future.",
    spine: "oklch(0.33 0.135 295)",
  },
  {
    brand: "Axiom",
    label: "Axiom Gen Nxt India",
    quote:
      "Always a pleasure working with the NM Ingenious teams! Reliable, responsive, and flexible in the ever-changing event environment.",
    spine: "oklch(0.635 0.183 32)",
  },
  {
    brand: "National Retail",
    label: "National Retail Brand",
    quote:
      "The team at NM Ingenious are an absolute pleasure to deal with. Their hiring and training ensured that we had the best people representing our brand in big stores across the country.",
    spine: "oklch(0.42 0.15 296)",
  },
  {
    brand: "Marico",
    label: "Soap Opera (Marico)",
    quote:
      "Thank you for your ongoing help and assistance to Soap Opera for sourcing of promoters. We look forward to your continued support in future.",
    spine: "oklch(0.28 0.11 293)",
  },
];

export const gallery = [
  { url: a1.url, alt: "Beauty advisor guiding a shopper at the counter" },
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
];

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
    date: "2008 February",
    body: "Madhavi started Ingenious Management Services (IMS) with 5 employees.",
  },
  {
    date: "2011 August",
    body: "Played a pivotal role in promoting major brands like Virgin Mobile, Gillette, Pampers, Whisper, Ariel, Saffola, Borges, Riso, Horlicks, Parachute and Dawaat.",
  },
  {
    date: "2013 July",
    body: "IMS received recognition of Excellence for its quality work from the MD of Marico Limited, Mr. Rishabh Mariwala.",
  },
  {
    date: "2016 January",
    body: "Pioneered the first mobile application, IMS-Connect, for promoters, merchandizers, beauty advisors, product experts and last-mile sales agents.",
  },
  {
    date: "2017 October",
    body: "Started training services in the retail sector for promoters, merchandizers, beauty advisors and product counsellors.",
  },
  {
    date: "2019 January",
    body: "Ingenious Management Services graduated into a private limited company, renamed NM Ingenious Management Services Private Limited (NMIMSPL).",
  },
  {
    date: "2019 August",
    body: "Established as a major player in workforce outsourcing, staffing services and payroll management. Expanded branch operations in New Delhi, Bangalore, Kolkata, Pune, Hyderabad, Chennai and Amritsar.",
  },
  {
    date: "2020 August",
    body: "Mitigated COVID challenges and succeeded in FMCG and retail despite the downturn. Distributed free sanitizers to doctors, hospitals and clinics across Maharashtra, Gujarat, Andhra Pradesh, Karnataka, Telangana and Goa.",
  },
  {
    date: "2023 January",
    body: "Founder and Director Madhavi Mhatre was conferred with MSME Honours and awarded Wonder Women Business Person by the MSME organization.",
  },
  {
    date: "2023 June",
    body: "NMIMSPL was voted an Amazing Workplace by its employees, ranked 10th among the top 40 SME organizations in a nationwide survey.",
  },
  {
    date: "Today",
    body: "With more than 50 active client organizations and an extended family of 100+ brands, the NMIMSPL journey continues towards perfection, quality execution and pursuing excellence.",
  },
];

export const strengths = [
  {
    group: "Excellence in Project Execution",
    points: [
      {
        title: "Right Persons for the Right Job",
        body: "Our selection process ensures the right person profile is selected for in-shop sales promotion and merchandizing.",
      },
      {
        title: "Commit to Continuous Sales Training",
        body: "Continuous sales training for promoters and merchandizers on what to say, demonstrate, attract, engage, educate, influence and convert into a sale.",
      },
      {
        title: "Achieving Excellence in Sales Performance",
        body: "In-store promoter and merchandizer teams consistently achieve key growth objectives as per client expectations.",
      },
      {
        title: "Technology Based Sales Monitoring",
        body: "A technology-enabled platform for real-time monitoring of sales, stock and campaign execution at the last mile.",
      },
    ],
  },
  {
    group: "Process Excellence",
    points: [
      {
        title: "Maximize Sales using Efficient Processes",
        body: "Process excellence to maximize the efficiency, effectiveness and productivity of in-shop promoters and merchandizers.",
      },
      {
        title: "Structured Reporting",
        body: "Established criteria and classification based on client requirements for sales and stock reporting at retail outlets.",
      },
      {
        title: "Performance Monitoring and Management",
        body: "Tracking how processes, employees and mobile applications perform, to identify challenges in last-mile sales and meet client KPAs.",
      },
      {
        title: "Industry Benchmark HR Practices",
        body: "Industry benchmark HR practices using both qualitative and quantitative feedback to ensure high standards of performance.",
      },
      {
        title: "Dedicated Team for Each Client",
        body: "A dedicated team model where the client retains full control of the project while our team provides the resources and skills to execute it.",
      },
    ],
  },
  {
    group: "Automated Systems",
    points: [
      {
        title: "Employee Centric HRMS Mobile Apps",
        body: "An advanced, mobile-centric HRMS platform that automates the entire HR function from hire to retire, delivering actionable insights.",
      },
      {
        title: "Tailored Sales and Stock Tracking Apps",
        body: "One of the fastest and most intuitive in-store tracking apps. Promoters and merchandizers master it in a day or two, and it can be tailored to client dashboards.",
      },
      {
        title: "Government Compliance Assurance",
        body: "Ensuring strict adherence to all government acts and norms.",
      },
    ],
  },
  {
    group: "Enhanced HR Process Transparency",
    points: [
      {
        title: "Culture of Transparency",
        body: "Transparency between HR teams, managers, supervisors, promoters and merchandizers builds trust, improves engagement and promotes a more inclusive culture.",
      },
      {
        title: "Seamless Attendance Monitoring",
        body: "Mobile-app attendance and HR processes create a unified system for managing performance reviews and payroll.",
      },
      {
        title: "Mobile Accessibility for Documents",
        body: "All appointment letters and salary revision documents are accessible on mobile devices.",
      },
      {
        title: "Effortless Financial Management",
        body: "Salary slips, income tax statements and Form 16 are readily available for all staff members.",
      },
      {
        title: "Automated Expense Claims",
        body: "Fully automated expense claims for staff members, ensuring efficiency and accuracy.",
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
