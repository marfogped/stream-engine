import React, { useRef, useEffect } from "react";
import { Typography } from "../ui";
import { TechnologyProps } from "../../lib/types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useWindowDimensions } from "../../hooks";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  technology: TechnologyProps;
  className?: string;
  index: number;
}

const TechnologiesCards: React.FC<CardProps> = ({
  technology,
  className,
  index,
}) => {
  const { windowWidth } = useWindowDimensions();
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          delay: index * 0.3,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 65%",
            end: "bottom 50%",
            once: true,
          },
        }
      );
    }
  }, [index]);

  const handleMouseEnter = () => {
    if (windowWidth > 1200) {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth > 1200) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <article
      ref={cardRef}
      style={{
        gridColumn: `span ${technology.cols}`,
        gridRow: `span ${technology.rows}`,
      }}
      className={`${className} xl:cursor-none flex flex-col justify-end items-start xs:h-[284px] sm:h-[284px] lg:h-full rounded-[10px] p-5 relative overflow-hidden group`}
    >
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width="640"
        height="480"
        loop
        muted
        autoPlay
        playsInline
        className={`z-[1] w-full h-full technology-video object-cover object-center ${
          technology.id === "3" && "scale-[135%]"
        } absolute top-0 left-0`}
      >
        <source src={technology.video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1] pointer-events-none" />
      <div className="z-[2] flex flex-col gap-2 pointer-events-none">
        {technology.icon}
        <Typography variant="lg" color="white" className="leading-none">
          {technology.title}
        </Typography>

        <Typography
          variant="sm"
          className="leading-tight text-gray-300 overflow-hidden lg:hidden lg:group-hover:flex"
        >
          {technology.description}
        </Typography>
      </div>
    </article>
  );
};

export default TechnologiesCards;
