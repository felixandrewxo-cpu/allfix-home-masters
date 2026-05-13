import {
  Zap,
  Wrench,
  Sun,
  Flame,
  PaintRoller,
  Camera,
  Hammer,
  Droplets,
  Snowflake,
  Sparkles,
  HardHat,
  Settings,
} from "lucide-react";
import imgElectrical from "@/assets/services/electrical.jpg";
import imgPlumbing from "@/assets/services/plumbing.jpg";
import imgSolar from "@/assets/services/solar.jpg";
import imgWelding from "@/assets/services/welding.jpg";
import imgPainting from "@/assets/services/painting.jpg";
import imgCctv from "@/assets/services/cctv.jpg";
import imgCarpentry from "@/assets/services/carpentry.jpg";
import imgTank from "@/assets/services/tank.jpg";
import imgAc from "@/assets/services/ac.jpg";
import imgCleaning from "@/assets/services/cleaning.jpg";
import imgLabour from "@/assets/services/labour.jpg";
import imgAppliance from "@/assets/services/appliance.jpg";

const services = [
  { icon: Zap, image: imgElectrical, title: "Electrical Services", desc: "Wiring, repairs, installations & safety inspections by certified electricians." },
  { icon: Wrench, image: imgPlumbing, title: "Plumbing Services", desc: "Leak fixes, pipe installation, drainage and bathroom fittings — fast." },
  { icon: Sun, image: imgSolar, title: "Solar Installation", desc: "Design, install and maintain solar systems for homes and businesses." },
  { icon: Flame, image: imgWelding, title: "Welding Services", desc: "Gates, grills, structural welding and custom metal fabrication on-site." },
  { icon: PaintRoller, image: imgPainting, title: "Painting Services", desc: "Interior & exterior painting with premium finishes and clean execution." },
  { icon: Camera, image: imgCctv, title: "CCTV Installation", desc: "HD camera setup, DVR config and ongoing maintenance for full security." },
  { icon: Hammer, image: imgCarpentry, title: "Carpentry Services", desc: "Custom furniture, doors, kitchens and repairs by skilled carpenters." },
  { icon: Droplets, image: imgTank, title: "Tank Cleaning", desc: "Hygienic water tank cleaning & sanitization for healthier homes." },
  { icon: Snowflake, image: imgAc, title: "AC Services", desc: "Installation, gas refilling, servicing and repair for all AC brands." },
  { icon: Sparkles, image: imgCleaning, title: "House Cleaning / Helper", desc: "Deep cleaning, daily helpers and reliable household support staff." },
  { icon: HardHat, image: imgLabour, title: "Skilled Labour", desc: "On-demand experienced labour for any maintenance or construction task." },
  { icon: Settings, image: imgAppliance, title: "Appliance Repair", desc: "Refrigerators, washing machines, microwaves and more — fixed quickly." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            One team for <span className="text-gradient-brand">every fix</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whatever needs fixing, installing, or maintaining — our specialists handle it
            with skill, speed, and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card-hover group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-glow transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <a
                    href="#booking"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("prefill-service", { detail: s.title }),
                      );
                    }}
                  >
                    Book this service →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
