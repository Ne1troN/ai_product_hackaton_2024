import React from "react";

import NewsCard from '../components/NewsCard'


export default function NewsList({news}) {
  return (
    <>
      {
        news.map(
          (item) => {
            <NewsCard
              source={item.source}
              sourceLink={item.sourceLink}
              title={item.title}
              summary={item.summary}
              datetime={item.datetime}
            />
          }
        )
      }
    </>
  )
}