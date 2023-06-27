import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  unity,
  docker,
  MSKTechnologies,
  esprit,
  springboot,
  sofa,
  esprit_reclamation,
  sallah,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "CSS 3",
    icon: css,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Unity",
    icon: unity,
  }
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "MSK Technologies",
    icon: MSKTechnologies,
    iconBg: "#FFF",
    date: "June 2022 - August 2022",
    points: [
      "Develop a web application for grammar and spelling correction using artificial intelligence, React, Node.js, and MongoDB for the backend. ",
      "Implement artificial intelligence algorithms to analyze text and automatically detect grammatical and spelling errors. ",
      "Utilize Node.js to handle data processing logic. ",
      "Employ MongoDB as the chosen database management system."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Esprit",
    icon: esprit,
    iconBg: "#FFF",
    date: "February 2023 - June 2023",
    points: [
      "Design and develop a complaint management module for a CRM system using Spring Boot, Spring Cloud, React, Oracle, and Docker technologies.",
      "Implement a microservice architecture by leveraging Docker and Spring Cloud.",
      "Integrate RabbitMQ for asynchronous communication between various components.",
      "Implement a responsive user interface using ReactJS.",
    ],
  },
];


const projects = [
  {
    name: "Sofa Store",
    description:
      "A web application that allows users to browse and purchase sofas. Users can also view their order history and manage their account information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: sofa,
    source_code_link: "https://github.com/",
  },
  {
    name: "Esprit CRM",
    description:
      "A web application that allows ESPRIT students to submit complaints and track their status. It also allows administrators to manage complaints and generate reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
    ],
    image: esprit_reclamation,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fix my text",
    description:
      "A web application that allows users to correct their grammar and spelling mistakes. Users can also view their correction history and manage their account information. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "red-text-gradient",
      }
    ],
    image: sallah,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
