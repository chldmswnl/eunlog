import Image from "next/image";

export default function Home() {
  const data: {
    id: number;
    title: string;
    subTitle: string;
    date: string;
    category: string;
    img: string;
  }[] = [
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
      <div className="flex flex-col w-full pr-10 pl-10 gap-y-10">
        <span className="font-bold text-3xl">Featured posts</span>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {data.map(({ id, title, subTitle, date, img, category }) => (
            <div
              className="w-full h-96 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              key={id}
            >
              <div>
                <Image
                  src={img}
                  alt={"thumbnail image"}
                  width={350}
                  height={350}
                />
              </div>
              <div className="flex flex-col items-center px-5 py-3">
                <div className="my-2 w-full flex justify-end">
                  <span>{date}</span>
                </div>
                <span className="font-bold text-2xl">{title}</span>
                <span className="font-semibold text-xl mb-3">{subTitle}</span>
                <span className=" bg-amber-600 text-white px-2 rounded-lg">
                  {category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
