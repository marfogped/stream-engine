import React, { useRef } from "react";
import { Typography } from "../ui";
import { TechnologyProps } from "../../lib/types";

interface CardProps {
  technology: TechnologyProps;
  className?: string;
  index: number;
}

const TechnologiesCards: React.FC<CardProps> = ({ technology, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <article
      style={{
        gridColumn: `span ${technology.cols}`,
        gridRow: `span ${technology.rows}`,
      }}
      className={`${className} flex flex-col justify-end items-start xs:h-[284px] sm:h-[284px] lg:h-full rounded-[10px] p-5 relative overflow-hidden group`}
    >
      <video
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width="640"
        height="480"
        loop
        muted
        className="z-[1] w-full h-full object-cover object-center scale-[135%] absolute top-0 left-0"
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
          className="leading-tight text-gray-300 overflow-hidden lg:hidden lg:group-hover:flex origin-bottom"
        >
          {technology.description}
        </Typography>
      </div>
    </article>
  );
};

export default TechnologiesCards;
