import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-full justify-center mb-10">
      <div className="flex flex-col items-center gap-y-2">
        <Image
          className="rounded-full"
          src={"/profile.jpg"}
          alt={"profile image"}
          width={250}
          height={250}
          priority
        />
        <h2 className="text-2xl font-bold">{"Hello, I'm Eunji 🚀"}</h2>
        <h3 className="text-xl font-bold">Front-end developer in Korea</h3>
        <Link
          href={"/contact"}
          className="p-2 bg-amber-500 text-white font-semibold rounded-xl"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}


