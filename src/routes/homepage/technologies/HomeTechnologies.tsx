import React from "react";
import { Typography } from "../../../components/ui";
import {
  EyeIcon,
  ChatBubbleBottomCenterIcon,
  LanguageIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { images } from "../../../constants";
import { TechnologiesCards } from "../../../components/shared";

const technologies = [
  {
    id: "1",
    cols: 2,
    rows: 2,
    title: "Complex Vision",
    icon: <EyeIcon className="text-white h-12 w-12" />,
    image: images.ChatSentimentBackground,
  },
  {
    id: "2",
    cols: 4,
    rows: 1,
    title: "Chat Sentiment",
    icon: <ChatBubbleBottomCenterIcon className="text-white h-12 w-12" />,
    image: images.ComplexVisionBackground,
  },
  {
    id: "3",
    cols: 2,
    rows: 1,
    title: "Translation Overlay",
    icon: <LanguageIcon className="text-white h-12 w-12" />,
    image: images.TranslationOverlayBackground,
  },
  {
    id: "4",
    cols: 6,
    rows: 1,
    title: "Voice Detection",
    icon: <SpeakerWaveIcon className="text-white h-12 w-12" />,
    image: images.VoiceDetectionBackground,
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
      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:h-[80vh] gap-2">
        {technologies.map((technology) => (
          <TechnologiesCards key={technology.id} technology={technology} />
        ))}
      </div>
    </section>
  );
};

export default HomeTechnologies;
