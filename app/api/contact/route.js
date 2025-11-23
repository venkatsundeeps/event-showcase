import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "leads.json");

    let existing = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      existing = JSON.parse(raw || "[]");
    } catch (e) {
      // file might not exist yet
      existing = [];
    }

    const entry = {
      ...body,
      receivedAt: new Date().toISOString(),
    };

    existing.push(entry);
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("/api/contact error:", err);
    return new Response(JSON.stringify({ error: "Failed to save lead" }), {
      status: 500,
    });
  }
}
