"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import PostGrid from "../PostGrid";
import CategorySection from "../CategorySection";

type FilteredPosts = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All posts";

export default function FilteredPosts({ posts, categories }: FilteredPosts) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);
  const filtered =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);
  return (
    <section className="flex m-4">
      <PostGrid posts={filtered} />
      <CategorySection
        categories={categories}
        selectedCategory={selectedCategory}
        onClick={setSelectedCategory}
      />
    </section>
  );
}
