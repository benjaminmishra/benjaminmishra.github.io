import React from "react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white font-mono">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            {/* Added padding-y (py-12) for more vertical spacing */}
            <div className="sm:text-center lg:text-left py-12">
              {/* Adjusted font-weight to semibold and slightly increased bottom margin */}
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4">
                <span className="block xl:inline">Hello,</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  my name is Benjamin
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                I am a software engineer with over a decade of experience in the
                industry. {/* Adjusted top margin */}

              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
