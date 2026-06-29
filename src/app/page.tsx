import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">My Blog</h1>
        <p className="page-subtitle">学んだことや作ったものの記録です。</p>
      </div>

      <section className="post-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="post-card">
            <h2 className="post-card-title">{post.title}</h2>
            <time className="post-card-date">{post.date}</time>
            <p className="post-card-excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
