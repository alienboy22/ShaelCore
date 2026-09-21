import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Home, TrendingUp, Briefcase, Shield, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Financing Solutions",
  description:
    "ShaelCore financing solutions – mortgage loans, Lombard loans, and structured financing for private clients. Keeping your wealth invested while creating new opportunities.",
};

const financingTypes = [
  {
    icon: Home,
    title: "Mortgage Loans",
    desc: "Whether purchasing a primary residence, a second home, or investment property, we structure a mortgage solution that fits your overall asset strategy – not just the property in question.",
    features: ["Competitive fixed and variable rates", "Tailored repayment structures", "Available in CHF and key foreign currencies", "Suitable for primary, secondary and investment properties"],
  },
  {
    icon: TrendingUp,
    title: "Lombard Loans",
    desc: "A Lombard loan allows you to borrow against your investment portfolio, providing liquidity without the need to liquidate assets. Ideal when opportunities arise and timing matters.",
    features: ["Borrow against securities, funds or structured products", "Flexible drawdown and repayment", "Maintain your investment strategy", "Rapid access to liquidity when needed"],
  },
  {
    icon: Briefcase,
    title: "Structured Financing",
    desc: "For more complex situations – including entrepreneurial financing, acquisition financing or bespoke collateral structures – we develop solutions that reflect the full picture of your assets.",
    features: ["Tailored to complex asset structures", "Cross-border and multi-currency solutions", "Coordination with wealth planning and tax advisory", "Long-term structuring perspective"],
  },
];

const whenFinancing = [
  "When an investment opportunity arises and liquidating would crystallise tax costs",
  "When you wish to purchase a property without disrupting your portfolio",
  "When you need bridging liquidity during an asset transition",
  "When you want to diversify into new asset classes without reducing existing positions",
  "When entrepreneurial needs require access to capital efficiently",
];

export default function FinancingPage() {
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
              <span>Financing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Financing Solutions<br /><span className="text-[#c8a96e]">Aligned with Your Wealth</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              Having substantial assets does not mean that every project should be financed from your own liquidity.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              Whether you are considering a property, an investment or additional financial flexibility, we assess 
              together when financing may make more sense than liquidating existing investments. We consider not only 
              the individual project, but also your overall asset structure, liquidity and long-term plans. The result 
              is a financing solution that gives you flexibility without losing sight of your other financial goals.
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

      {/* Financing types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Our Financing Solutions
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {financingTypes.map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-7 hover:shadow-xl transition-all group flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#f8f5f0] flex items-center justify-center mb-5 group-hover:bg-[#0a1f3c] transition-colors">
                  <f.icon size={20} className="text-[#0a1f3c] group-hover:text-[#c8a96e] transition-colors" />
                </div>
                <h3 className="text-[#0a1f3c] font-bold text-lg mb-3 font-sans-vp">{f.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>
                <ul className="space-y-2 border-t border-gray-100 pt-5">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm font-sans-vp text-[#4a4a6a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] mt-1.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When does financing make sense */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-6" />
            <h2 className="text-3xl font-bold text-[#0a1f3c] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              When Does Financing Make Sense?
            </h2>
            <p className="text-[#4a4a6a] font-sans-vp leading-relaxed mb-8">
              Financing is not just about access to funds – it is a strategic decision that should be viewed in the 
              context of your overall financial situation. We assess the right approach together with you.
            </p>
            <ul className="space-y-4">
              {whenFinancing.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0a1f3c] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#c8a96e] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-[#4a4a6a] font-sans-vp text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Our approach */}
            <div className="bg-[#0a1f3c] rounded-xl p-8">
              <div className="w-10 h-10 rounded-lg bg-[#c8a96e]/20 flex items-center justify-center mb-4">
                <Calculator size={18} className="text-[#c8a96e]" />
              </div>
              <h3 className="text-white font-semibold font-sans-vp text-lg mb-3">Our Holistic Approach</h3>
              <p className="text-gray-300 font-sans-vp text-sm leading-relaxed mb-4">
                Before recommending a financing solution, we assess your complete financial picture: assets, liabilities, 
                income, investment strategy, tax situation, and long-term objectives.
              </p>
              <p className="text-gray-400 font-sans-vp text-sm leading-relaxed">
                This ensures that your financing decision does not create unintended consequences for your wealth strategy.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <Shield size={18} className="text-[#c8a96e] mb-3" />
              <h4 className="text-[#0a1f3c] font-semibold font-sans-vp mb-2">Transparency on Costs</h4>
              <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">
                We discuss all financing costs openly and in advance. No hidden fees, no surprises – just clear, 
                honest advice aligned with your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#0a1f3c] font-sans-vp">Related Private Banking Services</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Wealth Planning", href: "/private-banking/investing/wealth-planning", desc: "Integrate financing decisions into your long-term financial plan." },
              { label: "Wealth Management", href: "/private-banking/investing/wealth-management", desc: "Keep your portfolio invested while accessing capital through financing." },
              { label: "Investment Advisory", href: "/private-banking/investing/investment-advisory", desc: "Leverage financing to access new investment opportunities." },
            ].map((s) => (
              <Link key={s.label} href={s.href} className="group border border-gray-100 rounded-lg p-5 hover:shadow-md hover:border-[#c8a96e]/40 transition-all">
                <div className="text-[#0a1f3c] font-semibold font-sans-vp text-sm mb-1 group-hover:text-[#c8a96e] transition-colors">{s.label}</div>
                <div className="text-[#6b7280] font-sans-vp text-xs">{s.desc}</div>
                <div className="flex items-center gap-1 text-[#c8a96e] text-xs font-sans-vp mt-3 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={11} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a1f3c] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Explore your financing options
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Speak with one of our financing specialists to understand how a tailored solution can work within 
            your broader wealth strategy.
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
