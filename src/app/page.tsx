"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

const heroVideos = ["/images/hero/hero-1.mp4", "/images/hero/hero-2.mp4"];

function pickRandom() {
  return heroVideos[Math.floor(Math.random() * heroVideos.length)];
}

export default function Home() {
  const [heroVideo, setHeroVideo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeroVideo(pickRandom());
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setParallaxY(window.scrollY * 0.3);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Navbar heroMode />

      {/* ── Hero with Parallax ── */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-brand-black">
        {mounted && heroVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover parallax-hero"
            style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="animate-fade-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand-text-light.png"
              alt="Mogra House"
              className="h-56 md:h-72 lg:h-80 w-auto mx-auto"
            />
          </div>

          <p className="animate-fade-in-delay-2 font-sans text-[13px] md:text-[15px] font-medium tracking-[0.4em] uppercase text-white/80 mt-8">
            Coming Soon
          </p>

          <div className="animate-fade-in-delay-3 mt-10 w-full max-w-md">
            <form
              className="flex border border-white/30 rounded-sm overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3.5 text-[12px] font-sans text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white/15 hover:bg-white/25 px-5 md:px-6 py-3.5 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-white/90 transition-colors whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
            <p className="text-[10px] font-sans text-white/30 mt-3 tracking-wider">
              Join the waiting list for early access
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-transparent to-white" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-scroll-hint z-10">
          <ChevronDown size={20} className="text-white/50" strokeWidth={1} />
        </div>
      </section>

      {/* ── Collection Teaser ── */}
      <section className="bg-white pt-10 md:pt-16 pb-20 md:pb-32">
        <Reveal className="text-center mb-14 md:mb-20 px-6">
          <p className="font-sans text-[10px] font-medium tracking-[0.25em] uppercase text-brand-muted mb-3">
            The Launch Collection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-display-sm font-light text-brand-black tracking-wide">
            The Embroidered Collection
          </h2>
          <p className="font-sans text-[13px] text-brand-gray mt-4">
            7 Handcrafted Pieces. Coming Soon.
          </p>
        </Reveal>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-7 md:gap-10 px-6 md:px-12 lg:px-16 pt-4 pb-6" style={{ minWidth: "max-content" }}>
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 80} direction="up">
                <Link
                  href={`/product/${product.slug}`}
                  className="group flex-shrink-0 w-[320px] md:w-[380px] lg:w-[400px] block"
                >
                  <div className="rounded-3xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03),0_0px_4px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07),0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden">
                    <div className="relative aspect-[3/4] bg-white p-5">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="px-5 pb-6 pt-2 text-center">
                      <h3 className="font-serif text-base md:text-lg text-brand-black group-hover:text-brand-gray transition-colors leading-tight">
                        {product.name}
                      </h3>
                      <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted mt-2">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Craft Story ── */}
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal direction="left" scale>
              <div className="relative aspect-[2/3] max-w-md mx-auto w-full overflow-hidden rounded-sm">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/images/video/brand-1.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-brand-muted mb-4">
                The Craft
              </p>
              <h2 className="font-serif text-3xl md:text-display-sm font-light text-brand-black mb-6 leading-tight">
                Every Stitch<br />Tells a Story
              </h2>
              <div className="space-y-4 font-sans text-[13px] text-brand-gray leading-relaxed">
                <p>
                  Each Mogra House piece is embroidered entirely by hand. That
                  takes anywhere from 60 to 250 hours per garment.
                </p>
                <p>
                  We work with master artisans whose families have practiced
                  these techniques for generations. Zardozi, chikankari,
                  crewel, needle painting. We are keeping their craft alive
                  while making something that feels new.
                </p>
              </div>
              <div className="mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mogra-flower-dark.png" alt="" className="h-7 w-7 opacity-20" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Brand Philosophy + Waitlist ── */}
      <Reveal as="section" className="bg-white py-20 md:py-32" direction="none" blur>
        <div className="max-w-2xl mx-auto px-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand-full.png"
            alt="Mogra House"
            className="h-36 md:h-44 w-auto mx-auto mb-10 opacity-75"
          />
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-light italic text-brand-black leading-relaxed">
            &ldquo;Limited by design, not by demand. We make fewer pieces
            so each one gets the attention it deserves.&rdquo;
          </blockquote>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted mt-8">
            Mogra House Atelier
          </p>

          <Reveal delay={200} direction="up" className="mt-16 md:mt-20">
            <p className="font-serif text-lg font-light text-brand-black mb-2">
              Be the first to shop Mogra House
            </p>
            <p className="font-sans text-[12px] text-brand-muted mb-6">
              Drop your email and we will let you know when we launch.
            </p>
            <form
              className="flex border border-brand-light max-w-sm mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-3 text-[12px] font-sans text-brand-black placeholder:text-brand-muted focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand-black text-white px-5 py-3 text-[10px] font-sans font-medium tracking-[0.12em] uppercase hover:bg-brand-dark transition-colors"
              >
                Join
              </button>
            </form>
          </Reveal>
        </div>
      </Reveal>

      {/* ── Cinematic Video Banner with Benefits ── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[50vh] md:h-[55vh]">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/video/brand-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/45" />
          <Reveal direction="none" className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
                Made in India
              </p>
              <h2 className="font-serif text-3xl md:text-display-sm font-light text-white tracking-wide">
                Crafted With Intention
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="bg-brand-black py-5 md:py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-white/40">
            <span>Handcrafted in India</span>
            <span className="text-white/15">|</span>
            <span>Limited Edition</span>
            <span className="text-white/15">|</span>
            <span>Numbered Pieces</span>
            <span className="text-white/15">|</span>
            <span>Complimentary Shipping</span>
          </div>
        </div>
      </section>
    </>
  );
}
