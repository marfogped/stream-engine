import React, { useRef, useEffect, CSSProperties } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedElementProps {
  as?: React.ElementType;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  index?: number;
  animationProps?: gsap.TweenVars;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  as: Component = "div",
  className,
  style,
  children,
  index = 0,
  animationProps,
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: -40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%",
            end: "bottom 50%",
            once: true,
          },
          ...animationProps,
        }
      );
    }
  }, [index, animationProps]);

  return (
    <Component ref={elementRef} className={className} style={style}>
      {children}
    </Component>
  );
};

export default AnimatedElement;
