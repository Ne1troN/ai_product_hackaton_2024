import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";


const RECENT_URL = "http://127.0.0.1:8080/api/v1/recent_news";
const PDF_RECENT_URL = "http://127.0.0.1:8080/api/v1/pdf_recent"

export default function RecentNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/"} />
      <NewsSection news_request_url={RECENT_URL} pdf_request_url={PDF_RECENT_URL} />
      <Footer />
    </div>
  )
}