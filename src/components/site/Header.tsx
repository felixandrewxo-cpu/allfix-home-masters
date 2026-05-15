import { useEffect, useState } from "react";
import { Menu, Phone, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useCart } from "./cart/CartContext";

const links = [
  { href: "#services", label: "Services" },
  { href: "#catalog", label: "Order Cleaning" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = ["#services", "#catalog", "#about", "#reviews", "#booking", "#contact"];
      const y = window.scrollY + 120;
      let current = "#top";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && (el as HTMLElement).offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text when on transparent dark hero, themed text when scrolled
  const linkBase = scrolled
    ? "text-foreground/90 hover:text-brand"
    : "text-white hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]";

  const nameClr = scrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]";
  const tagClr = scrolled ? "text-muted-foreground" : "text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border shadow-md"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-28">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AllFix Maintenance Services Logo"
            className="h-24 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className={`font-display font-extrabold text-lg tracking-tight ${nameClr}`}>
              AllFix
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${tagClr}`}>
              Maintenance Services
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-[15px] font-semibold tracking-wide transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-brand after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                } ${isActive ? (scrolled ? "text-brand" : "text-white") : linkBase}`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+923255333222"
            className={`flex items-center gap-2 text-sm font-bold transition-colors ${
              scrolled ? "text-foreground hover:text-brand" : "text-white hover:text-brand drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            }`}
          >
            <Phone className="h-4 w-4" />
            0325 5333222
          </a>
          <CartIconButton scrolled={scrolled} count={count} onClick={() => setCartOpen(true)} />
          <Button
            asChild
            className="btn-shine bg-brand hover:bg-brand text-brand-foreground font-semibold rounded-full px-6 shadow-glow hover:scale-105 transition-transform"
          >
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-1">
          <CartIconButton scrolled={scrolled} count={count} onClick={() => setCartOpen(true)} />
          <button
            aria-label="Toggle menu"
            className={`p-2 rounded-md transition ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-semibold text-foreground hover:text-brand hover:bg-muted/50 rounded-lg transition"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-brand text-brand-foreground font-semibold rounded-full mt-2 h-11">
              <a href="tel:+923255333222">
                <Phone className="mr-2 h-4 w-4" /> Call 0325 5333222
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function CartIconButton({ scrolled, count, onClick }: { scrolled: boolean; count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open cart"
      className={`relative inline-flex items-center justify-center h-10 w-10 rounded-full transition ${
        scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
      }`}
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1 rounded-full bg-brand text-brand-foreground text-[11px] font-bold grid place-items-center animate-fade-in shadow-glow">
          {count}
        </span>
      )}
    </button>
  );
}
