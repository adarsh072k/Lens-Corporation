import Head from "next/head";
import Image from "next/image";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import yellow from "../assets/yellow.png";

export default function WhyChooseLens() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>

      <div className="grid place-items-center py-28 bg-[#fcfbf7] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-2 mb-24">
          <h2
            className="text-black text-center text-3xl font-medium "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            WHY CHOOSE LENS
          </h2>
          <div className="w-[75px] h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
        </div>
        <p className="w-[55%] text-black text-center text-6xl font-medium leading-normal mb-6">
          AI-driven solutions backed by science
        </p>
        <p
          className="text-gray-600 text-center text-xl leading-7 max-w-[68%] mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>
        <div
          className="flex flex-row gap-[1rem]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              State-of-the-art solutions
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              Fast &amp; Efficient
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              No extra computation fee
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              No licensing fee
            </div>
          </div>
          <div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              Lifetime support &amp; upgrades
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              Plug-and-Play
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              24x7 Progress Monitoring
            </div>
            <div className="text-black font-normal text-xl flex items-center gap-1 tracking-wide px-4 py-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="text-4xl flex-shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
              </svg>
              Incremental Updates
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap my-24">
          <div className="relative">
            <div className="w-[250px] h-[200px] flex-shrink-0 rounded-[172px] bg-[#01c99b] absolute top-[-40px] left-[-40px] blur-[170px]"></div>
            <div className="h-[435px] w-[335px] rounded-[24px] bg-white m-2 text-black flex flex-col justify-between items-start relative hover:bg-transparent hover:border-2 hover:border-[#01c99b]">
              <div
                className="p-8 font-medium text-2xl text-left flex"
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Exclusive Rights
              </div>
              <Image
                src={green}
                alt="lens"
                width={251}
                height={91}
                className="self-center opacity-0 animate-newSolCardImageAnimation"
              />
              <div
                className="px-6 pb-6 font-medium text-gray-500 text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our mission is to make an impact in empowering human society
                with AI. Hence, all Intellectual Property Rights belongs to you.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-[299px] h-[200px] flex-shrink-0 rounded-[172px] bg-[#00b2fc] absolute top-[-50px] right-[-90px] blur-[190px]"></div>
            <div className="h-[435px] w-[335px] rounded-[24px] bg-white m-2 text-black flex flex-col justify-between items-start relative hover:bg-transparent hover:border-2  hover:border-blue-500">
              <div
                className="p-8 font-medium text-2xl text-left flex"
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Research Driven
              </div>
              <Image
                src={blue}
                alt="lens"
                width={138}
                height={138}
                className="self-center opacity-0 animate-newSolCardImageAnimation"
              />
              <div
                className="px-6 pb-6 font-medium text-gray-500 text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We regularly benchmark our solutions via comparing industry-vide
                evaluations so our partners only get the best that AI can offer.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-[120px] h-[100px] flex-shrink-0 rounded-[172px] bg-[#ff6160] absolute bottom-[-30px] left-[60px] blur-[80px]"></div>
            <div className="h-[435px] w-[335px] rounded-[24px] bg-white m-2 text-black flex flex-col justify-between items-start relative hover:bg-transparent hover:border-2  hover:border-[#ff6160]">
              <div
                className="p-8 font-medium text-2xl text-left flex"
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Plug-and-Play
              </div>
              <Image
                src={red}
                alt="lens"
                width={125}
                height={160}
                className="self-center opacity-0 animate-newSolCardImageAnimation"
              />
              <div
                className="px-6 pb-6 font-medium text-gray-500 text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We provide AI-driven solutions into businesses where they can
                bring tangible value. Each solution is customized as per your
                needs and deployed on any computing device of your choice.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-[150px] h-[200px] flex-shrink-0 rounded-[255px] bg-[#fbc976] absolute top-[-50px] right-[-70px] blur-[170px]"></div>
            <div className="h-[435px] w-[335px] rounded-[24px] bg-white m-2 text-black flex flex-col justify-between items-start relative hover:bg-transparent hover:border-2  hover:border-[#fbc976]">
              <div
                className="p-8 font-medium text-2xl text-left flex"
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Lifetime Support
              </div>
              <Image
                src={yellow}
                alt="lens"
                width={171}
                height={148}
                className="self-center opacity-0 animate-newSolCardImageAnimation"
              />
              <div
                className="px-6 pb-6 font-medium text-gray-500 text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Should you face any issues, we are always at your service. We
                provide lifetime technical support &amp; upgrade options.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
