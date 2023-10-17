import Image from "next/image";
import CardItem from "./components/CardItem";
import CarouselSection from "./components/CarouselSection";

export interface HomeData {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  category: string;
  img: string;
}

export default function Home() {
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
      id: 2,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 3,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 4,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
    {
      id: 5,
      title: "hello",
      subTitle: "ddd",
      date: "2023-10-05",
      img: "/profile.jpg",
      category: "tech",
    },
  ];
  return (
    <section>
      <div className="flex w-full justify-center mb-10">
        <div className="flex flex-col items-center gap-y-2">
          <Image
            src={"/profile.jpg"}
            alt={"profile image"}
            width={300}
            height={200}
          />
          <span className="font-bold text-2xl">{"Hello, I'm Eunji 🚀"}</span>
          <span className="font-bold text-xl">
            Front-end developer in Korea
          </span>
          <button className="p-2 bg-amber-500 text-white font-semibold rounded-xl">
            Contact me
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 py-5 gap-y-10">
        <span className="font-bold text-3xl">Featured posts</span>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {data.map((item) => (
            <CardItem itemData={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex w-full px-10 py-5 flex-col">
        <span className="font-bold text-3xl">You may like</span>
        <CarouselSection />
      </div>
    </section>
  );
}
