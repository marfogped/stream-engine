import React from "react";
import { images } from "../../constants";
import { Bars2Icon } from "@heroicons/react/24/outline";

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
      <nav className="xs:hidden sm:hidden md:flex">
        <Bars2Icon className="h-12 w-12 text-white" />
      </nav>
    </header>
  );
};

export default TopBar;
