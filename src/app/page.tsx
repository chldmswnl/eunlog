import CarouselSection from "./components/CarouselSection";
import Hero from "@/components/Hero";
import FeaturePostSection from "@/components/FeaturePostSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturePostSection />
      <div className="flex w-full px-10 py-5 flex-col">
        <span className="font-bold text-3xl">You may like</span>
        <CarouselSection />
      </div>
    </>
  );
}
