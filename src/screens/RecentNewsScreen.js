import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";


const RECENT_URL = "http://127.0.0.1:8080/api/v1/recent_news";


export default function RecentNewsScreen() {
  return (
    <div class="bg-white-200 dark:bg-gray-700">
      <Navbar activeTab={"/"} />
      <NewsSection request_url={RECENT_URL} />
      <Footer />
    </div>
  )
}