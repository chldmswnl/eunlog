import Image from "next/image";

export default function Home() {
  return (
    <section className="flex w-full justify-center">
      <div className="flex flex-col items-center gap-y-2">
        <Image
          src={"/profile.jpg"}
          alt={"profile image"}
          width={300}
          height={200}
        />
        <span className="font-bold text-2xl">{"Hello, I'm Eunji 🚀"}</span>
        <span className="font-bold text-xl">Front-end developer in Korea</span>
        <button className="p-2 bg-amber-500 text-white font-semibold rounded-xl">
          Contact me
        </button>
      </div>
    </section>
  );
}
