import Head from "next/head";

export default function Blogs() {
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

      <div className="grid place-items-center py-28 bg-[#fcfbf7]">
        <div className="flex flex-col items-center gap-[5px] justify-center mb-6">
          <h2
            className="text-black text-center text-2xl font-medium "
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            OUR BLOGS
          </h2>
          <div className="w-[75px] h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
        </div>
        <p
          className=" text-black text-center text-6xl font-normal leading-normal mb-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Inhouse Mindscape
        </p>

        <div className="w-[70%] grid grid-cols-2 gap-x-6 gap-y-10">
          <div className="flex relative hover:scale-105 transition-transform duration-300">
            <div className="w-[150px] h-[100px] flex-shrink-0 rounded-[255px] bg-[#fbc976] blur-[70px] absolute right-[-70px] bottom-[-100px]"></div>
            <div className="rounded-2xl border border-transparent bg-white p-5 overflow-hidden">
              <div className="flex h-[90%] flex-col gap-[10px] items-start justify-between transition duration-300">
                <div>
                  <span
                    className="text-2xl font-medium leading-snug"
                    style={{
                      color: "rgb(248, 99, 96)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    New!
                  </span>
                  <h2
                    className="text-black text-2xl font-medium leading-9 tracking-wide"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    How AI is Revolutionizing Your Shopping Experience
                  </h2>
                </div>
                <div
                  className="rounded-lg flex p-6 justify-center items-center flex-shrink-0"
                  style={{ backgroundColor: "rgb(255, 246, 205)" }}
                >
                  <p className="text-gray-500 text-base leading-relaxed">
                    From personalized recommendations to frictionless checkout,
                    AI is transforming the way you shop.Discover the future of
                    retail and how AI is making shopping faster, easier, and
                    more enjoyable....
                  </p>
                </div>
              </div>
              <div className="opacity-0 mt-2 transition-opacity duration-500">
                <a href="/blogs/How AI is Revolutionizing Your Shopping Experience">
                  <button class="text-[#ff5d5b] bg-transparent border-none text-lg flex items-center gap-1 p-0 relative top-0 transition-all duration-500 ease-in-out">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ci"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="flex relative hover:scale-105 transition-transform duration-300 ">
            <div className="w-[150px] h-[100px] flex-shrink-0 blur-[100px] absolute rounded-[199px] bg-[#00b2fc] -top-[50px] -right-[90px]"></div>
            <div className="rounded-2xl border border-transparent bg-white p-5 overflow-hidden">
              <div className="flex h-[90%] flex-col gap-[10px] items-start justify-between transition duration-300">
                <div>
                  <span
                    className="text-2xl font-medium leading-snug"
                    style={{
                      color: "rgb(101, 101, 101)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    May 8, 2024
                  </span>
                  <h2
                    className="text-black text-2xl font-medium leading-9 tracking-wide"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    Generative AI
                  </h2>
                </div>
                <div
                  className="rounded-lg flex p-6 justify-center items-center flex-shrink-0"
                  style={{ backgroundColor: "rgb(226, 242, 255)" }}
                >
                  <p className="text-gray-500 text-base leading-relaxed">
                    In today's data-driven marketing world, keeping up with
                    content creation demands can be a challenge. Read our latest
                    blog to explore the power of Generative AI and its potential
                    to reshape the marketing landscape....
                  </p>
                </div>
              </div>
              <div className="opacity-0 mt-2 transition-opacity duration-500">
                <a href="/blogs/Generative AI">
                  <button className="text-[#ff5d5b] bg-transparent border-none text-lg flex items-center gap-1 p-0 relative top-0 transition-all duration-500 ease-in-out">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ci"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-cols-2 col-span-2 row-span-2">
            <div
              className="absolute bottom-[-10px] left-[-10px] w-[150px] h-[100px] flex-shrink-0 " 
              style={{ borderRadius: "19px" }}
            ></div>
            <div className="rounded-2xl border border-transparent bg-white p-5 overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="flex h-[90%] flex-col gap-[10px] items-start justify-between transition duration-300">
                <div>
                  <span
                    className="text-2xl font-medium leading-snug"
                    style={{
                      color: "rgb(101, 101, 101)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    April 25, 2024
                  </span>
                  <h2
                    className="text-black text-2xl font-medium leading-9 tracking-wide"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    The Evolution of AI in Games
                  </h2>
                </div>
                <div
                  className="rounded-lg flex p-6 justify-center items-center flex-shrink-0"
                  style={{ backgroundColor: "rgb(255, 236, 235)" }}
                >
                  <p className="text-gray-500 text-base leading-relaxed">
                    The integration of artificial intelligence (AI) within the
                    gaming industry has been a remarkable journey, marked by
                    continual innovation. Read our latest blog to dive deep into
                    the fascinating history of AI in games and discover the
                    evolution that continues to shape the future of play!...
                  </p>
                </div>
              </div>
              <div className="opacity-0 mt-2 transition-opacity duration-500">
                <a href="/blogs/The Evolution of AI in Games">
                  <button class="text-[#ff5d5b] bg-transparent border-none text-lg flex items-center gap-1 p-0 relative top-0 transition-all duration-500 ease-in-out">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--ci"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="./blogs">
          <button className="mt-6 bg-white text-black text-lg  py-2.5 px-10 my-2.5 cursor-pointer transition-all duration-300 border border-black rounded-lg hover:bg-black hover:text-white hover:border-black hover:px-9">
            <div>Explore More</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="hidden transition-all duration-300 "
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
    </>
  );
}
