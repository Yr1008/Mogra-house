"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Plus, Minus, Mail, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { getProductBySlug, getRelatedProducts, formatPrice } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [subMessage, setSubMessage] = useState("");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-serif text-display-sm text-brand-black mb-4">Piece Not Found</h1>
          <Link href="/collections" className="text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-brand-black border-b border-brand-black pb-1">
            Browse Collections
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product, 3);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `product-${slug}` }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubStatus("success");
        setSubMessage(data.message);
        setEmail("");
        setTimeout(() => setSubStatus("idle"), 4000);
      } else {
        setSubStatus("error");
        setSubMessage(data.error || "Something went wrong");
        setTimeout(() => setSubStatus("idle"), 3000);
      }
    } catch {
      setSubStatus("error");
      setSubMessage("Something went wrong. Please try again.");
      setTimeout(() => setSubStatus("idle"), 3000);
    }
  };

  const toggle = (key: string) => setOpenSection(openSection === key ? null : key);

  const details = [
    { key: "fabric", title: "Fabric Details", content: product.fabricDetails },
    { key: "embroidery", title: "Embroidery", content: product.embroideryDetails },
    { key: "care", title: "Care Instructions", content: product.careInstructions.join("\n") },
  ];

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-28 md:pt-32 pb-5">
        <Link href="/collections" className="text-[11px] font-sans tracking-[0.1em] uppercase text-brand-muted hover:text-brand-black transition-colors">
          &larr; Collections
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pb-24 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-3" direction="left" scale>
            <div className="relative aspect-[2/3] bg-white overflow-hidden">
              <Image src={product.images[selectedImage]} alt={product.name} fill className="object-contain" priority />
            </div>
            <div className="flex gap-2 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-16 h-20 overflow-hidden transition-opacity duration-200 ${
                    selectedImage === i ? "opacity-100 ring-1 ring-brand-black" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-contain" />
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2 lg:pt-8" direction="right" delay={150}>
            <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-brand-muted mb-3">{product.category}</p>
            <h1 className="font-serif text-display-sm md:text-display font-light text-brand-black mb-3">{product.name}</h1>
            <p className="font-sans text-[14px] tracking-[0.03em] text-brand-gray mb-8">{formatPrice(product.price)}</p>
            <p className="font-sans text-[13px] text-brand-gray leading-relaxed mb-10">{product.description}</p>

            <div className="mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mogra-flower-dark.png" alt="" className="h-7 w-7 opacity-25" />
            </div>

            <div className="mb-8">
              <p className="font-sans text-[10px] font-medium tracking-[0.15em] uppercase text-brand-black mb-4">Launching Soon</p>
              <form onSubmit={handleWaitlist} className="space-y-3">
                <div className="flex border border-brand-light overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3.5 text-[12px] font-sans text-brand-black placeholder:text-brand-muted focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={subStatus === "loading" || subStatus === "success"}
                    className={`flex items-center gap-2 px-5 py-3.5 text-[10px] font-sans font-medium tracking-[0.12em] uppercase transition-all duration-300 whitespace-nowrap disabled:opacity-70 ${
                      subStatus === "success" ? "bg-brand-dark text-white" : "bg-brand-black text-white hover:bg-brand-dark"
                    }`}
                  >
                    {subStatus === "loading" ? (<><Loader2 size={12} className="animate-spin" /> Joining...</>) :
                     subStatus === "success" ? (<><Check size={12} /> Joined!</>) :
                     (<><Mail size={12} /> Join Waiting List</>)}
                  </button>
                </div>
                <p className="text-[10px] font-sans">
                  {subStatus === "success" ? (
                    <span className="text-green-600">{subMessage}</span>
                  ) : subStatus === "error" ? (
                    <span className="text-red-500">{subMessage}</span>
                  ) : (
                    <span className="text-brand-muted">Be notified when this piece becomes available.</span>
                  )}
                </p>
              </form>
            </div>

            <div className="mt-12 border-t border-brand-light">
              {details.map((item) => (
                <div key={item.key} className="border-b border-brand-light">
                  <button onClick={() => toggle(item.key)} className="w-full flex items-center justify-between py-5">
                    <span className="text-[11px] font-sans font-medium tracking-[0.1em] uppercase text-brand-black">{item.title}</span>
                    <span className="text-brand-muted">{openSection === item.key ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </button>
                  {openSection === item.key && (
                    <p className="text-[13px] font-sans text-brand-gray leading-relaxed pb-5 whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {related.length > 0 && (
          <Reveal className="mt-28 md:mt-36" direction="up">
            <h2 className="font-serif text-display-sm font-light text-brand-black text-center mb-14">You May Also Love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 80} direction="up">
                  <Link href={`/product/${p.slug}`} className="group block">
                    <div className="rounded-3xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03),0_0px_4px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:-translate-y-1.5 overflow-hidden">
                      <div className="relative aspect-[3/4] bg-white p-5 md:p-6">
                        <Image src={p.images[0]} alt={p.name} fill className="object-contain" />
                      </div>
                      <div className="px-5 pb-6 pt-3 text-center">
                        <h3 className="font-serif text-base md:text-lg text-brand-black group-hover:text-brand-gray transition-colors leading-tight">{p.name}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
