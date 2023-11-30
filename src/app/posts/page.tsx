"use client";

import PostSection from "@/components/PostSection";
import { useState } from "react";

export default function Posts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categoryArr = [
    "All posts",
    "my story",
    "frontend",
    "backend",
    "javascript",
  ];

  return (
    <section className="flex mb-5">
      {/* <PostSection category={selectedCategory} /> */}
      <article className="mx-4">
        <div className="flex flex-col items-center">
          <h3 className="font-bold border-b-2 border-slate-800 mb-3">
            Category
          </h3>
          {categoryArr.map((category) => (
            <span
              key={category}
              className="font-semibold text-neutral-800 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}
