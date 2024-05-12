"use client";

import { useGetAllPosts } from "@/app/services/rest/posts";

export default function Home() {
  const { data } = useGetAllPosts();
  return (
    <main className="container mx-auto mt-8">
      <h2 className="mb-5">React Query Initial Config </h2>
      <ul className="inline-flex flex-col">
        {data?.map((item) => (
          <li className="bg-slate-500 p-2 rounded-md mb-2" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
