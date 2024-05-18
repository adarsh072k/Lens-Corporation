import React from "react";
import Head from "next/head";

export default function Numbers() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <footer
        className="bg-blue-950 flex flex-col items-center justify-center w-full text-xl tracking-wide text-white py-20"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h2 className="text-4xl mb-16">By the numbers</h2>
        <div className="flex justify-around w-full max-w-6xl">
          <div className="flex flex-col items-center">
            <span className="text-4xl text-center">
              15
              <span className="text-blue-500">+</span>
            </span>
            <p className="w-3/4 text-center mt-2">
              Solutions for Global crises
            </p>
          </div>

          <div className="w-1 h-116 bg-gradient-to-r from-white via-transparent to-transparent"></div>

          <div className="flex flex-col items-center">
            <span className="text-4xl text-center">
              10
              <span className="text-blue-500">+</span>
            </span>
            <p className="w-3/4 text-center mt-2">University Collaborations</p>
          </div>

          <div className="w-1 h-116 bg-gradient-to-r from-white via-transparent to-transparent"></div>

          <div className="flex flex-col items-center">
            <span className="text-4xl text-center">
              25
              <span className="text-blue-500">+</span>
            </span>
            <p className="w-3/4 text-center mt-2">Employees Worldwide</p>
          </div>
        </div>
      </footer>
    </>
  );
}
