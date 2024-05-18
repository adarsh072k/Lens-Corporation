import Image from "next/image";
import Head from "next/head";
import mapImg from "../assets/map.png";

export default function GetinTouch() {
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
      <section className="h-[630px] py-12">
        <div className="flex flex-col mx-auto text-center items-center">
          <div className="flex flex-row-reverse w-11/12 justify-between items-center p-8 lg:p-12 rounded-lg transition duration-300">
            <div className=" flex justify-center px-16 items-end  transition-all duration-300">
              <Image
                src={mapImg}
                alt="lens"
                className="w-[723px] h-[523px] object-cover  transition-all duration-300"
              />
            </div>
            <div className="flex flex-col items-start justify-center mb-20">
              <h3
                className="font-medium text-left text-7xl text-black mb-8 py-1 px-1 w-3/4"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Get in touch with us
              </h3>
              <p
                className=" text-xl text-left font-light mt-1 mb-10 opacity-80 py-1 px-1 w-3/4 leading-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Send your enquiry now!
              </p>

              <form
                className="bg-input w-4/5 rounded-[26.897px] flex p-[4.034px] pl-[20.172px] justify-between items-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <input
                  class="p-3 bg-input text-gray-950 w-4/5 border border-transparent rounded-l-md"
                  placeholder="Enter email address"
                  required=""
                  type="email"
                  name="email"
                />
                <button
                  class="px-4 py-2 text-base rounded-full bg-[#272e5c] text-white border-none w-[200px] cursor-pointer"
                  type="submit"
                >
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
