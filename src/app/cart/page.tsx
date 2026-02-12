"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function CartPage() {
  return (
    <div>
      <Navbar />
      <Reveal className="px-6 md:px-12 pt-28 md:pt-32 pb-10 md:pb-14 text-center" direction="none" blur>
        <h1 className="font-serif text-display-sm font-light text-brand-black mb-4">Your Bag</h1>
        <p className="font-sans text-[14px] text-brand-gray">
          We are not yet accepting orders. Join our waiting list to be the first to shop.
        </p>
      </Reveal>
      <Reveal className="text-center pb-24 md:pb-36" delay={100}>
        <Link href="/collections" className="inline-block font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-brand-black border border-brand-black px-10 py-4 hover:bg-brand-black hover:text-white transition-all duration-300">
          Browse Collection
        </Link>
      </Reveal>
    </div>
  );
}
