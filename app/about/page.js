export const metadata = {
  title: "About — Elegant Events",
  description:
    "About Elegant Events — our story and approach to event planning.",
};

export default function About() {
  return (
    <section className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold">About Elegant Events</h1>
        <p className="mt-4 text-gray-600">
          We create unforgettable experiences — from intimate weddings to large
          corporate gatherings. Our team handles planning, design, coordination
          and day-of management with a focus on detail and creativity.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-gray-600">
              Deliver flawless events that reflect your vision and exceed
              expectations.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Our Team</h3>
            <p className="mt-2 text-sm text-gray-600">
              Experienced planners, designers, and coordinators who love what
              they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
