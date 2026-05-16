import { useState } from "react";
import { Plus, Minus, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { catalog, type CatalogItem } from "./cart/catalog";
import { useCart } from "./cart/CartContext";

function ServiceCard({ item, categoryName, image }: { item: CatalogItem; categoryName: string; image: string }) {
  const { items, add, inc, dec } = useCart();
  const line = items.find((i) => i.id === item.id);
  const off = Math.round(((item.original - item.price) / item.original) * 100);

  return (
    <div className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card animate-fade-up">
      <div className="relative h-40 overflow-hidden bg-muted">
        <img
          src={image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={512}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {off > 0 && (
          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-brand text-brand-foreground text-[11px] font-bold px-2.5 py-1 shadow-glow">
            {off}% OFF
          </span>
        )}
      </div>
      <div className="flex flex-col p-5 flex-1">
        <div className="flex items-start gap-2">
          <h4 className="text-base font-semibold leading-snug line-clamp-2 min-h-[2.75rem]">{item.name}</h4>
        </div>
        {item.description && (
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
        )}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-foreground">{item.rating.toFixed(1)}</span>
          <span>· Verified pros</span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-border">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through leading-tight">Rs {item.original.toLocaleString()}</span>
            <span className="text-xl font-bold text-brand leading-tight">Rs {item.price.toLocaleString()}</span>
            {item.unit && <span className="text-[11px] text-muted-foreground leading-tight">{item.unit}</span>}
          </div>
          {line ? (
            <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 p-1 shrink-0">
              <button
                onClick={() => dec(item.id)}
                className="h-8 w-8 grid place-items-center rounded-full bg-background hover:bg-brand hover:text-brand-foreground transition"
                aria-label="Decrease"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-6 text-center font-bold text-brand">{line.qty}</span>
              <button
                onClick={() => inc(item.id)}
                className="h-8 w-8 grid place-items-center rounded-full bg-brand text-brand-foreground hover:scale-110 transition"
                aria-label="Increase"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Button
              size="sm"
              onClick={() => add(item, categoryName)}
              className="rounded-full bg-brand hover:bg-brand text-brand-foreground font-semibold shadow-glow hover:scale-105 transition-transform shrink-0"
            >
              <ShoppingCart className="h-4 w-4 mr-1" /> Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function CleaningCatalog() {
  const [activeId, setActiveId] = useState(catalog[0].id);
  const active = catalog.find((c) => c.id === activeId)!;

  return (
    <section id="catalog" className="py-24 lg:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">
            Order Cleaning Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pick services, <span className="text-gradient-brand">add to cart</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse categories and bundle multiple services in one booking — just like a food order.
          </p>
        </div>

        <div className="-mx-4 lg:mx-0 mb-10">
          <div
            className="flex gap-3 overflow-x-auto px-4 lg:px-1 py-2 scrollbar-thin snap-x snap-mandatory lg:flex-wrap lg:justify-center lg:overflow-visible"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            {catalog.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`group/tab relative shrink-0 snap-start overflow-hidden rounded-2xl border transition-all ${
                  activeId === c.id
                    ? "border-brand shadow-glow scale-[1.02]"
                    : "border-border hover:border-brand/40"
                }`}
              >
                <div className="flex items-center gap-3 pr-4">
                  <div className="h-14 w-14 shrink-0 overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/tab:scale-110"
                    />
                  </div>
                  <span className={`whitespace-nowrap text-sm font-semibold ${activeId === c.id ? "text-brand" : ""}`}>
                    {c.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          key={active.id + "-banner"}
          className="relative mb-8 overflow-hidden rounded-3xl border border-border animate-fade-in"
        >
          <img
            src={active.image}
            alt={active.name}
            loading="lazy"
            className="h-48 md:h-56 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
            <h3 className="text-2xl md:text-3xl font-bold">{active.name}</h3>
            <p className="text-muted-foreground mt-1 max-w-md">{active.blurb}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" key={active.id + "-grid"}>
          {active.items.map((item) => (
            <ServiceCard key={item.id} item={item} categoryName={active.name} image={active.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
