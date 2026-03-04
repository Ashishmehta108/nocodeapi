import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json({
    message: "Hello world",
  });
}

export default function handler(req: NextRequest) {}
