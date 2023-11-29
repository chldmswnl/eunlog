import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify(posts), { status: 200 });
}

export interface HomeData {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  category: string;
  img: string;
}

const posts: HomeData[] = [
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
