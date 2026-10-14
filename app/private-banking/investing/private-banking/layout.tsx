import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Private Banking & Wealth Services | ShaelCore" },
  description:
    "Explore ShaelCore private banking, wealth management, investment advisory, wealth planning, and financing services.",
  alternates: { canonical: "/private-banking/investing/private-banking" },
};

export default function PrivateBankingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
