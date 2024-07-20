import React from "react";
import HomeHero from "./hero/HomeHero";
import HomeServices from "./services/HomeServices";
import HomeContact from "./contact/HomeContact";
import HomeTechnologies from "./technologies/HomeTechnologies";

const Homepage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeContact />
      <HomeTechnologies />
    </>
  );
};

export default Homepage;
