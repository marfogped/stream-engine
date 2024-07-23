import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface ContainerAnimationProps {
  children: React.ReactNode;
  className?: string;
  origin?: number;
  end?: number;
}

const ContainerAnimation: React.FC<ContainerAnimationProps> = ({
  children,
  className = "",
  origin = -40,
  end = 0,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (targetRef.current) {
      gsap.fromTo(
        targetRef.current,
        { opacity: 0, y: origin, filter: "blur(10px)" },
        {
          opacity: 1,
          y: end,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 85%",
            end: "bottom center",
            once: true,
          },
        }
      );
    }
  }, [origin, end]);

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
};

export default ContainerAnimation;
