import Image from "next/image";
import CardItem from "./components/CardItem";
import CarouselSection from "./components/CarouselSection";
import Link from "next/link";
import Hero from "@/components/Hero";

export interface HomeData {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  category: string;
  img: string;
  markdown: string;
}

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/post`);
  const data = await res.json();

  return (
    <>
      <Hero />
      <div className="flex flex-col w-full px-10 py-5 gap-y-10">
        <span className="font-bold text-3xl">Featured posts</span>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {data.map((item: HomeData) => (
            <CardItem itemData={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex w-full px-10 py-5 flex-col">
        <span className="font-bold text-3xl">You may like</span>
        <CarouselSection />
      </div>
    </>
  );
}
