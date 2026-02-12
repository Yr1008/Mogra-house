"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavbarProps {
  heroMode?: boolean;
}

export default function Navbar({ heroMode = false }: NavbarProps) {
  const [visible, setVisible] = useState(!heroMode);
  const [pillReady, setPillReady] = useState(!heroMode);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroMode) {
      setVisible(true);
      // Small delay so the pill animates in on non-hero pages too
      const t = setTimeout(() => setPillReady(true), 100);
      return () => clearTimeout(t);
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.75;
      const shouldShow = window.scrollY > threshold;
      setVisible(shouldShow);
      if (shouldShow) {
        // Slight delay for the pill after the bar appears
        setTimeout(() => setPillReady(true), 150);
      } else {
        setPillReady(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroMode]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-center h-14 md:h-16">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mogra-flower-dark.png"
              alt=""
              className="h-6 w-6"
            />
            <span className="font-serif text-lg tracking-[0.15em] text-brand-black">
              MOGRA HOUSE
            </span>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-2 pb-2">
        <nav
          ref={pillRef}
          className={`glass-pill rounded-full px-6 md:px-8 py-2.5 flex items-center gap-6 md:gap-8 pill-enter ${
            pillReady ? "pill-visible" : ""
          }`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/collections", label: "Collections" },
            { href: "/collections", label: "Products" },
            { href: "/about", label: "About Us" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] md:text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-brand-gray hover:text-brand-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
