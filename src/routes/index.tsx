import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";

import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { CleaningCatalog } from "@/components/site/CleaningCatalog";
import { CartProvider } from "@/components/site/cart/CartContext";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AllFix Maintenance Services — Plumber, Electrician, Solar & More | Islamabad" },
      {
        name: "description",
        content:
          "AllFix Maintenance Services Pvt Ltd: 24/7 plumber, electrician, solar, AC, CCTV, carpentry, painting & house maintenance in Bahria Town, Islamabad & Rawalpindi. Book online today.",
      },
      { property: "og:title", content: "AllFix Maintenance Services — All-in-One Home Repairs" },
      {
        property: "og:description",
        content:
          "Trusted maintenance services across Islamabad & Rawalpindi. Plumbing, electrical, solar, AC, CCTV, carpentry & more — available 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <CleaningCatalog />
          <About />
          <Reviews />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
        <CartDrawer />
        <Toaster richColors position="top-center" />
      </div>
    </CartProvider>
  );
}
