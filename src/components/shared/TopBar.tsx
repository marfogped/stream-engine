import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "../ui";
import { constants } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";

const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`page-width py-8 flex items-center justify-between fixed w-screen z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : `${isMenuOpen ? "bg-white" : "bg-transparent"}`
      }`}
    >
      <div>
        <img
          src={images.StreamEngineLogo}
          alt="Stream Engine Logo"
          loading="lazy"
          className="w-40 mix-blend-difference"
        />
      </div>
      <div className="xs:flex sm:flex md:hidden">
        {isMenuOpen ? (
          <XMarkIcon
            className="h-12 w-12 text-white mix-blend-difference hover:scale-75 transition-all"
            onClick={toggleMenu}
          />
        ) : (
          <Bars2Icon
            className="h-12 w-12 text-white mix-blend-difference hover:scale-75 transition-all"
            onClick={toggleMenu}
          />
        )}
      </div>
      <nav className="xs:hidden sm:hidden md:flex gap-5">
        {constants.navItems.map((item) => (
          <a href={item.path} key={item.key}>
            <Typography
              color="white"
              variant="md"
              className="font-normal mix-blend-difference"
            >
              {item.label}
            </Typography>
          </a>
        ))}
      </nav>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="absolute overflow-hidden top-[117px] left-0 w-full bg-white p-5 flex flex-col items-start gap-2 md:hidden"
          >
            {constants.navItems.map((item) => (
              <a href={item.path} key={item.key}>
                <Typography color="black" variant="md" className="font-medium">
                  {item.label}
                </Typography>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;
