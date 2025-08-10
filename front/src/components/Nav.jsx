import React, { useState, useEffect } from "react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Skills", href: "#tools" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

function Button({ isActive, toggleMenu }) {
  return (
    <div
      className="absolute md:top-13 top-4 right-4 md:right-8 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer z-40"
      onClick={toggleMenu}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      aria-label={isActive ? "Close menu" : "Open menu"}
    >
      <div
        className="relative w-full h-full"
        style={{
          top: isActive ? "-100%" : "0%",
          transition: "top 0.5s ease-in-out",
        }}
      >
        <div className="bg-gray-500 h-full w-full grid place-items-center text-black">
          <p>Menu</p>
        </div>
        <div className="bg-black h-full text-gray-400 w-full grid place-items-center">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
}

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    // Close menu on scroll
    const handleScroll = () => {
      if (isActive) setIsActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  return (
    <header className="relative top-0 md:mr-12 right-0 z-50">
      <div className="absolute md:top-15 top-6 md:left-8 left-6 z-50">
        <a href={"/"}>
          <div className="flex flex-col items-end cursor-pointer select-none">
            <p className="font-semibold text-2xl text-gray-400">ThePortfolio</p>
            <div className="h-1 w-8 bg-[#F2AA4CFF]"></div>
          </div>
        </a>
      </div>

      <div
        className={`fixed top-8 right-13 w-screen md:w-[330px] h-screen md:h-[calc(100vh_-_7rem)] bg-transparent transition-transform duration-300 ease-in-out z-40
          ${isActive ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        {isActive && (
          <nav className="flex bg-white md:rounded-3xl border-l-2 border-b-2 border-gray-800 w-full h-full px-10 pt-[80px] pb-[50px]">
            <div className="flex flex-col gap-6">
              {navLinks.map(({ title, href }, i) => (
                <a
                  key={i}
                  href={href}
                  onClick={() => setIsActive(false)}
                  className="text-5xl text-gray-400 hover:text-gray-800 transition-colors duration-200 block"
                >
                  {title}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      <Button isActive={isActive} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Nav;
