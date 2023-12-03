import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostDate = Post & { content: string };

export async function getAllFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNoneFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "post", "posts.json");

  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getSelectedPostDate(postPath: string): Promise<PostDate> {
  const filePath = path.join(process.cwd(), "data", "posts", `${postPath}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === postPath)
  );
  if (!metadata)
    throw new Error(`${postPath}에 해당하는 포스트를 찾을 수 없음`);
  const content = await readFile(filePath, "utf-8");

  return { ...metadata, content };
}
