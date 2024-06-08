import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArchiveNewsSection from "../components/ArchiveNewsSection";


export default function ArchiveNewsScreen() {
  return (
    <>
      <Navbar activeTab={"/archive"} />
      <ArchiveNewsSection />
      <Footer />
    </>
  )
}