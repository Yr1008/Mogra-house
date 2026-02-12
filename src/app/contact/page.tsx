"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Navbar />

      <Reveal as="section" className="px-6 md:px-12 pt-28 md:pt-32 pb-16 md:pb-20 text-center" direction="none" blur>
        <h1 className="font-serif text-display-sm md:text-display font-light text-brand-black tracking-wide mb-4">
          Get in Touch
        </h1>
        <p className="font-sans text-[14px] text-brand-gray max-w-md mx-auto">
          We would love to hear from you. Reach out with any questions about our collection.
        </p>
      </Reveal>

      <Reveal as="section" className="max-w-xl mx-auto px-6 pb-24 md:pb-36" delay={150}>
        <div className="text-center mb-12">
          <a href="mailto:contactmograhouse@gmail.com" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-black transition-colors">
            <Mail size={16} strokeWidth={1.2} />
            <span className="font-sans text-[13px]">contactmograhouse@gmail.com</span>
          </a>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-black mb-2">Thank you</p>
            <p className="font-sans text-[13px] text-brand-gray">We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <label className="block text-[10px] font-sans font-medium tracking-[0.12em] uppercase text-brand-muted mb-2">Name</label>
              <input type="text" required className="w-full bg-transparent border-b border-brand-light px-0 py-3 text-[14px] font-sans text-brand-black focus:outline-none focus:border-brand-black transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-sans font-medium tracking-[0.12em] uppercase text-brand-muted mb-2">Email</label>
              <input type="email" required className="w-full bg-transparent border-b border-brand-light px-0 py-3 text-[14px] font-sans text-brand-black focus:outline-none focus:border-brand-black transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-sans font-medium tracking-[0.12em] uppercase text-brand-muted mb-2">Message</label>
              <textarea rows={4} required className="w-full bg-transparent border-b border-brand-light px-0 py-3 text-[14px] font-sans text-brand-black focus:outline-none focus:border-brand-black transition-colors resize-none" />
            </div>
            <button type="submit" className="flex items-center gap-2 bg-brand-black text-white px-8 py-4 text-[11px] font-sans font-medium tracking-[0.15em] uppercase hover:bg-brand-dark transition-colors">
              <Send size={14} /> Send Message
            </button>
          </form>
        )}
      </Reveal>
    </div>
  );
}
