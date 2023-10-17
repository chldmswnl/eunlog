import Markdown from "react-markdown";

export default async function Posts({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:3000/api/post`);
  const data = await res.json();

  return (
    <div className="w-4/5 bg-gray-200 p-20 flex-col">
      <span className="font-bold mb-10 block text-2xl">{data.title}</span>
      <Markdown>{data.markdown}</Markdown>
    </div>
  );
}
