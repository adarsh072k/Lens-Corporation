import Head from "next/head";

export default function Services() {
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
      <section className="py-12 bg-[#fcfbf7] grid place-items-center pb-16 overflow-hidden">
        <div className="flex flex-col items-center gap-1 mb-20">
          <h2
            className="text-black text-center text-2xl font-medium "
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            SERVICES
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
        </div>
        <div>
          <p
            className="text-center text-black text-6xl font-normal mx-auto mb-16 w-[80%] "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            We provide Artificial Intelligence Services
          </p>

          <div className="grid grid-cols-2 gap-5">
            <div className="relative flex items-center justify-center">
              <div className="h-[200px] flex-shrink-0 absolute pointer-events-none w-[250px] rounded-[172px] bg-[#01c99b] blur-[170px] -top-10 -left-10"></div>
              <div className="relative w-[470px] h-[360px] overflow-hidden bg-white rounded-[10px] transition duration-300 hover:bg-transparent hover:border-2 hover:border-[#01c99b]">
                <div>
                  <div className="flex flex-row items-start">
                    <div>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        0
                      </span>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        1
                      </span>
                    </div>
                    <div
                      className="text-4xl font-medium transform -translate-x-5 translate-y-10 transition duration-300"
                      style={{
                        border: "none",
                        color: "rgb(1, 201, 155)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Biometrics
                    </div>
                  </div>
                  <h5
                    className="w-4/5 text-gray-500 mx-auto mt-6 text-lg font-medium leading-8"
                    style={{
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Academia-backed &amp; In-house researched State-of-the-Art
                    Face, Fingerprint, and Iris Recognition SDKs. Enable
                    real-time automated Biometric applications on edge devices
                    even without an active internet connection.
                  </h5>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div className="w-[299px] h-[200px] rounded-full bg-blue-500 blur-[190px] absolute top-[-50px] right-[-90px] pointer-events-none"></div>
              <div className="relative w-[470px] h-[360px] overflow-hidden bg-white rounded-lg transition duration-300 hover:bg-transparent hover:border-2  hover:border-blue-500">
                <div className="relative w-[470px] h-[360px] overflow-hidden bg-white rounded-[10px]  transition duration-300"> 
                  <div className="flex flex-row items-start">
                    <div>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        0
                      </span>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        2
                      </span>
                    </div>
                    <div
                      className="text-4xl font-medium transform -translate-x-5 translate-y-10 transition duration-300"
                      style={{
                        color: "rgb(63, 189, 241)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Image Analysis
                    </div>
                  </div>
                  <h5
                    className="w-4/5 text-gray-500 mx-auto mt-6 text-lg font-medium leading-8"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Outsource the overly complex image analysis work to our
                    intelligent machines that adaptively learn, so you can focus
                    on making the best decisions for your business.
                  </h5>
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-center"
              style={{ position: "relative" }}
            >
              <div className="h-[200px] flex-shrink-0 absolute bottom-[-100px] pointer-events-none w-[291px] rounded-full bg-red-500 filter blur-[180px] left-[-80px]"></div>
              <div className="rounded-lg relative w-[470px] h-[360px] overflow-hidden bg-white transition duration-300 hover:bg-transparent hover:border-2 hover:border-red-500">
                <div className="relative w-[470px] h-[360px] overflow-hidden bg-white rounded-[10px] transition duration-300">
                  <div className="flex flex-row items-start">
                    <div>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        0
                      </span>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        3
                      </span>
                    </div>
                    <div
                      className="text-red-500 text-4xl font-medium transform -translate-x-5 translate-y-10 transition duration-300"
                      style={{
                        border: "none",
                        color: "rgb(255, 96, 95)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Cross-Media Translation
                    </div>
                  </div>
                  <h5
                    className="w-4/5 text-gray-500 mx-auto mt-6 text-lg font-medium leading-8"
                    style={{
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Will something like Siri or Alexa enhance your business? We
                    can deliver text-to-speech, text-to-image, speech-to-text,
                    speech-to-image, speech-to-image, image-to-text and
                    image-to-speech solutions for maximum convenience.
                  </h5>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-center"
              style={{ position: "relative" }}
            >
              <div
                className="w-[350px] h-[200px] flex-shrink-0 absolute bottom-[-100px] pointer-events-none filter blur-[170px] rounded-full bg-yellow-300"
                style={{ right: "-70px" }}
              ></div>
              <div className="rounded-lg relative w-[470px] h-[360px] overflow-hidden bg-white transition duration-300 ">
                <div className="relative w-[470px] h-[360px] overflow-hidden bg-white rounded-[10px] transition duration-300 hover:bg-transparent hover:border-2 hover:border-yellow-300">
                  <div className="flex flex-row items-start">
                    <div>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        0
                      </span>
                      <span className="text-[#707070] text-[88px] font-semibold leading-[123.2px] opacity-20 transition duration-300 first:ml-[40px]">
                        4
                      </span>
                    </div>
                    <div
                      className="text-orange-500 text-4xl font-medium transform -translate-x-5 translate-y-10 transition duration-300"
                      style={{
                        border: "none",
                        color: "rgb(255, 159, 49)",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      3D Modelling and Design.
                    </div>
                  </div>
                  <h5
                    className="w-4/5 text-gray-500 mx-auto mt-6 text-lg font-medium leading-8"
                    style={{
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    We offer services for automated generation of 3D assets with
                    realistic shapes and textures. We animate the 3D models with
                    voice and videos with an aim to retarget voice and/or
                    expressions with pose from a single Image/video.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
