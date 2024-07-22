import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const mySplitText = new SplitType(textRef.current, { types: "chars" });
      const chars = mySplitText.chars;

      const ctx = gsap.context(() => {
        gsap.from(chars, {
          yPercent: 200,
          stagger: 0.05,
          duration: 0.4,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        });
      });

      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <span ref={textRef} className="split w-fit">
      {text}
    </span>
  );
};

export default TextAnimation;
