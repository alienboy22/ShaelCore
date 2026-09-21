import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Users, TrendingUp, Shield, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Company Portrait – About ShaelCore",
  description:
    "ShaelCore was founded in 1956 in Vaduz, Liechtenstein. One of the three system-relevant banks in Liechtenstein with CHF 53.7B in assets under management.",
};

const keyFacts = [
  { label: "Founded", value: "4 April 1956", sub: "Vaduz, Liechtenstein" },
  { label: "AUM", value: "CHF 53.7B", sub: "As of 31 December 2025" },
  { label: "Employees", value: "994", sub: "Group-wide" },
  { label: "Credit Rating", value: "A–", sub: "Standard & Poor's" },
  { label: "Stock Ticker", value: "VPBN", sub: "SIX Swiss Exchange" },
  { label: "Deposit Guarantee", value: "CHF 100K", sub: "Per depositor" },
];

const reasons = [
  "Tailor-made asset management and wealth planning",
  "Comprehensive, independent investment consulting",
  "High-quality service",
  "Understanding of complex client requirements",
  "Trust, transparency and reliability",
  "Protection of privacy",
];

const shareholders = [
  {
    name: "Stiftung Fürstlicher Kommerzienrat Guido Feger",
    role: "Largest Shareholder",
    note: "Founded by Guido Feger in 1954. The foundation continues to shape ShaelCore's corporate culture and social responsibility.",
  },
  {
    name: "U.M.M. Hilti-Stiftung",
    role: "Strategic Anchor Shareholder",
    note: "One of three anchor shareholders guaranteeing the continuity and independence of ShaelCore.",
  },
  {
    name: "Marxer Stiftung für Bank- und Unternehmenswerte",
    role: "Strategic Anchor Shareholder",
    note: "Acts as guarantor of long-term strategic direction and institutional stability.",
  },
];

const locations = [
  { city: "Vaduz", country: "Liechtenstein", role: "Headquarters & Group Functions", address: "Aeulestrasse 7, 9490 Vaduz" },
  { city: "Zurich", country: "Switzerland", role: "Swiss Private Banking Hub", address: "Bahnhofstrasse 50, 8001 Zurich" },
  { city: "Luxembourg City", country: "Luxembourg", role: "ShaelCore Fund Solutions Centre", address: "27, Avenue de la Liberté" },
  { city: "Singapore", country: "Singapore", role: "Asia-Pacific Hub", address: "8 Raffles Place, Republic Plaza" },
  { city: "Road Town", country: "British Virgin Islands", role: "Offshore Advisory", address: "170 Main Street" },
];

const sustainability = [
  { icon: Heart, title: "Environment", desc: "Supporting projects and institutions with outstanding contributions to environmental protection and sustainability." },
  { icon: Award, title: "Arts & Culture", desc: "Promoting cultural life in Liechtenstein and across our international locations through partnerships and foundation support." },
  { icon: Users, title: "Education & Science", desc: "Investing in education and scientific advancement, recognising the importance of knowledge for long-term societal progress." },
];

