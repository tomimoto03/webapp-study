import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { title, excerpt, content, slug } = await req.json();

  if (!title || !excerpt || !content || !slug) {
    return NextResponse.json({ error: "全項目を入力してください" }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: { title, excerpt, content, slug },
  });

  return NextResponse.json(post, { status: 201 });
}
