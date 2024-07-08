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
  meta,
  nizzChain,
  nizzFit,
  googleclone,
  threejs,
  github,
  Google,
  logo,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Digital Marketing ",
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
    title: "Open Source Contributor",
    company_name: "OpenSource Community",
    icon: github,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Contributed to over 50 open-source projects, primarily focusing on front-end development using React.js and related technologies.",
      "Collaborated with various open-source teams, including designers, product managers, and developers, to build and maintain high-quality web applications.",
      "Implemented responsive design principles and ensured compatibility across different browsers and devices.",
      "Actively participated in the open-source community by reviewing code, providing feedback, and mentoring fellow contributors.",
    ],
  },
  {
    title: "META Front-End Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Completed the Meta Front-End Developer course, mastering React.js and other essential web technologies.",
      "Participated in webathons, solving real-world web development challenges and collaborating with peers to create innovative solutions.",
      "Gained hands-on experience in implementing responsive designs and ensuring cross-browser compatibility through various course projects.",
      "Engaged in code reviews and peer feedback sessions to improve code quality and development practices during the course.",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    company_name: "Google",
    icon: Google,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Completed Google's Digital Marketing certification, focusing on lead generation strategies and effective online marketing techniques.",
      "Gained practical skills in SEO, mastering techniques to improve website visibility and search engine rankings.",
      "Founded a startup named Zarliam, which achieved top search index rankings on Google and successfully generated sales through effective SEO and digital marketing strategies.",
      "Applied knowledge from the certification and self-learning to optimize Zarliam's online presence, demonstrating a strong understanding of digital marketing principles.",
    ],
  },
  {
    title: "Freelance Full Stack Developer & Digital Marketer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Providing comprehensive freelance services in front-end and back-end web development, specializing in technologies like React.js and Node.js.",
      "Collaborating with clients to develop, maintain, and optimize web applications, ensuring high performance and user-friendly design.",
      "Offering digital marketing and SEO services to enhance clients' online presence, improve search engine rankings, and drive business growth.",
      "Seeking opportunities to join or form a team to deliver high-quality projects, leveraging my diverse skills in development and marketing.",
      "Demonstrating versatility by working on diverse projects across different industries, ensuring responsive design and cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umair proved me wrong.",
    name: "Genevieve",
    designation: "CFO",
    company: "SMM store",
    image: "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Umair does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
   image: "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
  {
    testimonial:
      "After Umair optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ethan",
    designation: "CTO",
    company: "456 Enterprises",
   image: "https://th.bing.com/th/id/R.74760693646c701efeded01334dee357?rik=pJk9zY2UtYFYcA&pid=ImgRaw&r=0",
  },
];

const projects = [
  {
    name: "Nizzchain",
    description:
      "Nizzchain is a web platform that provides the latest cryptocurrency news, market caps, and real-time top coin graphs, offering essential insights for investors, traders, and enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "apiintegration",
        color: "orange-text-gradient",
      },
    ],
    image: nizzChain,
    source_code_link: "https://github.com/umairniaziofficial/nizzichain",
  },
  {
    name: "Google Search Clone",
    description:
      "This project is a pixel-perfect replica of Google's to align every element with precision. It was developed to understand Google's indexing and display mechanisms while efficiently handling limited API calls for images and pagination.",
    tags: [
      {
        name: "react",
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
    image: googleclone, 
    source_code_link: "https://github.com/umairniaziofficial/GoogleSearchClone",
  },
  {
    
      "name": "NizzFit",
      "description": "NizzFit is a fitness platform developed to provide an all-in-one solution for workout routines. Inspired by the need for seamless access to exercise information at the gym, NizzFit allows users to quickly search and find comprehensive workout guides, eliminating the hassle of searching through multiple sources.",
      "tags": [
        {
          "name": "react",
          "color": "blue-text-gradient"
        },
        {
          "name": "exercisedb",
          "color": "green-text-gradient"
        },
        {
          "name": "tailwind",
          "color": "pink-text-gradient"
        }
      ],
      "image": nizzFit,  
      "source_code_link": "https://github.com/umairniaziofficial/nizzfit"    
  },
];

export { services, technologies, experiences, testimonials, projects };
