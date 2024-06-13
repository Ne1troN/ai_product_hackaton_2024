import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";


const ARCHIVE_URL = "http://127.0.0.1:8080/api/v1/archive_news";
const PDF_ARCHIVE_URL = "http://127.0.0.1:8080/api/v1/pdf_archive"

export default function ArchiveNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/archive"} />
      <NewsSection news_request_url={ARCHIVE_URL} pdf_request_url={PDF_ARCHIVE_URL} />
      <Footer />
    </div>
  )
}