import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="place-content-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-center before:size-full before:-z-1 before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <Link
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="/portfolio"
          >
            See Our Work
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                Explore
              </span>
              <svg
                className="shrink-0 size-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="max-w-3xl text-center mx-auto">
          <ComputerDesktopIcon
            className="size-1/2 place-self-center text-secondary dark:text-gray-200"
            color="black"
            fontSize={16}
          />
          <h1 className="hidden">Honeystack Web Development Services</h1>
          <div className="block font-bold text-gray-800  dark:text-neutral-200">
            <p className="md:text-8xl text-3xl  font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
              Honeystack
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">
              Web Development Services
            </p>
          </div>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <h2 className="text-2xl text-gray-600 dark:text-neutral-400">
            Building Custom Websites and Web Applications for Small Businesses
          </h2>
        </div>

        <div className="mt-8 mb-4 gap-3 flex justify-center">
          <Link
            className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-primary to-secondary hover:from-secondary hover:to-primary focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 transition-colors"
            href="#"
          >
            View Our Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
