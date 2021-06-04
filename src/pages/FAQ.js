import React from "react";
import NavBar from "../components/NavBar";
import faqdata from "../data/faq.json";

export default function FAQ() {
  return (
    <>
      <NavBar />
      <div class=" pt-20 ">
        <div class="mx-auto max-w-6xl">
          <div class="p-2 rounded">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/3 p-4 text-sm">
                <div class="text-3xl">
                  Frequently asked <span class="font-medium">Questions</span>
                </div>
                <div class="my-2">Wondering how our service works ?</div>
                <div class="mb-2">
                  Confused about how we can improve your business ?
                </div>
                <div class="text-xs text-gray-600">
                  Dive into our FAQ for more details
                </div>
              </div>
              <div class="md:w-2/3">
                <div class="p-4">
                  {faqdata.map((data, key) => {
                    return (
                      <div class="mb-2" key={key}>
                        <details class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                          <div
                            dangerouslySetInnerHTML={{ __html: data.answers }}
                            class="leading-tight my-0 overflow-ellipsis "
                          />
                          <summary class="text-3xl font-bold text my-3 line-clamp-3">
                            <div class="flex-auto">{data.title}</div>
                          </summary>
                        </details>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
