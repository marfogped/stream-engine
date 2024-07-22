import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "../ui";
import { constants } from "../../constants";
import { AnimatePresence, motion, useScroll, useVelocity } from "framer-motion";

const TopBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  const slideDistance = 80;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

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

  useEffect(() => {
    return scrollVelocity.onChange((latest) => {
      if (latest > 0) {
        setIsScrollingBack(false);
        return;
      }
      if (latest < -threshold) {
        setIsScrollingBack(true);
        return;
      }
    });
  }, [scrollVelocity]);

  useEffect(() => {
    return scrollY.onChange((latest) => setIsAtTop(latest <= 0));
  }, [scrollY]);

  useEffect(
    () => setIsInView(isScrollingBack || isAtTop),
    [isScrollingBack, isAtTop]
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`page-width py-4 lg:py-5 flex items-center justify-between fixed w-screen z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur"
          : `${isMenuOpen ? "bg-white/80 backdrop-blur" : "bg-transparent"}`
      }`}
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
      style={{ height: slideDistance }}
    >
      <div>
        <img
          src={images.StreamEngineLogo}
          alt="Stream Engine Logo"
          loading="lazy"
          className="w-32 lg:w-40 mix-blend-difference"
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
            className="absolute overflow-hidden top-20 left-0 w-full bg-white/80 backdrop-blur p-5 flex flex-col items-start md:hidden"
          >
            {constants.navItems.map((item) => (
              <a className="link-underline" href={item.path} key={item.key}>
                <Typography color="black" variant="lg" className="font-medium">
                  {item.label}
                </Typography>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default TopBar;
