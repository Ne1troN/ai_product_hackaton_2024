import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FreshNewsSection from "../components/FreshNewsSection";


export default function FreshNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/"} />
      <FreshNewsSection />
      <Footer />
    </div>
  )
}