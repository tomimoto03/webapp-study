import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import DeleteButton from "@/components/DeleteButton";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="page-title">My Blog</h1>
        <p className="page-subtitle">学んだことや作ったものの記録です。</p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Link href="/admin" className="admin-button" style={{ display: "inline-block" }}>
          + 新しい記事を書く
        </Link>
      </div>

      <section className="post-list">
        {posts.map((post) => (
          <div key={post.slug} className="post-card-wrapper">
            <Link href={`/posts/${post.slug}`} className="post-card">
              <h2 className="post-card-title">{post.title}</h2>
              <time className="post-card-date">
                {post.createdAt.toISOString().slice(0, 10)}
              </time>
              <p className="post-card-excerpt">{post.excerpt}</p>
            </Link>
            <DeleteButton id={post.id} />
          </div>
        ))}
      </section>
    </main>
  );
}
