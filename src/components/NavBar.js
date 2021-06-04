import React from "react";

export default function NavBar() {
  return (
    <nav
      id="header"
      class="fixed w-full z-10 pin-t bg-white border-b border-grey-light"
    >
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div class="pl-4 flex items-center">
          <svg
            class="h-5 pr-3 fill-current text-purple"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
          </svg>
          <a
            class="text-black text-base no-underline hover:no-underline font-extrabold text-xl"
            href="/"
          >
            UPSA Help Desk
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20"
          id="nav-content"
        >
          <div class="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0"></div>
          <ul class="list-reset lg:flex justify-end items-center">
            <li class="mr-3 py-2 lg:py-0">
              <a
                class="inline-block py-2 px-4 text-black font-bold no-underline"
                href="/forum"
              >
                Answers
              </a>
            </li>
            <li class="mr-3 py-2 lg:py-0">
              <a
                class="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                href="/faq"
              >
                FAQ
              </a>
            </li>
            <li class="mr-3 py-2 lg:py-0">
              <a
                class="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
