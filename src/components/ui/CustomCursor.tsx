import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const CustomCursor: React.FC = () => {
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const technologyVideos = document.querySelectorAll(".technology-video");
    const heroVideos = document.querySelectorAll(".hero-video");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursor) {
        gsap.to(cursor, {
          x: clientX,
          y: clientY,
        });
      }
    };

    const onMouseEnterTechnologyVideo = () => {
      if (cursor) {
        gsap.to(cursor, {
          height: 60,
          width: 60,
          opacity: 1,
        });
      }
    };

    const onMouseLeaveTechnologyVideo = () => {
      if (cursor) {
        gsap.to(cursor, {
          height: 0,
          width: 0,
          opacity: 0,
        });
      }
    };

    const onMouseEnterHeroVideo = () => {
      setIsHoveringHero(true);
      if (cursor) {
        gsap.to(cursor, {
          height: 60,
          width: 60,
          opacity: 1,
        });
      }
    };

    const onMouseLeaveHeroVideo = () => {
      setIsHoveringHero(false);
      if (cursor) {
        gsap.to(cursor, {
          height: 0,
          width: 0,
          opacity: 0,
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    technologyVideos.forEach((video) => {
      video.addEventListener("mouseenter", onMouseEnterTechnologyVideo);
      video.addEventListener("mouseleave", onMouseLeaveTechnologyVideo);
    });

    heroVideos.forEach((video) => {
      video.addEventListener("mouseenter", onMouseEnterHeroVideo);
      video.addEventListener("mouseleave", onMouseLeaveHeroVideo);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      technologyVideos.forEach((video) => {
        video.removeEventListener("mouseenter", onMouseEnterTechnologyVideo);
        video.removeEventListener("mouseleave", onMouseLeaveTechnologyVideo);
      });
      heroVideos.forEach((video) => {
        video.removeEventListener("mouseenter", onMouseEnterHeroVideo);
        video.removeEventListener("mouseleave", onMouseLeaveHeroVideo);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className={`custom-cursor`}>
      {isHoveringHero ? <ArrowDownIcon className="h-6 w-6 text-black" /> : ""}
    </div>
  );
};

export default CustomCursor;
