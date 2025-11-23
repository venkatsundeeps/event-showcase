"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-extrabold text-center">
          What Clients Say
        </h2>
        <div className="mt-6 relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.blockquote
              key={testimonials[index].quote}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-rose-50 shadow-lg border border-white/30"
            >
              <div className="text-4xl text-rose-200 -mt-2">“</div>
              <p className="mt-2 text-gray-800 text-lg">
                {testimonials[index].quote}
              </p>
              <footer className="mt-4 text-sm text-gray-500">
                — {testimonials[index].author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
