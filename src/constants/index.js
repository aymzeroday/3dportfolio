import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  tensorflow,
  opencv,
  pandas,
  docker,
  meta,
  freelancer,
  agility,
  shopify,
  carrent,
  jobit,
  tripguide,
  breast,
  asl,
  twitter,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Opencv",
    icon: opencv,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Agility Logistics",
    icon: agility,
    iconBg: "#E6DEDD",
    date: "May 2022 - present",
    points: [
      "Developed comprehensive admin dashboards for Kuwait Customs using Entity Framework, SQL Server, Angular,and TypeScript, streamlining data management and decision-making processes.",
      "Designed and implemented a real-time GPS tracking system for container trucks, enabling efficient monitoring of multiple trucks and routes at the sea port, contributing to improved logistics management in a high-pressure environment",
      "Gathered, cleaned, and analyzed the data and Delivered actionable information that helped executives and managers make informed business decisions",
      "Developed a Machine Learning regression Model for Revenue Assurance and Forecasting of Shipping Containers Demurrage charges",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "March 2019 - Sep 2021",
    points: [
      "Developing and maintaining web applications using React.js, Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Has exceeded Expectations in working with new technologies and always over delivers and thinks outside the box",
    name: "Taha Ismail",
    designation: "Senior Software Engineer",
    company: "Agility Logistics",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Ahmad prepares impressive AI models and project ideas to add to the company",
    name: "Ashraf Allam",
    designation: "PMO",
    company: "Agility Logistics",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "A bright Engineer, Eagr to learn and implement new technologies in all fields",
    name: "Ahmed Seif",
    designation: "Project Lead",
    company: "Agility Logistics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Breast Cancer Detection",
    description:
      "Developed an autonomous intelligent system to study and classify cancer in breast tissue histology images.",
    tags: [
      {
        name: "OpenCv",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: breast,
    source_code_link: "https://github.com/",
  },
  {
    name: "ASL Translator",
    description:
      "Developed a real-time sign language translation system using machine learning and infrared image processing.",
    tags: [
      {
        name: "LeapMotion",
        color: "blue-text-gradient",
      },
      {
        name: "MobileNet",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    image: asl,
    source_code_link: "https://github.com/",
  },
  {
    name: "Twitter Media Bot",
    description:
      "A bot that tweets JPG and PNG images intelligently from reddit",
    tags: [
      {
        name: "nodeJS",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "TwitAPI",
        color: "blue-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };