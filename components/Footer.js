import Head from "next/head";
export default function Footer() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <footer className="bg-blue-950 flex items-center justify-center w-full text-base tracking-wide text-white py-7">
        <div className="flex w-85 justify-between items-center py-10 mx-auto text-center">
          <span
            className="text-slate-500"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            2023
            <span className="text-white"> LENS, Inc. </span>
            All rights reserved.
          </span>
          <div
            className="flex justify-center space-x-8 items-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <a href="#" className="hover:text-gray-400">
              Code of conduct
            </a>
            <a href="#" className="hover:text-gray-400">
              Sustainability Goals
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
