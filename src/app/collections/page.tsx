"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { products, categories, Category } from "@/data/products";

type SortOption = "newest" | "price-high" | "price-low";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filteredProducts = useMemo(() => {
    let filtered =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [activeCategory, sortBy]);

  const tabs: (Category | "All")[] = ["All", ...categories];

  return (
    <div>
      <Navbar />

      <Reveal className="pt-28 md:pt-32 pb-10 md:pb-14 text-center px-6" direction="none" blur>
        <p className="font-sans text-[10px] font-medium tracking-[0.25em] uppercase text-brand-muted mb-3">
          The Embroidered Collection
        </p>
        <h1 className="font-serif text-3xl md:text-display-sm font-light text-brand-black">
          Launching Soon
        </h1>
        <p className="font-sans text-[13px] text-brand-gray mt-3">
          Browse the collection and join the waiting list to be notified.
        </p>
      </Reveal>

      <div className="px-4 md:px-8 lg:px-12 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5 md:gap-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`text-[11px] font-sans font-medium tracking-[0.12em] uppercase whitespace-nowrap pb-1 transition-all duration-200 ${
                  activeCategory === tab
                    ? "text-brand-black border-b border-brand-black"
                    : "text-brand-muted hover:text-brand-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-sans font-medium tracking-[0.1em] uppercase text-brand-muted">
              {filteredProducts.length} Piece{filteredProducts.length !== 1 ? "s" : ""}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="text-[11px] font-sans font-medium tracking-[0.1em] uppercase text-brand-muted bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="newest">Sort By</option>
              <option value="newest">Newest</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-light" />

      <div className="bg-white px-4 md:px-8 lg:px-12 py-8 md:py-12 pb-24 md:pb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 70} direction="up">
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="rounded-3xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03),0_0px_4px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:-translate-y-1.5 overflow-hidden">
                  <div className="relative aspect-[3/4] bg-white p-5 md:p-6">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 4}
                    />
                  </div>
                  <div className="px-5 pb-6 pt-3 text-center">
                    <h3 className="font-serif text-base md:text-lg text-brand-black group-hover:text-brand-gray transition-colors duration-300 leading-tight">
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif text-xl text-brand-gray">No pieces in this collection yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
