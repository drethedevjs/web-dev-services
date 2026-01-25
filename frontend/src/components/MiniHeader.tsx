import { headerLinks } from "@/data/headerLinks";
import Link from "next/link";

export default function MiniHeader() {
  return (
    <header className="sticky top-4 z-50 w-full flex justify-center px-4">
      <div className="relative max-w-5xl w-full before:absolute before:inset-0 before:rounded-4xl before:border before:border-gray-200 dark:before:border-neutral-700 after:absolute after:inset-0 after:-z-10 after:rounded-4xl after:bg-white dark:after:bg-secondary">
        <nav className="relative flex flex-wrap md:flex-nowrap md:items-center md:justify-between md:gap-3 px-5 py-2">
          {/* Logo w/ Collapse Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              className="flex-none font-semibold text-2xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
              href="/"
              aria-label="Brand"
            >
              Honeystack
            </Link>

            {/* Collapse Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-header-classic-collapse"
                aria-expanded="false"
                aria-controls="hs-header-classic"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-classic"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
            {/* End Collapse Button */}
          </div>
          {/* End Logo w/ Collapse Button */}

          {/* Collapse */}
          <div
            id="hs-header-classic"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:basis-auto"
            aria-labelledby="hs-header-classic-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                {headerLinks.map((link, idx) =>
                  link.active ? (
                    <Link
                      key={idx}
                      className="p-2 flex items-center text-xl text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-white dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </div>
    </header>
  );
}
