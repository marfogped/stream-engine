import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "../ui";
import { constants } from "../../constants";
import { Link } from "react-router-dom";

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
      className={`page-width py-4 lg:py-5 flex items-center justify-between fixed w-screen z-50 transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur"
          : `${isMenuOpen ? "bg-white/80 backdrop-blur" : "bg-transparent"}`
      }`}
    >
      <div>
        <img
          src={images.StreamEngineLogo}
          alt="Stream Engine Logo"
          loading="lazy"
          className="w-32 lg:w-40 mix-blend-difference"
        />
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

      {isMenuOpen && (
        <nav className="absolute origin-top top-20 left-0 w-full bg-white/80 p-5 flex flex-col items-center md:hidden">
          {constants.navItems.map((item) => (
            <Link
              key={item.key}
              onClick={toggleMenu}
              className="link-underline"
              to={item.path}
            >
              <Typography color="black" variant="lg" className="font-medium">
                {item.label}
              </Typography>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default TopBar;
