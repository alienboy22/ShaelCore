import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Shield, Clock, Users, RefreshCw, FileText, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Wealth Planning",
  description:
    "A sound wealth plan begins with what you want to achieve. ShaelCore brings together all relevant financial considerations – retirement, succession, asset structures.",
};

const planningAreas = [
  { icon: Clock, title: "Retirement & Pension Planning", desc: "We help you structure your assets today to secure the retirement you envision – taking into account all relevant pension provisions, tax considerations and income needs." },
  { icon: Users, title: "Succession & Estate Planning", desc: "Transferring wealth across generations requires careful preparation. We help you structure asset transfers in a way that reflects your values and minimises complexity for those who follow." },
  { icon: Globe, title: "International Asset Structures", desc: "With clients whose assets, companies and families span multiple jurisdictions, we bring together the relevant legal, tax and regulatory considerations into a coherent plan." },
  { icon: FileText, title: "Tax & Legal Optimisation", desc: "We work alongside your existing advisors or connect you with specialists to ensure that your financial plan integrates tax and legal dimensions effectively." },
  { icon: Shield, title: "Risk & Protection", desc: "A comprehensive plan addresses not only the growth of wealth but also its protection – from unexpected events, liability risks, or changing personal circumstances." },
  { icon: RefreshCw, title: "Regular Reviews", desc: "Because both your life and the financial landscape change, we review your plan regularly and evolve it together with you to keep it aligned with your current situation." },
];

const process = [
  { step: "1", title: "Understanding Your Situation", desc: "We begin with an in-depth conversation – not about numbers, but about what you want your wealth to achieve, preserve and pass on." },
  { step: "2", title: "Bringing Together the Full Picture", desc: "We map all relevant financial aspects: assets, liabilities, income, obligations, family considerations and long-term goals." },
  { step: "3", title: "Developing a Tailored Plan", desc: "Our specialists create a wealth plan that is tailored to your circumstances, priorities and timeline – not a generic template." },
  { step: "4", title: "Implementing and Monitoring", desc: "We coordinate the implementation of the plan and monitor it continuously, adjusting as your situation or priorities evolve." },
];

export default function WealthPlanningPage() {
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
              <span>Wealth Planning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Wealth Planning<br /><span className="text-[#c8a96e]">Built Around Your Life</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              A sound wealth plan does not begin with your assets, but with what you want to achieve with them.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              Whether you are considering retirement, pension planning, transferring wealth or managing different types 
              of assets and banking relationships, we bring together all the relevant financial considerations and show 
              you how the decisions you make today may affect your future. Our specialists develop a plan tailored to 
              your circumstances and priorities. And because both can change, we review the plan regularly and evolve 
              it together with you.
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

      {/* Planning areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Planning Areas We Cover
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">Comprehensive wealth planning across all aspects of your financial life.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningAreas.map((area) => (
              <div key={area.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#f8f5f0] flex items-center justify-center mb-4 group-hover:bg-[#0a1f3c] transition-colors">
                  <area.icon size={18} className="text-[#0a1f3c] group-hover:text-[#c8a96e] transition-colors" />
                </div>
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-2">{area.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Our Planning Process
            </h2>
          </div>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={p.step} className="bg-white rounded-xl p-7 flex items-start gap-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#0a1f3c] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c8a96e] font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>{p.step}</span>
                </div>
                <div>
                  <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-2">{p.title}</h3>
                  <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="absolute left-10 mt-20 w-px h-4 bg-[#c8a96e]/30 hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote strip */}
      <section className="bg-[#0a1f3c] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl text-[#c8a96e]/30 font-serif mb-4">"</div>
          <blockquote className="text-white text-xl font-light leading-relaxed mb-6" style={{ fontFamily: "Georgia, serif" }}>
            What matters is not only where you are today, but what you want your wealth to achieve for you, 
            your family, and the generations that follow.
          </blockquote>
          <div className="text-[#c8a96e] font-sans-vp text-sm">ShaelCore Wealth Planning Team</div>
        </div>
      </section>

      {/* Services link cluster */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h3 className="text-xl font-semibold text-[#0a1f3c] font-sans-vp">Related Services</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Wealth Management", href: "/private-banking/investing/wealth-management", desc: "Actively managed portfolios aligned with your strategy." },
              { label: "Investment Advisory", href: "/private-banking/investing/investment-advisory", desc: "Expert market views while you retain control." },
              { label: "Financing", href: "/private-banking/financing", desc: "Solutions that keep your wealth working for you." },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group border border-gray-100 rounded-lg p-5 hover:shadow-md hover:border-[#c8a96e]/40 transition-all"
              >
                <div className="text-[#0a1f3c] font-semibold font-sans-vp text-sm mb-1 group-hover:text-[#c8a96e] transition-colors">{s.label}</div>
                <div className="text-[#6b7280] font-sans-vp text-xs">{s.desc}</div>
                <div className="flex items-center gap-1 text-[#c8a96e] text-xs font-sans-vp mt-3 group-hover:gap-2 transition-all">
                  Discover <ChevronRight size={11} />
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
            Start planning your future today
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Speak with one of our wealth planning specialists and begin building a plan tailored to your 
            circumstances, priorities and long-term vision.
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
