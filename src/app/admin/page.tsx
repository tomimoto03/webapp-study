"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", slug: "", excerpt: "", content: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "エラーが発生しました");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <main className="page">
      <h1 className="page-title">新しい記事を書く</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <label className="admin-label">
          タイトル
          <input
            className="admin-input"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="記事のタイトル"
          />
        </label>

        <label className="admin-label">
          スラッグ（URLに使われる英字）
          <input
            className="admin-input"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder="my-first-post"
          />
        </label>

        <label className="admin-label">
          概要（一覧に表示される説明文）
          <input
            className="admin-input"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            placeholder="記事の概要を1〜2文で"
          />
        </label>

        <label className="admin-label">
          本文
          <textarea
            className="admin-textarea"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="記事の本文を書いてください"
            rows={12}
          />
        </label>

        {error && <p className="admin-error">{error}</p>}

        <button className="admin-button" type="submit" disabled={loading}>
          {loading ? "投稿中..." : "投稿する"}
        </button>
      </form>
    </main>
  );
}
