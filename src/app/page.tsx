import Hero from "@/components/Hero";
import FeaturePostSection from "@/components/FeaturePostSection";
import CarouselSection from "@/components/CarouselSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturePostSection />
      <CarouselSection />
    </>
  );
}
