import { Post } from "@/service/posts";
import CardItem from "../CardItem";

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <CardItem post={post} key={post.path} />
      ))}
    </section>
  );
}
