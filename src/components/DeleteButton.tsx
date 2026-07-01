"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("この記事を削除しますか?")) return;

    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    router.refresh();
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      削除
    </button>
  );
}
