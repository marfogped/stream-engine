import React, { useState } from "react";
import HomeHero from "./hero/HomeHero";
import HomeServices from "./services/HomeServices";
import HomeContact from "./contact/HomeContact";
import HomeTechnologies from "./technologies/HomeTechnologies";
import { CustomCursor } from "../../components/ui";
import {
  LogoCarousel,
  // Benefits
} from "../../components/shared";
import { constants } from "../../constants";

const Homepage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <>
      <CustomCursor />
      <HomeHero setSelectedService={setSelectedService} />
      <LogoCarousel logos={constants.carouselLogos} />
      <HomeServices selectedService={selectedService} />
      <HomeTechnologies />
      {/* <Benefits
        benefitsList={constants.benefits}
        title="Leveraging AI for Automated Data Ingestion and Real-Time Threat Detection"
        description="Utilize advanced AI techniques to automate data ingestion processes, enabling comprehensive real-time threat detection. Benefit from scalable solutions that provide actionable insights through thorough data analysis."
      /> */}
      <HomeContact />
    </>
  );
};

export default Homepage;
