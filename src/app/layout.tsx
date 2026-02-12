import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mogra House | Handcrafted Luxury Couture",
  description:
    "Timeless, hand-embroidered luxury clothing. Limited edition pieces crafted with intention and elegance. Launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
