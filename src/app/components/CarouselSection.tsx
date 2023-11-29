"use client";

import Carousel from "react-multi-carousel";
import CardItem from "../../components/CardItem";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = () => {
  return (
    <Carousel
      ssr
      infinite
      partialVisible
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
    >
      <span></span>
    </Carousel>
  );
};

export default CarouselSection;
