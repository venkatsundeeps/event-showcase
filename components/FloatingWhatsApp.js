"use client";
export default function FloatingWhatsApp({
  phone = "+1234567890",
  message = "Hi, I'm interested in your event services.",
}) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encoded}`;

  return (
    <div className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] shadow-lg text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-7 h-7"
        >
          <path
            d="M21.75 2.25H2.25v19.5h12.75L23.25 14.25V2.25z"
            fill="#25D366"
            opacity="0"
          />
          <path
            d="M20.52 3.48c-.92-.92-2.2-1.2-3.43-.9-2.95.72-5.67 2.57-7.43 4.94-1.9 2.54-2.9 5.84-2.24 8.98l-.98 3.58 3.67-.96c3.1.84 6.35.03 8.78-2.39 2.39-2.39 3.3-5.9 2.63-9.04.02-.08-.01-.17-.1-.26z"
            fill="currentColor"
            opacity="0.08"
          />
          <path
            d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.473-.148-.673.15-.198.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.149-.673-1.62-.922-2.217-.243-.583-.49-.502-.673-.512l-.573-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487 2.98 1.289 3.64 1.091 4.294.98.128-.079.297-.148.43-.297.134-.149.595-.69.673-1.36.074-.667.074-1.24.052-1.36-.025-.119-.273-.186-.57-.335z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}
