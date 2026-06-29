import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>My Blog</h1>
        <p style={{ color: "#666" }}>学んだことや作ったものの記録です。</p>
      </header>

      <section style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2 style={{ fontSize: 22, marginBottom: 4 }}>{post.title}</h2>
            </Link>
            <time style={{ fontSize: 13, color: "#999" }}>{post.date}</time>
            <p style={{ marginTop: 8, color: "#444" }}>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
