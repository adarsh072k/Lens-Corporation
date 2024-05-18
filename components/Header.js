import Navbar from "./Navbar";
import Head from "next/head";
import heroBackground from "../assets/herobg.png";

export default function Header() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <header className="h-screen flex flex-col ">
        <Navbar />
        <div
          className="flex-grow bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground.src})` }}
        >
          <div className="h-full flex flex-col justify-center">
            <div className="flex flex-col items-start justify-center w-1/2 mr-32 ml-72 z-20 ">
              <h1
                className="text-7xl font-normal mb-2.5 text-left z-20 h450:mt-32 h450:text-6xl w-3/4 "
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                We are at the forefront of AI
              </h1>
              <p
                className="mt-4 text-xl text-start font-normal mb-5 w-2/3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                From Conserving Wildlife to Automatically Generating Caricatures
                —<span className="font-bold"> We Do It All</span>
              </p>

              <button
                className="mt-6 bg-black text-white text-lg  py-2.5 px-8 my-2.5 cursor-pointer transition-all duration-300 border border-black rounded-lg hover:bg-white hover:text-black hover:border-black hover:px-9"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
