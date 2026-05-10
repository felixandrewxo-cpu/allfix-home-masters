import { useEffect, useState } from "react";
import { z } from "zod";
import { Calendar, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Electrical Services",
  "Plumbing Services",
  "Solar Installation",
  "Welding Services",
  "Painting Services",
  "CCTV Installation/Maintenance",
  "Carpentry Services",
  "Tank Cleaning Services",
  "AC Services",
  "House Cleaning/Helper Service",
  "Skilled Labour",
  "Appliance Repair",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please pick a date"),
  address: z.string().trim().min(5, "Please enter your address").max(200),
  message: z.string().max(500).optional(),
});

export function Booking() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    const onPrefill = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (!detail) return;
      const match =
        services.find((s) => s.toLowerCase() === detail.toLowerCase()) ||
        services.find((s) => s.toLowerCase().startsWith(detail.toLowerCase().split(/[\s/]/)[0])) ||
        services.find((s) => s.toLowerCase().includes(detail.toLowerCase().split(" ")[0]));
      if (match) {
        setForm((f) => ({ ...f, service: match }));
        setDone(false);
        setTimeout(() => {
          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    };
    window.addEventListener("prefill-service", onPrefill as EventListener);
    return () => window.removeEventListener("prefill-service", onPrefill as EventListener);
  }, []);

  const update = (k: keyof typeof form) => (e: { target: { value: string } } | string) => {
    const value = typeof e === "string" ? e : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);

    const text =
      `New Booking Request%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Service: ${encodeURIComponent(form.service)}%0A` +
      `Date: ${encodeURIComponent(form.date)}%0A` +
      `Address: ${encodeURIComponent(form.address)}%0A` +
      `Notes: ${encodeURIComponent(form.message || "-")}`;

    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Booking received! We'll call you shortly.");
      window.open(`https://wa.me/923255333222?text=${text}`, "_blank");
    }, 700);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="py-24 lg:py-32 bg-ink text-ink-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/20 blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 animate-fade-up">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">
            Book Appointment
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Schedule a service in <span className="text-gradient-brand">60 seconds</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Fill in your details and our team will confirm your appointment via call or
            WhatsApp. Same-day slots available across Islamabad & Rawalpindi.
          </p>

          <ul className="mt-8 space-y-3">
            {["No hidden charges", "Verified, insured technicians", "Free quote on arrival", "Easy rescheduling"].map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/85">
                <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-10 shadow-glow animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {done ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="mx-auto h-16 w-16 rounded-full bg-brand/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Booking Received!</h3>
              <p className="text-white/70">We'll contact you on {form.phone} shortly.</p>
              <Button
                type="button"
                onClick={() => { setDone(false); setForm({ name: "", phone: "", service: "", date: "", address: "", message: "" }); }}
                className="mt-6 bg-brand hover:bg-brand text-brand-foreground rounded-full"
              >
                Book another service
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/80">Full Name</Label>
                <Input
                  id="name" required maxLength={80} value={form.name} onChange={update("name")}
                  placeholder="Your name"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-brand h-11 transition-all focus:bg-white/15"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
                <Input
                  id="phone" required maxLength={20} value={form.phone} onChange={update("phone")}
                  placeholder="03XX XXXXXXX"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-brand h-11 transition-all focus:bg-white/15"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white/80">Service</Label>
                <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
                  <SelectTrigger className="bg-white/10 border-white/15 text-white h-11 focus:ring-brand">
                    <SelectValue placeholder="Choose service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-white/80">Preferred Date</Label>
                <Input
                  id="date" type="date" min={today} required value={form.date} onChange={update("date")}
                  className="bg-white/10 border-white/15 text-white h-11 focus-visible:ring-brand"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address" className="text-white/80">Address</Label>
                <Input
                  id="address" required maxLength={200} value={form.address} onChange={update("address")}
                  placeholder="House #, Street, Area, City"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/40 h-11 focus-visible:ring-brand"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message" className="text-white/80">Notes (optional)</Label>
                <Textarea
                  id="message" maxLength={500} value={form.message} onChange={update("message")}
                  placeholder="Tell us briefly about the issue..."
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/40 min-h-[90px] focus-visible:ring-brand"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="btn-shine sm:col-span-2 bg-brand hover:bg-brand text-brand-foreground rounded-full h-12 text-base font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                {submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Calendar className="mr-2 h-5 w-5" />
                    Confirm Booking
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
