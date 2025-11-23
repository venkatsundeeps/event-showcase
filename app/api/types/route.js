export async function GET() {
  // Demo-only: return a small set of event type and budget options
  const payload = {
    eventTypes: [
      "Corporate",
      "Wedding",
      "Private Party",
      "Product Launch",
      "Cocktail",
      "Retreat",
      "Hybrid",
    ],
    budgets: ["< $5k", "$5k–$15k", "$15k–$50k", "> $50k"],
    sampleAttendees: [25, 50, 100, 200, 500],
  };

  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json" },
  });
}
