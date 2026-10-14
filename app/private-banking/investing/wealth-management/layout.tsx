import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Wealth Management | ShaelCore" },
  description:
    "Explore ShaelCore wealth management and portfolio services shaped around your objectives, risk tolerance, and investment horizon.",
  alternates: { canonical: "/private-banking/investing/wealth-management" },
};

export default function WealthManagementLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
