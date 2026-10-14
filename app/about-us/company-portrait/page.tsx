import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Heart, MapPin, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "About ShaelCore | Company Portrait" },
  description:
    "Learn about ShaelCore, its history, shareholders, locations, and connected services across wealth, travel, and real estate.",
  alternates: { canonical: "/about-us/company-portrait" },
};

const keyFacts = [
  { label: "Founded", value: "1956", note: "Vaduz, Liechtenstein" },
  { label: "Assets under management", value: "CHF 53.7B", note: "Group-wide" },
  { label: "Employees", value: "994", note: "Group-wide" },
  { label: "Credit rating", value: "A–", note: "Standard & Poor's" },
  { label: "Stock ticker", value: "VPBN", note: "SIX Swiss Exchange" },
  { label: "Deposit guarantee", value: "CHF 100K", note: "Per depositor" },
];

const shareholders = [
  {
    name: "Stiftung Fürstlicher Kommerzienrat Guido Feger",
    role: "Largest shareholder",
    note: "Founded by Guido Feger, the foundation continues to shape ShaelCore's corporate culture and social responsibility.",
  },
  {
    name: "U.M.M. Hilti-Stiftung",
    role: "Strategic anchor shareholder",
    note: "One of three anchor shareholders supporting the continuity and independence of ShaelCore.",
  },
  {
    name: "Marxer Stiftung für Bank- und Unternehmenswerte",
    role: "Strategic anchor shareholder",
    note: "A long-term shareholder supporting the group's strategic direction and institutional stability.",
  },
];

const offices = [
  { city: "Vaduz", country: "Liechtenstein", role: "Headquarters & group functions" },
  { city: "Zurich", country: "Switzerland", role: "Swiss private banking hub" },
  { city: "Luxembourg", country: "Luxembourg", role: "Fund solutions centre" },
  { city: "Singapore", country: "Singapore", role: "Asia-Pacific hub" },
  { city: "British Virgin Islands", country: "British Virgin Islands", role: "International office" },
];

const serviceLines = [
  { label: "Wealth & advisory", detail: "Private banking, wealth management, investment advisory, wealth planning, and financing.", href: "/private-banking/investing/private-banking" },
  { label: "Institutional services", detail: "Custodian banking, fund solutions, research, and sustainable investing.", href: "/intermediaries/services/custodian-bank" },
  { label: "Travel & tours", detail: "Thoughtfully planned holidays, tours, and business journeys.", href: "/travel-tours" },
  { label: "Real estate", detail: "Residential homes, commercial spaces, and property opportunities.", href: "/real-estate" },
];

const commitments = [
  { icon: Heart, label: "Environment", body: "Supporting projects and institutions with contributions to environmental protection and sustainability." },
  { icon: Award, label: "Arts & culture", body: "Promoting cultural life through partnerships and foundation support." },
  { icon: Users, label: "Education & science", body: "Recognising the importance of knowledge and scientific advancement for long-term progress." },
];

const reasons = [
  "Tailor-made asset management and wealth planning",
  "Comprehensive, independent investment consulting",
  "High-quality service and an understanding of complex requirements",
  "Trust, transparency, reliability, and protection of privacy",
];

