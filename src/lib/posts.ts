export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "はじめまして",
    date: "2026-06-29",
    excerpt: "このブログの最初の記事です。Next.jsで作りました。",
    content: [
      "このブログサイトはNext.js (App Router) + TypeScriptで作り、GitHub経由でVercelに公開しています。",
      "ゼロから初めて、ローカルでの開発からインターネット公開までの流れを実際に体験しました。",
      "これから少しずつ記事を増やしていく予定です。",
    ],
  },
  {
    slug: "why-i-started",
    title: "なぜこのブログを始めたのか",
    date: "2026-06-29",
    excerpt: "学んだことや作ったものを記録していくために始めました。",
    content: [
      "勉強したことをただ読むだけでなく、実際に手を動かして公開するところまでやることで理解が深まると感じています。",
      "このブログも、その実践の一つです。",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
