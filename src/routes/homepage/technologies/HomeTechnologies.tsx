import React from "react";
import { Typography } from "../../../components/ui";
import {
  EyeIcon,
  ChatBubbleBottomCenterIcon,
  LanguageIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { images } from "../../../constants";

const technologies = [
  {
    id: "1",
    title: "Complex Vision",
    icon: EyeIcon,
    image: images.ChatSentimentBackground,
  },
  {
    id: "2",
    title: "Chat Sentiment",
    icon: ChatBubbleBottomCenterIcon,
    image: images.ComplexVisionBackground,
  },
  {
    id: "3",
    title: "Translation Overlay",
    icon: LanguageIcon,
    image: images.ChatSentimentBackground,
  },
  {
    id: "4",
    title: "Voice Detection",
    icon: SpeakerWaveIcon,
    image: images.ComplexVisionBackground,
  },
];

const HomeTechnologies: React.FC = () => {
  return (
    <section className="page-width">
      <div className="flex flex-col gap-2 mt-[80px]">
        <Typography variant="xl" color="black">
          Our Technology
        </Typography>
        <Typography variant="md" className="text-gray-700">
          Explore our leading proprietary technology performing above industry
          levels.
        </Typography>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {technologies.map((technology) => (
          <article
            key={technology.id}
            style={{ background: `url(${technology.image})` }}
            className="flex flex-col justify-end items-start xs:h-[284px] sm:h-[284px] rounded-[10px] p-5 relative overflow-hidden hover:scale-105 transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" />
            <div className="z-[2]">
              <technology.icon className="text-white h-12 w-12" />
              <Typography variant="xl" color="white">
                {technology.title}
              </Typography>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeTechnologies;
