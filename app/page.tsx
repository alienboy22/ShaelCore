import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Home,
  Landmark,
  Plane,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Wealth, Travel & Real Estate | ShaelCore Capital Holdings" },
  description:
    "Discover ShaelCore's categorized services: private banking, wealth management, investment advisory, institutional solutions, travel and tours, and real estate.",
  alternates: { canonical: "/" },
};

const serviceLines = [
  {
    number: "01",
    label: "Wealth · Advisory · Institutional",
    title: "Plan with purpose.",
    body: "A broad range of financial services, from private banking and investment advice to planning, financing, and institutional solutions.",
    icon: Landmark,
    className: "bg-[#101418] text-white",
    links: [
      { label: "Private banking", href: "/private-banking/investing/private-banking" },
      { label: "Wealth management", href: "/private-banking/investing/wealth-management" },
      { label: "Investment advisory", href: "/private-banking/investing/investment-advisory" },
      { label: "Wealth planning", href: "/private-banking/investing/wealth-planning" },
      { label: "Financing", href: "/private-banking/financing" },
      { label: "Custodian bank & fund solutions", href: "/intermediaries/services/custodian-bank" },
      { label: "Sustainable investing", href: "/sustainability" },
      { label: "Research & perspectives", href: "/research" },
    ],
    href: "/private-banking/investing/private-banking",
  },
  {
    number: "02",
    label: "Travel · Tours · Experiences",
    title: "Go beyond the everyday.",
    body: "Thoughtfully planned holidays, tours, and business journeys, shaped around your interests and the way you want to travel.",
    icon: Plane,
    className: "bg-[#e9e3d5] text-[#101418]",
    links: [
      { label: "Travel & tours", href: "/travel-tours" },
      { label: "Business travel", href: "/travel-tours#business-travel" },
      { label: "Curated journeys", href: "/travel-tours#curated-journeys" },
    ],
    href: "/travel-tours",
  },
  {
    number: "03",
    label: "Property · Places · Possibility",
    title: "Find your next chapter.",
    body: "Explore residential homes, commercial spaces, and property opportunities with your priorities in focus.",
    icon: Home,
    className: "bg-[#E9E1D2] text-[#101418]",
    links: [
      { label: "Residential property", href: "/real-estate#residential" },
      { label: "Commercial property", href: "/real-estate#commercial" },
      { label: "Property advisory", href: "/real-estate#advisory" },
    ],
    href: "/real-estate",
  },
];

