"use client";

import Carousel from "react-multi-carousel";
import CardItem from "./CardItem";
import "react-multi-carousel/lib/styles.css";

export interface HomeData {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  category: string;
  img: string;
}

const CarouselSection = () => {
  const data: HomeData[] = [
    {
      id: 1,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 1,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 1,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 1,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 1,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
  ];
  return (
    <Carousel
      ssr
      infinite
      partialVisible
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
    >
      {data.map((item) => (
        <CardItem itemData={item} key={item.id} carousel />
      ))}
    </Carousel>
  );
};

export default CarouselSection;
