import FilteredPosts from "@/components/FilteredPosts";
import { getAllPosts } from "@/service/posts";
import { useState } from "react";

export default async function Posts() {
  const posts = await getAllPosts();
  const categories = [
    "All posts",
    ...new Set(posts.map((post) => post.category)),
  ];

  return <FilteredPosts posts={posts} categories={categories} />;
}
