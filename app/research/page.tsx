import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, BookOpen, BarChart2, TrendingUp, Globe, Calendar, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Our View – Market Intelligence",
  description:
    "ShaelCore CIO Office market analysis, investment views, and research publications. Access the same assessments our advisors use in their client recommendations.",
};

const publications = [
  {
    category: "Our View",
    title: "Asset Class Assessment Q3 2026",
    date: "September 2026",
    summary:
      "Our CIO Office reviews the current positioning across equities, fixed income, alternatives and currencies, with updated tactical tilts following the latest central bank decisions.",
    tag: "Quarterly",
    featured: true,
  },
  {
    category: "Market Monitor",
    title: "Interest Rate Outlook: Divergence Continues",
    date: "August 2026",
    summary:
      "A comparative analysis of monetary policy trajectories across the US, Eurozone and emerging markets and their implications for multi-currency portfolios.",
    tag: "Fixed Income",
    featured: false,
  },
  {
    category: "Investment Insight",
    title: "Private Equity in a Wealth Context",
    date: "August 2026",
    summary:
      "How private equity allocations can complement a diversified portfolio – examining liquidity considerations, return expectations and suitable access points for private clients.",
    tag: "Alternatives",
    featured: false,
  },
  {
    category: "ESG Research",
    title: "Transition Finance: Opportunities in the Energy Shift",
    date: "July 2026",
    summary:
      "We examine investment opportunities arising from the global energy transition, focusing on companies enabling decarbonisation across industry sectors.",
    tag: "Sustainability",
    featured: false,
  },
  {
    category: "Wealth Planning Insight",
    title: "Succession Planning Across Jurisdictions",
    date: "July 2026",
    summary:
      "A practical overview of the key legal and tax considerations when structuring intergenerational wealth transfers across Swiss, Liechtenstein and international frameworks.",
    tag: "Wealth Planning",
    featured: false,
  },
  {
    category: "Market Monitor",
    title: "Equity Markets Mid-Year Review",
    date: "June 2026",
    summary:
      "A review of equity market performance in the first half of 2026, sector leadership, earnings trends, and our updated outlook for the remainder of the year.",
    tag: "Equities",
    featured: false,
  },
];

const assetClasses = [
  { label: "Equities", view: "Overweight", sentiment: "positive", region: "Global", note: "Broad equity exposure maintained; prefer quality factor." },
  { label: "Fixed Income", view: "Neutral", sentiment: "neutral", region: "DM Gov't", note: "Duration neutralised after recent yield moves." },
  { label: "Alternatives", view: "Overweight", sentiment: "positive", region: "Multi-asset", note: "Hedge funds and real assets add diversification." },
  { label: "Cash & Liquidity", view: "Underweight", sentiment: "negative", region: "CHF/USD", note: "Deploying cash gradually into risk assets." },
  { label: "Emerging Markets", view: "Neutral", sentiment: "neutral", region: "Asia focus", note: "Selective exposure to Asia growth themes." },
];

const sentimentColor = {
  positive: "bg-green-50 text-green-700 border-green-200",
  neutral: "bg-yellow-50 text-yellow-700 border-yellow-200",
  negative: "bg-red-50 text-red-700 border-red-200",
};

const tagColor: Record<string, string> = {
  "Quarterly": "bg-[#0a1f3c] text-white",
  "Fixed Income": "bg-blue-50 text-blue-700",
  "Alternatives": "bg-purple-50 text-purple-700",
  "Sustainability": "bg-green-50 text-green-700",
  "Wealth Planning": "bg-orange-50 text-orange-700",
  "Equities": "bg-indigo-50 text-indigo-700",
};

