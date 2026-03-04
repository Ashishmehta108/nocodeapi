import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = await fetch("http://localhost:3000/api/db", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!code.ok) {
    return NextResponse.json({ message: "error" });
  }
  const json = await code.json();
  return NextResponse.json({ message: json });
}
