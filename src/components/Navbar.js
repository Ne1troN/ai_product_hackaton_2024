import React from "react";
import { Outlet, Link } from "react-router-dom";


export default function Navbar({activeTab}) {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:border-white dark:bg-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200 dark:border-gray-500">
          <Link to="/">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
              { /* Maybe insert logo of NLMK */}
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ИИ Агрегатор Новостей</span>
            </a>
          </Link>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 dark:border-gray-700">
              <li>
                <Link to="/">
                  <a href="#" class={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${activeTab === "/" ? "md:text-blue-700" : "text-white md:hover:text-blue-700"} md:p-0 dark:text-white ${activeTab === "/" ? "md:dark:text-blue-500" : "text-white md:hover:text-blue-500"}`} aria-current="page">
                    Свежие новости
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/archive">
                <a href="#" class={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${activeTab === "/archive" ? "md:text-blue-700" : "text-white md:hover:text-blue-700"} md:p-0 dark:text-white ${activeTab === "/archive" ? "md:dark:text-blue-500" : "text-white md:hover:text-blue-500"}`} aria-current="page">
                    Архив новостей
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  )
}