export default function CompanyPortraitPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#101418] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 78% 24%, rgba(240,185,104,.32), transparent 36%), linear-gradient(120deg, transparent 55%, rgba(255,255,255,.05) 55.2%, transparent 55.5%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F0B968]"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2 text-white/40">/</span>About ShaelCore</div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B968]">Partnership for progress</p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">One group. A broader view.</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            Founded in Vaduz in 1956, ShaelCore brings together a long-standing wealth business and a broader portfolio of services across wealth, travel, and real estate.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EC] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:grid-cols-6">
          {keyFacts.map((fact) => (
            <article key={fact.label} className="border border-[#D8CDBB] bg-white px-4 py-5 text-center">
              <p className="font-serif text-xl text-[#101418] sm:text-2xl">{fact.value}</p>
              <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#8F4E2F]">{fact.label}</p>
              <p className="mt-1 text-[0.68rem] text-[#77847d]">{fact.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#E9E1D2] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="mb-5 block h-0.5 w-12 bg-[#B86F43]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">Our story</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#101418] sm:text-4xl">A heritage shaped by long-term thinking.</h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-[#505B5A] sm:text-base">
            <p>
              ShaelCore was founded in 1956 by Guido Feger—a successful entrepreneur and trustee—in the heart of Vaduz, Liechtenstein. From the beginning, the bank was built on reliability, long-term thinking, and genuine partnership with its clients.
            </p>
            <p>
              Today, ShaelCore is one of the three system-relevant banks in Liechtenstein, with above-average capitalisation, strong liquidity, and around 1,000 committed employees. Our purpose, “Partnership for Progress,” reflects our commitment to identifying opportunities together, taking responsibility, and shaping progress.
            </p>
            <p>
              Three anchor shareholders hold most of the share capital, supporting the continuity and independence of the group. The values of Guido Feger continue to shape ShaelCore&apos;s corporate culture and social responsibility.
            </p>
            <p>
              Alongside our established financial services, ShaelCore is broadening its portfolio to include travel and real estate—connecting expertise across more of life&apos;s plans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">Responsibility</p>
          <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">Progress with purpose.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {commitments.map(({ icon: Icon, label, body }) => (
              <article key={label} className="border border-[#D8CDBB] bg-white p-6">
                <Icon size={20} className="text-[#B86F43]" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-[#101418]">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5D6461]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">Shareholders</p>
              <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">A foundation for continuity.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#5D6461]">ShaelCore&apos;s anchor shareholders support a long-term perspective and the group&apos;s independence.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {shareholders.map((shareholder) => (
              <article key={shareholder.name} className="flex gap-4 border border-[#D8CDBB] bg-[#F7F4EC] p-6">
                <span className="mt-1 h-12 w-1 shrink-0 bg-[#B86F43]" />
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8F4E2F]">{shareholder.role}</p>
                  <h3 className="mt-2 font-serif text-lg text-[#101418]">{shareholder.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5D6461]">{shareholder.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-5 bg-[#101418] px-6 py-5 text-white">
            <div>
              <p className="text-[0.63rem] uppercase tracking-[0.15em] text-[#F0B968]">SIX Swiss Exchange</p>
              <p className="mt-1 text-sm">Ticker: <strong className="text-[#F0B968]">VPBN</strong><span className="mx-3 text-white/25">|</span>Rated A– by Standard & Poor&apos;s</p>
            </div>
            <p className="text-sm text-white/65">CHF 100K deposit guarantee per depositor</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E1D2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">What we do</p>
          <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">Services for every next step.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {serviceLines.map((service) => (
              <Link key={service.label} href={service.href} className="group flex items-start justify-between gap-4 border border-[#D8CDBB] bg-white p-6 text-[#101418] no-underline">
                <div>
                  <h3 className="font-serif text-xl">{service.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5D6461]">{service.detail}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-[#8F4E2F] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">Good reasons for ShaelCore</p>
              <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">A partner for the long term.</h2>
              <ul className="mt-6 space-y-3">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3 text-sm leading-6 text-[#505B5A]"><Shield size={16} className="mt-1 shrink-0 text-[#8F4E2F]" />{reason}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F4E2F]">Our locations</p>
              <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">International reach. Local expertise.</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {offices.map((office) => (
                  <article key={office.city} className="border border-[#D8CDBB] p-5">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-1 shrink-0 text-[#8F4E2F]" />
                      <div>
                        <h3 className="font-serif text-lg text-[#101418]">{office.city}</h3>
                        <p className="text-xs text-[#8F4E2F]">{office.country} · {office.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101418] py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0B968]">Partnership for progress</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">A broader view, built on our roots.</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-3 self-start bg-[#E4A45F] px-6 py-3.5 text-sm font-semibold text-[#101418] hover:bg-[#F4C986] md:self-auto">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
