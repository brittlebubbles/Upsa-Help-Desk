import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ForumCard from "../components/ForumCard";
import NavBar from "../components/NavBar";
import dummyJson from "../data/dummyJson.json";

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState("");

  const { id } = useParams();
  return (
    <div>
      <NavBar />
      <div class="h-without-header w-full z-0">
        <div class="bg-blue-500 flex flex-col items-center text-center justify-end h-3/4">
          <div class="w-full">
            <h1 class="text-6xl text-white font-bold leading-none mb-4">
              Answers
            </h1>
            <p class="text-2xl font-medium text-white leading-tight tracking-wide justify-center align-center">
              Search and Find over 100 answers
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
                placeholder="Search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div class="h-1/4 bg-white w-full flex justify-center">
          <div class="h-full flex items-center justify-between w-4/5">
            <div class="text-xl text-blue-800 font-medium">Answers</div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="h-1/4 bg-white w-full border-b flex justify-center">
          <div class="h-full flex flex-col justify-between w-4/5">
            {dummyJson
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.tags.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data, key) => {
                return (
                  <div key={key}>
                    <ForumCard
                      key={key}
                      id={id}
                      category={data.category}
                      title={data.title}
                      answers={data.answers}
                      createdAt={data.createdAt}
                      answeredBy={data.answeredBy}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
