import Head from "next/head";
import Image from "next/image";
import c01 from "../assets/Co_1.png";
import c02 from "../assets/Co_2.png";
import c03 from "../assets/Co_3.png";
import c04 from "../assets/Co_4.png";

export default function LogoSlider() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        />
      </Head>
      <footer className="bg-[#fcfbf7] flex items-center justify-center w-full text-xl tracking-wide text-black py-7">
        <div className="flex flex-col w-85 justify-between items-center py-10 mx-auto text-center">
          <h1
            class="text-black text-4xl font-medium mb-16 text-center"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            We Work With Amazing Clients
          </h1>
          <div class="flex flex-row justify-center overflow-hidden animate-slideAnimation gap-8">
            <div>
              <Image src={c01} alt="lens" width={200} height={113}></Image>
            </div>
            <div>
              <Image src={c02} alt="lens" width={200} height={96}></Image>
            </div>
            <div>
              <Image src={c03} alt="lens" width={200} height={112}></Image>
            </div>
            <div>
              <Image src={c04} alt="lens" width={123} height={78}></Image>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
