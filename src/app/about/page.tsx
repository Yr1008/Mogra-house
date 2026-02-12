"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { Instagram, Mail } from "lucide-react";

export default function AboutPage() {
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setParallaxY(window.scrollY * 0.25);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Cinematic Hero with Parallax ── */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover parallax-hero"
          style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
        >
          <source src="/images/video/brand-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mogra-flower-dark.png"
            alt=""
            className="h-12 md:h-14 w-auto brightness-0 invert opacity-30 mb-10 animate-fade-in"
          />
          <p className="font-sans text-[9px] font-medium tracking-[0.35em] uppercase text-white/40 mb-5 animate-fade-in-delay-1">
            Our Story
          </p>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-display-sm font-light text-white/90 tracking-wide animate-fade-in-delay-2">
            About Mogra House
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ── Opening Line ── */}
      <Reveal as="section" className="pt-20 md:pt-28 pb-16 md:pb-20" direction="none" blur>
        <div className="max-w-md mx-auto px-6 text-center">
          <p className="font-serif text-lg md:text-xl font-light text-brand-gray leading-relaxed italic">
            Named after the mogra flower.<br />
            Small, quiet, impossibly fragrant.
          </p>
        </div>
      </Reveal>

      {/* ── Flower Divider ── */}
      <Reveal direction="none" className="flex items-center justify-center py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mogra-flower-dark.png" alt="" className="h-8 w-auto opacity-[0.08]" />
      </Reveal>

      {/* ── Story Blocks ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-24 md:mb-32">
            <Reveal direction="left" delay={0}>
              <p className="font-sans text-[9px] font-medium tracking-[0.25em] uppercase text-brand-muted/70 mb-4">
                Why We Started
              </p>
              <h2 className="font-serif text-xl md:text-2xl font-light text-brand-gray mb-4 leading-snug">
                It began with watching hands work
              </h2>
              <p className="font-sans text-[13px] text-brand-muted leading-[1.9]">
                We grew up watching embroidery artisans make things that felt
                almost impossible. Thread by thread, hour after hour. We
                started Mogra House to bring that work to people who would
                really get it.
              </p>
            </Reveal>
            <Reveal direction="right" delay={150} scale>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/images/video/brand-1.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-24 md:mb-32">
            <Reveal direction="left" delay={0} scale className="order-2 md:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#fafaf9]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mogra-flower-dark.png"
                    alt=""
                    className="h-56 md:h-72 w-auto opacity-[0.04]"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-10">
                  <blockquote className="font-serif text-lg md:text-xl font-light italic text-brand-gray/70 leading-relaxed text-center">
                    &ldquo;60 to 250 hours.<br />One garment at a time.&rdquo;
                  </blockquote>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150} className="order-1 md:order-2">
              <p className="font-sans text-[9px] font-medium tracking-[0.25em] uppercase text-brand-muted/70 mb-4">
                The Craft
              </p>
              <h2 className="font-serif text-xl md:text-2xl font-light text-brand-gray mb-4 leading-snug">
                Embroidered entirely by hand
              </h2>
              <p className="font-sans text-[13px] text-brand-muted leading-[1.9]">
                The artisans we work with learned from their parents, who
                learned from theirs. Zardozi, chikankari, crewel, needle
                painting. These are not just techniques. They are
                family legacies.
              </p>
            </Reveal>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <Reveal direction="left" delay={0}>
              <p className="font-sans text-[9px] font-medium tracking-[0.25em] uppercase text-brand-muted/70 mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-xl md:text-2xl font-light text-brand-gray mb-4 leading-snug">
                Small collections, on purpose
              </h2>
              <p className="font-sans text-[13px] text-brand-muted leading-[1.9]">
                Every piece is numbered. We keep runs small so each
                garment gets the time and attention it deserves. We think
                there is real value in things made slowly, carefully, by hand.
              </p>
            </Reveal>
            <Reveal direction="right" delay={150} scale>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/brand-full.png"
                  alt="Mogra House"
                  className="absolute inset-0 w-full h-full object-contain p-16 md:p-20 brightness-0 invert opacity-15"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quote Banner ── */}
      <Reveal as="section" className="relative py-28 md:py-36 overflow-hidden" direction="none" blur>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mogra-flower-dark.png"
            alt=""
            className="h-[350px] md:h-[450px] w-auto opacity-[0.025]"
          />
        </div>
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-brand-gray leading-relaxed">
            &ldquo;Limited by design,<br />not by demand.&rdquo;
          </blockquote>
          <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-brand-muted/60 mt-7">
            Mogra House Atelier
          </p>
        </div>
      </Reveal>

      {/* ── Flower Divider ── */}
      <Reveal direction="none" className="flex items-center justify-center py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mogra-flower-dark.png" alt="" className="h-8 w-auto opacity-[0.08]" />
      </Reveal>

      {/* ── Founders ── */}
      <Reveal as="section" className="py-20 md:py-28" direction="up">
        <div className="max-w-lg mx-auto px-6 text-center">
          <p className="font-sans text-[9px] font-medium tracking-[0.3em] uppercase text-brand-muted/60 mb-7">
            Founded By
          </p>
          <h2 className="font-serif text-xl md:text-2xl font-light text-brand-gray mb-3">
            Gaurangni Gupta &amp; Yash Gupta
          </h2>
          <p className="font-sans text-[12px] text-brand-muted/80 leading-relaxed max-w-xs mx-auto">
            Keeping old craft traditions alive while
            making something that feels new.
          </p>
          <div className="flex items-center justify-center gap-6 mt-9">
            <a
              href="https://www.instagram.com/mogra_house?igsh=M3hwdGVqdXV4ajlk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted/50 hover:text-brand-gray transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.2} />
            </a>
            <a
              href="mailto:contactmograhouse@gmail.com"
              className="text-brand-muted/50 hover:text-brand-gray transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={16} strokeWidth={1.2} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* ── CTA ── */}
      <Reveal className="pb-28 md:pb-36 text-center" delay={100}>
        <Link
          href="/collections"
          className="inline-block font-sans text-[9px] font-medium tracking-[0.18em] uppercase text-brand-muted border border-brand-light px-10 py-4 hover:border-brand-gray hover:text-brand-gray transition-all duration-300"
        >
          View Collections
        </Link>
      </Reveal>
    </div>
  );
}