export default function CompanyPortraitPage() {
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
              <span>About Us</span>
              <ChevronRight size={12} />
              <span>Company Portrait</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Company Portrait<br /><span className="text-[#c8a96e]">Partnership for Progress</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              Why should you place your trust in us? The answer is simple: because it's all about you. Your goals 
              are our shared goals. We're here to support you holistically and over the long term – as a strong and 
              reliable partner who helps you move forward.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed">
              We have been living up to this extremely exacting standard for 70 years. In a group-wide client satisfaction 
              survey in the summer of 2024, the vast majority of our clients reported being either "satisfied" or "very 
              satisfied" with our services. But that's still not enough for us – we strive to become even better, every day.
            </p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFacts.map((f, i) => (
              <div
                key={f.label}
                className={`text-center p-5 rounded-lg ${i % 2 === 0 ? "bg-[#f8f5f0]" : "bg-white border border-gray-100"}`}
              >
                <div className="text-2xl font-bold text-[#0a1f3c] mb-1" style={{ fontFamily: "Georgia, serif" }}>{f.value}</div>
                <div className="text-[#c8a96e] text-xs font-sans-vp font-semibold uppercase tracking-wider">{f.label}</div>
                <div className="text-[#6b7280] text-xs font-sans-vp mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-6" />
            <h2 className="text-3xl font-bold text-[#0a1f3c] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Our Story
            </h2>
            <div className="space-y-4 text-[#4a4a6a] font-sans-vp text-sm leading-relaxed">
              <p>
                ShaelCore was founded on 4 April 1956 by Guido Feger – a successful entrepreneur and trustee in
                Liechtenstein – in the heart of Vaduz. From the very beginning, the bank was built on a foundation 
                of long-term thinking, reliability, and genuine partnership with its clients.
              </p>
              <p>
                With above-average capitalisation, strong liquidity and around 1,000 committed employees, ShaelCore
                is today one of the three system-relevant banks in Liechtenstein. Our purpose – "Partnership for 
                Progress" – reflects what drives us: identifying opportunities together with you, taking responsibility, 
                and shaping progress.
              </p>
              <p>
                Three anchor shareholders hold most of the ShaelCore share capital, acting as guarantors of our
                continuity and independence. The values of Guido Feger continue to shape our corporate culture to 
                this very day – including our deep sense of social responsibility.
              </p>
              <p>
                For years, we have used our foundations to support projects, institutions and persons prominent in 
                the fields of environment, arts, education, science and culture. We also see it as our mission to 
                support our clients on their journey towards sustainability.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#0a1f3c] font-sans-vp mb-5">Good Reasons for ShaelCore</h3>
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-3 bg-white rounded-lg border border-gray-100 px-5 py-3.5 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 rounded-full bg-[#c8a96e] flex-shrink-0" />
                <span className="text-[#4a4a6a] font-sans-vp text-sm">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareholders */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Anchor Shareholders
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2 max-w-xl mx-auto">
              Three anchor shareholders hold most of the ShaelCore share capital, acting as guarantors of our 
              continuity and independence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {shareholders.map((s, i) => (
              <div key={s.name} className="border border-gray-100 rounded-xl p-7 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0a1f3c] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c8a96e] font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="text-[#c8a96e] text-xs font-sans-vp font-semibold uppercase tracking-wider">{s.role}</div>
                </div>
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp text-sm mb-3">{s.name}</h3>
                <p className="text-[#6b7280] font-sans-vp text-xs leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0a1f3c] rounded-xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="text-[#c8a96e] text-xs font-sans-vp font-semibold uppercase tracking-widest mb-1">Stock Exchange Listing</div>
              <div className="text-white font-sans-vp font-semibold">
                SIX Swiss Exchange — Ticker: <span className="text-[#c8a96e]">VPBN</span>
              </div>
              <div className="text-gray-400 text-sm font-sans-vp mt-0.5">Rated A– by Standard & Poor's</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-center">
              <div className="text-[#c8a96e] font-bold text-xl font-sans-vp">CHF 100,000</div>
              <div className="text-gray-400 text-xs font-sans-vp mt-0.5">Deposit guarantee per depositor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Our Locations
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">
              Five strategically selected locations in leading financial centres.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`rounded-xl p-6 border transition-all hover:shadow-lg ${
                  i === 0 ? "bg-[#0a1f3c] border-[#c8a96e]/20" : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={16} className={i === 0 ? "text-[#c8a96e]" : "text-[#0a1f3c]"} />
                  <div>
                    <div className={`font-bold font-sans-vp ${i === 0 ? "text-white" : "text-[#0a1f3c]"}`}>{loc.city}</div>
                    <div className={`text-xs font-sans-vp ${i === 0 ? "text-[#c8a96e]" : "text-[#c8a96e]"}`}>{loc.country}</div>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto px-2 py-0.5 bg-[#c8a96e]/20 text-[#c8a96e] text-xs font-sans-vp rounded">HQ</span>
                  )}
                </div>
                <div className={`text-sm font-sans-vp font-medium ${i === 0 ? "text-gray-300" : "text-[#4a4a6a]"}`}>{loc.role}</div>
                <div className={`text-xs font-sans-vp mt-1 ${i === 0 ? "text-gray-500" : "text-[#6b7280]"}`}>{loc.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social responsibility */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Social Responsibility
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2 max-w-xl mx-auto">
              For years, we have used our foundations to support outstanding efforts in these areas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sustainability.map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-xl p-7 text-center hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0a1f3c] transition-colors">
                  <s.icon size={20} className="text-[#0a1f3c] group-hover:text-[#c8a96e] transition-colors" />
                </div>
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-3">{s.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0a1f3c] text-[#0a1f3c] font-sans-vp text-sm font-medium hover:bg-[#0a1f3c] hover:text-white transition-colors rounded-sm group"
            >
              Our Sustainability Approach <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a1f3c] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            A matter of trust? Absolutely.
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            For nearly 70 years, ShaelCore has combined stability, personal and partnership-based advice, and 
            innovative financial solutions. Get in touch with us and let's start planning your route to even 
            greater financial security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-[#0a1f3c] text-white font-sans-vp font-semibold text-sm hover:bg-[#c8a96e] hover:text-[#0a1f3c] transition-colors rounded-sm group">
              Arrange an Appointment <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/private-banking/investing/private-banking" className="inline-flex items-center gap-2 px-7 py-3 border border-[#0a1f3c] text-[#0a1f3c] font-sans-vp font-medium text-sm hover:bg-[#0a1f3c] hover:text-white transition-colors rounded-sm">
              Explore Private Banking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
