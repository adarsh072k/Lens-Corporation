import Head from "next/head";
import Image from "next/image";

export default function Vision() {
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
      <div className="grid place-items-center py-28 bg-[#fcfbf7] overflow-hidden">
        <div className="flex flex-col items-center gap-[5px] justify-center mb-6">
          <h2
            className="text-black text-center text-2xl font-medium "
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            OUR VISION
          </h2>
          <div className="w-[75px] h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
        </div>

        <p className=" text-black text-center text-6xl font-normal leading-normal mb-6">
          AI for Social Good
        </p>
        <p className="text-gray-600 text-center text-xl leading-normal w-[58%]  mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </p>

        <div className="grid grid-cols-1 justify-center h-auto mt-6" style={{ fontFamily: "Poppins, sans-serif" }}>
          <div>
            <div className="grid grid-cols-2 gap-x-6 w-[100%] items-center">
              <div className="w-[60%] ml-56 hover:scale-105 transition duration-300">
                <h3 className="text-black font-medium text-[28px] transition duration-300 ">
                  Diversity &amp; Fairness
                </h3>
                <span className="inline-block text-lg my-4 text-gray-500 transition duration-300">
                  When training our AI models, we consider ethical and social
                  implications of algorithm-based decision making. Our solutions
                  use high-quality and fairly-represented data sets to eliminate
                  human cognitive biases.
                </span>
              </div>
              <div>
                <span className="inline-block bg-white border-4 border-gray-700 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="text-[#272e5c] iconify iconify--ic"
                    width="38"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34c-.72-1.22-3.6-2-5.68-2c-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3s1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M21 14h-3.27c-.77 0-1.35.45-1.68.92c-.04.06-1.36 2.08-4.05 2.08c-1.43 0-3.03-.64-4.05-2.08c-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2"
                    ></path>
                  </svg>
                </span>
                <span class="absolute block w-0 h-[105%] border-l-2 border-dashed border-gray-500 transform translate-x-7 -translate-y-3 mr-60"></span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 w-full">
              {/* <div></div> */}
              <div className=" ml-[105%] mt-[50px] ">
                <span className="inline-block bg-white border-4 border-gray-700 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="NewVision_iconCol__90VMl iconify iconify--carbon"
                    width="40"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M20 18v6.5c0 1.9 1.1 3.7 2.9 4.5l2.1 1l2.1-1c1.7-.8 2.9-2.6 2.9-4.5V18zm8 6.5c0 1.2-.7 2.2-1.7 2.7l-1.3.6l-1.3-.6c-1-.5-1.7-1.6-1.7-2.7V20h6zM16 20c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4h-2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M16 25c-5 0-9-4-9-9s4-9 9-9s9 4 9 9h-2c0-3.9-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M16 30C8.3 30 2 23.7 2 16S8.3 2 16 2s14 6.3 14 14h-2c0-6.6-5.4-12-12-12S4 9.4 4 16s5.4 12 12 12z"
                    ></path>
                  </svg>
                </span>
                {/* <span class="absolute block w-0 h-[85%] border-l-2 border-dashed border-gray-500 transform translate-x-7.5 -translate-y-3"></span> */}
              </div>
              <div className="ml-16 w-[80%] mt-[50px] ">
                <div className=" ml-20 mb-32 hover:scale-105 transition duration-300">
                  <h3 className="text-black font-medium text-[28px] transition duration-300">
                    Regulatory Compliance
                  </h3>
                  <span className="inline-block text-lg my-4 text-gray-500 transition duration-300">
                    Working with clients globally, LENS acknowledges applicable
                    data privacy regulations, such as the GDPR, HIPAA and
                    others, in all our solutions handling sensitive data. We
                    also ensure our algorithms allow for the required level of
                    decision-making transparency and explainability.
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 w-full">
              {/* <div></div> */}
              <div className="ml-[51%] mt-[50px] ">
                <span className="inline-block bg-white border-4 border-gray-700 rounded-full p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    class="NewVision_iconCol__90VMl iconify iconify--emojione-monotone"
                    width="40"
                    height="32"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="currentColor"
                      d="M39.5 34.813c0 6.213 5.037 11.25 11.25 11.25S62 41.025 62 34.813h-1.675L53.02 16.216a3.725 3.725 0 0 0 1.48-2.966c0-2.07-1.68-3.75-3.75-3.75c-.548 0-1.064.124-1.533.334a161.58 161.58 0 0 1-2.289-.911c-2.868-1.176-6.205-2.53-9.68-3.31A5.624 5.624 0 0 0 32 2a5.624 5.624 0 0 0-5.248 3.614c-3.476.779-6.813 2.133-9.681 3.31c-.653.268-1.572.63-2.289.911A3.72 3.72 0 0 0 13.25 9.5a3.75 3.75 0 0 0-3.75 3.75a3.73 3.73 0 0 0 1.479 2.966L3.674 34.813H2c0 6.213 5.037 11.25 11.25 11.25s11.25-5.037 11.25-11.25h-1.675L15.52 16.217A3.732 3.732 0 0 0 17 13.25c0-.087-.021-.169-.026-.255l.935-.379c2.631-1.081 5.678-2.324 8.805-3.083a5.628 5.628 0 0 0 3.412 3.391v5.732h-1.15v18.032h-1.25v8.829C21.523 46.668 17 50.252 17 54.5h-1.875v3.75h-3.75V62h41.25v-3.75h-3.75V54.5H47c0-4.248-4.525-7.832-10.725-8.983v-8.829h-1.25V18.655h-1.15v-5.732a5.629 5.629 0 0 0 3.411-3.391c3.128.759 6.173 2.002 8.806 3.083c.32.132.622.253.934.38c-.006.086-.026.168-.026.255a3.73 3.73 0 0 0 1.479 2.966l-7.305 18.596zM13.25 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m7.639 23.438H5.608l7.022-17.875c.203.034.408.062.62.062s.416-.028.618-.063zM50.75 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m-.619 5.563a3.7 3.7 0 0 0 .619.062c.211 0 .416-.028.618-.063l7.021 17.875H43.107z"
                    ></path>
                  </svg>
                </span>
                {/* <span class="absolute block w-0 h-[25%] border-l-2 border-dashed border-gray-500 transform translate-x-[275px] -translate-y-3"></span> */}
              </div>

              <div className="w-[360px] ml-56 hover:scale-105 transition duration-300">
                <h3 className="text-black font-medium text-[28px] transition duration-300">
                  Code of Ethics
                </h3>
                <span className="inline-block text-lg my-4 text-gray-500 transition duration-300">
                  LENS believes in a just, non-violent world of equality and
                  fairness. We prize democratic values, civil liberties and open
                  and informed debate. When used to further these values,
                  algorithm-based decision-making models can continue to make
                  the world a safer, better place for everyone.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
