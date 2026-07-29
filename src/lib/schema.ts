// Advanced JSON-LD schema pack for Madras Book.
// Helpers return plain objects; serialize with JSON.stringify inside route head() scripts.

import { SITE_NAME, SITE_URL, LOGO_URL, WHATSAPP_URL, abs } from "./site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Organization — used site-wide (root). Contact is via WhatsApp, no phone number exposed. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_URL, width: 349, height: 85 },
    image: LOGO_URL,
    sameAs: [WHATSAPP_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: WHATSAPP_URL,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** WebSite with SearchAction — used site-wide (root). */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/topics?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/** WebPage — per-page. */
export function webPageSchema(opts: { path: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-IN",
    primaryImageOfPage: { "@type": "ImageObject", url: LOGO_URL },
  };
}

/** BreadcrumbList — per-page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** FAQPage — for pages with question/answer content. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service — for platform / keyword ID pages. */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: WHATSAPP_URL,
      name: "WhatsApp",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** Article — for blog / imported content pages. */
export function articleSchema(opts: { headline: string; description: string; path: string; datePublished?: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: abs(opts.path),
    image: LOGO_URL,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}
