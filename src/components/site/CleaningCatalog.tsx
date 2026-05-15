import { useState } from "react";
import { Plus, Minus, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { catalog, type CatalogItem } from "./cart/catalog";
import { useCart } from "./cart/CartContext";

function ServiceCard({ item, categoryName }: { item: CatalogItem; categoryName: string }) {
  const { items, add, inc, dec } = useCart();
  const line = items.find((i) => i.id === item.id);
  const off = Math.round(((item.original - item.price) / item.original) * 100);

  return (
    <div className="card-hover group relative flex flex-col rounded-2xl border border-border bg-card p-5 animate-fade-up">
      {off > 0 && (
        <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-brand/10 text-brand text-[11px] font-bold px-2 py-1">
          {off}% OFF
        </span>
      )}
      <div className="flex items-start gap-2 pr-14">
        <h4 className="text-base font-semibold leading-snug">{item.name}</h4>
      </div>
      {item.description && (
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      )}
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        <span className="font-semibold text-foreground">{item.rating.toFixed(1)}</span>
        <span>· Verified pros</span>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3 pt-3 border-t border-border">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground line-through">Rs {item.original.toLocaleString()}</span>
          <span className="text-xl font-bold text-brand">Rs {item.price.toLocaleString()}</span>
          {item.unit && <span className="text-[11px] text-muted-foreground">{item.unit}</span>}
        </div>
        {line ? (
          <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 p-1">
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
            className="rounded-full bg-brand hover:bg-brand text-brand-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        )}
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

        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 lg:justify-center scrollbar-thin">
          {catalog.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                activeId === c.id
                  ? "bg-brand text-brand-foreground border-brand shadow-glow scale-105"
                  : "bg-card border-border hover:border-brand/40 hover:text-brand"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="text-center mb-8 animate-fade-in" key={active.id}>
          <h3 className="text-2xl font-bold">{active.name}</h3>
          <p className="text-muted-foreground mt-1">{active.blurb}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" key={active.id + "-grid"}>
          {active.items.map((item) => (
            <ServiceCard key={item.id} item={item} categoryName={active.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
