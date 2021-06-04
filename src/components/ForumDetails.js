import React from "react";
// import { useParams } from "react-router-dom";

export default function ForumDetails({ id, category, title, answers }) {
  return (
    <div key={id}>
      <div class="h-without-header w-full z-0">
        <div class="bg-blue-500 flex flex-col items-center text-center justify-end h-3/4">
          <div class="w-1/3">
            <h1 class="text-6xl text-white font-bold leading-none mb-4">
              Answers
            </h1>
            <p class="text-2xl text-white leading-tight tracking-wide text-center justify-center">
              Search and Find answers to questions submitted daily.
            </p>
          </div>
          <div class="w-4/5 mt-4 mb-8">
            <div class="relative">
              <svg
                class="absolute top-0 mt-6 ml-6 w-8 h-8 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                class="text-3xl placeholder-gray-600 text-gray-800 pb-4 pt-5 pl-20 pr-4 rounded w-full border-b-4 focus:outline-none focus:border-blue-800"
                type="text"
                placeholder="Search for answers"
              />
            </div>
          </div>
        </div>
        <div class="h-1/4 bg-white w-full flex justify-center">
          <div class="h-full flex items-center justify-between w-4/5">
            <div class="text-xl text-blue-800 font-medium">302 Answers</div>
          </div>
        </div>
      </div>

      {/* <div class="w-full mb-16">
        <div class="text-lg text-blue-500 uppercase">{category}</div>
        <div class="text-3xl font-bold text-blue-800 my-3">{title}</div>
        <div class="text-xl text-blue-800 leading-tight my-1">{answers}</div> */}
      {/* <div class="text-lg text-blue-800 leading-tight mt-2 flex items-center">
          <div>
            <span>{createdAt} </span> • <span>By {answeredBy}</span>
          </div>
        </div> */}
      {/* </div> */}
      <section class="text-gray-900 body-font">
        <div class="container px-5 py-12 mx-auto">
          <div class="block lg:flex lg:space-x-2  sm:px-4 px-2 py-12 mb-10">
            <div class="w-full lg:w-7/6">
              <a class="block rounded w-full lg:flex mb-10" href=".">
                {/* <div
                  class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={{
                    backgroundImage: 'url("https://dummyimage.com/720x400/")',
                  }}
                ></div> */}
                <div class="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                      hendrerit.
                    </div>
                  </div>
                  <div class="flex mt-3">
                    <img
                      alt=""
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize">
                        {" "}
                        eduard franz{" "}
                      </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </a>

              <a class="block rounded w-full lg:flex mb-10" href=".">
                <div
                  class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={{
                    backgroundImage: 'url("https://dummyimage.com/720x400/")',
                  }}
                ></div>
                <div class="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                      hendrerit.
                    </div>
                  </div>
                  <div class="flex mt-3">
                    <img
                      alt=""
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize">
                        {" "}
                        eduard franz{" "}
                      </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="block rounded w-full lg:flex mb-10" href=".">
                <div
                  class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={{
                    backgroundImage: 'url("https://dummyimage.com/720x400/")',
                  }}
                ></div>
                <div class="bg-white rounded px-4 py-4 flex flex-col justify-between leading-normal shadow">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-3xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                      hendrerit.
                    </div>
                  </div>
                  <div class="flex mt-3">
                    <img
                      alt=""
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize">
                        {" "}
                        eduard franz{" "}
                      </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
