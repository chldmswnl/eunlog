"use client";

import { Post } from "@/service/posts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "../CardItem";

export default function CarouselSection({ posts }: { posts: Post[] }) {
  return (
    <Carousel
      infinite
      autoPlay
      partialVisible
      itemClass="m-2"
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      }}
    >
      {posts.map((post) => (
        <CardItem key={post.path} post={post} />
      ))}
    </Carousel>
  );
}
