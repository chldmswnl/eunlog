import { getNoneFeaturedPosts } from "@/service/posts";
import "react-multi-carousel/lib/styles.css";
import Carousel from "../Carousel";

export default async function CarouselSection() {
  const posts = await getNoneFeaturedPosts();
  return (
    <section className="flex w-full px-10 py-5 flex-col">
      <span className="font-bold text-3xl mb-5">You may like</span>
      <Carousel posts={posts} />
    </section>
  );
}
