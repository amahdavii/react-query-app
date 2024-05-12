"use client";

import { useGetPost } from "@/app/services/rest/posts";

interface Props {
  params: {
    id: string;
  };
}

const PostItemPage = ({ params: { id } }: Props) => {
  const { data, isLoading } = useGetPost(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-8">
      <h2>
        Post Detail:{" "}
        <span className="bg-slate-500 inline-flex px-2 rounded-md ml-2">
          {data?.id}
        </span>
      </h2>
      <h3 className="my-2 bg-slate-500 inline-flex px-2 rounded-md">
        {data?.title}
      </h3>
      <p className="bg-slate-500 inline-flex px-2 rounded-md">{data?.body}</p>
    </div>
  );
};

export default PostItemPage;
