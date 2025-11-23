import { services } from "../data/data";

function Icon({ name }) {
  // simple inline SVG icons for demo use
  switch ((name || "").toLowerCase()) {
    case "full event planning":
    case "on-site management":
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 7h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3v4M16 3v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "wedding design":
    case "seaside ceremony":
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 21 12 17.77 7.82 21 9 12.64 4 9l5.91-0.74L12 2z"
            stroke="currentColor"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "corporate events":
    case "corporate":
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 21v-4h10v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "private parties":
    case "intimate dinner party":
    case "rooftop cocktail event":
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 2v20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "venue sourcing":
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="9"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-6 h-6 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 12h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function ServicesGrid() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-gray-900">
            Our Services
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Tailored packages for weddings, corporate events and private parties
            — thoughtfully designed and beautifully executed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-white to-rose-50 border border-transparent hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-sm text-rose-600">
                  <span className="sr-only">{s.title} icon</span>
                  <Icon name={s.title} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{s.description}</p>
                </div>
              </div>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:underline"
                >
                  Get a quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
