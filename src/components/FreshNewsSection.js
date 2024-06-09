import React, { useState } from "react";

import NewsList from "./NewsList";
import LoadingSpinner from './LoadingSpinner';
import NewsCard from "./NewsCard";


export default function TopNewsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [topNews, setTopNews] = useState(
    [
      {
        source: "trust me bro",
        sourceLink: "https://youtube.com",
        title: "hello world",
        summary: "noway",
        datetime: "000000"
      },
      {
        source: "trust me bro2",
        sourceLink: "https://youtube.com",
        title: "hello world2",
        summary: "noway2",
        datetime: "000001"
      },
    ]
  );

  return (
    <div class="bg-white-300 dark:bg-gray-700 h-screen">
      { isLoading && <LoadingSpinner /> }
      { !isLoading && <NewsList news={topNews} />}
    </div>
  )
}