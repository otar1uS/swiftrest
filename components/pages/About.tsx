// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About | Agency Company</title>
      </Head>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We are a creative agency dedicated to delivering exceptional digital
            solutions.
          </p>
        </div>

        <div className="mt-12 md:mt-20">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="md:col-span-1">
              <div className="sm:flex">
                <div className="mb-8 sm:mb-0 sm:w-1/2 sm:pr-4">
                  <div className="w-20 h-20 bg-indigo-500 mx-auto rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Creativity
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We approach every project with a creative mindset, pushing
                    boundaries and delivering innovative solutions.
                  </p>
                </div>
                <div className="sm:w-1/2 sm:pl-4">
                  <div className="w-20 h-20 bg-indigo-500 mx-auto rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Communication
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We believe in transparent and effective communication to
                    ensure our clients are always informed and involved.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:col-span-1">
              <div className="sm:flex">
                <div className="mb-8 sm:mb-0 sm:w-1/2 sm:pr-4">
                  <div className="w-20 h-20 bg-indigo-500 mx-auto rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Expertise
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our team consists of skilled professionals with deep
                    expertise in various digital disciplines.
                  </p>
                </div>
                <div className="sm:w-1/2 sm:pl-4">
                  <div className="w-20 h-20 bg-indigo-500 mx-auto rounded-full flex items-center justify-center">
                    <svg
                      className="text-white w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    Collaboration
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    We collaborate closely with our clients to understand their
                    unique needs and deliver tailored solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            Our Team
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Our team is composed of talented individuals who are dedicated to
            delivering exceptional results.
          </p>
          <div className="mt-12 md:mt-16">
            {/* Team member cards go here */}
          </div>
        </div>
      </main>
    </div>
  );
}
