import React from "react";
import HomeHero from "./hero/HomeHero";
import HomeServices from "./services/HomeServices";
import HomeContact from "./contact/HomeContact";
import HomeTechnologies from "./technologies/HomeTechnologies";
import { LogoCarousel } from "../../components/shared";
import { images } from "../../constants";

const carouselLogos = [
  {
    image: images.Comcast,
    alt: "Comcast Logo",
  },
  {
    image: images.Ea,
    alt: "Ea Logo",
  },
  {
    image: images.Damage,
    alt: "Damage Logo",
  },
  {
    image: images.Endeavor,
    alt: "Endeavor Logo",
  },
  {
    image: images.Havas,
    alt: "Havas Logo",
  },
  {
    image: images.Marketcast,
    alt: "Markecast Logo",
  },
  {
    image: images.Navigate,
    alt: "Navigate Logo",
  },
  {
    image: images.Pga,
    alt: "Pga Logo",
  },
  {
    image: images.Teamenvy,
    alt: "Teamenvy Logo",
  },
  {
    image: images.Usta,
    alt: "Usta Logo",
  },
  {
    image: images.Uta,
    alt: "Uta Logo",
  },
];

const Homepage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <LogoCarousel logos={carouselLogos} />
      <HomeServices />
      <HomeTechnologies />
      <HomeContact />
    </>
  );
};

export default Homepage;
