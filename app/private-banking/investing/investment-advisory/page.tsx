import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Star, BarChart2, Eye, RefreshCw, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Advisory – VP Auda",
  description:
    "You retain control over your investment decisions. ShaelCore contributes market views, investment ideas, and expert guidance – as much or as little as you prefer.",
};

const mandates = [
  {
    name: "VP Auda Advanced",
    min: "CHF 250,000",
    support: "Regular advisory with portfolio overview",
    for: "Clients who want structured guidance with retained control",
  },
  {
    name: "VP Auda Custom",
    min: "CHF 1,000,000",
    support: "Fully tailored advisory with dedicated specialist access",
    for: "Complex portfolios requiring bespoke, high-frequency advisory",
    highlight: true,
  },
];

const howItWorks = [
  {
    icon: Eye,
    title: "We Watch the Markets",
    desc: "Our CIO Office continuously analyses international financial markets, tracking developments that could affect your portfolio.",
  },
  {
    icon: BarChart2,
    title: "We Share Our View",
    desc: "We provide you with specific investment ideas and our market assessment. You receive the same perspective our own advisors rely on.",
  },
  {
    icon: Star,
    title: "You Decide",
    desc: "You retain full control over every investment decision. We contribute expertise; you determine the direction.",
  },
  {
    icon: RefreshCw,
    title: "We Monitor Holistically",
    desc: "We don't consider investments in isolation. We continuously review whether your portfolio remains aligned with your strategy and risk profile.",
  },
];

export default function InvestmentAdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f3c] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#c8a96e] text-xs font-sans-vp uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/private-banking/investing/private-banking" className="hover:text-white transition-colors">Private Banking</Link>
              <ChevronRight size={12} />
              <span>Investment Advisory</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c8a96e]/40 rounded-full text-[#c8a96e] text-xs font-sans-vp tracking-widest uppercase mb-6">
              VP Auda Mandates
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Investment Advisory<br /><span className="text-[#c8a96e]">with VP Auda</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              Making your own decisions does not mean having to make every decision alone.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              You retain control over your investment decisions. We contribute our market view, specific investment 
              ideas and the expertise of our investment advisers. Rather than considering individual investments 
              in isolation, we look at your portfolio as a whole and continuously monitor whether it remains aligned 
              with your strategy and risk profile. You decide how closely you would like us to support you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8a96e] text-[#0a1f3c] font-sans-vp font-semibold text-sm hover:bg-[#d4ba8a] transition-colors rounded-sm group"
            >
              Arrange an Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              How Investment Advisory Works
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-3 max-w-xl mx-auto">
              A partnership built on your autonomy and our expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#c8a96e]/30 to-transparent" />
            {howItWorks.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-[#0a1f3c] flex items-center justify-center mx-auto mb-5 relative z-10">
                  <step.icon size={22} className="text-[#c8a96e]" />
                </div>
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-3">{step.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandates */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Our VP Auda Mandates
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {mandates.map((m) => (
              <div
                key={m.name}
                className={`rounded-xl p-8 flex flex-col ${
                  m.highlight
                    ? "bg-[#0a1f3c] border border-[#c8a96e]/30"
                    : "bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                }`}
              >
                {m.highlight && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#c8a96e]/20 text-[#c8a96e] text-xs font-sans-vp font-semibold rounded-full mb-4 self-start">
                    Full-Service Advisory
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-4 ${m.highlight ? "text-white" : "text-[#0a1f3c]"}`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {m.name}
                </h3>
                <div className="space-y-4 flex-1">
                  {[
                    { label: "Minimum Investment", val: m.min },
                    { label: "Advisory Level", val: m.support },
                    { label: "Suitable For", val: m.for },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="text-[#c8a96e] text-xs font-sans-vp uppercase tracking-wider mb-1">{row.label}</div>
                      <div className={`text-sm font-sans-vp ${m.highlight ? "text-gray-200" : "text-[#4a4a6a]"}`}>{row.val}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={`mt-8 flex items-center justify-center gap-2 py-3 rounded-sm text-sm font-sans-vp font-semibold transition-colors ${
                    m.highlight
                      ? "bg-[#c8a96e] text-[#0a1f3c] hover:bg-[#d4ba8a]"
                      : "bg-[#0a1f3c] text-white hover:bg-[#c8a96e] hover:text-[#0a1f3c]"
                  }`}
                >
                  Arrange a Consultation <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Wealth Management */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Advisory vs. Wealth Management
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Investment Advisory (VP Auda)",
                points: [
                  "You make every investment decision",
                  "We contribute market views and specific ideas",
                  "You choose your level of involvement",
                  "Continuous portfolio monitoring by our team",
                  "Ideal if you want to stay actively involved",
                ],
                href: "/private-banking/investing/investment-advisory",
                active: true,
              },
              {
                label: "Wealth Management (VP Vida)",
                points: [
                  "Our specialists make investment decisions",
                  "Based on a jointly defined strategy",
                  "Daily active management with risk control",
                  "ESG-integrated plus strategies available",
                  "Ideal if you prefer a hands-off approach",
                ],
                href: "/private-banking/investing/wealth-management",
                active: false,
              },
            ].map((col) => (
              <div
                key={col.label}
                className={`rounded-xl p-8 ${col.active ? "bg-[#0a1f3c]" : "bg-[#f8f5f0] border border-gray-100"}`}
              >
                <h3 className={`font-semibold font-sans-vp mb-6 ${col.active ? "text-[#c8a96e]" : "text-[#0a1f3c]"}`}>{col.label}</h3>
                <ul className="space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle size={15} className={`mt-0.5 flex-shrink-0 ${col.active ? "text-[#c8a96e]" : "text-[#0a1f3c]"}`} />
                      <span className={`text-sm font-sans-vp ${col.active ? "text-gray-200" : "text-[#4a4a6a]"}`}>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={col.href}
                  className={`inline-flex items-center gap-2 mt-6 text-sm font-sans-vp font-medium transition-colors group ${
                    col.active ? "text-[#c8a96e] hover:text-white" : "text-[#0a1f3c] hover:text-[#c8a96e]"
                  }`}
                >
                  Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a1f3c] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Stay in control. Backed by expertise.
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Talk to one of our advisors to find the right level of support for your investment goals and style.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0a1f3c] text-white font-sans-vp font-semibold text-sm hover:bg-[#c8a96e] hover:text-[#0a1f3c] transition-colors rounded-sm group"
          >
            Arrange an Appointment <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
