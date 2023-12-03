import { getSelectedPostDate } from "@/service/posts";
import Markdown from "react-markdown";

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const postMarkup = await getSelectedPostDate(id);
  const { title, content } = postMarkup;
  return (
    <section className="w-full p-5">
      <h1 className="font-bold mb-10 block text-2xl">{title}</h1>
      <Markdown>{content}</Markdown>
    </section>
  );
}
