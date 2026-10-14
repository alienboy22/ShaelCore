import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

type ServiceCard = {
  id: string;
  number: string;
  title: string;
  description: string;
};

type PortfolioPageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  visualLabel: string;
  visualStatement: string;
  services: ServiceCard[];
  closingTitle: string;
  closingText: string;
};

export default function PortfolioPage({
  eyebrow,
  title,
  accent,
  intro,
  visualLabel,
  visualStatement,
  services,
  closingTitle,
  closingText,
}: PortfolioPageProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101418] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: "radial-gradient(ellipse at 78% 38%, rgba(240,185,104,.22), transparent 37%), linear-gradient(130deg, transparent 58%, rgba(255,255,255,.04) 58.2%, transparent 58.5%)" }} />
        <div className="mx-auto grid min-h-[500px] max-w-[1320px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.05fr_.75fr]">
          <div className="max-w-2xl">
            <div className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F0B968]"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2 text-white/40">/</span>{eyebrow}</div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F0B968]">{eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">{title}<br /><span className="italic text-[#F0B968]">{accent}</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">{intro}</p>
            <Link href="/contact" className="group mt-8 inline-flex items-center gap-3 bg-[#B86F43] px-6 py-3.5 text-sm font-semibold text-[#101418] transition hover:bg-[#F0B968]">
              Start a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative mx-auto flex aspect-square w-full max-w-[410px] items-center justify-center">
            <div className="absolute inset-[6%] rounded-full border border-[#F0B968]/35" />
            <div className="absolute inset-[17%] rounded-full border border-white/15" />
            <div className="absolute inset-[29%] rounded-full border border-white/10" />
            <div className="relative z-10 max-w-[250px] text-center">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#F0B968]">{visualLabel}</p>
              <p className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{visualStatement}</p>
              <span className="mx-auto mt-6 block h-px w-12 bg-[#B86F43]" />
            </div>
            <span className="absolute right-[12%] top-[25%] h-2 w-2 rounded-full bg-[#F0B968]" />
            <span className="absolute bottom-[21%] left-[18%] h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EC] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="mb-9 max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8F4E2F]">Explore the possibilities</p>
            <h2 className="mt-3 font-serif text-3xl text-[#101418] sm:text-4xl">A service shaped around your plans.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article id={service.id} key={service.id} className="scroll-mt-28 border border-[#D8CDBB] bg-white p-6 sm:p-7">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-[#8F4E2F]">{service.number}</span>
                  <ArrowUpRight size={17} className="text-[#8F4E2F]" />
                </div>
                <h3 className="font-serif text-xl text-[#101418]">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5D6461]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E9E1D2] py-14 sm:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-5 sm:px-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8F4E2F]">A thoughtful way forward</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#101418] sm:text-4xl">{closingTitle}</h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#5D6461] sm:text-base">{closingText}</p>
            <ul className="mt-5 grid gap-2 text-sm text-[#303A3B] sm:grid-cols-2">
              {["Personal conversations", "Clear next steps", "Connected expertise", "Considered planning"].map((item) => (
                <li key={item} className="flex items-center gap-2"><Check size={15} className="text-[#8F4E2F]" />{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#101418] hover:text-[#8F4E2F]">
              Tell us what you have in mind <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
