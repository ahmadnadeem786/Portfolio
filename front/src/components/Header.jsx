import React, { useRef } from "react";
import ProfileImg from "../assets/img.webp";
import CustomCursor from "./CustomCursor"; // your custom cursor component
import Nav from "./Nav";

const Header = () => {
  const headerRef = useRef();

  return (
    <div
      ref={headerRef}
      id="home"
      className="relative bg-[#101820FF]" /* removed cursor-pointer */
    >
      {/* Cursor only appears inside header */}
      <CustomCursor containerRef={headerRef} />

      <Nav />

      <div className="flex flex-col md:flex-row w-full py-10 min-h-screen">
        {/* Left Div - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <img
            src={ProfileImg}
            alt="Profile"
            className="rounded-3xl shadow-lg w-[280px] h-[280px] object-cover"
          />
        </div>

        {/* Right Div - Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-8xl font-extrabold text-white mb-4">Hi, I am Ahmad</h1>
          <h2 className="text-3xl mb-2 text-[#F2AA4CFF]">I am a MERN Stack Developer</h2>
          <div className="flex items-center justify-between pr-10 w-full md:w-auto">
            <p className="mb-4 w-[50%] text-gray-200">
              Passionate about building full-stack web applications with MongoDB,
              Express, React, and Node.js.
            </p>

            <a href="" download>
              <button className="bg-gray-400 text-black px-6 py-2 rounded hover:bg-gray-100 transition">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
