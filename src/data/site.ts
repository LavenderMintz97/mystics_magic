export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/booking/", label: "Book" },
  { href: "/shop/", label: "Digital Shop" },
  { href: "/resources/", label: "Journal" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export const contactUrl = "https://linktr.ee/vanessa_97";
export const paymentUrl = "https://ko-fi.com/vanessang97";

export const services = [
  {
    title: "Mystic Tarot Reading",
    duration: "5-6 card spreads",
    price: "From USD $20",
    tiers: [
      { label: "General Question", price: "USD $20" },
      { label: "Complex Question", price: "USD $45" },
    ],
    theme: "For love, career, personal growth, and clarity when you need grounded direction.",
    includes: ["Full detailed report in English", "WhatsApp text-only reading", "Spread images shared after casting"],
    actionLabel: "Book via WhatsApp",
    href: contactUrl,
    external: true,
  },
  {
    title: "Lenormand Reading",
    duration: "3-9 card spreads",
    price: "From USD $15",
    tiers: [
      { label: "General Question", price: "USD $15" },
      { label: "Complex Question", price: "USD $20" },
    ],
    theme: "For specific situations, practical insight, and patterns around love, career, finances, and choices.",
    includes: ["Full detailed report in English", "WhatsApp text-only reading", "One focused question"],
    actionLabel: "Book via WhatsApp",
    href: contactUrl,
    external: true,
  },
  {
    title: "Rune Elder Futhark Norse Reading",
    duration: "3-9 rune casts",
    price: "From USD $15",
    tiers: [
      { label: "General Question", price: "USD $15" },
      { label: "Complex Question", price: "USD $20" },
    ],
    theme: "For deeper spiritual insight, protection, energetic alignment, and life-path guidance.",
    includes: ["Full detailed report in English", "Rune images shared after casting", "Full name and date of birth required"],
    actionLabel: "Book via WhatsApp",
    href: contactUrl,
    external: true,
  },
];

export const products = [
  {
    title: "Aligned Wealth Financial Planner and Journal",
    price: "USD $22",
    label: "Planner",
    description: "A printable financial clarity planner for money goals, aligned budgeting, journaling, and reflective planning.",
    actionLabel: "Pay on Ko-fi",
    href: paymentUrl,
    external: true,
  },
  {
    title: "Mystic Magic Aligned Becoming Manifestation Planner",
    price: "USD $17",
    label: "Manifestation",
    description: "A digital manifestation planner for intention setting, identity shifts, aligned action, and personal reflection.",
    actionLabel: "Pay on Ko-fi",
    href: paymentUrl,
    external: true,
  },
  {
    title: "Tarot Reflection Journal",
    price: "USD $12",
    label: "Journal",
    description: "A printable journal for tracking questions, card pulls, insights, and follow-up reflections after readings.",
    actionLabel: "Pay on Ko-fi",
    href: paymentUrl,
    external: true,
  },
  {
    title: "Question Clarity Planner",
    price: "USD $8",
    label: "Planner",
    description: "A simple worksheet to help clients prepare one focused question before a reading.",
    actionLabel: "Pay on Ko-fi",
    href: paymentUrl,
    external: true,
  },
];

export const faqs = [
  {
    question: "How do WhatsApp text-only readings work?",
    answer:
      "Choose your reading, send your full name, date of birth, and one focused question through WhatsApp, then receive a written English report with spread or casting images.",
  },
  {
    question: "How long does the report take to arrive?",
    answer:
      "Reports are usually delivered within 2-3 days after payment and all required details are received.",
  },
  {
    question: "Do I need to be online at a specific time?",
    answer:
      "No. Readings are text-only, so you can send your question first and review the report when it arrives.",
  },
  {
    question: "How do I pay for a reading or digital product?",
    answer:
      "Use the Ko-fi payment link for payment, then send your selected package and payment confirmation through WhatsApp so the reading or digital file delivery can be prepared.",
  },
  {
    question: "Are the prices international?",
    answer:
      "Yes. The site now uses explicit USD pricing for international visitors, with each package shown as USD $.",
  },
];

export const journalPosts = [
  {
    title: "How to Prepare for Your First Tarot Reading",
    category: "Tarot",
    summary: "What to ask, what to bring, and how to leave with notes you can actually use.",
  },
  {
    title: "Lenormand vs Tarot: Which Reading Fits Your Question?",
    category: "Lenormand",
    summary: "A simple guide to choosing between symbolic depth and direct practical insight.",
  },
  {
    title: "How Rune Readings Offer Spiritual Direction",
    category: "Runes",
    summary: "When to choose Elder Futhark guidance for energy, protection, and life-path clarity.",
  },
];

export const testimonials = [
  {
    quote: "The reading gave me language for something I had felt for months but could not name.",
    name: "Jasmin",
    detail: "Career transition reading",
  },
  {
    quote: "Warm, specific, and practical. I left with a plan instead of just a vibe.",
    name: "Mara",
    detail: "Lenormand reading",
  },
  {
    quote: "The rune reading felt protective, honest, and surprisingly clear.",
    name: "Alina",
    detail: "Rune reading",
  },
];
