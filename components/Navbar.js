import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import navIcon from "../assets/nav_logo.png";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-32 py-4 z-[99] transition-all duration-500 bg-white">
        <div className="flex items-center">
          <Image src={navIcon} alt="lens" width={80} height={70} />
        </div>
        <div className="flex space-x-10">
          <Link href="https://makemyweb.ai/en" legacyBehavior>
            <a
              className="text-gray-800 hover:text-blue-500 text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              MakeMyWeb.
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a
              className="text-gray-800 hover:text-blue-500 text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Home
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a
              className="text-gray-800 hover:text-blue-500 text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Company
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a
              className="text-gray-800 hover:text-blue-500 text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Blogs
            </a>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="text-gray-800 hover:text-blue-500"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </>
  );
}
