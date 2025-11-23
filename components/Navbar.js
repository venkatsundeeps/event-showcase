"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold">
              EE
            </div>
            <span className="font-semibold">Elegant Events</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-brand-500">
              Home
            </Link>
            <Link href="/services" className="text-sm hover:text-brand-500">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm hover:text-brand-500">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm hover:text-brand-500">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-brand-500">
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="menu"
              className="p-2 rounded-md border"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
