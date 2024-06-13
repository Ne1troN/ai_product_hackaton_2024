import React, { useState } from "react";

import NewsList from "./NewsList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import html2pdf from "html2pdf.js";


export default function NewsSection({news_request_url, pdf_request_url}) {
  const [notFoundNews, setNotFoundNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [archiveNews, setArchiveNews] = useState([]);
  const [isError, setIsError] = useState(false);

  function handlePDFFetchClick() {
    fetch(pdf_request_url)
      .then(response => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onload = function() {
          const htmlString = reader.result;
          
          const tempElement = document.createElement('div');
          tempElement.innerHTML = htmlString;
          
          const opt = {
            margin:       1,
            filename:     'news_digest.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
            enableLinks: true
          };

          html2pdf().from(tempElement).set(opt).save();
          tempElement.remove();
        }
        reader.readAsText(blob);
      })
      .catch(
        (err) => {
          console.error(err);
          alert('Возникла ошибка. Попробуйте позже');
        }
      );
  }

  function handleFetchNewsClick() {
    setNotFoundNews(false);
    setIsLoading(true);
    setIsError(false);
    setArchiveNews([]);

    fetch(news_request_url)
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
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fetchbutton" onClick={handleFetchNewsClick}>
            Сформировать дайджест
          </button>
        </div>
      }
      { !isLoading && !isError && (archiveNews.length > 0) &&
        <>
          <div class="flex flex-col items-center mt-10 mb-10">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fetchbutton" onClick={handlePDFFetchClick}>
              Сформировать PDF файл дайджеста
            </button>
          </div>
          <NewsList news={archiveNews} />
        </>
      }
    </div>
  )
}