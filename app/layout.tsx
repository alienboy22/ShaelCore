import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import { Providers } from "./providers";
import MuiProvider from "./theme/MuiProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarketTicker from "./components/MarketTicker";

export const metadata: Metadata = {
  title: {
    default: "Shaelcore – Wealth Management & Investment Consulting",
    template: "%s | Shaelcore",
  },
  description:
    "Shaelcore offers tailored wealth management, private banking, and investment consulting. Combining international reach with local expertise since 1956.",
  keywords: ["Shaelcore", "wealth management", "private banking", "investment consulting", "Liechtenstein", "Switzerland"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <MuiProvider>
              <Navbar />
              <MarketTicker />
              {/* Header plus 32px market banner: 34px utility bar + 68px navbar on md+, 60px on mobile. */}
              <main style={{ paddingTop: "clamp(92px, calc(8vw + 32px), 134px)", minHeight: "100vh" }}>
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
