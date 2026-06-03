import { NextRequest, NextResponse } from "next/server";
import { getBlogViewCounts } from "@/app/lib/blogViews";

export async function GET(request: NextRequest) {
  const rawPostIds = request.nextUrl.searchParams.get("postIds") ?? "";
  const postIds = Array.from(
    new Set(
      rawPostIds
        .split(",")
        .map((postId) => postId.trim())
        .filter(Boolean)
    )
  ).slice(0, 25);

  if (!postIds.length) {
    return NextResponse.json({ counts: {} });
  }

  const counts = await getBlogViewCounts(postIds);

  return NextResponse.json(
    { counts },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
