import React from "react";
import NavigasiBar from "@components/Navbar";
import CarouselComponents from "@components/Carousel";
import Product from "@sections/Product";

function Home() {
  return (
    <div className="font-google-sans bg-[#F6D6D6] h-screen">
      <NavigasiBar />
      <CarouselComponents />
      <Product />
    </div>
  );
}

export default Home;
