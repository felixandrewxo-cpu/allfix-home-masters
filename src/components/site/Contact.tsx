import { Clock, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">
            Visit Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Find us in <span className="text-gradient-brand">Bahria Town</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {[
            { icon: MapPin, title: "Address", body: "Plaza no: 181, Civic Center, Bahria Town, Islamabad" },
            { icon: Phone, title: "Phone", body: "0325 5333222", href: "tel:+923255333222" },
            { icon: Clock, title: "Hours", body: "Open 24 hours · 7 days a week" },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href ?? "#"}
              className="card-hover group rounded-2xl border border-border bg-card p-7 flex gap-4 items-start"
            >
              <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center transition-all group-hover:bg-brand group-hover:text-brand-foreground group-hover:rotate-6">
                <c.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">{c.title}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{c.body}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden border border-border shadow-card transition-all hover:shadow-glow">
          <iframe
            title="AllFix Maintenance Services Location"
            src="https://www.google.com/maps?q=Civic+Center+Bahria+Town+Islamabad&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
