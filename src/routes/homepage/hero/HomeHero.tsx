import React from "react";
import { images } from "../../../constants";
import { Typography } from "../../../components/ui";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const HomeHero: React.FC = () => {
  return (
    <section className="w-full h-[50rem] lg:h-screen relative">
      <div className="z-10 flex items-center absolute page-width top-0 left-0 w-full h-full">
        <Typography as="h1" variant="xxl" color="white" className="text-center">
          We use AI to{" "}
          <Typography variant="xxl" color="gradient">
            See
          </Typography>
          ,{" "}
          <Typography variant="xxl" color="gradient">
            Hear
          </Typography>{" "}
          and{" "}
          <Typography variant="xxl" color="gradient">
            Feel
          </Typography>{" "}
          the World Around Us
        </Typography>
      </div>
      <div className="flex h-full w-full">
        <div
          className="xs:w-full sm:w-full lg:w-1/2 lg:hover:w-3/4 transition-all g-full object-cover lg:bg-center flex items-end"
          style={{ backgroundImage: `url(${images.DefenseBackground})` }}
        >
          <div className="page-width z-[2] py-20">
            <Typography
              as="h2"
              variant="xl"
              color="white"
              className="text-center font-medium flex items-center justify-center gap-1"
            >
              Defense Community <ArrowDownIcon className="h-6 w-6" />
            </Typography>
            <Typography
              as="p"
              variant="md"
              className="text-gray-300 text-center"
            >
              Discover all our AI-powered advertising services at Stream Engine.
              Our cutting-edge technology leverages machine learning to analyze
              real-time user data, ensuring your ads reach the right audience at
              the optimal time.
            </Typography>
          </div>
        </div>
        <div
          className="xs:hidden sm:hidden lg:flex lg:w-1/2 lg:hover:w-3/4 transition-all g-full object-cover lg:bg-center"
          style={{ backgroundImage: `url(${images.AdvertisingBackground})` }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[1]" />
    </section>
  );
};

export default HomeHero;
