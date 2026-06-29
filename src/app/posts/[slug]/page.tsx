import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <Link href="/" style={{ color: "#666", fontSize: 14 }}>
        ← 一覧へ戻る
      </Link>

      <article style={{ marginTop: 24 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>{post.title}</h1>
        <time style={{ fontSize: 13, color: "#999" }}>{post.date}</time>

        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {post.content.map((paragraph, i) => (
            <p key={i} style={{ lineHeight: 1.8, color: "#333" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
