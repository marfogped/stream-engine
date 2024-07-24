import React from "react";
import { Typography } from "../ui";
import { BenefitsProps } from "../../lib/types";

interface BenefitsComponentProps {
  title: string;
  description: string;
  benefitsList: Array<BenefitsProps>;
  backgroundImage: string;
}

const Benefits: React.FC<BenefitsComponentProps> = ({
  title,
  description,
  backgroundImage,
  benefitsList,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-1/2 p-8 bg-black text-white">
        <Typography as="h2" variant="lg" color="white">
          {title}
        </Typography>
        <Typography as="p" variant="sm" className="text-gray-300">
          {description}
        </Typography>
        <ul
          role="list"
          className="grid grid-cols-1 xl:grid-cols-2 mt-[40px] gap-[10px] w-full"
        >
          {benefitsList && benefitsList.length
            ? benefitsList.map((benefit, benefitIdx) => (
                <li
                  key={`${benefit.title}-${benefitIdx}`}
                  className="mb-4 p-4 bg-gray-800 w-full h-full rounded flex items-center"
                >
                  <img
                    src={benefit.image}
                    alt="Real-time Threat Detection"
                    className="w-min h-12 mr-4 rounded-full object-cover"
                  />
                  <Typography as="p" variant="sm" className="text-gray-300">
                    {benefit.title}
                  </Typography>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div className="lg:w-1/2 h-full">
        <img
          src={backgroundImage}
          alt={`${title} Background`}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Benefits;
