import { journalPosts, products, services, testimonials } from "./site";

const siteUrl = "https://mystics-magic.pages.dev";
const datePublished = "2026-08-27";
const dateModified = "2026-08-30";
const publisher = { "@id": `${siteUrl}/#organization` };
const author = { "@id": `${siteUrl}/#reader` };

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mystics Magic Reading Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.theme,
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: service.title,
      areaServed: "Worldwide",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${siteUrl}/booking/`,
      },
      offers: service.tiers.map((tier) => ({
        "@type": "Offer",
        name: `${service.title} - ${tier.label}`,
        price: tier.price.replace("RM ", ""),
        priceCurrency: "MYR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/booking/`,
      })),
    },
  })),
};

export const bookingPageSchema = [
  serviceItemListSchema,
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Book a Mystics Magic Reading",
    url: `${siteUrl}/booking/`,
    description: "Booking page for Tarot, Lenormand, and Elder Futhark Rune readings through WhatsApp text.",
    datePublished,
    dateModified,
    mainEntity: publisher,
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request a reading",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/booking/`,
        actionPlatform: "https://schema.org/DesktopWebPlatform",
      },
    },
  },
];

export const shopPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Mystics Magic Digital Shop",
  url: `${siteUrl}/shop/`,
  description: "Digital product collection for Tarot, Lenormand, Rune, journal, and reading preparation resources.",
  datePublished,
  dateModified,
  mainEntity: {
    "@type": "ItemList",
    name: "Upcoming Mystics Magic Digital Products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: product.title,
        description: product.description,
        about: product.label,
        creator: publisher,
        url: `${siteUrl}/shop/#${slugify(product.title)}`,
      },
    })),
  },
};

export const resourcesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Mystics Magic Journal",
  url: `${siteUrl}/resources/`,
  description: "Journal resources for preparing Tarot, Lenormand, and Rune reading questions.",
  publisher,
  blogPost: journalPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    articleSection: post.category,
    author,
    publisher,
    datePublished,
    dateModified,
    mainEntityOfPage: `${siteUrl}/resources/`,
  })),
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Mystics Magic",
  url: `${siteUrl}/about/`,
  description: "About page for the Mystics Magic Tarot, Lenormand, and Elder Futhark Rune reading practice.",
  datePublished,
  dateModified,
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#reader`,
    name: "Vanessa",
    alternateName: "Mystics Magic",
    url: `${siteUrl}/about/`,
    sameAs: ["https://linktr.ee/vanessa_97"],
    knowsAbout: ["Tarot Reading", "Lenormand Reading", "Elder Futhark Rune Reading", "Spiritual guidance"],
  },
};

export const testimonialPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Mystics Magic Client Testimonials",
  url: `${siteUrl}/testimonials/`,
  description: "Client reflections from Mystics Magic Tarot, Lenormand, and Rune readings.",
  datePublished,
  dateModified,
  mainEntity: {
    "@type": "ItemList",
    name: "Client Reflections",
    itemListElement: testimonials.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.detail,
        text: item.quote,
        author: {
          "@type": "Person",
          name: item.name,
        },
        about: publisher,
      },
    })),
  },
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mystics Magic",
  url: `${siteUrl}/contact/`,
  description: "Contact page for Tarot, Lenormand, Rune, custom reading, and service enquiries.",
  datePublished,
  dateModified,
  mainEntity: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
  },
};
