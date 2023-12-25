import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import PaketKecantikan from "@pages/kBOBE4fKBTBwIhWEsNspNfGyPi6NVc=";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paket Kecantikan",
};

function page() {
  return (
    <>
      <Navbar />
      <PaketKecantikan />
      <Footer />
    </>
  );
}

export default page;
