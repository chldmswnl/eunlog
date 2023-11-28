import CardItem from "@/components/CardItem";
export interface HomeData {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  category: string;
  img: string;
  markdown: string;
}

export default async function FeaturePostSection() {
  const res = await fetch(`http://localhost:3000/api/post`);
  const data = await res.json();
  return (
    <section>
      <div className="flex flex-col w-full px-10 py-5 gap-y-10">
        <h2 className="font-bold text-3xl">Featured posts</h2>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5">
          {data.map((item: HomeData) => (
            <CardItem itemData={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
