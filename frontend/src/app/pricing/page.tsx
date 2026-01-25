import SignUpButton from "@/components/SignUpButton";
import { webAppAddOns, webAppPricing } from "@/data/webAppPricing";
import { websiteAddOns, websitePricing } from "@/data/websitePricing";

export default function Pricing() {
  return (
    <div className="wds-container page">
      <h1>Pricing</h1>
      {/* Pricing */}
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* WEBSITES SECTION */}
        <div className="mb-20">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Website Packages
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Professional websites for your business
            </p>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
            {websitePricing.map((p, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col border-2 text-center rounded-xl p-8 ${p.isMostPopular ? "border-primary" : "border-gray-200 dark:border-neutral-800"}`}
                >
                  {p.isMostPopular && (
                    <p className="mb-3">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                        Most popular
                      </span>
                    </p>
                  )}
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    {p.name}
                  </h4>
                  <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                    <span className="font-bold text-2xl">$</span>
                    {p.price}
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    {p.ongoingPrice}
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    {p.features.map((f, idx) => {
                      return (
                        <li key={idx} className="flex gap-x-2">
                          <svg
                            className="shrink-0 mt-0.5 size-4 text-primary dark:text-blue-500"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-800 dark:text-neutral-400">{f}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <SignUpButton />
                </div>
              );
            })}
          </div>
          {/* End Grid */}

          {/* À La Carte for Websites */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Website Add-ons
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {websiteAddOns.map((ao, idx) => {
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800"
                  >
                    <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                      {ao.name}
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">{ao.description}</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">
                      ${ao.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* WEB APPS SECTION */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Web Application Packages
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Custom applications tailored to your workflows
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
            {webAppPricing.map((p, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col border-2 text-center shadow-xl rounded-xl p-8 ${p.isMostPopular ? "border-primary" : "border-gray-200 dark:border-neutral-800"}`}
                >
                  {p.isMostPopular && (
                    <p className="mb-3">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                        Most popular
                      </span>
                    </p>
                  )}
                  <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    {p.name}
                  </h4>
                  <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                    <span className="font-bold text-2xl">$</span>
                    {p.price}
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                    {p.ongoingPrice}
                  </p>

                  <ul className="mt-7 space-y-2.5 text-sm">
                    {p.features.map((f, idx) => {
                      return (
                        <li key={idx} className="flex gap-x-2">
                          <svg
                            className="shrink-0 mt-0.5 size-4 text-primary dark:text-blue-500"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-gray-800 dark:text-neutral-400">{f}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <SignUpButton />
                </div>
              );
            })}
          </div>

          {/* À La Carte for Web Apps */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">App Add-ons</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {webAppAddOns.map((ao, idx) => {
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800"
                  >
                    <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                      {ao.name}
                    </h5>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">{ao.description}</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">
                      ${ao.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
