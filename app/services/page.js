import ServicesGrid from "../../components/ServicesGrid";

export const metadata = {
  title: "Services — Elegant Events",
  description: "Services: Planning, design, coordination, catering and more.",
};

export default function ServicesPage() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-bold text-center">Our Services</h1>
      <p className="text-center mt-2 text-gray-600">
        Comprehensive event planning services tailored to your needs.
      </p>
      <div className="mt-8">
        <ServicesGrid />
      </div>
    </section>
  );
}
