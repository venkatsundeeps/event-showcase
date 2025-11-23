export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Elegant Events. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="facebook"
            className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"
          >
            F
          </a>
          <a
            href="#"
            aria-label="instagram"
            className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"
          >
            I
          </a>
          <a
            href="#"
            aria-label="twitter"
            className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center"
          >
            T
          </a>
        </div>
      </div>
    </footer>
  );
}
