import Markdown from "react-markdown";

export default function Posts({ params }: { params: { slug: string } }) {
  const markdown = `
  A paragraph with *emphasis* and **strong importance**.
  
  > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  
  `;
  const title = "this is title ";

  return (
    <div className="w-4/5 bg-gray-200 p-20 flex-col">
      <span className="font-bold mb-10 block text-2xl">{title}</span>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
