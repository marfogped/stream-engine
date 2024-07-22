import icons from "./icons";
import images from "./images";

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

const navItems = [
  {
    label: "Services",
    path: "/",
    key: "services-opt",
  },
  {
    label: "Technologies",
    path: "/",
    key: "technologies-opt",
  },
  {
    label: "Contact",
    path: "/",
    key: "contact-opt",
  },
];
const carouselLogos = [
  {
    image: images.Comcast,
    alt: "Comcast Logo",
  },
  {
    image: images.Ea,
    alt: "Ea Logo",
  },
  {
    image: images.Damage,
    alt: "Damage Logo",
  },
  {
    image: images.Endeavor,
    alt: "Endeavor Logo",
  },
  {
    image: images.Havas,
    alt: "Havas Logo",
  },
  {
    image: images.Marketcast,
    alt: "Markecast Logo",
  },
  {
    image: images.Navigate,
    alt: "Navigate Logo",
  },
  {
    image: images.Pga,
    alt: "Pga Logo",
  },
  {
    image: images.Teamenvy,
    alt: "Teamenvy Logo",
  },
  {
    image: images.Usta,
    alt: "Usta Logo",
  },
  {
    image: images.Uta,
    alt: "Uta Logo",
  },
];

const services = [
  {
    title: "Defense Community",
    description:
      "We ingest large data sets to recognize behavioral patterns and threats in real time across video, audio, text and still image.",
    backgroundImage: images.DefenseBackground,
  },
  {
    title: "Advertising Industry",
    description:
      "The world's only accurate media valuation tool - analyzing logo recognition, voice callouts, and chat mentions in real time.",
    backgroundImage: images.AdvertisingBackground,
  },
];

export default {
  socials,
  navItems,
  carouselLogos,
  services,
};
