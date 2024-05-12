"use client";
import toast, { Toaster } from "react-hot-toast";
import { useCreatePost } from "@/app/services/rest/posts";
import { useState } from "react";

interface FormData {
  userId: number | null;
  title: string | null;
  body: string | null;
}

const CreatePostPage = () => {
  const [formData, setFormData] = useState<FormData>({
    userId: null,
    title: null,
    body: null,
  });

  const { mutateAsync } = useCreatePost();

  const changeHandler = (event: {
    target: { name: string; value: string | number };
  }) => {
    setFormData((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    mutateAsync({
      userId: formData.userId as number,
      title: formData.title as string,
      body: formData.body as string,
    })
      .then(() => toast.success("اطلاعات با موفقیت ثبت شد"))
      .catch(() => toast.error("متاسفانه خطایی پیش آمده"));
  };

  return (
    <>
      <div className="mx-auto container my-5">
        <form onSubmit={submitHandler} className="inline-flex flex-col">
          <input
            className="mb-2 p-2 rounded-md outline-none text-black"
            type="text"
            name="userId"
            placeholder="Please enter user id"
            value={formData.userId ?? ""}
            onChange={changeHandler}
          />
          <input
            className="mb-2 p-2 rounded-md outline-none text-black"
            type="text"
            name="title"
            placeholder="Please enter title"
            value={formData.title ?? ""}
            onChange={changeHandler}
          />
          <input
            className="mb-2 p-2 rounded-md outline-none text-black"
            type="text"
            name="body"
            placeholder="Please enter body"
            value={formData.body ?? ""}
            onChange={changeHandler}
          />
          <button
            disabled={!formData.title || !formData.body || !formData.userId}
            type="submit"
            className="bg-sky-600 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default CreatePostPage;
