import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (session.user) {
      return NextResponse.json({
        user: session.user,
      });
    }
    return NextResponse.json({
      message: "You are not logged in",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Something went wrong",
    });
  }
}
