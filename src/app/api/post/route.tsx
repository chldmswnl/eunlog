import { HomeData } from "@/app/page";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify(posts), { status: 200 });
}

const posts: HomeData[] = [
  {
    id: 1,
    title: "hello",
    subTitle: "ddd",
    date: "2023-10-05",
    img: "/profile.jpg",
    category: "tech",
    markdown: `
    A paragraph with *emphasis* and **strong importance**.
    
    > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    
    `,
  },
  {
    id: 2,
    title: "hello",
    subTitle: "ddd",
    date: "2023-10-05",
    img: "/profile.jpg",
    category: "tech",
    markdown: `
    A paragraph with *emphasis* and **strong importance**.
    
    > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    
    `,
  },
  {
    id: 3,
    title: "hello",
    subTitle: "ddd",
    date: "2023-10-05",
    img: "/profile.jpg",
    category: "tech",
    markdown: `
    A paragraph with *emphasis* and **strong importance**.
    
    > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    
    `,
  },
  {
    id: 4,
    title: "hello",
    subTitle: "ddd",
    date: "2023-10-05",
    img: "/profile.jpg",
    category: "tech",
    markdown: `
    A paragraph with *emphasis* and **strong importance**.
    
    > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    
    `,
  },
  {
    id: 5,
    title: "hello",
    subTitle: "ddd",
    date: "2023-10-05",
    img: "/profile.jpg",
    category: "tech",
    markdown: `
    A paragraph with *emphasis* and **strong importance**.
    
    > A block quote with ~strikethrough~ and a URL: [React](https://reactjs.org).
    
    * Lists
    * [ ] todo
    * [x] done
    
    A table:
    
    | a | b |
    | - | - |
    
    `,
  },
];
