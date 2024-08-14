import { useEffect, useState } from "react";
import Hero from "./hero";
import Jobs from "./jobs";
import ApplyForm from "./apply-form";
import { Career } from "../../lib/types";
import { Helmet } from "react-helmet";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Stream Engine - Join Our Team</title>
        <meta
          name="description"
          content="Join Stream Engine! Explore career opportunities and help drive AI innovation in advertising and defense. Apply now to work with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI careers, job opportunities, AI advertising careers, defense technology jobs, AI-driven innovation, Stream Engine careers, tech jobs, work with AI, apply for jobs"
        />

        {/* ==== OG metatags ==== */}
        <meta property="og:title" content="Stream Engine - Join Our Team" />
        <meta
          property="og:description"
          content="Discover exciting career opportunities at Stream Engine. Be part of a team that uses advanced AI technology to revolutionize advertising and defense industries. Apply today and contribute to groundbreaking innovations."
        />
        <meta property="og:url" content="https://stream-engine.io/careers" />
        <meta property="og:image" content="/stream-engine-logo.svg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        {/* ==== X metatags ==== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@streamengineai" />
        <meta name="twitter:creator" content="@streamengineai" />
        <meta
          name="twitter:title"
          content="Stream Engine Careers - Join Our Team"
        />
        <meta
          name="twitter:description"
          content="Join Stream Engine! Explore career opportunities and help drive AI innovation in advertising and defense. Apply now to work with cutting-edge technology."
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
              "@type": "WebPage",
              "name": "Careers at Stream Engine",
              "description": "Explore career opportunities at Stream Engine and join our innovative team working on AI-powered solutions.",
              "url": "https://stream-engine.io/careers",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "careers@stream-engine.io",
                "contactType": "Careers",
                "areaServed": "US",
                "availableLanguage": ["English"]
              },
            }
          `}
        </script>
      </Helmet>

      <Hero />
      <Jobs setSelectedJob={setSelectedJob} />
      <ApplyForm selectedJob={selectedJob} />
    </>
  );
};

export default Careers;
