import Image from "next/image";
import Head from "next/head";
import aboutImg from "../assets/aboutLatest.png";

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        />
      </Head>
      <section className="h-screen py-12 transition-transform duration-300">
        <div className="container mx-auto text-center space-x-40">
          <div className="flex flex-col items-center gap-1 mb-20">
            <h2
              className="text-black text-center text-6xl font-medium mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              About Us
            </h2>
            <div className="w-40 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
          </div>
          <div className="flex flex-row-reverse w-4/5 justify-between items-center hover:scale-105  bg-customBlue p-8 lg:p-12 rounded-lg transition duration-300">
            <div className=" flex items-center justify-center bg-white p-3 transition-all duration-300 border rounded-lg">
              <Image
                src={aboutImg}
                alt="lens"
                className="w-[500] h-96 object-cover border rounded-lg transition-all duration-300 "
              />
            </div>
            <div className="flex flex-col items-start justify-center mb-20">
              <h3
                className="font-medium text-5xl text-black mb-8 py-1 px-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Welcome To LENS
              </h3>
              <p
                className=" text-xl text-left font-light mt-1 opacity-80 py-1 px-1 w-3/4 leading-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We put our hearts, souls and sweat into designing and developing
                custom AI - powered solutions for your business so you don't
                have to.
              </p>

              <button
                className="mt-6 bg-customBlue text-black text-lg  py-2.5 px-8 my-2.5 cursor-pointer transition-all duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:border-black hover:px-9"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
