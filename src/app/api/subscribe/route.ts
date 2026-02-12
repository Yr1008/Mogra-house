import { NextRequest, NextResponse } from "next/server";

interface Subscriber {
  email: string;
  source: string;
  subscribedAt: string;
}

// Try multiple writable paths — project root (local dev) then /tmp (Vercel serverless)
function getFilePaths() {
  const path = require("path");
  return [
    path.join(process.cwd(), "subscribers.json"),
    "/tmp/subscribers.json",
  ];
}

function readSubscribers(): Subscriber[] {
  try {
    const fs = require("fs");
    for (const filePath of getFilePaths()) {
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
      }
    }
  } catch {
    // Filesystem unavailable or file corrupted — start fresh
  }
  return [];
}

function writeSubscribers(subscribers: Subscriber[]) {
  const fs = require("fs");
  for (const filePath of getFilePaths()) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
      return; // success — stop trying other paths
    } catch {
      // This path isn't writable, try the next one
    }
  }
  // If all file writes fail, data is still logged to console (see below)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body as { email?: string; source?: string };

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const subscribers = readSubscribers();

    // Check for duplicates
    const alreadyExists = subscribers.some(
      (s) => s.email === normalizedEmail
    );

    if (alreadyExists) {
      return NextResponse.json(
        { message: "You're already on the list!" },
        { status: 200 }
      );
    }

    const newSubscriber: Subscriber = {
      email: normalizedEmail,
      source: source || "unknown",
      subscribedAt: new Date().toISOString(),
    };

    subscribers.push(newSubscriber);

    // Always log to console (visible in Vercel function logs)
    console.log("[NEW SUBSCRIBER]", JSON.stringify(newSubscriber));

    // Persist to file (best-effort — works locally & on /tmp for Vercel)
    writeSubscribers(subscribers);

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when we launch." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[SUBSCRIBE ERROR]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
