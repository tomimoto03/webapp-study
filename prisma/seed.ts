import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.post.upsert({
    where: { slug: "hello-world" },
    update: {},
    create: {
      slug: "hello-world",
      title: "はじめまして",
      excerpt: "このブログの最初の記事です。Next.jsで作りました。",
      content:
        "このブログサイトはNext.js (App Router) + TypeScriptで作り、GitHub経由でVercelに公開しています。\n\nゼロから初めて、ローカルでの開発からインターネット公開までの流れを実際に体験しました。\n\nこれから少しずつ記事を増やしていく予定です。",
    },
  });

  await prisma.post.upsert({
    where: { slug: "why-i-started" },
    update: {},
    create: {
      slug: "why-i-started",
      title: "なぜこのブログを始めたのか",
      excerpt: "学んだことや作ったものを記録していくために始めました。",
      content:
        "勉強したことをただ読むだけでなく、実際に手を動かして公開するところまでやることで理解が深まると感じています。\n\nこのブログも、その実践の一つです。",
    },
  });

  console.log("Seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
