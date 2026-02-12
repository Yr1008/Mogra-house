"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mogra-flower-dark.png"
                alt=""
                className="h-8 w-8 brightness-0 invert opacity-80"
              />
              <span className="font-serif text-lg tracking-[0.15em] text-white">
                MOGRA HOUSE
              </span>
            </div>
            <p className="font-sans text-[12px] text-white/50 leading-relaxed max-w-xs">
              Limited edition clothing, embroidered by hand in India.
              Made slowly, with care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/mogra_house?igsh=M3hwdGVqdXV4ajlk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.2} />
              </a>
              <a
                href="mailto:contactmograhouse@gmail.com"
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.2} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-5">
              Information
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Delivery", href: "#" },
                { label: "Returns", href: "#" },
                { label: "Size Guide", href: "#" },
                { label: "Help & Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-sans text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-5">
              About Mogra House
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Sustainability", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[12px] font-sans text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 mb-5">
              Newsletter
            </h4>
            <p className="text-[12px] font-sans text-white/40 mb-4 leading-relaxed">
              Get early access, behind-the-scenes updates, and first look at new pieces.
            </p>
            <form
              className="flex border border-white/20"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2.5 text-[12px] font-sans text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white/10 px-4 py-2.5 text-[10px] font-sans font-medium tracking-[0.1em] uppercase text-white/60 hover:bg-white/20 hover:text-white transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-white/25 tracking-wider">
            &copy; {new Date().getFullYear()} Mogra House. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] font-sans text-white/25 hover:text-white/50 transition-colors tracking-wider"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
