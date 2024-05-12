"use client";
import http from "@/app/services/base";
import { useMutation, useQuery } from "@tanstack/react-query";

//#region get all posts

interface GetAllPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getAllPosts = () => {
  return http<GetAllPosts[]>({
    method: "GET",
    url: `/posts`,
  });
};

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["getAllPostsKey"],
    staleTime: 0,
    queryFn: () => {
      return getAllPosts().then((res) => {
        return res.data;
      });
    },
  });
};

//#endregion

//#region get post

interface GetPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPost = (id: string) => {
  return http<GetPost>({
    method: "GET",
    url: `/posts/${id}`,
  });
};

export const useGetPost = (id: string) => {
  return useQuery({
    queryKey: ["getPostKey", id],
    staleTime: 0,
    queryFn: () => {
      return getPost(id).then((res) => {
        return res.data;
      });
    },
  });
};

//#endregion

//#region create post

interface CreatePost {
  userId: number;
  title: string;
  body: string;
}

export const createPost = (data: CreatePost) => {
  return http({
    method: "POST",
    url: `/posts`,
    data,
  });
};

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["createPost"],
    mutationFn: (data: CreatePost) => {
      return createPost(data);
    },
  });
};

//#endregion
