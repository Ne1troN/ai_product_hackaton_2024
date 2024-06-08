import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FreshNewsSection from "../components/FreshNewsSection";


export default function FreshNewsScreen() {
  return (
    <>
      <Navbar activeTab={"/"} />
      <FreshNewsSection />
      <Footer />
    </>
  )
}