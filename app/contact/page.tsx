"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/app/locale/LocaleProvider";
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const offices = [
  { city: "Zurich", country: "Switzerland", address: "Bahnhofstrasse 50, 8001 Zurich", phone: "+41 44 212 60 00", email: "info.zurich@shaelcore.com", hours: "Mon–Fri 08:00–17:30" },
  { city: "Vaduz", country: "Liechtenstein", address: "Aeulestrasse 7, 9490 Vaduz", phone: "+423 235 66 55", email: "info@shaelcore.com", hours: "Mon–Fri 08:00–17:30" },
  { city: "Luxembourg", country: "Luxembourg", address: "27, Avenue de la Liberté, L-1930", phone: "+352 404 770 1", email: "info.luxembourg@shaelcore.com", hours: "Mon–Fri 09:00–17:00" },
  { city: "Singapore", country: "Singapore", address: "8 Raffles Place, #50-01 Republic Plaza", phone: "+65 6305 1688", email: "info.singapore@shaelcore.com", hours: "Mon–Fri 09:00–17:00" },
];

const topics = [
  "Private Banking",
  "Wealth Management",
  "Investment Advisory",
  "Wealth Planning",
  "Financing",
  "Intermediary / Custodian Bank Services",
  "Sustainability Investing",
  "Other",
];

export default function ContactPage() {
  const { location } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "", consent: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1f3c] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c8a96e] text-xs font-sans-vp uppercase tracking-widest mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span>Contact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Let's Start a<br /><span className="text-[#c8a96e]">Conversation</span>
            </h1>
            <p className="text-gray-300 font-sans-vp text-lg leading-relaxed">
              Our advisors are here to help you. Whether you have a specific question or simply want to explore 
              your options, reach out and we will get back to you promptly.
            </p>
            {location && (
              <p className="text-[#c8a96e] font-sans-vp text-sm mt-5">
                We&apos;ll connect you with the right regional team for {location.city}, {location.country}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-6" />
            <h2 className="text-2xl font-bold text-[#0a1f3c] mb-8" style={{ fontFamily: "Georgia, serif" }}>
              Arrange an Appointment
            </h2>

            {submitted ? (
              <div className="bg-[#f8f5f0] rounded-xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-[#0a1f3c] text-xl font-bold font-sans-vp mb-3">Thank you for reaching out</h3>
                <p className="text-[#4a4a6a] font-sans-vp text-sm leading-relaxed max-w-md mx-auto mb-6">
                  Your message has been received. One of our advisors will be in touch with you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", topic: "", message: "", consent: false }); }}
                  className="text-[#0a1f3c] font-sans-vp text-sm font-medium hover:text-[#c8a96e] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="john.smith@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="+41 79 000 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="topic"
                    required
                    value={form.topic}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors bg-white"
                  >
                    <option value="">Select a topic…</option>
                    {topics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#0a1f3c] font-sans-vp text-sm font-medium mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-sans-vp text-[#0a1f3c] focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
                    placeholder="Please tell us briefly about your situation and what you'd like to discuss…"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 accent-[#c8a96e]"
                  />
                  <label htmlFor="consent" className="text-[#6b7280] font-sans-vp text-xs leading-relaxed">
                    I agree that ShaelCore may use my data to respond to this enquiry. I have read and understood the{" "}
                    <Link href="#" className="text-[#0a1f3c] underline hover:text-[#c8a96e]">Privacy Policy</Link>.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#0a1f3c] text-white font-sans-vp font-semibold text-sm hover:bg-[#c8a96e] hover:text-[#0a1f3c] transition-colors rounded-sm group"
                >
                  Send Message <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="bg-[#f8f5f0] rounded-xl p-6">
              <h3 className="text-[#0a1f3c] font-bold font-sans-vp mb-4">How We Work With You</h3>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Initial Contact", d: "You reach out – by form, phone, or email." },
                  { n: "2", t: "First Meeting", d: "A brief, no-obligation introductory call or meeting." },
                  { n: "3", t: "Understanding Your Goals", d: "We listen before we advise." },
                  { n: "4", t: "Tailored Proposal", d: "We present a solution built around your situation." },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0a1f3c] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c8a96e] text-xs font-bold">{s.n}</span>
                    </div>
                    <div>
                      <div className="text-[#0a1f3c] font-sans-vp text-sm font-semibold">{s.t}</div>
                      <div className="text-[#6b7280] font-sans-vp text-xs">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1f3c] rounded-xl p-6">
              <h3 className="text-white font-bold font-sans-vp mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:+41432126000" className="flex items-center gap-3 text-gray-300 hover:text-[#c8a96e] transition-colors">
                  <Phone size={15} className="text-[#c8a96e] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 font-sans-vp">Zurich Office</div>
                    <div className="text-sm font-sans-vp">+41 43 212 60 00</div>
                  </div>
                </a>
                <a href="mailto:info.zurich@shaelcore.com" className="flex items-center gap-3 text-gray-300 hover:text-[#c8a96e] transition-colors">
                  <Mail size={15} className="text-[#c8a96e] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 font-sans-vp">Email</div>
                    <div className="text-sm font-sans-vp">info.zurich@shaelcore.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock size={15} className="text-[#c8a96e] flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500 font-sans-vp">Office Hours</div>
                    <div className="text-sm font-sans-vp">Mon–Fri 08:00–17:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="bg-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-block w-12 h-0.5 bg-[#c8a96e] mb-4" />
            <h2 className="text-3xl font-bold text-[#0a1f3c]" style={{ fontFamily: "Georgia, serif" }}>
              Visit Us
            </h2>
            <p className="text-[#6b7280] font-sans-vp mt-2">Five locations in leading financial centres worldwide.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office, i) => (
              <div
                key={office.city}
                className={`rounded-xl p-6 hover:shadow-lg transition-all ${
                  i === 0 ? "bg-[#0a1f3c] border border-[#c8a96e]/20" : "bg-white border border-gray-100"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={15} className="text-[#c8a96e]" />
                  <div>
                    <div className={`font-bold font-sans-vp ${i === 0 ? "text-white" : "text-[#0a1f3c]"}`}>{office.city}</div>
                    <div className="text-[#c8a96e] text-xs font-sans-vp">{office.country}</div>
                  </div>
                </div>
                <div className={`text-xs font-sans-vp space-y-2 ${i === 0 ? "text-gray-400" : "text-[#6b7280]"}`}>
                  <div>{office.address}</div>
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className={`block hover:text-[#c8a96e] transition-colors ${i === 0 ? "text-gray-300" : "text-[#4a4a6a]"}`}>
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className={`block hover:text-[#c8a96e] transition-colors ${i === 0 ? "text-gray-300" : "text-[#4a4a6a]"}`}>
                    {office.email}
                  </a>
                  <div className="flex items-center gap-1.5">
                    <Clock size={11} />
                    {office.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
