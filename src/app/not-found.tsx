import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 pt-28">
      <Navbar />
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mogra-flower-dark.png" alt="" className="h-9 w-9 opacity-25 mx-auto mb-8" />
        <h1 className="font-serif text-display-lg font-light text-brand-black mb-4">404</h1>
        <p className="font-sans text-[14px] text-brand-gray mb-10">This page has wandered off.</p>
        <Link href="/" className="inline-block font-sans text-[11px] font-medium tracking-[0.15em] uppercase bg-brand-black text-white px-8 py-4 hover:bg-brand-dark transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
