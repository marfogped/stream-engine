import React, { useEffect } from "react";
import gsap from "gsap";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

interface CustomCursorProps {
  className?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ className = "" }) => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const videos = document.querySelectorAll("video");

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursor) {
        gsap.to(cursor, {
          x: clientX,
          y: clientY,
        });
      }
    };

    const onMouseEnterVideo = () => {
      if (cursor) {
        gsap.to(cursor, {
          height: 60,
          width: 60,
          opacity: 1,
        });
      }
    };

    const onMouseLeaveVideo = () => {
      if (cursor) {
        gsap.to(cursor, {
          height: 0,
          width: 0,
          opacity: 0,
        });
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    videos.forEach((video) => {
      video.addEventListener("mouseenter", onMouseEnterVideo);
      video.addEventListener("mouseleave", onMouseLeaveVideo);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      videos.forEach((video) => {
        video.removeEventListener("mouseenter", onMouseEnterVideo);
        video.removeEventListener("mouseleave", onMouseLeaveVideo);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className={`${className} custom-cursor`}>
      <ArrowDownIcon className="h-6 w-6 text-black" />
    </div>
  );
};

export default CustomCursor;
