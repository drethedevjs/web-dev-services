export default function Pricing() {
  return (
    <div className="wds-container page">
      <h1>Pricing</h1>
      {/* Pricing */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
            {/* Starter Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Starter</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                499
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $15/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">5-10 pages</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Responsive design</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Contact form</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Built-in SEO</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">3 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">1 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}

            {/* Growth Card */}
            <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Growth</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                999
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $20/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Up to 20 pages</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Custom design</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Blog functionality</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Advanced SEO</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">5 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">2 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}

            {/* Premium Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Premium</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                1,799
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $25/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Unlimited pages</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">E-commerce ready</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">
                    Newsletter integration
                  </span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Analytics setup</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">10 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">3 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}

          {/* À La Carte for Websites */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Website Add-ons
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Payment Processing
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Stripe/Square setup</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$150</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Social Media Integration
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Connect all platforms</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$100</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Extra Revisions
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Per revision round</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$75</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Monthly Maintenance
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">4 hours per month</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">
                  $200/mo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WEB APPS SECTION */}
        <div>
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Web App Packages
            </h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Custom applications tailored to your workflows
            </p>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
            {/* Starter Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Starter</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                1,499
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $15/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Simple database</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Basic user accounts</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Core functionality</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">3 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">1 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}

            {/* Growth Card */}
            <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Growth</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                2,999
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $20/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Advanced database</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Role-based access</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">
                    Single API integration
                  </span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">5 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">2 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}

            {/* Enterprise Card */}
            <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Enterprise
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-neutral-200">
                <span className="font-bold text-2xl -me-2">$</span>
                5,999
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Upfront + $30/mo hosting
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Complex database</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Advanced permissions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">Multiple integrations</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">10 revisions</span>
                </li>
                <li className="flex gap-x-2">
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
                  <span className="text-gray-800 dark:text-neutral-400">3 month timeline</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Sign up
              </a>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}

          {/* À La Carte for Web Apps */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">App Add-ons</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Additional Integration
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  API or third-party service
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$300</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Extra Revisions
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Per revision round</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$150</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Data Migration
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">From legacy system</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">$500</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 dark:border-neutral-800">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-200 mb-2">
                  Monthly Support
                </h5>
                <p className="text-sm text-gray-500 dark:text-neutral-400">8 hours per month</p>
                <p className="text-lg font-bold text-gray-800 dark:text-neutral-200 mt-3">
                  $400/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
