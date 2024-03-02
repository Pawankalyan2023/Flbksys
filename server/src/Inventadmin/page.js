"use client";

import FooterComponent from "../Components/Footerr";
import NavbarComponent from "../Components/Navbarr";
import img1 from "../../img/clothes/1.jpg";
import img2 from "../../img/clothes/2.jpg";
import img3 from "../../img/clothes/3.jpg";
import w1 from "../../img/watches/1.jpg";
import w2 from "../../img/watches/2.jpg";
import w3 from "../../img/watches/3.jpg";
import w4 from "../../img/watches/4.jpg";
import CardComp from "./Card";
import { useRouter } from "next/navigation";

export default function inventmain() {
  const router = useRouter();

  const imagesofall = [img1, img2, img3, img1, img2, img3, img1, img2];
  const watchimg = [w1, w2, w3, w4];

  const numberOfColumns = 4;

  const handleshift = () => {
    router.push("../Add/");
  };

  return (
    <div>
      <NavbarComponent />
      <h1 className="text-center text-4xl mb-5 font-bold">Inventory</h1>
      <div className="flex flex-row justify-around">
        <h1 className=" ml-7 text-3xl mb-5 font-semibold">Clothings</h1>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleshift}
        >
          Add New Product
        </button>
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        {imagesofall.map((img, index) => (
          <CardComp key={index} img={img} />
        ))}
      </div>
      <h1 className="ml-7 text-3xl mb-5 font-semibold my-10">Watches</h1>
      <div>
        {watchimg.map((img, index) => (
          <CardComp key={index} img={img} />
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
