import React from "react";

const HowItIs = () => {
  return (
    <div>
      <div class="mx-auto mt-6">
        <div class="divide-y divide-gray-100 space-y-2">
          <details class="group bg-base-200 p-3 rounded-lg" data-aos="fade-up"
          data-aos-duration="1500" open>
            <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
            Donate in a Few Simple Steps
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div class="pb-4 text-secondary-500">
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <h3 className="font-semibold text-lg text-gray-600">
                  Step 1: Sign Up or Log In
                </h3>
                <p className="text-gray-700">
                  Create an account or log in to access all features.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-lg text-gray-600">
                  Step 2: Browse Campaigns
                </h3>
                <p className="text-gray-700">
                  Explore ongoing donation campaigns and choose the one you want
                  to support.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-lg text-gray-600">
                  Step 3: Donate
                </h3>
                <p className="text-gray-700">
                  Fill out the donation form with the required details and
                  submit your contribution, either as clothing or monetary
                  support.
                </p>
              </li>
            </ul>
            </div>
          </details>
          <details class="group bg-base-200 p-3 rounded-lg" data-aos="fade-up"
          data-aos-duration="2000">
            <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
            Collection Points
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div class="pb-4 text-secondary-500">
            <p className="text-gray-600">
              You can drop off your donations at any of our collection points.
              We have strategically placed collection centers in major cities
              for your convenience.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">Dhaka:</span> Gulshan, Dhanmondi
              </li>
              <li>
                <span className="font-semibold">Chattogram:</span> Agrabad,
                Halishahar
              </li>
              <li>
                <span className="font-semibold">Rajshahi:</span> Shaheb Bazar
              </li>
              <li>
                <span className="font-semibold">Khulna:</span> Shibbari Mor
              </li>
              <li>
                <span className="font-semibold">Sylhet:</span> Zindabazar
              </li>
              <li>
                <span className="font-semibold">Barishal:</span> Band Road
              </li>
              <li>
                <span className="font-semibold">Rangpur:</span> Park Mor
              </li>
            </ul>
            </div>
          </details>
          <details class="group bg-base-200 p-3 rounded-lg" data-aos="fade-up"
          data-aos-duration="2500">
            <summary class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
            Supported Divisions
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="block h-5 w-5 group-open:hidden"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hidden h-5 w-5 group-open:block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </div>
            </summary>
            <div class="pb-4 text-secondary-500">
            <p className="text-gray-600">
              Our initiative currently supports the following divisions in
              Bangladesh:
            </p>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Dhaka
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Chattogram
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Rajshahi
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Khulna
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Sylhet
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Barishal
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Rangpur
              </li>
              <li className="flex items-center">
                <span className="text-sky-500 text-xl mr-2">✔️</span>
                Mymensingh
              </li>
            </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default HowItIs;
