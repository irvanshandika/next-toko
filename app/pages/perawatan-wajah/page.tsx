import React from "react";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import PerawatanWajah from "@pages/3OSPuWszcnieAuPuPvw1Tg==";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perawatan Wajah",
};

function page() {
  return (
    <>
      <Navbar />
      <PerawatanWajah />
      <Footer />
    </>
  );
}

export default page;
