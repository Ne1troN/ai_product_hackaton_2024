import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArchiveNewsSection from "../components/ArchiveNewsSection";


export default function ArchiveNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/archive"} />
      <ArchiveNewsSection />
      <Footer />
    </div>
  )
}