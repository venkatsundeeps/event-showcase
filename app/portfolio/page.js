import PortfolioGrid from "../../components/PortfolioGrid";

export const metadata = {
  title: "Portfolio — Elegant Events",
  description: "Gallery of events we have planned and executed.",
};

export default function PortfolioPage() {
  return (
    <section className="container py-16">
      <h1 className="text-2xl font-bold text-center">Portfolio</h1>
      <p className="text-center mt-2 text-gray-600">
        A selection of our recent events and designs.
      </p>
      <div className="mt-8">
        <PortfolioGrid />
      </div>
    </section>
  );
}
