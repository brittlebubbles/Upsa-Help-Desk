/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [error, setError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();

  return (
    <nav
      id="header"
      class="fixed w-full z-10 pin-t bg-white border-b border-grey-light"
    >
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            {/* <span class="ml-2 text-xl font-bold tracking-wide uppercase font-black leading-none text-gray-900">
            jobIt
          </span> */}
            <div class="text-black font-black text-2xl flex items-center">
              <svg
                class="h-5 pr-3 fill-current text-purple"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
              </svg>
              <span>UPSA Help Desk</span>
            </div>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/forum"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Answers
              </a>
            </li>
            <li>
              <a
                href="/faq"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact us
              </a>
            </li>
          </ul>
          {/* <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <button>
              <a
                href="/"
                class="inline-flex items-center text-grey-800 text-black justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                Logout
              </a>
            </button>
          </li>
        </ul> */}
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="h-5 pr-3 fill-current text-purple"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
                        </svg>
                        {/* <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        jobIt
                      </span> */}
                        <span>UPSA Help Desk</span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Home"
                          title="Home"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/forum"
                          aria-label="Answers"
                          title="Answers"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Answers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
