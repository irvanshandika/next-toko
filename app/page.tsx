import React from "react";
import NavigasiBar from "@components/Navbar";
import CarouselComponents from "@components/Carousel";
import Product from "@sections/Product";

function Home() {
  return (
    <div>
      <NavigasiBar />
      <CarouselComponents />
      <Product />
    </div>
  );
}

export default Home;
