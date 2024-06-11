import React, { useState } from "react";

import NewsList from "./NewsList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";


export default function NewsSection({request_url}) {
  const [notFoundNews, setNotFoundNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [archiveNews, setArchiveNews] = useState([]);
  const [isError, setIsError] = useState(false);

  function handleClick() {
    setNotFoundNews(false);
    setIsLoading(true);
    setIsError(false);
    setArchiveNews([]);

    fetch(request_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArchiveNews(data);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        if (!isError && archiveNews.length === 0) {
          setNotFoundNews(true);
        } 
      });
  }


  return (
    <div class={`bg-white-300 dark:bg-gray-700 ${(archiveNews.length === 0) ? "h-screen" : ""}`}>

      { notFoundNews && !isError && (archiveNews.length === 0) && <ErrorMessage message={"Не удалось найти новости. Попробуйте позже"} /> }
      { isLoading && !isError && <LoadingSpinner /> }
      { !isLoading && isError && <ErrorMessage message={"Возникла ошибка, перезагрузите страницу или зайдите позже"}/> }
      { !isLoading && !isError && (archiveNews.length === 0) && 
        <div class="flex flex-col items-center mt-10">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fetchbutton" onClick={handleClick}>
            Сформировать дайджест
          </button>
        </div>
      }
      { !isLoading && !isError && <NewsList news={archiveNews} />}

    </div>
  )
}