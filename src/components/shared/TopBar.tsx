import React, { useState, useEffect, useRef } from "react";
import { images } from "../../constants";
import ScrollTo from "./ScrollTo";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "../ui";
import { constants } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
        gsap.to(headerRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power4.out",
        });
      } else if (currentScrollY < lastScrollY.current) {
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power4.out",
        });
      }

      lastScrollY.current = currentScrollY;

      if (currentScrollY > 50) {
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
      ref={headerRef}
      className={`page-width ${
        location.pathname === "/privacy-policy" && "bg-white/80 backdrop-blur"
      } py-4 lg:py-5 flex items-center justify-between fixed w-screen z-50 transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur"
          : `${isMenuOpen ? "bg-white/80 backdrop-blur" : `bg-transparent`}`
      }`}
    >
      <Link to={"/"}>
        <img
          src={images.StreamEngineLogo}
          alt="Stream Engine Logo"
          loading="lazy"
          className="w-32 mix-blend-difference"
        />
      </Link>
      <nav className="xs:hidden sm:hidden md:flex gap-5">
        {constants.navItems.map((item) => (
          <ScrollTo id={item.path} key={item.key}>
            <Typography
              color="white"
              variant="sm"
              className="font-normal mix-blend-difference"
            >
              {item.label}
            </Typography>
          </ScrollTo>
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
            <ScrollTo 
              id={item.path}
              key={item.key}
              onClick={toggleMenu}
              className="link-underline"
            >
              <Typography color="black" variant="md" className="font-medium">
                {item.label}
              </Typography>
            </ScrollTo>
          ))}
        </nav>
      )}
    </header>
  );
};

export default TopBar;
