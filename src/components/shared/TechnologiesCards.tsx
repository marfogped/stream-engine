import React, { useRef, useState } from "react";
import { Typography, AnimatedCard } from "../ui";
import { TechnologyProps } from "../../lib/types";
import { useWindowDimensions } from "../../hooks";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleMouseEnter = () => {
    if (windowWidth > 1200 && isVideoLoaded) {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth > 1200) {
      videoRef.current?.pause();
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const isMobileResolution = windowWidth < 992;

  return (
    <AnimatedCard
      as={"article"}
      style={{
        gridColumn: `span ${technology.cols}`,
        gridRow: `span ${technology.rows}`,
      }}
      index={index}
      className={`${className} xl:cursor-none flex flex-col justify-end items-start xs:h-[284px] sm:h-[284px] lg:h-full rounded-[10px] p-5 relative overflow-hidden group`}
    >
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        loop
        muted
        autoPlay={isMobileResolution}
        playsInline={isMobileResolution}
        onCanPlay={handleVideoLoaded}
        className={`z-[1] w-full h-full technology-video object-cover object-bottom absolute top-0 left-0`}
      >
        <source src={technology.video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1] pointer-events-none" />
      <div className="z-[2] flex flex-col gap-2 pointer-events-none text-white-50">
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
    </AnimatedCard>
  );
};

export default TechnologiesCards;
