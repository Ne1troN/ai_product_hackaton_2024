import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";


const ARCHIVE_URL = "http://127.0.0.1:8080/api/v1/archive_news";


export default function ArchiveNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/archive"} />
      <NewsSection request_url={ARCHIVE_URL} />
      <Footer />
    </div>
  )
}