import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Shield, Zap, Globe, Link2, Award, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custodian Bank Services",
  description:
    "ShaelCore holds fund assets in custody reliably and discreetly. Securities safekeeping, NAV plausibility testing, corporate actions, and monitoring.",
};

const modules = [
  {
    icon: Shield,
    title: "Securities Safekeeping",
    desc: "We hold fund assets in custody with a focus on security, stability and clear responsibilities – providing a solid foundation for your fund setup.",
  },
  {
    icon: Zap,
    title: "Plausibility Testing of NAV Calculations",
    desc: "Independent verification of Net Asset Value calculations, ensuring accuracy and compliance with regulatory requirements.",
  },
  {
    icon: Link2,
    title: "Corporate Actions",
    desc: "We manage all corporate action events relating to fund assets, including distributions, capital changes and subscription/redemption processing.",
  },
  {
    icon: Globe,
    title: "Monitoring",
    desc: "We perform monitoring tasks of materiality and carefully check compliance with relevant investment guidelines on an ongoing basis.",
  },
];

const benefits = [
  {
    title: "Custody in Trustworthy Hands",
    desc: "We hold fund assets in custody with a focus on security, stability and clear responsibilities. All of this provides a solid foundation for your fund setup.",
  },
  {
    title: "Fast and Reliable Order Processing",
    desc: "A well-established operating model ensures that instructions are processed efficiently. This allows your day-to-day business to run smoothly.",
  },
  {
    title: "Specialised Fund Expertise",
    desc: "With ShaelCore Fund Solutions, we have an international investment fund competence centre in Luxembourg and Liechtenstein. You benefit from experience, proximity to the market and standardised processes.",
  },
  {
    title: "One-Stop Shop",
    desc: "We bundle key components of the fund business and coordinate the interaction between the parties involved – streamlined management and clear communication.",
  },
];

const faqs = [
  {
    q: "What do we do as a custodian bank?",
    a: "As a custodian bank, ShaelCore holds assets (e.g. securities) in custody and supports the settlement and processes relating to fund assets (including reporting).",
  },
  {
    q: "What is the difference between custody services and a depositary?",
    a: "Custody primarily describes the safekeeping and administration of assets. Depositary also includes defined monitoring and control tasks in the investment fund context.",
  },
  {
    q: "What tasks do we perform as a depositary for investment funds?",
    a: "We take on the custody and inventory management of investment fund assets as well as central monitoring and control tasks. These include audits relating to processes and cash flows as well as monitoring compliance with relevant requirements – always tailored to the specific fund structure.",
  },
  {
    q: "In which locations does ShaelCore support fund structures?",
    a: "ShaelCore pools its investment fund know-how via ShaelCore Fund Solutions in Luxembourg and Liechtenstein.",
  },
  {
    q: "How does ShaelCore work with its clients?",
    a: "After a brief initial meeting, we clarify the structure, domicile, interfaces and requirements. We then define processes, responsibilities and reporting – all with clearly identified contact persons.",
  },
];

export default function CustodianBankPage() {
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
              <span>Intermediaries</span>
              <ChevronRight size={12} />
              <span>Custodian Bank</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Custodian Bank —<br /><span className="text-[#c8a96e]">Your Partner You Can Trust</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed mb-4">
              As a responsible partner, we hold fund assets in custody reliably and discreetly. We keep an eye on 
              risks, take care of all custody-related tasks and provide transparent reporting – so that you always 
              have an overview.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              We stand for fast and reliable execution of your orders. At the same time, we perform the monitoring 
              tasks of a depositary that are of materiality and carefully check compliance with the relevant 
              investment guidelines.
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

      {/* Award banner */}
      <div className="bg-[#c8a96e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Award size={20} className="text-[#0a1f3c] flex-shrink-0" />
          <div>
            <span className="text-[#0a1f3c] font-sans-vp font-semibold text-sm">Award-Winning Service — </span>
            <span className="text-[#0a1f3c] font-sans-vp text-sm">
              ShaelCore has been named the best medium-sized bank in the 'Financial Solutions' category at the
              2026 Alliance of Swiss Wealth Managers (ASWM) Custodian Bank Awards.
            </span>
          </div>
          <Link href="/about-us/company-portrait" className="ml-auto text-[#0a1f3c] font-sans-vp text-sm font-semibold whitespace-nowrap hover:underline">
            More →
          </Link>
        </div>
      </div>

      {/* Four service modules */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Our Custodian Bank Services
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">We support you with four key service modules.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <div key={m.title} className="group border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#f8f5f0] flex items-center justify-center mb-5 group-hover:bg-[#0a1f3c] transition-colors">
                  <m.icon size={20} className="text-[#0a1f3c] group-hover:text-[#c8a96e] transition-colors" />
                </div>
                <div className="w-5 h-0.5 bg-[#c8a96e] mb-3" />
                <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-3">{m.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed flex-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits at a glance */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Your Benefits at a Glance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#0a1f3c] flex items-center justify-center flex-shrink-0 text-[#c8a96e] font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[#0a1f3c] font-semibold font-sans-vp mb-2">{b.title}</h3>
                  <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ShaelCore Fund Solutions */}
      <section className="bg-[#0a1f3c] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-5" style={{ fontFamily: "Georgia, serif" }}>
              ShaelCore Fund Solutions
            </h2>
            <p className="text-gray-300 font-sans-vp leading-relaxed mb-4">
              ShaelCore pools its investment fund expertise under ShaelCore Fund Solutions, with registered offices in
              Luxembourg and Liechtenstein. Two of Europe's most established and respected fund domiciles.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              Whether you are structuring a new fund or looking for a reliable depositary for an existing one, 
              our specialists bring proximity to the market, regulatory expertise, and standardised processes 
              built over decades of fund administration experience.
            </p>
            <div className="flex gap-4">
              {["Luxembourg", "Liechtenstein"].map((loc) => (
                <div key={loc} className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-[#c8a96e] font-bold font-sans-vp">{loc}</div>
                  <div className="text-gray-400 text-xs font-sans-vp mt-1">Fund Solutions Centre</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-white font-semibold font-sans-vp text-lg mb-6">Getting Started</h3>
            <div className="space-y-5">
              {[
                { n: "1", t: "Initial Meeting", d: "We clarify the structure, domicile, interfaces and requirements of your fund." },
                { n: "2", t: "Process Definition", d: "We define processes, responsibilities and reporting standards together." },
                { n: "3", t: "Go Live", d: "With clearly identified contact persons, we ensure a smooth onboarding and operational start." },
              ].map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c8a96e]/20 border border-[#c8a96e]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c8a96e] text-sm font-bold">{s.n}</span>
                  </div>
                  <div>
                    <div className="text-white font-sans-vp text-sm font-semibold">{s.t}</div>
                    <div className="text-gray-400 font-sans-vp text-xs mt-0.5">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-[#c8a96e] text-[#0a1f3c] font-sans-vp text-sm font-semibold rounded-sm hover:bg-[#d4ba8a] transition-colors"
            >
              Arrange an Appointment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer hover:bg-[#f8f5f0] transition-colors">
                  <span className="text-[#0a1f3c] font-sans-vp font-medium text-sm">{faq.q}</span>
                  <span className="text-[#c8a96e] text-xl leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 bg-[#f8f5f0]">
                  <p className="text-[#4a4a6a] font-sans-vp text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f5f0] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0a1f3c] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Ready to discuss your fund structure?
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Our custodian bank specialists are ready to support your fund operations in Luxembourg and Liechtenstein.
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
