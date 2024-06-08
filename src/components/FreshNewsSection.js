import React, { useState } from "react";

import NewsList from "./NewsList";
import LoadingSpinner from './LoadingSpinner';


export default function TopNewsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [topNews, setTopNews] = useState([]);

  return (
    <div class="bg-white-300 dark:bg-gray-700 h-screen">
      { isLoading && <LoadingSpinner /> }
      { !isLoading && <NewsList news={topNews} />}
    </div>
  )
}