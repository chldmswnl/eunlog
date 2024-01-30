import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-6">
      <Link href="/">
        <h1 className="font-bold text-4xl">Eunlog</h1>
      </Link>
      <nav
        className="flex gap-x-3 items-center font-bold text-1xl"
        style={{ color: "#535F70" }}
      >
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
    </header>
  );
}
