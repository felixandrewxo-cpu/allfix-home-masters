import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/site/Particles";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-hero-gradient text-ink-foreground">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Particles count={28} />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available 24/7 across Islamabad & Rawalpindi
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Your Home,{" "}
            <span className="text-gradient-brand">Perfectly Maintained.</span>
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-xl">
            From plumbing and electrical to solar, AC, CCTV and carpentry —
            AllFix delivers expert maintenance with a smile, any time you need us.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="btn-shine bg-brand hover:bg-brand text-brand-foreground rounded-full px-8 h-12 text-base shadow-glow hover:scale-105 transition-transform"
            >
              <a href="#booking">
                Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base bg-white/5 border-white/20 text-white hover:bg-white hover:text-ink transition-all"
            >
              <a href="tel:+923255333222">
                <Phone className="mr-2 h-4 w-4" /> 0325 5333222
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span><strong className="text-white">4.3</strong> · 12+ Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" /> Licensed Professionals
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" /> Same-Day Service
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 to-transparent blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/95 p-8 shadow-glow backdrop-blur transition-transform duration-500 hover:rotate-0 hover:scale-105 rotate-2">
              <img src={logo} alt="AllFix Maintenance Services" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-ink/90 backdrop-blur px-5 py-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-2xl font-bold text-gradient-brand">12+</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Services</div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-ink/90 backdrop-blur px-5 py-4 shadow-card animate-float">
              <div className="text-2xl font-bold text-gradient-brand">24/7</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
