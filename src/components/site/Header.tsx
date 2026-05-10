import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AllFix Maintenance Services Logo"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-base text-foreground">AllFix</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Maintenance Services
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+923255333222"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
          >
            <Phone className="h-4 w-4" />
            0325 5333222
          </a>
          <Button
            asChild
            className="btn-shine bg-brand hover:bg-brand text-brand-foreground rounded-full px-6 shadow-glow hover:scale-105 transition-transform"
          >
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md hover:bg-muted transition"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium hover:text-brand transition"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-brand text-brand-foreground rounded-full mt-2">
              <a href="tel:+923255333222">Call 0325 5333222</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
