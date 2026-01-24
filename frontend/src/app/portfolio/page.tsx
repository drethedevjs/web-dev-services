import websites from "@/data/websites";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="wds-container page">
      <h1>Portfolio</h1>
      <p className="text-center lg:px-20 px-0">
        Here's a curated look at projects I've designed and built—each one highlighting thoughtful
        engineering, clean design, and real-world problem-solving.
      </p>

      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websites.map((w, idx) => {
            return (
              <div
                key={idx}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl">
                  <Image
                    src={w.imgSrc}
                    className=" w-full"
                    width={w.width}
                    height={w.height}
                    alt=""
                  />
                </div>
                <div className="p-4 md:p-6">
                  <span className="block mb-1 text-xs font-semibold uppercase text-secondary">
                    {w.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {w.name}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">{w.description}</p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                  <Link
                    href={w.link}
                    target="_blank"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    View Site
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
