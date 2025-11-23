"use client";
import { useState } from "react";
import { portfolio } from "../data/data";
import PortfolioModal from "./PortfolioModal";

export default function PortfolioGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-12" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-extrabold text-center">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 mt-2">
          A selection of recent events and websites we built.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl overflow-hidden relative cursor-pointer bg-white shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => setSelected(p)}
            >
              {p.image ? (
                <div className="relative">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.location}`}
                    className="w-full h-56 object-cover transition-transform duration-400 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-90">{p.location}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400">
                  Image
                </div>
              )}

              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">
                    {p.eventType ?? "Event"}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white text-xs shadow">
                    {p.budget ?? "—"}
                  </div>
                  <div className="text-xs text-gray-500">
                    {p.attendees ?? "—"} guests
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
