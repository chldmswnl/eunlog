import { getAllFeaturedPosts } from "@/service/posts";
import PostGrid from "../PostGrid";

export default async function PostSection({ category }: { category: string }) {
  const posts = await getAllFeaturedPosts();
  return (
    <PostGrid
      posts={posts.filter((post) =>
        category === "All posts" ? true : post.category === category
      )}
    />
  );
}
