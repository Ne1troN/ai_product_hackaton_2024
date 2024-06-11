import React from "react";


export default function ErrorMessage({message}) {
  return (
    <>
      <div class="text-center">
        <div role="status">
          <span class="sr-only">Error</span>
        </div>
        <p class="text-xl font-bold text-red-400 mt-3"><i>{ message }</i></p>
      </div>
    </>
  );
}