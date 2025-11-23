"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "Corporate",
    attendees: "",
    budget: "$5k–$15k",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef(null);
  const [eventTypeOptions, setEventTypeOptions] = useState([
    "Corporate",
    "Wedding",
    "Private Party",
    "Product Launch",
    "Other",
  ]);
  const [budgetOptions, setBudgetOptions] = useState([
    "< $5k",
    "$5k–$15k",
    "$15k–$50k",
    "> $50k",
  ]);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const prefill = params.get("prefill");
      const eventType = params.get("eventType");
      const budget = params.get("budget");
      const attendees = params.get("attendees");

      if (prefill || eventType || budget || attendees) {
        setForm((s) => ({
          ...s,
          message: prefill ? `Requesting a quote for: ${prefill}` : s.message,
          eventType: eventType || s.eventType,
          budget: budget || s.budget,
          attendees: attendees || s.attendees,
        }));

        // remove these params from URL so they don't persist
        params.delete("prefill");
        params.delete("eventType");
        params.delete("budget");
        params.delete("attendees");
        const base =
          window.location.pathname +
          (params.toString() ? `?${params.toString()}` : "") +
          "#contact";
        window.history.replaceState(null, "", base);

        // focus the name field
        setTimeout(() => nameRef.current?.focus(), 120);
      }
    } catch (e) {
      // ignore URL parsing errors
    }
  }, []);

  // Fetch demo types from the showcase API (non-blocking)
  useEffect(() => {
    let mounted = true;
    fetch("/api/types")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.eventTypes && Array.isArray(data.eventTypes))
          setEventTypeOptions(data.eventTypes);
        if (data?.budgets && Array.isArray(data.budgets))
          setBudgetOptions(data.budgets);
      })
      .catch(() => {
        // ignore; fall back to hardcoded options
      });
    return () => (mounted = false);
  }, []);

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({
          ok: true,
          msg: "Thanks — we'll be in touch within 1 business day.",
        });
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "Corporate",
          attendees: "",
          budget: "$5k–$15k",
          message: "",
        });
      } else {
        const data = await res.json();
        setStatus({ ok: false, msg: data?.error || "Submission failed." });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">
        Contact / Booking form
      </h2>

      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Full name</span>
              <input
                ref={nameRef}
                name="name"
                value={form.name}
                onChange={update}
                required
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Full name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Company</span>
              <input
                name="company"
                value={form.company}
                onChange={update}
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Company"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={update}
                type="email"
                required
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Email"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Phone</span>
              <input
                name="phone"
                value={form.phone}
                onChange={update}
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Phone"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Event date</span>
              <input
                name="eventDate"
                value={form.eventDate}
                onChange={update}
                type="date"
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">Event type</span>
              <select
                name="eventType"
                value={form.eventType}
                onChange={update}
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
              >
                {eventTypeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-sm mb-1 text-gray-700">
                Estimated attendees
              </span>
              <input
                name="attendees"
                value={form.attendees}
                onChange={update}
                type="number"
                className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="e.g. 150"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm mb-1 text-gray-700">Budget range</span>
            <select
              name="budget"
              value={form.budget}
              onChange={update}
              className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200"
            >
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-sm mb-1 text-gray-700">
              Message / project notes
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              className="p-3 rounded-lg shadow-sm border-0 focus:outline-none focus:ring-2 focus:ring-rose-200 min-h-[120px]"
              placeholder="Tell us about your event or goals"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-rose-500 to-rose-400 disabled:opacity-60 text-white px-6 py-3 rounded-full"
            >
              {loading ? "Sending…" : "Request a Custom Quote"}
            </button>
          </div>

          {status && (
            <div
              role="status"
              className={`mt-2 text-center ${
                status.ok ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
