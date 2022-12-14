import React from "react";

function Header() {
  return (
    <div className="mx-auto flex justify-between px-24 py-5 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl text-black capitalize underline decoration-4 font-black">
          Cloudo
        </h1>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
          <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
        </svg>
      </div>
      <div className="flex justify-evenly items-center">
        <h5>UserName</h5>
        <p>Img</p>
      </div>
    </div>
  );
}

export default Header;
