import { BenefitsProps, Career } from "../lib/types";
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

const careers: Career[] = [
  {
    jobDescription: "Product Manager",
    company:
      "Stream Engine powers industry leading Artificial Intelligence and Machine Learning products to measure and analyze brand recognition and sentiment across streaming and digital platforms. Utilizing breakthrough technology and machine-learning algorithms, we modernized how organizations derive actionable insights by analyzing content in real time. Stream Engine operates at the highest levels of excellence and values hard work, integrity, and honesty above all else. We service both the traditional advertising and media industry as well as US Defense organizations.",
    role: "The product manager will gather and prioritize product and customer requirements, and support customer-centric product enhancement or solutions by working closely with engineering, sales, marketing, and account management teams.",
    responsibilities: [
      "Own end-to-end product development by understanding customer painpoints, defining product requirements, managing development and testing, and launches",
      "Clearly communicate information to/from accounts and tech – in the process, educating the accounts team on the product, and conversely, educating the tech team on the business",
      "Lead cross-functional teams including engineering, product design, operations, marketing, go-to-market and finance.",
      "Present product capabilities, product solutions, data, or other materials to clients as needed",
      "Communicates and collaborates with sales and marketing teams to provide training and information required to promote and sell new projects, programs, and systems.",
      "Work with executive leaders to determine and execute the product strategy of the business",
    ],
    skillsAndExperience: [
      "Excellent written, verbal, and interpersonal communication skills",
      "Technical degree in computers science, engineering or related field",
      "5+ years of experience in a high-growth software startup",
      "Ability to manage projects and people in a remote work scenario",
      "Highly organized with a critical view on the process – ready to define new ways of working and refine existing methodologies",
      "Able to manage diverse stakeholders, lead a constructive debate, and see both sides of an argument",
      "Experience with SQL and Python",
    ],
  },
  {
    jobDescription: "Data Analyst",
    company:
      "Stream Engine powers industry leading Artificial Intelligence and Machine Learning products to measure and analyze brand recognition and sentiment across streaming and digital platforms. Utilizing breakthrough technology and machine-learning algorithms, we modernized how organizations derive actionable insights by analyzing content in real time. Stream Engine operates at the highest levels of excellence and values hard work, integrity, and honesty above all else. We service both the traditional advertising and media industry as well as US Defense organizations.",
    role: "Develop and implement a set of techniques or analytics applications to transform raw data into meaningful insights using data-oriented programming languages and visualization software. Apply data mining, data modeling, natural language processing, and machine learning to extract and analyze information from large structured and unstructured datasets. Visualize, interpret, and report data findings. May create dynamic data reports.",
    responsibilities: [
      "Work with interdepartmental teams to develop and implement new processes and best practices.",
      "Apply feature selection algorithms to models predicting outcomes of interest for clients.",
      "Clean and manipulate raw data using statistical software.",
      "Compare models using statistical performance metrics, such as loss functions or proportion of explained variance.",
      "Create graphs, charts, or other visualizations to convey the results of data analysis using specialized software.",
      "Deliver oral or written presentations of the results of mathematical modeling and data analysis to management or other end users.",
      "Identify business problems or management objectives that can be addressed through data analysis.",
      "Identify relationships and trends or any factors that could affect the results of the data analysis",
      "Research and identify emerging analytic trends and technologies in the market and/or specific to client categories.",
      "Recommend data-driven solutions to key stakeholders.",
      "Test, validate, and reformulate models, to ensure accurate prediction of outcomes of interest.",
      "Write new functions or applications to conduct analysis.",
      "Use the company and/or industry data to answer business questions and communicate those answers to other teams in the company.",
    ],
    skillsAndExperience: [
      "Minimum of 3 years' related work experience in an analytical or technical role.",
      "Strong analytical skills and exceptional attention to detail.",
      "Proficiency with data manipulation, including the ability to write scripts.",
      "Demonstrated experience with some or all of the following: data modeling, statistics, experiment design, predictive modeling",
      "Proficient in SQL; Adept in at least one visualization tool such as Tableau; R or Python knowledge is a plus",
    ],
  },
  {
    jobDescription: "Account Executive",
    company:
      "Stream Engine powers industry leading Artificial Intelligence and Machine Learning products to measure and analyze brand recognition and sentiment across streaming and digital platforms. Utilizing breakthrough technology and machine-learning algorithms, we modernized how organizations derive actionable insights by analyzing content in real time. Stream Engine operates at the highest levels of excellence and values hard work, integrity, and honesty above all else. We service both the traditional advertising and media industry as well as US Defense organizations.",
    role: "We are looking for an Account Executive to manage projects and act as a liaison between clients, Stream Engine, and 3rd parties. You will be the key contact of your assigned projects. Your work will be essential to preserve customer satisfaction through listening to preferences, addressing them with fruitful advice/service, and managing expectations, budgets, deadlines, and delivery dates. Accuracy of information on these projects is essential. The ideal candidate will be a great listener, extremely detailed oriented, and have an eye for design.",
    responsibilities: [
      "You will own, along with the other business team members, the production, identification, and management of business opportunities that can measurably build the client’s day-to-day business",
      "Work with internal stakeholders to develop and execute comprehensive account strategy, drive strategy and ensure account team members are aligned on approach, current status, and actions required",
      "Collaborate with operations, engineering, and product teams to provide the voice of the customer internally; be known as the expert on the customer.",
      "Develop and foster strong customer connections with executive stakeholders across multiple business units and levels within an organization",
      "Exhibit integrity, professionalism, dependability, and mature thinking",
      "Thrive in a fast-paced, dynamic environment",
      "Perform other responsibilities as assigned",
      "Monitor industry trends and competitor activities to identify potential business opportunities and threats.",
      "Assist in the development and delivery of training programs for clients to maximize the use of Stream Engine’s products and services.",
    ],
    skillsAndExperience: [
      "Bachelor's degree from a four-year college/university",
      "3+ years of enterprise customer management experience",
      "Experience building strategies to effectively grow and retain revenue",
      "The ability to drive the renewal process through deal closure",
      "Excellent writing and communication skills",
      "Experience creating, developing, and communicating executive-level materials",
      "Ability to work on high volume, high-velocity omnichannel businesses",
      "Ability to work independently and with a team in a fast-paced, rapidly-changing entrepreneurial environment",
      "Confidence and skill handling clients in person and on the phone",
      "Excellent proficiency with MS Excel, Word, PowerPoint, and Google Docs",
      "Proven track record of achieving sales targets and KPIs.",
      "Strong problem-solving skills and the ability to think strategically.",
      "Familiarity with CRM software and sales analytics tools.",
    ],
  },
];

export default {
  socials,
  navItems,
  carouselLogos,
  services,
  benefits,
  careers,
};
