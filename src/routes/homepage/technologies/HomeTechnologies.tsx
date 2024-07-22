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
    description:
      "Complex Vision uses AI to analyze visual data in real-time, enhancing situational awareness and decision-making.",
  },
  {
    id: "2",
    cols: 4,
    rows: 1,
    title: "Chat Sentiment",
    icon: <ChatBubbleBottomCenterIcon className="text-white h-12 w-12" />,
    image: images.ComplexVisionBackground,
    description:
      "Chat Sentiment uses AI to analyze text in real-time, providing insights into user emotions and sentiment.",
  },
  {
    id: "3",
    cols: 2,
    rows: 1,
    title: "Translation Overlay",
    icon: <LanguageIcon className="text-white h-12 w-12" />,
    image: images.TranslationOverlayBackground,
    description:
      "Translation Overlay employs AI to provide real-time language translation for seamless communication.",
  },
  {
    id: "4",
    cols: 6,
    rows: 1,
    title: "Voice Detection",
    icon: <SpeakerWaveIcon className="text-white h-12 w-12" />,
    image: images.VoiceDetectionBackground,
    description:
      "Voice Detection utilizes AI to identify and process audio signals, improving speech recognition and response.",
  },
];

const HomeTechnologies: React.FC = () => {
  return (
    <section className="page-width">
      <div className="flex flex-col gap-2 mt-[80px]">
        <Typography as="h2" variant="xl" color="black">
          Our Technology
        </Typography>
        <Typography as="p" variant="md" className="text-gray-700">
          Explore our leading proprietary technology performing above industry
          levels.
        </Typography>
      </div>
      <div className="mt-10 flex flex-col lg:grid lg:grid-cols-8 lg:grid-rows-2 lg:h-[80vh] gap-2">
        {technologies.map((technology, technologyIdx) => (
          <TechnologiesCards
            key={technology.id}
            technology={technology}
            index={technologyIdx}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeTechnologies;
