import React, { useState, useEffect } from "react";
import HomeHero from "./hero/HomeHero";
import HomeServices from "./services/HomeServices";
import HomeContact from "./contact/HomeContact";
import HomeTechnologies from "./technologies/HomeTechnologies";
import { CustomCursor } from "../../components/ui";
import { LogoCarousel } from "../../components/shared";
import { constants } from "../../constants";
import { Helmet } from "react-helmet";

const Homepage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Stream Engine provides advanced AI-powered advertising and defense services. We use cutting-edge technology to optimize advertising campaigns and enhance defense operations with real-time analysis."
        />
        <meta
          name="keywords"
          content="AI advertising, defense with AI, cutting-edge technology, real-time analysis, advertising campaign optimization, security, artificial intelligence, Stream Engine"
        />
        <meta
          property="og:title"
          content="Stream Engine - AI-Powered Advertising and Defense"
        />
        <meta
          property="og:description"
          content="Stream Engine offers advanced advertising and defense solutions using artificial intelligence. Our innovative technology enables real-time data analysis to maximize the effectiveness and security of our operations."
        />
        <meta property="og:url" content="https://stream-engine.io" />
        <meta property="og:image" content="/stream-engine-logo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        {/* ==== X metatags ==== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@streamengineai" />
        <meta name="twitter:creator" content="@streamengineai" />
        <meta name="twitter:title" content="Stream Engine - Home" />
        <meta
          name="twitter:description"
          content="Join Stream Engine! Explore career opportunities and help drive AI innovation in advertising and defense. Apply now to work with cutting-edge technologyStream Engine provides advanced AI-powered advertising and defense services. We use cutting-edge technology to optimize advertising campaigns and enhance defense operations with real-time analysis."
        />
        <meta
          name="twitter:image"
          content="https://stream-engine.io/stream-engine-logo.svg"
        />

        {/* ==== Schema Markup ==== */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stream Engine",
              "url": "https://stream-engine.io",
              "logo": "https://stream-engine.io/logo.png",
              "sameAs": [
                "https://x.com/streamengineai",
                "https://www.linkedin.com/company/stream-engine-ai/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@stream-engine.io",
                "contactType": "Customer Service",
                "areaServed": "US",
                "availableLanguage": ["English"]
              },
            }
          `}
        </script>
      </Helmet>
      <CustomCursor />
      <HomeHero setSelectedService={setSelectedService} />
      <LogoCarousel logos={constants.carouselLogos} />
      <HomeServices selectedService={selectedService} />
      <HomeTechnologies />
      <HomeContact />
    </>
  );
};

export default Homepage;
