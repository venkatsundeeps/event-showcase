import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact — Elegant Events",
  description: "Get in touch with Elegant Events for your next event.",
};

export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <p className="text-center mt-2 text-gray-600">
        We'd love to hear about your event — tell us a bit below.
      </p>
      <div className="mt-8 max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
