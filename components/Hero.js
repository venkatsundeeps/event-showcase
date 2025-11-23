"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const handleGetWebsite = (e) => {
    e.preventDefault();
    try {
      const prefillText =
        "Interested in Wedding Website Package — Initial charges 1500rs. rest pay at your satisfaction. we accept any amount.";
      const url = new URL(window.location.href);
      url.searchParams.set("prefill", prefillText);
      url.searchParams.set("website_package", "wedding");
      // keep hash for scroll target
      const newUrl = url.pathname + url.search + "#contact";
      window.history.replaceState({}, "", newUrl);
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = "contact";
    } catch (err) {
      // fallback: navigate to anchor
      window.location.hash = "contact";
    }
  };

  return (
    <div className="relative overflow-hidden text-center">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://res.cloudinary.com/drkquyjdt/image/upload/v1763887274/Untitled_design_1_xmjvlw.jpg"
          alt="Romantic wedding setup with floral decor"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://source.unsplash.com/1600x900/?wedding,ceremony,floral";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 py-20 px-4 min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center"
      >
        <h1
          style={{ textShadow: "0 6px 24px rgba(0,0,0,0.6)" }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif font-extrabold text-white leading-tight text-center"
        >
          Your Dream Wedding, Beautifully Crafted
        </h1>
        <p
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.55)" }}
          className="mt-4 text-rose-100 max-w-2xl mx-auto text-center"
        >
          Bespoke wedding websites that capture your style — invitations, RSVP,
          photo galleries and more. Fast, elegant, and search-friendly.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            aria-label="Schedule a free consultation"
            className="inline-block bg-rose-500 hover:opacity-95 text-white font-semibold px-6 py-3 rounded-md shadow-md"
          >
            Plan a Free Consult
          </a>

          <a
            href="#portfolio"
            aria-label="View our portfolio"
            className="inline-block border border-white/30 text-white px-6 py-3 rounded-md"
          >
            View Portfolio
          </a>
        </div>

        <div className="mt-6 text-sm text-rose-100 max-w-2xl mx-auto">
          <strong>Wedding Website Package (Demo):</strong> Free Hosting · Search
          Engine Friendly Website with NEXTJS · Source code transfer to your own
          accounts · Images and cloud stores in your own accounts · SEO
          optimized · Google Analytics & Search Console setup · Website visitors
          tracking setup · And more.
          <div className="mt-1 text-xs text-rose-200">
            Initial charges 1500rs. rest pay at your satisfaction. we accept any
            amount.
          </div>
        </div>

        {/* removed extra CTA to keep hero clean */}
      </motion.div>
    </div>
  );
}
