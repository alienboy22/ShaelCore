"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Private banking",
  "Wealth management",
  "Investment advisory",
  "Wealth planning",
  "Financing",
  "Custodian bank & fund solutions",
  "Sustainable investing & research",
  "Travel & tours",
  "Real estate",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#101418] py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 75% 25%, rgba(240,185,104,.3), transparent 38%), linear-gradient(135deg, transparent 48%, rgba(255,255,255,.05) 49%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-5 text-xs uppercase tracking-[0.2em] text-[#F0B968]">
            <Link href="/" className="hover:text-white">Home</Link><span className="mx-2 text-white/40">/</span>Contact
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B968]">A clear next step</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Tell us where you&apos;d like to go.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Whether you&apos;re planning for your wealth, your next journey, or a place to call your own, we&apos;ll help you find the right conversation.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EC] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_.8fr]">
          <div>
            <span className="mb-5 block h-0.5 w-12 bg-[#B86F43]" />
            <h2 className="mb-3 font-serif text-3xl text-[#101418]">Start a conversation</h2>
            <p className="mb-8 max-w-xl text-sm leading-7 text-[#5D6461]">
              Share a few details and the service area you&apos;re interested in. Our team will help direct your enquiry.
            </p>

            {submitted ? (
              <div className="border border-[#D8CDBB] bg-white p-8 sm:p-10">
                <CheckCircle2 className="mb-4 text-[#278C80]" size={30} />
                <h3 className="font-serif text-2xl text-[#101418]">Thank you for getting in touch.</h3>
                <p className="mt-3 text-sm leading-7 text-[#5D6461]">
                  Your enquiry has been recorded. You can also reach us directly at{" "}
                  <a className="text-[#101418] underline underline-offset-4" href="mailto:info.zurich@shaelcore.com">info.zurich@shaelcore.com</a>.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#8F4E2F] hover:text-[#101418]">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#303A3B]">
                    First name <span className="sr-only">(required)</span>
                    <input required name="firstName" autoComplete="given-name" className="border border-[#D8CDBB] bg-white px-4 py-3 text-[#101418] outline-none transition focus:border-[#B86F43]" placeholder="Your first name" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-[#303A3B]">
                    Last name <span className="sr-only">(required)</span>
                    <input required name="lastName" autoComplete="family-name" className="border border-[#D8CDBB] bg-white px-4 py-3 text-[#101418] outline-none transition focus:border-[#B86F43]" placeholder="Your last name" />
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#303A3B]">
                    Email address
                    <input required name="email" type="email" autoComplete="email" className="border border-[#D8CDBB] bg-white px-4 py-3 text-[#101418] outline-none transition focus:border-[#B86F43]" placeholder="you@example.com" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-[#303A3B]">
                    Area of interest
                    <select required name="topic" defaultValue="" className="border border-[#D8CDBB] bg-white px-4 py-3 text-[#101418] outline-none transition focus:border-[#B86F43]">
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-medium text-[#303A3B]">
                  How can we help?
                  <textarea required name="message" rows={5} className="resize-y border border-[#D8CDBB] bg-white px-4 py-3 text-[#101418] outline-none transition focus:border-[#B86F43]" placeholder="Tell us a little about what you have in mind." />
                </label>
                <button type="submit" className="inline-flex items-center gap-2 bg-[#101418] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#273438]">
                  Send enquiry <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="bg-[#E9E1D2] p-7 sm:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F4E2F]">Connect with ShaelCore</p>
              <a href="mailto:info.zurich@shaelcore.com" className="flex items-center gap-3 text-sm text-[#303A3B] hover:text-[#8F4E2F]">
                <Mail size={17} className="text-[#8F4E2F]" /> info.zurich@shaelcore.com
              </a>
              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#505B5A]">
                <MapPin size={17} className="mt-1 shrink-0 text-[#8F4E2F]" />
                <span>Vaduz · Zurich · Luxembourg<br />Singapore · British Virgin Islands</span>
              </div>
            </div>
            <div className="border border-[#D8CDBB] bg-white p-7 sm:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F4E2F]">Explore by service</p>
              <div className="grid gap-3">
                {[
                  ["Wealth & advisory", "/private-banking/investing/private-banking"],
                  ["Travel & tours", "/travel-tours"],
                  ["Real estate", "/real-estate"],
                ].map(([label, href]) => (
                  <Link key={label} href={href} className="flex items-center justify-between border-b border-[#D8CDBB] pb-3 text-sm text-[#303A3B] hover:text-[#8F4E2F]">
                    {label}<ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
