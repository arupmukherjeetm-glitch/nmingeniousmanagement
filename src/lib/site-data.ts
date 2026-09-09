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
const a31 = { url: "/media/a31.webp" };
const a32 = { url: "/media/a32.webp" };
const a33 = { url: "/media/a33.webp" };
const a34 = { url: "/media/a34.webp" };
const a35 = { url: "/media/a35.webp" };
const a36 = { url: "/media/a36.webp" };
const a37 = { url: "/media/a37.webp" };
const a38 = { url: "/media/a38.webp" };
const a39 = { url: "/media/a39.webp" };
const a40 = { url: "/media/a40.webp" };
const a41 = { url: "/media/a41.webp" };
const a42 = { url: "/media/a42.webp" };
const a43 = { url: "/media/a43.webp" };
const a44 = { url: "/media/a44.webp" };

const pdm = { url: "/media/pdm.webp" };
const beauty = { url: "/media/beauty.webp" };
const MVE = { url: "/media/MVE.webp" };
const btlsampling = { url: "/media/btlsampling.webp" };
const RTT = { url: "/media/RTT.webp" };
const compliance = { url: "/media/compliance.webp" };
const fractionalhr = { url: "/media/fractionalhr.webp" };
const pdm_final = { url: "/media/pdm_final.webp" };

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

  // Existing fields — KEEP these because Homepage uses them.
  image: string;
  secondImage: string;

  // Used ONLY by /services/$slug gallery.
  images: string[];

  caption: string;
};

/* ==========================================================================
   Eight services
   ========================================================================== */

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

    outcome:
      "Higher shopper interaction, higher conversion, lower attrition at the shelf.",

    // Homepage
    image: pdm_final.url,
    secondImage: pdm_final.url,

    // Service detail page gallery
    images: [
      pdm_final.url,
      a3.url,
      a4.url,
      a5.url,
      a6.url,
    ],

    caption: "Trained promoters at the shelf",
  },

  {
    slug: "beauty-advisors",
    name: "Beauty Advisors and Product Counsellors",
    navLabel: "Beauty Advisors & Product Counsellors",

    tagline: "Specialist closers for guided categories.",

    summary:
      "Specialist closers for categories where the shopper needs a guide, not a shelf.",

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

    outcome:
      "Premium SKUs justified, baskets built, repeat purchase earned.",

    // Homepage
    image: beauty.url,
    secondImage: beauty.url,

    // Service detail page gallery
    images: [
      beauty.url,
      a7.url,
      a8.url,
      a9.url,
      a10.url,
    ],

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

    outcome:
      "Seen, stocked, presented right, every week.",

    // Homepage
    image: MVE.url,
    secondImage: MVE.url,

    // Service detail page gallery
    images: [
      MVE.url,
      a11.url,
      a12.url,
      a13.url,
      a14.url,
    ],

    caption: "Seen, stocked, presented right",
  },

  {
    slug: "btl-activations",
    name: "BTL Activations and Sampling",
    navLabel: "BTL Activations & Sampling",

    tagline: "Turn a walk-past into a first try.",

    summary:
      "Turn a walk-past into a first try, and a first try into a habit.",

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

    outcome:
      "Measured trial, measured cost per conversion, measured repeat.",

    // Homepage
    image: btlsampling.url,
    secondImage: btlsampling.url,

    // Service detail page gallery
    images: [
      btlsampling.url,
      a15.url,
      a16.url,
      a17.url,
      a18.url,
    ],

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

    outcome:
      "Decisions in days, not quarters.",

    // Homepage
    image: RTT.url,
    secondImage: RTT.url,

    // Service detail page gallery
    images: [
      RTT.url,
      a19.url,
      a20.url,
      a21.url,
      a22.url,
    ],

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

    outcome:
      "Zero compliance exposure, full audit trail.",

    // Homepage
    image: compliance.url,
    secondImage: compliance.url,

    // Service detail page gallery
    images: [
      compliance.url,
      a23.url,
      a24.url,
      a25.url,
      a26.url,
    ],

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

    outcome:
      "Payroll closed on time, every cycle, with zero statutory leakage.",

    // Homepage
    image: a12.url,
    secondImage: a8.url,

    // Service detail page gallery
    images: [
      a12.url,
      a8.url,
      a27.url,
      a28.url,
      a29.url,
    ],

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

    outcome:
      "An HR function that scales with headcount, not ahead of it.",

    // Homepage
    image: fractionalhr.url,
    secondImage: fractionalhr.url,

    // Service detail page gallery
    images: [
      fractionalhr.url,
      a30.url,
      a31.url,
      a32.url,
      a33.url,
    ],

    caption: "HR shared services",
  },
];
