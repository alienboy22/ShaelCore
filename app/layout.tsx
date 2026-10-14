import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import { Providers } from "./providers";
import MuiProvider from "./theme/MuiProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_NAME, SITE_URL, structuredData } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ShaelCore Capital Holdings | Wealth, Travel & Real Estate",
    template: "%s | ShaelCore Capital Holdings",
  },
  description:
    "Explore ShaelCore's wealth management, private banking, investment advisory, institutional services, curated travel, and real estate portfolio.",
  applicationName: SITE_NAME,
  keywords: [
    "ShaelCore",
    "ShaelCore Capital Holdings",
    "wealth management",
    "private banking",
    "investment advisory",
    "institutional services",
    "travel and tours",
    "real estate",
    "Liechtenstein",
    "Switzerland",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en",
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <MuiProvider>
              <Navbar />
              <main style={{ paddingTop: "clamp(66px, calc(6vw + 66px), 102px)", minHeight: "100vh" }}>
                {children}
              </main>
              <Footer />
            </MuiProvider>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
