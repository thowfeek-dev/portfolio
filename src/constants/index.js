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
  docker,
  pillsbee,
  alignminds,
  pills,
  textronix,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Software Developer",
    company_name: "Caliczbee solutions pvt ltd, UL CyberPark",
    icon: pillsbee,
    iconBg: "#FFFFFF",
    date: "OCT 2023 - PRESENT",
    points: [
      "Engineered Parse Cloud Functions for Pillsbee, implementing advanced backend solutions to streamline processes and improve overall efficiency.",
      "Spearheaded the successful implementation of SIX key features, focusing on enhancing user experience and optimizing payment systems for improved transactional performance.",
      "Played a pivotal role in elevating platform efficiency by 20% through targeted backend development efforts, ensuring seamless operation and scalability.",
      "TECH USED: Flutter, JavaScript, Parse server, Node.js, MongoDB, Express.js, DevOps methodologies, Azure, Docker, AWS.",
    ],    
  },
  {
    title: "Software Developer",
    company_name: "Align minds Technologies,InfoPark",
    icon: alignminds,
    iconBg: "#E6DEDD",
    date: "MAY 2022 - JUN 2023",
    points: [
      "Developed backend functionality for Compbldr Project, utilizing Node.js for efficient and scalable solutions.",
      "Crafted optimized Node.js REST APIs, reducing response times by 15% and enhancing user experience.",
      "Created architectural diagrams for new features, facilitating effective communication and collaboration.",
      "Implemented core functionalities, ensuring seamless integration with frontend systems.",
      "Contributed to project success by delivering high-quality backend solutions with a focus on performance and scalability.",
      "TECH USED: JavaScript, Node.js, MySQL, React.js, SASS, CSS, Flutter, Bootstrap, Python, Git & GitHub.",
    ],
    
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Riswan V",
    designation: "CEO",
    company: "Pillsbee",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Aswin R",
    designation: "Manager",
    company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shafeek",
    designation: "Founder",
    company: "dozendynamics",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pillsbee ",
    description:
      "Pillsbee is an AI-powered B2B pharma platform that organizes and integrates Retail pharmacy procurement, logistics, and data across a single value chain for the daily fulfilment of pharma operations.",
    tags: [
      {
        name: "Parse Server",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: pills,
    source_code_link: "https://www.pillsbee.com",
  },
  {
    name: "TextTronix",
    description:
      "TextTronix is a sophisticated web-based chat application that enables you to stay in touch with your friends and loved ones at all times and from any location. With TextTronix, you can create chat rooms, share your location, and express yourself with a broad range of expressive emojis.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: textronix,
    source_code_link: "https://github.com/thowfeek-dev/TextTronix",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
