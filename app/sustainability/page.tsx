import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Leaf, Sun, Users, BarChart2, Shield, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Sustainability & Responsible Investing | ShaelCore" },
  description:
    "Explore how environmental, social, and governance considerations can inform ShaelCore's wealth and investment services.",
  alternates: { canonical: "/sustainability" },
};

const pillars = [
  {
    icon: Leaf,
    title: "Environmental",
    desc: "Explore how climate, nature, and resource considerations may inform long-term investment discussions.",
  },
  {
    icon: Users,
    title: "Social",
    desc: "We look at how companies treat their employees, supply chains and communities. Social factors increasingly affect long-term corporate performance and resilience.",
  },
  {
    icon: Shield,
    title: "Governance",
    desc: "Sound corporate governance – board composition, executive pay, shareholder rights, and transparency – reduces investment risk and supports sustainable long-term returns.",
  },
];

const sustainableProducts = [
  {
    name: "Sustainable wealth management",
    category: "Wealth Management",
    href: "/private-banking/investing/wealth-management",
    desc: "Discuss how environmental, social, and governance considerations may be reflected in a wealth-management approach.",
    badge: "ESG considerations",
  },
  {
    name: "Sustainable Investment Advisory",
    category: "Investment Advisory",
    href: "/private-banking/investing/investment-advisory",
    desc: "Explore how sustainability-related factors can inform investment ideas, portfolio conversations, and your personal priorities.",
    badge: "Advisory",
  },
  {
    name: "ESG Fund Solutions",
    category: "Intermediaries",
    href: "/intermediaries/services/custodian-bank",
    desc: "Discuss fund structures and the operational considerations involved in sustainability-focused investment strategies.",
    badge: "Fund Solutions",
  },
];

const commitments = [
  "Explore relevant environmental, social, and governance considerations",
  "Discuss how sustainability preferences may relate to your investment objectives",
  "Consider long-term risks and opportunities alongside other financial priorities",
  "Understand the factors and approach used for a particular investment service",
  "Review your preferences as your circumstances and priorities change",
  "Coordinate sustainability questions across wealth and investment services",
];

const initiatives = [
  { year: "01", title: "Start with your priorities", desc: "Clarify the sustainability themes that matter to you and how they relate to your broader objectives." },
  { year: "02", title: "Understand the approach", desc: "Review the available information and factors relevant to the services you are considering." },
  { year: "03", title: "Consider the trade-offs", desc: "Discuss how sustainability preferences interact with risk, diversification, and investment goals." },
  { year: "04", title: "Review over time", desc: "Revisit your preferences as your circumstances and views evolve." },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#101418] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B86F43] to-transparent" />
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 60%, rgba(34,197,94,0.4) 0%, transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#B86F43] text-xs font-sans-vp uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Sustainability</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/40 rounded-full text-green-400 text-xs font-sans-vp tracking-widest uppercase mb-6">
              <Leaf size={11} /> Responsible Investing
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Investing with a<br /><span className="text-[#B86F43]">Sustainable Purpose</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              We see it as our mission to support you on your journey towards sustainability and give you the 
              right incentives to invest responsibly.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              This is why we have developed a comprehensive approach in our product landscape, which combines 
              various aspects and allows you easy access to sustainable investments – without compromising on 
              quality, performance or the personal service you expect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B86F43] text-[#101418] font-sans-vp font-semibold text-sm hover:bg-[#F0B968] transition-colors rounded-sm group"
            >
              Invest Sustainably Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-4" />
            <h2 className="text-3xl font-bold text-[#101418]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Our ESG Framework
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-3 max-w-xl mx-auto">
              Environmental, Social and Governance factors are integrated throughout our investment process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="group bg-[#E9E1D2] rounded-xl p-8 hover:bg-[#101418] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-5 group-hover:bg-[#B86F43]/20 transition-colors">
                  <p.icon size={22} className="text-[#101418] group-hover:text-[#B86F43] transition-colors" />
                </div>
                <h3 className="text-[#101418] group-hover:text-white font-bold text-xl mb-4 transition-colors" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-[#6b7280] group-hover:text-gray-300 font-sans-vp text-sm leading-relaxed transition-colors">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable products */}
      <section className="bg-[#E9E1D2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-4" />
            <h2 className="text-3xl font-bold text-[#101418]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Sustainable Investment Solutions
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">
              Sustainability is available across our full range of client services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sustainableProducts.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-white border border-gray-100 rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#6b7280] text-xs font-sans-vp uppercase tracking-wider">{p.category}</span>
                  <span className="px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-sans-vp font-semibold rounded-full">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-[#101418] font-bold font-sans-vp text-lg mb-3">{p.name}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed flex-1">{p.desc}</p>
                <div className="flex items-center gap-1 text-[#B86F43] text-xs font-sans-vp font-medium mt-5 group-hover:gap-2 transition-all">
                  Discover <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our commitments */}
      <section className="bg-[#101418] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Our Sustainability Commitments
            </h2>
            <ul className="space-y-4">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#B86F43] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-sans-vp text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#B86F43] font-sans-vp text-xs font-semibold uppercase tracking-widest mb-6">
              Our Journey
            </h3>
            <div className="space-y-5">
              {initiatives.map((init) => (
                <div key={init.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#B86F43]/20 border border-[#B86F43]/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#B86F43] text-xs font-bold">{init.year}</span>
                    </div>
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  </div>
                  <div className="pb-5">
                    <div className="text-white font-sans-vp font-semibold text-sm mb-1">{init.title}</div>
                    <div className="text-gray-400 font-sans-vp text-xs leading-relaxed">{init.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-6" />
          <h2 className="text-3xl font-bold text-[#101418] mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Considering Sustainability in Context
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp leading-relaxed mb-10 max-w-2xl mx-auto">
          Sustainability can mean different things to different people. We help bring your priorities into the conversation and consider how they may relate to investment choices, risk, and long-term plans.
          </p>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { icon: Leaf, label: "Environment" },
              { icon: Sun, label: "Arts & Culture" },
              { icon: Globe, label: "Education" },
              { icon: BarChart2, label: "Science" },
            ].map((s) => (
              <div key={s.label} className="bg-[#E9E1D2] rounded-xl p-6 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
                  <s.icon size={18} className="text-[#B86F43]" />
                </div>
                <span className="text-[#101418] font-sans-vp text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E9E1D2] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#101418] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Ready to invest sustainably?
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Speak with one of our advisors about how sustainable investing can align with your financial goals 
            and personal values.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#101418] text-white font-sans-vp font-semibold text-sm hover:bg-[#B86F43] hover:text-[#101418] transition-colors rounded-sm group">
              Arrange an Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/private-banking/investing/wealth-management" className="inline-flex items-center gap-2 px-7 py-3 border border-[#101418] text-[#101418] font-sans-vp font-medium text-sm hover:bg-[#101418] hover:text-white transition-colors rounded-sm">
              Wealth Management
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
