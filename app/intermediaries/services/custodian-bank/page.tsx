import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Shield, Zap, Globe, Link2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Custodian Bank Services | ShaelCore" },
  description:
    "ShaelCore holds fund assets in custody reliably and discreetly. Securities safekeeping, NAV plausibility testing, corporate actions, and monitoring.",
  alternates: { canonical: "/intermediaries/services/custodian-bank" },
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
    desc: "Our fund-services team coordinates with the parties involved and helps establish clear processes, responsibilities, and reporting.",
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
    q: "How does ShaelCore support fund structures?",
    a: "We clarify the fund structure, service providers, interfaces, and requirements, then agree on the relevant processes and responsibilities.",
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
      <section className="bg-[#101418] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B86F43] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[#B86F43] text-xs font-sans-vp uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Intermediaries</span>
              <ChevronRight size={12} />
              <span>Custodian Bank</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Custodian Bank —<br /><span className="text-[#B86F43]">Your Partner You Can Trust</span>
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
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B86F43] text-[#101418] font-sans-vp font-semibold text-sm hover:bg-[#F0B968] transition-colors rounded-sm group"
            >
              Arrange an Appointment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y border-[#D8CDBB] bg-[#E9E1D2]">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7041]">Institutional & intermediary services</p>
          <p className="mt-1 text-sm text-[#505B5A]">Custody, fund support, NAV checks, corporate actions, and monitoring.</p>
        </div>
      </div>

      {/* Four service modules */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-4" />
            <h2 className="text-3xl font-bold text-[#101418]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Our Custodian Bank Services
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">We support you with four key service modules.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <div key={m.title} className="group border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#E9E1D2] flex items-center justify-center mb-5 group-hover:bg-[#101418] transition-colors">
                  <m.icon size={20} className="text-[#101418] group-hover:text-[#B86F43] transition-colors" />
                </div>
                <div className="w-5 h-0.5 bg-[#B86F43] mb-3" />
                <h3 className="text-[#101418] font-semibold font-sans-vp mb-3">{m.title}</h3>
                <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed flex-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits at a glance */}
      <section className="bg-[#E9E1D2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-4" />
            <h2 className="text-3xl font-bold text-[#101418]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Your Benefits at a Glance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-shadow flex items-start gap-5">
                <div className="w-8 h-8 rounded-full bg-[#101418] flex items-center justify-center flex-shrink-0 text-[#B86F43] font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[#101418] font-semibold font-sans-vp mb-2">{b.title}</h3>
                  <p className="text-[#6b7280] font-sans-vp text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ShaelCore Fund Solutions */}
      <section id="fund-solutions" className="bg-[#101418] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-6" />
            <h2 className="text-3xl font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              ShaelCore Fund Solutions
            </h2>
            <p className="text-gray-300 font-sans-vp leading-relaxed mb-4">
              Our fund-services team helps coordinate the operational details that support fund structures, from onboarding and process definition to ongoing reporting.
            </p>
            <p className="text-gray-400 font-sans-vp leading-relaxed mb-8">
              Whether you are planning a new fund structure or reviewing an existing setup, we can discuss requirements, responsibilities, and the services that may be relevant.
            </p>
            <div className="flex gap-4">
              {["Clear responsibilities", "Connected processes"].map((item) => (
                <div key={item} className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-[#B86F43] font-bold font-sans-vp">{item}</div>
                  <div className="text-gray-400 text-xs font-sans-vp mt-1">Fund services</div>
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
                  <div className="w-8 h-8 rounded-full bg-[#B86F43]/20 border border-[#B86F43]/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B86F43] text-sm font-bold">{s.n}</span>
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
              className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-[#B86F43] text-[#101418] font-sans-vp text-sm font-semibold rounded-sm hover:bg-[#F0B968] transition-colors"
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
            <div className="inline-block w-12 h-0.5 bg-[#B86F43] mb-4" />
            <h2 className="text-3xl font-bold text-[#101418]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer hover:bg-[#E9E1D2] transition-colors">
                  <span className="text-[#101418] font-sans-vp font-medium text-sm">{faq.q}</span>
                  <span className="text-[#B86F43] text-xl leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2 bg-[#E9E1D2]">
                  <p className="text-[#4a4a6a] font-sans-vp text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E9E1D2] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[#101418] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Ready to discuss your fund structure?
          </h2>
          <p className="text-[#4a4a6a] font-sans-vp mb-8">
            Speak with our team about custody and fund-service requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#101418] text-white font-sans-vp font-semibold text-sm hover:bg-[#B86F43] hover:text-[#101418] transition-colors rounded-sm group"
          >
            Arrange an Appointment <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
