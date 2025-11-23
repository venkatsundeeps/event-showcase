import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import TestimonialsSlider from "../components/Testimonials";
import PortfolioGrid from "../components/PortfolioGrid";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Elegant Events — Home",
  description:
    "Full-service event planning for weddings, corporate events and private parties.",
};

export default function Home() {
  return (
    <>
      {/* Full-bleed hero (outside .container so image spans full width) */}
      <Hero />

      <section className="container">
        <ServicesGrid />
      </section>

      <section className="container">
        <PortfolioGrid />
      </section>

      <section className="container">
        <Gallery />
      </section>

      <section className="container">
        <TestimonialsSlider />
      </section>

      <section id="contact" className="container">
        <ContactForm />
      </section>
    </>
  );
}
