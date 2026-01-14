/**
 * Health Check API Route
 * ======================
 *
 * A simple endpoint to verify the API is working.
 * Useful for deployment verification and monitoring.
 *
 * USAGE:
 *   GET /api/health
 *   Returns: { status: "ok", timestamp: "..." }
 *
 * WORKSHOP TIP: This is an example of an API route in Next.js.
 * You can create more API routes by adding files in the /app/api/ folder.
 */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "API is running!",
  });
}
