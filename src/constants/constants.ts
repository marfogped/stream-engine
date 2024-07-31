import { BenefitsProps } from "../lib/types";
import icons from "./icons";
import images from "./images";

const socials = [
  {
    id: "1",
    name: "Instagram",
    icon: icons.InstagramIcon,
    alt: "Instagram Logo",
    url: "https://www.instagram.com/streamengineai/",
  },
  {
    id: "2",
    name: "LinkedIn",
    icon: icons.LinkedInIcon,
    alt: "LinkedIn Logo",
    url: "https://linkedin.com/company/stream-engine-ai",
  },
  {
    id: "3",
    name: "X",
    icon: icons.XIcon,
    alt: "X Logo",
    url: "https://x.com/streamengineai",
  },
];

const navItems = [
  {
    label: "Services",
    path: "services",
    key: "services-opt",
  },
  {
    label: "Technology",
    path: "technology",
    key: "technology-opt",
  },
  {
    label: "Contact",
    path: "contact",
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
  {
    image: images.Epic,
    alt: "Epic Logo",
  },
  {
    image: images.Geico,
    alt: "Geico Logo",
  },
  {
    image: images.Intel,
    alt: "Intel Logo",
  },
  {
    image: images.Mls,
    alt: "Mls Logo",
  },
  {
    image: images.Omega,
    alt: "Omega Logo",
  },
  {
    image: images.OpticGaming,
    alt: "Optic Gaming Logo",
  },
  {
    image: images.PaneraBread,
    alt: "Panera Bread Logo",
  },
  {
    image: images.Roccat,
    alt: "Roccat Logo",
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

const benefits: BenefitsProps[] = [
  {
    id: "1",
    title: "Real-time threat detection",
    image:
      "https://images.unsplash.com/photo-1676676701269-65de47175adf?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Comprehensive data analysis",
    image:
      "https://images.unsplash.com/photo-1619910301459-ffd575f32651?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Scalability",
    image:
      "https://images.unsplash.com/photo-1601690893510-097a654804c2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Actionable insights",
    image:
      "https://images.unsplash.com/photo-1644688389824-adbf547b229f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default {
  socials,
  navItems,
  carouselLogos,
  services,
  benefits,
};
