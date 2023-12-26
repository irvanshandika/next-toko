import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Parfum from "@pages/VujuEj8UIW7pIjj1zEHv3Q==";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parfum",
};

function page() {
  return (
    <>
      <Navbar />
      <Parfum />
      <Footer />
    </>
  );
}

export default page;
