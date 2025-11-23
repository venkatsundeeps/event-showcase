"use client";
import { useEffect } from "react";

export default function PortfolioModal({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative max-w-3xl w-full mx-4 bg-white rounded shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 bg-white/80 rounded-full p-1"
        >
          ✕
        </button>

        <div className="w-full h-64 md:h-96 bg-gray-100">
          {item.image ? (
            <img
              src={item.image}
              alt={`${item.title}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          ) : null}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.location}</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-gray-500">Attendees</div>
              <div className="text-lg font-semibold">
                {item.attendees ?? "—"}
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="text-xs text-gray-500">Budget</div>
              <div className="text-lg font-semibold">{item.budget ?? "—"}</div>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              onClick={() => {
                try {
                  const q = new URLSearchParams(window.location.search);
                  q.set("prefill", item.title);
                  if (item.eventType) q.set("eventType", item.eventType);
                  if (item.budget) q.set("budget", item.budget);
                  if (item.attendees)
                    q.set("attendees", String(item.attendees));
                  const newUrl = `${
                    window.location.pathname
                  }?${q.toString()}#contact`;
                  window.history.replaceState(null, "", newUrl);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                } catch (e) {
                  window.location.hash = "contact";
                }
                onClose();
              }}
              className="inline-block bg-[#ff6b5c] text-white px-4 py-2 rounded"
            >
              Request Quote
            </button>
            <button
              onClick={onClose}
              className="inline-block border px-4 py-2 rounded"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
