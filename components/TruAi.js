import Image from "next/image";
import Head from "next/head";
import trueAI from "../assets/vectorAi.png";
import dash from "../assets/underline.27e9f7f7.svg";

export default function TruAi() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <div className="flex justify-center items-center w-full bg-[#fcfbf7]">
        <section
          className="flex justify-between items-center mt-24 relative bg-blue-950 w-full h-[550px] z-10"
          style={{ clipPath: "polygon(0 22.5%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="w-[33%] mt-16 z-20">
            <Image
              className="ml-20"
              src={trueAI}
              alt="lens"
              width={333}
              height={329}
            ></Image>
          </div>

          <div className="w-1/3 flex flex-col items-center justify-center mt-16">
            <div
              className="flex justify-center items-center text-white text-7xl font-medium capitalize gap-[25px] mb-20"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Meet
              <div class="relative">
                <div className="flex">
                  <span
                    className="text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 bg-clip-text bg-size-200%"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      animation: "animate-gradient-pan 2s linear infinite",
                      "@keyframes animate-gradient-pan": {
                        "0%": { backgroundPosition: "0" },
                        to: { backgroundPosition: "-200%" },
                      },
                    }}
                  >
                    Tru-AI
                  </span>
                </div>
                <Image
                  src={dash}
                  width={200}
                  height={24}
                  className="absolute"
                ></Image>
              </div>
            </div>
            <div
              className="text-white text-4xl font-medium leading-normal mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Design. Create. Deploy.
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="border-b-2 border-gray-300 w-10 h-2.5 "></div>
              <div className="flex">
                <span
                  className="inline-block mb-3 font-medium text-2xl text-transparent bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 bg-clip-text"
                  style={{
                    backgroundSize: "200%",
                    fontFamily: "Poppins, sans-serif",
                    animation: "animate-gradient-pan 2s linear infinite",
                  }}
                >
                  the Future of AI | Power to EDIT
                </span>
              </div>
            </div>
            <div
              className="text-white text-center mb-4 text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Based On Your Website &amp; Traffic Trends, Tru-AI Optimises Your
              Website
            </div>
            <a target="_blank" href="https://makemyweb.ai/">
              <button className="px-4 py-2 rounded-lg border border-white bg-transparent text-white text-lg mt-4 flex items-center justify-center gap-4 transition duration-300 hover:text-black hover:bg-white">
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  Learn More
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="hidden transition duration-300 iconify iconify--octicon"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"
                  ></path>
                </svg>
              </button>
            </a>
          </div>

          <div className="flex justify-end w-[33%]">
            <video
              autoplay=""
              loop=""
              className="rounded-l-full rounded-r-none w-90"
            >
              <source
                src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </section>
      </div>
    </>
  );
}
