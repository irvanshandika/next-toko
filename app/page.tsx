import React from "react";
import NavigasiBar from "@components/Navbar";
import CarouselComponents from "@components/Carousel";
import "flowbite";

function Home() {
  return (
    <div className="font-google-sans">
      <NavigasiBar />
      <CarouselComponents />
    </div>
  );
}

export default Home;
