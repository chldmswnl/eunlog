import MarkdownViewer from "@/components/MarkdownViewer";
import { getSelectedPostDate } from "@/service/posts";

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const postMarkup = await getSelectedPostDate(id);
  const { title, content, description } = postMarkup;
  return (
    <section className="w-full p-5">
      <h1 className="font-bold block text-3xl mb-2">{title}</h1>
      <h3 className="font-bold text-xl mb-4">{description}</h3>
      <MarkdownViewer content={content} />
    </section>
  );
}
