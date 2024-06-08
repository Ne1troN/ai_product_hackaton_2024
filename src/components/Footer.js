import React from "react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="text-center fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
      <span class="text-sm text-gray-500 text-center dark:text-gray-400">
        © { currentYear } <a href="#" class="hover:underline">Truecoders™</a>. Все права сохранены.
      </span>
    </footer>
  )
}