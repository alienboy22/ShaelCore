import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact ShaelCore | Capital Holdings" },
  description:
    "Contact ShaelCore about wealth management, private banking, institutional services, travel, or real estate.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
