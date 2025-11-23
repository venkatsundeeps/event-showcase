import TestimonialsSlider from "../../components/Testimonials";

export const metadata = {
  title: "Testimonials — Elegant Events",
  description: "Hear from our clients about their experiences.",
};

export default function TestimonialsPage() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-bold text-center">Testimonials</h1>
      <p className="text-center mt-2 text-gray-600">
        What our clients say about us.
      </p>
      <div className="mt-8">
        <TestimonialsSlider />
      </div>
    </section>
  );
}
