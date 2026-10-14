import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const publicRoutes = [
  "",
  "/about-us/company-portrait",
  "/contact",
  "/private-banking/investing/private-banking",
  "/private-banking/investing/wealth-management",
  "/private-banking/investing/investment-advisory",
  "/private-banking/investing/wealth-planning",
  "/private-banking/financing",
  "/intermediaries/services/custodian-bank",
  "/sustainability",
  "/research",
  "/travel-tours",
  "/real-estate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
