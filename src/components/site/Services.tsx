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

const services = [
  { icon: Zap, title: "Electrical Services", desc: "Wiring, repairs, installations & safety inspections by certified electricians." },
  { icon: Wrench, title: "Plumbing Services", desc: "Leak fixes, pipe installation, drainage and bathroom fittings — fast." },
  { icon: Sun, title: "Solar Installation", desc: "Design, install and maintain solar systems for homes and businesses." },
  { icon: Flame, title: "Welding Services", desc: "Gates, grills, structural welding and custom metal fabrication on-site." },
  { icon: PaintRoller, title: "Painting Services", desc: "Interior & exterior painting with premium finishes and clean execution." },
  { icon: Camera, title: "CCTV Installation", desc: "HD camera setup, DVR config and ongoing maintenance for full security." },
  { icon: Hammer, title: "Carpentry Services", desc: "Custom furniture, doors, kitchens and repairs by skilled carpenters." },
  { icon: Droplets, title: "Tank Cleaning", desc: "Hygienic water tank cleaning & sanitization for healthier homes." },
  { icon: Snowflake, title: "AC Services", desc: "Installation, gas refilling, servicing and repair for all AC brands." },
  { icon: Sparkles, title: "House Cleaning / Helper", desc: "Deep cleaning, daily helpers and reliable household support staff." },
  { icon: HardHat, title: "Skilled Labour", desc: "On-demand experienced labour for any maintenance or construction task." },
  { icon: Settings, title: "Appliance Repair", desc: "Refrigerators, washing machines, microwaves and more — fixed quickly." },
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
              className="card-hover group relative rounded-2xl border border-border bg-card p-7 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  <a href="#booking">Book this service →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
