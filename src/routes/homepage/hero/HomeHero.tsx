import React, { useRef } from "react";
import { Typography } from "../../../components/ui";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { videos } from "../../../constants";

interface HomeHeroProps {
  setSelectedService: (arg: string) => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ setSelectedService }) => {
  const defenseVideo = useRef<HTMLVideoElement>(null);
  const advertisingVideo = useRef<HTMLVideoElement>(null);

  const handleMouseEnterDefense = () => {
    if (defenseVideo.current) {
      defenseVideo.current.play();
    }
  };

  const handleMouseLeaveDefense = () => {
    if (defenseVideo.current) {
      defenseVideo.current.pause();
    }
  };

  const handleMouseEnterAdvertising = () => {
    if (advertisingVideo.current) {
      advertisingVideo.current.play();
    }
  };

  const handleMouseLeaveAdvertising = () => {
    if (advertisingVideo.current) {
      advertisingVideo.current.pause();
    }
  };

  const handleSelectedService = (service: string) => {
    setSelectedService(service);
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <section className="w-full h-[40rem] xl:max-h-screen relative">
      <div className="z-10 flex items-center xl:items-start xl:translate-y-1/4 xl:w-3/4 absolute page-width top-0 left-0 w-full h-full pointer-events-none leading-none">
        <Typography
          as="h1"
          variant="xxl"
          color="white"
          className="text-center xl:text-start overflow-hidden"
        >
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
          onClick={() => handleSelectedService("defense")}
          className="xs:w-full sm:w-full relative xl:w-1/2 cursor-pointer xl:hover:w-3/4 transition-all g-full object-cover xl:bg-center flex items-end group cursor-scale"
        >
          <video
            ref={defenseVideo}
            onMouseEnter={handleMouseEnterDefense}
            onMouseLeave={handleMouseLeaveDefense}
            width="960"
            height="1080"
            loop
            muted
            className="z-[1] w-full h-full object-cover absolute top-0 left-0"
          >
            <source src={videos.DefenseVideo} type="video/mp4" />
          </video>
          <div className="pointer-events-none px-[20px] xl:pl-[200px] xl:group-hover:px-[200px] z-[2] py-20 transition-all flex flex-col items-center xl:items-start gap-2">
            <Typography
              as="h2"
              variant="lg"
              className="text-center xl:text-start font-medium flex items-center justify-center gap-1 text-white xl:text-gray-400 xl:group-hover:text-white"
            >
              Defense Community <ArrowDownIcon className="h-6 w-6" />
            </Typography>
            <Typography
              as="p"
              variant="sm"
              className="text-gray-300 text-center xl:text-start xl:group-hover:opacity-100 xl:opacity-0"
            >
              Enhance your defense operations with Stream Engine's AI-driven
              solutions. Our advanced technology utilizes machine learning to
              process vast amounts of data, identifying potential threats and
              behavioral patterns in real time.
            </Typography>
          </div>
        </div>
        <div
          onClick={() => handleSelectedService("advertising")}
          className="xs:hidden sm:hidden xl:flex xl:w-1/2 cursor-pointer xl:hover:w-3/4 transition-all flex items-end relative group cursor-scale"
        >
          <video
            ref={advertisingVideo}
            onMouseEnter={handleMouseEnterAdvertising}
            onMouseLeave={handleMouseLeaveAdvertising}
            width="960"
            height="1080"
            loop
            muted
            className="z-[1] w-full h-full object-cover absolute top-0 left-0"
          >
            <source src={videos.AdvertisingVideo} type="video/mp4" />
          </video>
          <div className="pointer-events-none pl-[100px] group-hover:pl-[200px] z-[2] py-20 transition-all flex flex-col items-start gap-2">
            <Typography
              as="h2"
              variant="lg"
              className="text-center xl:text-start font-medium flex items-center justify-center gap-1 text-gray-400 group-hover:text-white"
            >
              Advertising Industry <ArrowDownIcon className="h-6 w-6" />
            </Typography>
            <Typography
              as="p"
              variant="sm"
              className="text-gray-300 text-center xl:text-start group-hover:opacity-100 opacity-0"
            >
              Discover all our AI-powered advertising services at Stream Engine.
              Our cutting-edge technology leverages machine learning to analyze
              real-time user data, ensuring your ads reach the right audience at
              the optimal time.
            </Typography>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1] pointer-events-none" />
    </section>
  );
};

export default HomeHero;
