import React from "react";
import NavigasiBar from "@components/Navbar";
import Footer from "@components/Footer";
import HomeSection from "@sections/HomeSection";
import ContactSection from "@sections/ContactSection";

function Home() {
  return (
    <>
      <NavigasiBar />
      <HomeSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