const principles = [
  { icon: ShieldCheck, title: "Considered decisions", text: "Thoughtful guidance begins with understanding the bigger picture." },
  { icon: Sparkles, title: "A personal approach", text: "We start with your goals, then connect you with the right expertise." },
  { icon: TrendingUp, title: "Room to evolve", text: "Our service areas can meet different needs as your plans change." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101418] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 afro-metal-pattern" />
        <div className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1fr_.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F0B968]">
              <span className="h-px w-8 bg-[#B86F43]" /> ShaelCore Capital Holdings
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,6vw,5.6rem)] leading-[1.03] tracking-[-0.035em]">
              Your future.<br />
              Your world.<br />
              <span className="italic text-[#F0B968]">More possibilities.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Build with purpose. Explore with curiosity. Find a place that feels like yours. ShaelCore brings wealth, travel, and real estate together under one considered approach.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#services" className="group inline-flex items-center gap-3 bg-[#B86F43] px-6 py-3.5 text-sm font-semibold text-[#101418] transition hover:bg-[#F0B968]">
                Discover ShaelCore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="inline-flex items-center border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#F0B968] hover:text-[#F0B968]">
                Start a conversation
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/55">
              <span>Wealth & advisory</span><span>Travel & tours</span><span>Real estate</span>
            </div>
          </div>

          <div className="relative mx-auto aspect-[.94] w-full max-w-[540px]">
            <div className="absolute inset-[7%] rounded-full border border-[#F0B968]/30" />
            <div className="absolute inset-[17%] rounded-full border border-white/10" />
            <div className="absolute right-[7%] top-[8%] h-20 w-20 rounded-full bg-[#B86F43]/20 blur-2xl" />
            <div className="absolute inset-x-[10%] top-[12%] flex items-center justify-between border-b border-white/20 pb-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              <span>The ShaelCore collection</span><span>01—03</span>
            </div>
            <div className="absolute inset-x-[8%] top-[25%] grid grid-cols-2 gap-3">
              <div className="col-span-2 flex min-h-[158px] items-end justify-between overflow-hidden bg-[#E4A45F] p-5 text-[#101418] sm:min-h-[180px]">
                <div className="relative z-10">
                  <span className="text-xs tracking-[0.15em]">01 / WEALTH & ADVISORY</span>
                  <p className="mt-3 font-serif text-2xl sm:text-3xl">Plan with purpose.</p>
                </div>
                <Landmark size={38} strokeWidth={1} className="mb-1 opacity-70" />
              </div>
              <div className="flex min-h-[142px] flex-col justify-between bg-[#E9E1D2] p-4 text-[#101418] sm:p-5">
                <Plane size={23} strokeWidth={1.2} />
                <div><span className="text-[0.6rem] tracking-[0.14em]">02 / TRAVEL</span><p className="mt-1 font-serif text-xl">Go further.</p></div>
              </div>
              <div className="flex min-h-[142px] flex-col justify-between border border-white/20 bg-[#1D282B] p-4 sm:p-5">
                <Building2 size={23} strokeWidth={1.2} className="text-[#F0B968]" />
                <div><span className="text-[0.6rem] tracking-[0.14em] text-white/60">03 / REAL ESTATE</span><p className="mt-1 font-serif text-xl">Find your place.</p></div>
              </div>
            </div>
            <div className="absolute bottom-[7%] left-[8%] flex items-center gap-3 text-xs text-white/50">
              <span className="h-px w-9 bg-[#B86F43]" /> A broader view of what&apos;s possible
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <p className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8F4E2F]">One vision. A world of opportunity.</p>
          <div className="mx-auto mt-4 max-w-3xl text-center">
            <h2 className="font-serif text-3xl leading-tight text-[#101418] sm:text-4xl md:text-5xl">Life has many chapters.<br />Make each one count.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5D6461] sm:text-base">
              From your financial future to your next journey and the spaces you choose, ShaelCore brings your ambitions into focus. Explore our service areas, each with a different way to help you move forward.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#E9E1D2] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8F4E2F]">The ShaelCore collection</p>
              <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">Where would you like to begin?</h2>
            </div>
            <Link href="/about-us/company-portrait" className="inline-flex items-center gap-2 text-sm font-semibold text-[#303A3B] hover:text-[#8F4E2F]">
              Discover our approach <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {serviceLines.map(({ number, label, title, body, icon: Icon, className, links, href }) => (
              <article key={number} className={`flex min-h-full flex-col p-6 sm:p-7 ${className}`}>
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] opacity-75">{number}</span>
                  <Icon size={25} strokeWidth={1.2} />
                </div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.17em] opacity-65">{label}</p>
                <h3 className="mt-2 font-serif text-2xl">{title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-7 opacity-75">{body}</p>
                <div className="mt-6 border-t border-current/15 pt-4">
                  <p className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.15em] opacity-60">Explore services</p>
                  <ul className="grid gap-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="group flex items-center justify-between gap-3 text-sm opacity-85 transition hover:opacity-100">
                          {link.label}<ArrowUpRight size={14} className="shrink-0 opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={href} className="mt-7 inline-flex items-center gap-2 border-t border-current/15 pt-4 text-sm font-semibold">
                  Explore this service area <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            <div>
              <span className="mb-5 block h-0.5 w-12 bg-[#B86F43]" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8F4E2F]">A broader view</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#101418] sm:text-4xl">Your plans don&apos;t stand still. Neither should your possibilities.</h2>
            </div>
            <div>
              <p className="text-sm leading-8 text-[#5D6461] sm:text-base">
                A new ambition can open a new door. We begin by understanding what matters to you, then explore the practical steps that can move your plans forward. Our service areas can stand alone or come together as your needs evolve.
              </p>
              <Link href="/about-us/company-portrait" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#101418] hover:text-[#8F4E2F]">
                Discover our approach <ArrowRight size={15} />
              </Link>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {principles.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="border-t border-[#E4A45F] pt-4">
                    <Icon size={19} className="text-[#8F4E2F]" strokeWidth={1.5} />
                    <h3 className="mt-3 font-serif text-base text-[#101418]">{title}</h3>
                    <p className="mt-1.5 text-xs leading-6 text-[#6C7470]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101418] py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F0B968]">Your next step</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Big plans start with a simple conversation.</h2>
          </div>
          <Link href="/contact" className="group inline-flex items-center gap-4 self-start bg-[#E4A45F] px-7 py-4 text-sm font-semibold text-[#101418] transition hover:bg-[#F4C986] md:self-auto">
            Let&apos;s talk <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
