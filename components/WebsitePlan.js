"use client";
import { useState } from "react";

export default function WebsitePlan() {
  const [open, setOpen] = useState(false);

  function requestPlan() {
    // Redirect user to WhatsApp with a prefilled message to the provided number
    const phone = "6303011316"; // user-provided number
    const message = encodeURIComponent(
      "Hello, I'm interested in your Event Website Package — Initial charges 1500rs. rest pay at your satisfaction. we accept any amount."
    );
    // Open wa.me link in a new tab
    const waLink = `https://wa.me/${phone}?text=${message}`;
    window.open(waLink, "_blank");
    setOpen(false);
  }

  return (
    <>
      <div className="fixed right-4 bottom-24 z-50">
        <button
          onClick={() => setOpen(true)}
          aria-label="Get your event website"
          className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transform transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3h8l1 4H7l1-4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-medium">Get Your Event Website</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-semibold">
              Event Website Package — Demo
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A ready-to-launch event website tailored to your brand —
              invitations, RSVP, photo galleries, and more. Built with Next.js
              and optimized for search.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700 list-inside">
              <li>• Clean, responsive Next.js website</li>
              <li>• RSVP & Contact integration</li>
              <li>• Photo galleries & social sharing</li>
              <li>• SEO-friendly structure & basic analytics setup</li>
              <li>• Source code transfer to your accounts</li>
            </ul>

            <div className="mt-4 text-sm font-semibold text-rose-600">
              Initial charges 1500rs. rest pay at your satisfaction. we accept
              any amount.
            </div>

            <div className="mt-6 flex gap-3 justify-end">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border"
              >
                Close
              </button>
              <button
                onClick={requestPlan}
                className="px-4 py-2 rounded-md bg-rose-600 text-white"
              >
                Request This Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
