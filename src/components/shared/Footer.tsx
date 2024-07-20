import React from "react";
import { Typography } from "../ui";
import { Link } from "react-router-dom";
import { images, icons } from "../../constants";

const socials = [
  {
    id: "1",
    name: "Instagram",
    icon: icons.InstagramIcon,
    alt: "Instagram Logo",
    url: "",
  },
  {
    id: "2",
    name: "Facebook",
    icon: icons.FacebookIcon,
    alt: "Facebook Logo",
    url: "",
  },
  {
    id: "3",
    name: "LinkedIn",
    icon: icons.LinkedInIcon,
    alt: "LinkedIn Logo",
    url: "",
  },
  {
    id: "4",
    name: "WhatsApp",
    icon: icons.WhatsAppIcon,
    alt: "WhatsApp Logo",
    url: "",
  },
  {
    id: "5",
    name: "X",
    icon: icons.XIcon,
    alt: "X Logo",
    url: "",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-[80px]">
      <div className="page-width">
        <div className="flex flex-col gap-[20px] items-start">
          <picture>
            <img
              src={images.StreamEngineLogo}
              alt="AulaGIS Logo"
              height={100}
              width={250}
              loading="lazy"
              className="mix-blend-difference"
            />
          </picture>

          <div className="flex items-center gap-[5px]">
            {socials.map((social) => (
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
          </div>
        </div>

        <div className="flex flex-col gap-[10px] mt-[80px]">
          <Typography as="h2" variant="xl" color="black">
            Company
          </Typography>
          <ul role="list" className="flex flex-col">
            <li className="link-underline w-max">
              <Link to={"/"}>
                <Typography variant="lg" className="text-[#4F4F4F] font-medium">
                  FAQ
                </Typography>
              </Link>
            </li>
            <li className="link-underline w-max">
              <Link to={"/"}>
                <Typography variant="lg" className="text-[#4F4F4F] font-medium">
                  Privacy Policy
                </Typography>
              </Link>
            </li>
            <li className="link-underline w-max">
              <Link to={"/"}>
                <Typography variant="lg" className="text-[#4F4F4F] font-medium">
                  Terms of Service
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[40px] bg-primary page-width py-2">
        <Typography as="span" variant="md" className="black font-medium">
          2024 © Stream Engine. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
