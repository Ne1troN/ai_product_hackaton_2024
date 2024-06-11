import React from "react";

import NewsCard from '../components/NewsCard'


function formatDate(date) {
  const splitted = date.split('T');
  const datesplit = splitted[0].split('-');
  const year = datesplit[0];
  const month = datesplit[1];
  const day = datesplit[2];

  return `${day}/${month}/${year} ${splitted[1]}`
}

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
                datetime={formatDate(item.timestamp)}
              />
            )
          }
        )
      }
    </div>
  )
}