export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shaelcore.com"
).replace(/\/+$/, "");

export const SITE_NAME = "ShaelCore Capital Holdings";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "ShaelCore brings together wealth and advisory services, institutional solutions, travel experiences, and real estate.",
      foundingDate: "1956",
      founder: {
        "@type": "Person",
        name: "Guido Feger",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vaduz",
        addressCountry: "LI",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
