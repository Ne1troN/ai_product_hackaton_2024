import React from "react";

import NewsCard from '../components/NewsCard'


export default function NewsList({news}) {
  return (
    <div class="mx-3 md:mx-6 lg:mx-10 newslist mt-5">
      {
        news.map(
          (item) => {
            return (
              <NewsCard 
                source={item.source}
                sourceLink={item.sourceLink}
                title={item.title}
                summary={item.summary}
                datetime={item.datetime}
              />
            )
          }
        )
      }
    </div>
  )
}