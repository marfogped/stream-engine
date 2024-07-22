import React, { useState } from "react";
import HomeHero from "./hero/HomeHero";
import HomeServices from "./services/HomeServices";
import HomeContact from "./contact/HomeContact";
import HomeTechnologies from "./technologies/HomeTechnologies";
import { CustomCursor } from "../../components/ui";
import { LogoCarousel } from "../../components/shared";
import { constants } from "../../constants";

const Homepage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <>
      <CustomCursor className="text-white" />
      <HomeHero setSelectedService={setSelectedService} />
      <LogoCarousel logos={constants.carouselLogos} />
      <HomeServices selectedService={selectedService} />
      <HomeTechnologies />
      <HomeContact />
    </>
  );
};

export default Homepage;
