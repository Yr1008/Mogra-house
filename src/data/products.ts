export type Category = "Kaftans & Tunics" | "Tops & Blouses" | "Outerwear" | "Dresses";

export const categories: Category[] = [
  "Kaftans & Tunics",
  "Tops & Blouses",
  "Outerwear",
  "Dresses",
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  fabricDetails: string;
  embroideryDetails: string;
  category: Category;
  sizes: string[];
  stock: number;
  isLimited: boolean;
  isNew: boolean;
  careInstructions: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "wildflower-kaftan",
    name: "Wildflower Kaftan",
    price: 28500,
    images: ["/images/products/product-1.png"],
    description:
      "A flowing beige kaftan covered in scattered wildflower embroidery. Vivid greens, oranges, and earth tones. Each motif shows a different meadow scene with deer, trees, and blossoms. It is a wearable story of nature.",
    fabricDetails: "Handwoven cotton-silk blend, natural dye base.",
    embroideryDetails:
      "Over 120 hours of hand embroidery featuring crewel-work nature scenes with silk and wool threads.",
    category: "Kaftans & Tunics",
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 5,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Dry clean only",
      "Store flat or on padded hanger",
      "Keep away from direct sunlight",
    ],
  },
  {
    id: "2",
    slug: "embroidered-collar-blouse",
    name: "Embroidered Collar Blouse",
    price: 22000,
    images: ["/images/products/product-2.png"],
    description:
      "A warm-toned blouse with an oversized collar and puffed sleeves. Sunflowers and poppies are embroidered across the bodice. Cinched at the waist with a tonal belt for a structured yet romantic look.",
    fabricDetails: "Pure cotton poplin with silk-thread embroidery.",
    embroideryDetails:
      "Needle-painted floral motifs requiring 90 hours of hand embroidery per piece.",
    category: "Tops & Blouses",
    sizes: ["XS", "S", "M", "L"],
    stock: 4,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Dry clean only",
      "Iron on reverse side",
      "Store on padded hanger",
    ],
  },
  {
    id: "3",
    slug: "palm-shore-top",
    name: "Palm Shore Top",
    price: 32000,
    images: ["/images/products/product-3.png"],
    description:
      "A floor-length tunic in earthy olive, embroidered with tropical palm fronds and wildflowers in a painterly style. Relaxed cut, intricate detail. Works just as well at a resort dinner as it does at a gallery opening.",
    fabricDetails: "Handwoven linen-silk blend with vegetable-dyed base.",
    embroideryDetails:
      "Resham and zardozi embroidery, 150 hours per garment, depicting tropical botanical scenes.",
    category: "Kaftans & Tunics",
    sizes: ["S", "M", "L", "XL"],
    stock: 3,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Dry clean only",
      "Store flat",
      "Avoid prolonged sun exposure",
    ],
  },
  {
    id: "4",
    slug: "nature-scene-blazer",
    name: "Nature Scene Blazer",
    price: 45000,
    images: ["/images/products/product-4.png"],
    description:
      "A structured burgundy silk blazer-dress with a belted waist and balloon sleeves. Deep, rich color with a fluid drape. The kind of piece that commands a room without trying too hard.",
    fabricDetails: "Pure mulberry silk with hand-finished seams.",
    embroideryDetails:
      "Minimal embroidery here. The fabric does the talking. Handwoven with subtle tonal variations throughout.",
    category: "Outerwear",
    sizes: ["XS", "S", "M", "L"],
    stock: 3,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Professional dry clean only",
      "Store on structured hanger",
      "Steam to remove wrinkles, do not iron directly",
    ],
  },
  {
    id: "5",
    slug: "indigo-linen-tunic",
    name: "Indigo Linen Tunic",
    price: 19500,
    images: ["/images/products/product-5.png"],
    description:
      "A relaxed deep-indigo tunic with clean lines and a subtle V-neck. The understated cut lets the quality of the fabric do the work. Handwoven linen with a soft, lived-in drape that just gets better with every wear.",
    fabricDetails: "100% handwoven indigo-dyed linen.",
    embroideryDetails:
      "Tone-on-tone hand stitching along neckline and cuffs, 40 hours of finishing work.",
    category: "Tops & Blouses",
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 6,
    isLimited: false,
    isNew: true,
    careInstructions: [
      "Hand wash in cold water",
      "Air dry in shade",
      "Iron while slightly damp",
    ],
  },
  {
    id: "6",
    slug: "garden-collar-shirt",
    name: "Garden Collar Shirt",
    price: 24000,
    images: ["/images/products/product-6.png"],
    description:
      "A cream silk shirt with a wide, flat collar embroidered with a delicate garden border of marigolds and trailing vines. Cropped, relaxed fit. Pairs beautifully with high-waisted trousers or flowing skirts.",
    fabricDetails: "Habotai silk with mother-of-pearl buttons.",
    embroideryDetails:
      "Chikankari-inspired floral border on collar and placket, 60 hours of hand embroidery.",
    category: "Tops & Blouses",
    sizes: ["XS", "S", "M", "L"],
    stock: 4,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Dry clean only",
      "Store flat or rolled",
      "Keep away from perfume and jewelry when dressing",
    ],
  },
  {
    id: "7",
    slug: "tropical-cape-jacket",
    name: "Tropical Cape Jacket",
    price: 38000,
    images: ["/images/products/product-7.png"],
    description:
      "A structured cape-jacket in off-white cotton with dramatic palm tree and tropical plant embroidery across the back and sleeves. Oversized buttons, cropped silhouette. It has real architectural presence.",
    fabricDetails: "Heavy cotton twill with hand-embroidered panels.",
    embroideryDetails:
      "250 hours of mixed-technique embroidery: crewel, needle painting, and couching.",
    category: "Outerwear",
    sizes: ["S", "M", "L"],
    stock: 2,
    isLimited: true,
    isNew: true,
    careInstructions: [
      "Professional dry clean only",
      "Store flat, do not hang",
      "Brush gently to remove dust",
    ],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count: number = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}
