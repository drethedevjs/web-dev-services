import websites from "@/data/websites";
import { Card } from "flowbite-react";

const Portfolio = () => {
  return (
    <div className="wds-container page">
      <h1>Portfolio</h1>
      <p className="text-center lg:px-20 px-0">
        Here's a curated look at projects I've designed and built—each one highlighting thoughtful
        engineering, clean design, and real-world problem-solving.
      </p>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-4 mb-5">
        {websites.map((w, idx) => {
          return (
            <Card key={idx} className="max-w-sm" imgAlt="" imgSrc={w.imgSrc}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {w.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{w.description}</p>
              <a
                href={w.link}
                target="_blank"
                className="mt-auto bg-secondary py-3 place-items-center rounded-md text-white text-center hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary transition-colors font-bold"
              >
                View
              </a>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
