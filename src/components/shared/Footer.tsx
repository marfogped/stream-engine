import React from "react";
import { Typography } from "../ui";
import { Link } from "react-router-dom";
import { images, 
  // constants 
} from "../../constants";
import { ContainerAnimation } from "../ui";

const Footer: React.FC = () => {
  return (
    <footer className="mt-[80px] lg:mt-[80px]">
      <div className="page-width flex xs:flex-col sm:flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex flex-col gap-[20px] items-start">
          <Link to={"/"}>
            <picture>
              <img
                src={images.StreamEngineLogo}
                alt="Stream Engine Logo"
                height={100}
                width={250}
                loading="lazy"
                className="w-32 mix-blend-difference"
              />
            </picture>
          </Link>

          {/* <div className="flex items-center gap-[5px]">
            {constants.socials.map((social) => (
              <a
                aria-label={`${social.alt}`}
                key={social.id}
                href={social.url}
                target="_blank"
                className="cursor-pointer transition-all hover:scale-125"
              >
                {social.name.toLowerCase() === "whatsapp" && (
                  <social.icon className="text-black" />
                )}
                {social.name.toLowerCase() === "linkedin" && (
                  <social.icon className="text-black" />
                )}
                {social.name.toLowerCase() === "instagram" && (
                  <social.icon className="text-black" />
                )}
                {social.name.toLowerCase() === "x" && (
                  <social.icon className="text-black" />
                )}
                {social.name.toLowerCase() === "facebook" && (
                  <social.icon className="text-black" />
                )}
              </a>
            ))}
          </div> */}
        </div>

        <ContainerAnimation className="flex flex-col gap-[10px] xs:mt-[80px] md:mt-[80px] lg:mt-[0px]">
          <Typography as="h2" variant="md" color="black">
            Company
          </Typography>
          <ul role="list" className="flex flex-col">
            <li className="link-underline w-max">
              <Link to={"/privacy-policy"}>
                <Typography
                  variant="sm"
                  className="text-[#4F4F4F] link-underline font-medium"
                >
                  Privacy Policy
                </Typography>
              </Link>
            </li>
          </ul>
        </ContainerAnimation>
      </div>
      <div className="mt-[40px] bg-primary page-width py-2 flex justify-center">
        <Typography as="span" variant="sm" className="font-medium">
          2024 © Stream Engine. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
