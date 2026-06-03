import { NextResponse } from "next/server";
import { incrementBlogViewCount } from "@/app/lib/blogViews";

export async function POST(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const postId = params.postId?.trim();

  if (!postId) {
    return NextResponse.json({ count: 0 }, { status: 400 });
  }

  const count = await incrementBlogViewCount(postId);

  return NextResponse.json(
    { count },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
