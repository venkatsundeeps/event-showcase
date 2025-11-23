import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import WebsitePlan from "../components/WebsitePlan";

export const metadata = {
  title: "Elegant Events — Event Management",
  description:
    "Weddings, corporate events and parties — planning with style and precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph / Social preview meta tags (use hero image) */}
        <meta property="og:title" content="Elegant Events — Event Management" />
        <meta
          property="og:description"
          content="Weddings, corporate events and parties — planning with style and precision."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/drkquyjdt/image/upload/v1763887274/Untitled_design_1_xmjvlw.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elegant Events — Event Management"
        />
        <meta
          name="twitter:description"
          content="Weddings, corporate events and parties — planning with style and precision."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/drkquyjdt/image/upload/v1763887274/Untitled_design_1_xmjvlw.jpg"
        />
        <link
          rel="image_src"
          href="https://res.cloudinary.com/drkquyjdt/image/upload/v1763887274/Untitled_design_1_xmjvlw.jpg"
        />
      </head>
      <body className="antialiased bg-white text-gray-800">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <WebsitePlan />
      </body>
    </html>
  );
}
