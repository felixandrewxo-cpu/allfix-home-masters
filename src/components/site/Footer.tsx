import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AllFix" className="h-14 w-auto bg-white rounded-lg p-1" />
              <div>
                <div className="font-display font-bold text-lg">AllFix</div>
                <div className="text-xs text-white/60 uppercase tracking-widest">Maintenance Services Pvt Ltd</div>
              </div>
            </div>
            <p className="text-white/65 max-w-md">
              Your trusted partner for plumbing, electrical, solar, carpentry and full house
              maintenance — across Islamabad & Rawalpindi, 24/7.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-brand flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/65 text-sm">
              {[
                ["Services", "#services"],
                ["About", "#about"],
                ["Reviews", "#reviews"],
                ["Book Now", "#booking"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-brand transition-colors hover:translate-x-1 inline-block">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              <li className="flex gap-3"><Phone className="h-4 w-4 text-brand mt-0.5" /> 0325 5333222</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-brand mt-0.5" /> Plaza no: 181, Civic Center, Bahria Town, Islamabad</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/55">
          <div>© {new Date().getFullYear()} AllFix Maintenance Services Pvt Ltd. All rights reserved.</div>
          <div>Crafted with care in Islamabad, Pakistan.</div>
        </div>
      </div>
    </footer>
  );
}
