"use client";
import { portfolio } from "../data/data";

export default function Gallery({ limit = 9 }) {
  // show portfolio items, and add one sample 'no image' card to demonstrate placeholder
  const items = [...portfolio];
  if (!items.some((i) => !i.image)) {
    items.push({
      title: "Sample — Image Pending",
      location: "TBD",
      image: null,
      attendees: null,
      budget: null,
      eventType: "Wedding",
    });
  }

  return (
    <section className="py-12" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-serif font-extrabold">
              Recent Events
            </h2>
            <p className="mt-1 text-gray-600">
              A curated gallery of recent events and setups.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.slice(0, limit).map((it, idx) => (
            <div
              key={`${it.title}-${idx}`}
              className="relative rounded-lg overflow-hidden bg-gray-50 border border-transparent hover:shadow-lg transition-shadow cursor-pointer"
            >
              {it.image ? (
                <img
                  src={it.image}
                  alt={`${it.title} — ${it.location || "Event"}`}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-gray-100 text-gray-400">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto mb-2 w-8 h-8 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M8 3h8l1 4H7l1-4z"
                      />
                    </svg>
                    <div className="text-sm">No image yet</div>
                  </div>
                </div>
              )}

              <div className="p-3">
                <div className="text-sm font-semibold text-gray-800">
                  {it.title}
                </div>
                <div className="text-xs text-gray-500">
                  {it.location || "Location TBD"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
