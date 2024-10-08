import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ContainerAnimation, Typography } from "../../../components/ui";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { videos, images } from "../../../constants";
import { useWindowDimensions } from "../../../hooks";

interface HomeHeroProps {
  setSelectedService: (arg: string) => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ setSelectedService }) => {
  const defenseVideo = useRef<HTMLVideoElement>(null);
  const advertisingVideo = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useWindowDimensions();

  const handleMouseEnterDefense = () => {
    if (windowWidth > 1200) {
      if (defenseVideo.current) {
        defenseVideo.current.play();
      }
    }
  };

  const handleMouseLeaveDefense = () => {
    if (windowWidth > 1200) {
      if (defenseVideo.current) {
        defenseVideo.current.pause();
      }
    }
  };

  const handleMouseEnterAdvertising = () => {
    if (windowWidth > 1200) {
      if (advertisingVideo.current) {
        advertisingVideo.current.play();
      }
    }
  };

  const handleMouseLeaveAdvertising = () => {
    if (windowWidth > 1200) {
      if (advertisingVideo.current) {
        advertisingVideo.current.pause();
      }
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

  useEffect(() => {
    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(max-width: 1200px)", () => {
      const slides = sectionRef.current?.children;

      if (slides) {
        let currentSlide = 0;

        const slideTo = (index: number) => {
          gsap.to(slides, {
            xPercent: -100 * index,
            duration: 0.5,
            ease: "power4.inOut",
            zIndex: 2,
          });
        };

        const nextSlide = () => {
          currentSlide = (currentSlide + 1) % slides.length;
          slideTo(currentSlide);
        };

        slideTo(0);
        const interval = setInterval(nextSlide, 10000);

        return () => clearInterval(interval);
      }
    });

    return () => {
      mediaQuery.revert();
    };
  }, []);

  return (
    <section className="w-screen overflow-hidden h-[40rem] xl:max-h-screen xl:h-screen relative">
      <div className="z-10 flex items-center justify-center xl:items-start xl:justify-start xl:translate-y-1/4 xl:w-3/4 absolute page-width top-0 left-0 w-full h-full pointer-events-none leading-none">
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
      <div
        ref={sectionRef}
        className="flex h-full w-[200vw] xl:w-full overflow-hidden"
      >
        <div
          onClick={() => handleSelectedService("defense")}
          style={{
            backgroundImage: `url(${images.DefenseThumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-1/2 video-overlay relative xl:cursor-none xl:hover:w-3/4 transition-all h-full flex items-end group cursor-scale"
        >
          <video
            ref={defenseVideo}
            onMouseEnter={handleMouseEnterDefense}
            onMouseLeave={handleMouseLeaveDefense}
            width="960"
            height="1080"
            autoPlay
            playsInline
            loop
            muted
            className="w-full h-full object-cover absolute hero-video top-0 left-0"
          >
            <source src={videos.DefenseVideo} type="video/mp4" />
          </video>
          <ContainerAnimation className="px-[20px] xl:px-0 z-10 pb-16 transition-all flex flex-col items-center xl:items-start gap-2 pointer-events-none relative w-11/12 mx-auto xxl:w-3/4 h-1/3">
            <Typography
              as="h2"
              variant="lg"
              className="text-center pointer-events-none xl:pl-[100px]  xl:text-start font-medium flex items-center justify-center gap-1 leading-none text-white-50 xl:text-gray-400 xl:group-hover:text-white-50"
            >
              Defense Sector <ArrowDownIcon className="h-6 w-6" />
            </Typography>
            <Typography
              as="p"
              variant="sm"
              className="text-gray-300 xl:group-hover:pl-[100px] text-center pointer-events-none xl:text-start xl:group-hover:opacity-100 xl:opacity-0 transition-all absolute top-8 md:top-10 left-0 w-full"
            >
              We assist the defense and cyber security community to detect
              potential threats by ingesting large datasets, utilizing trained
              models to recognize patterns across video, audio, text and still
              images. We equip our warfighters with modern tools to win the
              information war and keep us protected from threats.
            </Typography>
          </ContainerAnimation>
        </div>

        <div
          onClick={() => handleSelectedService("advertising")}
          style={{
            backgroundImage: `url(${images.AdvertisingThumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-1/2 xl:cursor-none video-overlay xl:hover:w-3/4 transition-all flex items-end relative group cursor-scale"
        >
          <video
            ref={advertisingVideo}
            onMouseEnter={handleMouseEnterAdvertising}
            onMouseLeave={handleMouseLeaveAdvertising}
            width="960"
            height="1080"
            autoPlay
            playsInline
            loop
            muted
            className="w-full h-full object-cover absolute hero-video top-0 left-0"
          >
            <source src={videos.AdvertisingVideo} type="video/mp4" />
          </video>
          <ContainerAnimation className="px-[20px] xl:px-[0px] z-10 pb-16 transition-all flex flex-col w-11/12 mx-auto xxl:w-3/4 h-1/3 items-center xl:items-start gap-2 origin-top pointer-events-none relative">
            <Typography
              as="h2"
              variant="lg"
              className="text-center xl:pl-[100px] xl:group-hover:pl-[100px] xxl:group-hover:pl-[200px] pointer-events-none xl:text-start font-medium flex items-center justify-center gap-1 leading-none text-white-50 xl:text-gray-400 xl:group-hover:text-white-50 transition-all"
            >
              Advertising Industry <ArrowDownIcon className="h-6 w-6" />
            </Typography>
            <Typography
              as="p"
              variant="sm"
              className="text-gray-300 xl:pl-[0px] xl:group-hover:pl-[100px] xxl:group-hover:pl-[200px] text-center pointer-events-none xl:text-start xl:group-hover:opacity-100 xl:opacity-0 transition-all absolute top-8 md:top-10 left-0 w-full"
            >
              We help global advertisers uncover competitive insights by
              leveraging machine learning and AI to analyze and categorize media
              at scale across OTT, social, and digital media. We provide
              advertisers with accurate media intelligence in real-time.
            </Typography>
          </ContainerAnimation>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
