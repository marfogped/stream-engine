import React from "react";

interface LogoCarouselProps {
  logos: Array<{
    image: string;
    alt: string;
  }>;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  return (
    <div className="py-6 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-28 [&_img]:max-h-14 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <img
              className="grayscale object-contain"
              loading="lazy"
              width={150}
              height={75}
              src={logo.image}
              alt={logo.alt}
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-28 [&_img]:max-h-14 animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <img
              className="grayscale object-contain"
              loading="lazy"
              width={150}
              height={75}
              src={logo.image}
              alt={logo.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
