"use client";

import { useGetAllPosts } from "@/app/services/rest/posts";

const PostItemsPage = () => {
  const { data, isLoading } = useGetAllPosts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="container mx-auto mt-8">
      <h2 className="mb-5">Post Items List: </h2>
      <ul className="inline-flex flex-col">
        {data?.map((item) => (
          <li className="bg-slate-500 p-2 rounded-md mb-2" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostItemsPage;
