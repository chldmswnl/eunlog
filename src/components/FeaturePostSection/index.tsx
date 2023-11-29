import { getAllFeaturedPosts } from "@/service/posts";
import PostGrid from "../PostGrid";

export default async function FeaturePostSection() {
  const posts = await getAllFeaturedPosts();

  return (
    <section className="flex flex-col w-full px-10 py-5 gap-y-10">
      <h2 className="font-bold text-3xl">Featured posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
