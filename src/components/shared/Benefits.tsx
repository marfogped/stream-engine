import React, { useState } from "react";
import { Typography } from "../ui";
import { BenefitsProps } from "../../lib/types";

interface BenefitsComponentProps {
  title: string;
  description: string;
  benefitsList: Array<BenefitsProps>;
}

const Benefits: React.FC<BenefitsComponentProps> = ({
  title,
  description,
  benefitsList,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  return (
    <div className="flex flex-col lg:flex-row min-h-[75vh] pt-[80px]">
      <div className="p-[20px] xl:p-[100px] lg:w-1/2 bg-black text-white">
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
                  className="mb-4 p-4 bg-[#3D3D3D] w-full h-full rounded flex items-center cursor-pointer"
                  onClick={() => setSelectedImage(benefit.image)}
                >
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    height={48}
                    width={48}
                    className="w-12 h-12 mr-4 rounded-full object-cover"
                  />
                  <Typography as="p" variant="sm" className="text-gray-300">
                    {benefit.title}
                  </Typography>
                </li>
              ))
            : ""}
        </ul>
      </div>
      <div
        className="w-full lg:w-1/2 min-h-[75vh] bg-cover bg-center transition-all"
        style={{ backgroundImage: `url(${selectedImage})` }}
      ></div>
    </div>
  );
};

export default Benefits;
