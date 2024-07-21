import React from "react";
import { images } from "../../constants";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { Typography } from "../ui";

const navItems = [
  {
    label: "Services",
    path: "/",
    key: "services-opt",
  },
  {
    label: "Technologies",
    path: "/",
    key: "technologies-opt",
  },
  {
    label: "Contact",
    path: "/",
    key: "contact-opt",
  },
];

const TopBar: React.FC = () => {
  return (
    <header className="page-width py-8 flex items-center justify-between fixed w-screen z-50">
      <div>
        <img
          src={images.StreamEngineLogo}
          alt="Stream Engine Logo"
          loading="lazy"
          className="w-40"
        />
      </div>
      <div className="xs:flex sm:flex md:hidden">
        <Bars2Icon className="h-12 w-12 text-white" />
      </div>
      <nav className="xs:hidden sm:hidden md:flex gap-5">
        {navItems.map((item) => (
          <a href={item.path} key={item.key}>
            <Typography color="white" variant="md" className="font-medium">
              {" "}
              {item.label}{" "}
            </Typography>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default TopBar;
