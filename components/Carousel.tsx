/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "antd";

function CarouselComponents() {
  const slides = [
    "https://res.cloudinary.com/dszhlpm81/image/upload/v1703065277/assets/leau_mxga18.jpg",
    "https://res.cloudinary.com/dszhlpm81/image/upload/v1703065276/assets/spray_eonde5.jpg",
    "https://res.cloudinary.com/dszhlpm81/image/upload/v1703065276/assets/airul_curgnj.jpg",
    "https://res.cloudinary.com/dszhlpm81/image/upload/v1703065276/assets/bodyspa_hk0qpj.jpg",
    "https://res.cloudinary.com/dszhlpm81/image/upload/v1703065278/assets/sheetmask_ufwusn.jpg",
  ];

  return (
    <>
      <Carousel autoplay className="mt-10">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center h-full">
            <img src={slide} alt="carousel" className="w-96 lg:w-[500px] lg:h-[500px] mx-auto my-auto" />
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default CarouselComponents;
