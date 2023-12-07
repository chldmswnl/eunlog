import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

export default function CardItem({ post }: { post: Post }) {
  if (!post) return <div></div>;
  const { title, description, path, category, date } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md shadow-md hover:shadow-lg">
        <Image
          src={`/images/posts/${path}.png`}
          alt={"thumbnail image"}
          width={300}
          height={200}
          className="w-full"
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end font-semibold text-gray-500">
            {date.toString()}
          </time>
          <h3 className="font-bold text-xl mt-3 w-full truncate text-center">
            {title}
          </h3>
          <span className="font-semibold mb-3 w-full truncate text-center">
            {description}
          </span>
          <span className=" bg-amber-600 text-white px-2 rounded-lg">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
