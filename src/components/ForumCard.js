import React from "react";

export default function ForumCard({ category, title, answers, answeredBy }) {
  return (
    <div class="w-full mb-16" key="id">
      <div class="text-lg text-blue-500 uppercase">{category}</div>

      <details>
        {/* <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How Long is this site live?
                </summary> */}
        <summary class="text-3xl font-bold text-blue-800 my-3 line-clamp-3">
          {title}
        </summary>

        <span>
          <div
            dangerouslySetInnerHTML={{ __html: answers }}
            class="leading-tight my-0 overflow-ellipsis "
          ></div>
        </span>
      </details>

      {/* <div
        dangerouslySetInnerHTML={{ __html: answers }}
        class="leading-tight my-0 overflow-ellipsis "
      ></div>
      <div class="text-lg text-blue-800 leading-tight mt-2 flex items-center">
        <div>
          <span>12 </span> • <span>By {answeredBy}</span>
        </div>
      </div> */}
    </div>
  );
}
