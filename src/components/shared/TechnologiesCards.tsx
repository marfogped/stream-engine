import React from "react";
import { Typography } from "../ui";

interface TechnologyProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  cols: number;
  rows: number;
}

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
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    return (
      <>
        {words.slice(0, Math.ceil(words.length / 2)).join(" ")}
        <br />
        {words.slice(Math.ceil(words.length / 2)).join(" ")}
      </>
    );
  };
  return (
    <article
      style={{
        background: `url(${technology.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        gridColumn: `span ${technology.cols}`,
        gridRow: `span ${technology.rows}`,
      }}
      className={`${className} flex flex-col justify-end items-start xs:h-[284px] sm:h-[284px] lg:h-full rounded-[10px] p-5 relative overflow-hidden transition-all`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" />
      <div className="z-[2] flex flex-col gap-2">
        {technology.icon}
        <Typography variant="lg" color="white" className="leading-tight">
          {formatTitle(technology.title)}
        </Typography>
      </div>
    </article>
  );
};

export default TechnologiesCards;