const categories = [
  { icon: BarChart2, title: "Asset Class Views", desc: "Monthly tactical positioning across equities, fixed income, alternatives, and currencies." },
  { icon: Globe, title: "Macro & Market Monitor", desc: "Regular updates on global economic developments, central bank policy, and geopolitical themes." },
  { icon: TrendingUp, title: "Investment Insights", desc: "In-depth analysis of specific investment themes, sectors, and opportunities." },
  { icon: BookOpen, title: "Wealth & Planning", desc: "Research on wealth planning, tax structuring, succession, and regulatory developments." },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f3c] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(200,169,110,0.5) 0%, transparent 50%)" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#c8a96e] text-xs font-sans-vp uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Research & Our View</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Research & Our View<br /><span className="text-[#c8a96e]">Market Intelligence</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              The markets change on a daily basis. But your decisions should still exude a sense of calm.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              Our CIO Office continuously analyses developments in the international financial markets and uses 
              them to provide ShaelCore's investment perspective. As a client, you get access to the same
              assessments, analyses and investment ideas that our advisors also use in their recommendations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8a96e] text-[#0a1f3c] font-sans-vp font-semibold text-sm hover:bg-[#d4ba8a] transition-colors rounded-sm group"
            >
              Become a Client <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Current positioning snapshot */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-3" />
              <h2 className="text-2xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
                Current Asset Class Positioning
              </h2>
              <p className="text-[#6b7280] font-sans-vp text-sm mt-1">
                Tactical views from the ShaelCore CIO Office — as of September 2026
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[#6b7280] text-xs font-sans-vp">
              <Calendar size={12} /> Updated monthly
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Asset Class", "Tactical View", "Region/Focus", "Comment"].map((h) => (
                    <th key={h} className="text-left pb-3 pr-6 text-xs font-sans-vp font-semibold text-[#6b7280] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {assetClasses.map((ac, i) => (
                  <tr key={ac.label} className={`border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-[#f8f5f0]/40"}`}>
                    <td className="py-3.5 pr-6">
                      <span className="text-[#0a1f3c] font-sans-vp font-semibold text-sm">{ac.label}</span>
                    </td>
                    <td className="py-3.5 pr-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-sans-vp font-semibold border ${sentimentColor[ac.sentiment as keyof typeof sentimentColor]}`}>
                        {ac.view}
                      </span>
                    </td>
                    <td className="py-3.5 pr-6 text-sm font-sans-vp text-[#4a4a6a]">{ac.region}</td>
                    <td className="py-3.5 text-sm font-sans-vp text-[#6b7280]">{ac.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#6b7280] font-sans-vp text-xs mt-4">
            * For illustrative purposes only. Past positioning does not guarantee future allocations. Speak with your advisor for personalised recommendations.
          </p>
        </div>
      </section>

      {/* Featured publication */}
      {publications.filter(p => p.featured).map((pub) => (
        <section key={pub.title} className="bg-[#f8f5f0] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0a1f3c] rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans-vp font-semibold ${tagColor[pub.tag] || "bg-[#c8a96e]/20 text-[#c8a96e]"}`}>
                    {pub.tag}
                  </span>
                  <span className="text-gray-400 text-xs font-sans-vp">{pub.date}</span>
                </div>
                <div className="text-[#c8a96e] text-xs font-sans-vp uppercase tracking-widest mb-3">{pub.category}</div>
                <h3 className="text-white text-2xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
                  {pub.title}
                </h3>
                <p className="text-gray-300 font-sans-vp text-sm leading-relaxed mb-6">{pub.summary}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#c8a96e] text-[#0a1f3c] font-sans-vp font-semibold text-sm hover:bg-[#d4ba8a] transition-colors rounded-sm group"
                >
                  Read Publication <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center">
                  <BookOpen size={40} className="text-[#c8a96e]" />
                </div>
                <div className="text-center">
                  <div className="text-white font-sans-vp font-semibold text-sm">Our View</div>
                  <div className="text-gray-400 font-sans-vp text-xs mt-0.5">Published quarterly</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* All publications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Latest Publications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {publications.filter(p => !p.featured).map((pub) => (
              <div
                key={pub.title}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[#c8a96e]/30 transition-all group flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans-vp font-semibold ${tagColor[pub.tag] || "bg-gray-100 text-gray-700"}`}>
                    {pub.tag}
                  </span>
                  <span className="text-[#6b7280] text-xs font-sans-vp">{pub.date}</span>
                </div>
                <div className="text-[#c8a96e] text-xs font-sans-vp uppercase tracking-wider mb-2">{pub.category}</div>
                <h3 className="text-[#0a1f3c] font-bold font-sans-vp text-base mb-3 group-hover:text-[#c8a96e] transition-colors">
                  {pub.title}
                </h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed flex-1">{pub.summary}</p>
                <div className="flex items-center gap-1 text-[#c8a96e] text-xs font-sans-vp font-medium mt-5 group-hover:gap-2 transition-all">
                  Read more <ArrowUpRight size={11} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research categories */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Research Coverage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mx-auto mb-4">
                  <cat.icon size={20} className="text-[#c8a96e]" />
                </div>
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-2">{cat.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-xs leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access CTA */}
      <section className="bg-[#0a1f3c] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Access the Full Research Portal
          </h2>
          <p className="text-gray-300 font-sans-vp leading-relaxed mb-8">
            As a ShaelCore Private Banking client, you receive full access to our Research Portal – including 
            real-time market commentary, in-depth publications, and the same investment assessments our advisors 
            rely on every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#c8a96e] text-[#0a1f3c] font-sans-vp font-semibold text-sm hover:bg-[#d4ba8a] transition-colors rounded-sm group"
            >
              Become a Client <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/private-banking/investing/private-banking"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-sans-vp font-medium text-sm hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors rounded-sm"
            >
              Explore Private Banking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
