import React from "react";


export default function NewsCard({source, sourceLink, title, summary, datetime}) {
  return (
    <div class="max-w-screen-md bg-white-200 shadow-xl dark:bg-gray-700 mb-12 newscard">
      <div class="py-4 text-center text-base font-medium text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:bg-gray-800">
        Источник: { source }
      </div>
      <div class="p-4 bg-white md:p-8 dark:bg-gray-800">
        <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          { title }
        </h2>
        <p class="mb-3 text-lg font-medium text-gray-500 dark:text-gray-400">
          { summary }
        </p>
        <a href={ sourceLink } target="_blank" rel="noopener noreferrer" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
          Оригинал новости
          <svg class="w-2.5 h-2.5 mt-0.5 ms-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
        </div>
        <div class="py-4 text-center text-base font-medium text-gray-500 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
          { datetime }
        </div>
    </div>
  )
}