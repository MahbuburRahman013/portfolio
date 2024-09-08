import {
  frontend,
  backend,
  ux,
  prototyping,
  typescript,
  tailwind,
  git,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://i.ibb.co/bByL2D0/1.png",
  },
  {
    name: "CSS 3",
    icon: "https://i.ibb.co/2YGVRS9/2.png",
  },
  {
    name: "JavaScript",
    icon: "https://i.ibb.co/k9pzYW3/3.png",
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: "https://i.ibb.co/vmYgRGP/5.png",
  },
  {
    name: "Next JS",
    icon: "https://i.ibb.co/zspkJwj/1.png",
  },
  {
    name: "Redux Toolkit",
    icon: "https://i.ibb.co/LhpyGRq/6.png",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "graphql",
  //   icon: "https://i.ibb.co/8PvkhJV/7.png",
  // },
  {
    name: "Node JS",
    icon: "https://i.ibb.co/cLcN0Q1/4.png",
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firefox",
    icon: "https://i.ibb.co/qd94JPL/4.png",
  },

  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "heroku",
  //   icon: "https://i.ibb.co/7nzdpn1/9.png",
  // },
  {
    name: "mongodb",
    icon: "https://i.ibb.co/2nb9pJ4/8.png",
  },
];

const experiences = [
  // {
  //   title: "Front-End Developer",
  //   company_name: "ENOCH",
  //   icon: "https://i.ibb.co/Zh1Kzd2/enoch-1.png",
  //   iconBg: "#333333",
  //   date: "Dec 2022 - Currently",
  //   link: "https://www.linkedin.com/company/enoch-generativeaisocialcontent/people/",
  // },
  {
    title: "MERN Stack Developer",
    company_name: "Global Door IT",
    icon: "https://i.ibb.co.com/XtNkjRR/Global-Door-It.jpg",
    iconBg: "#333333",
    date: "Jul 2022 - Dec 2022 · 6 mos",
    link: "https://www.linkedin.com/company/across-the-globe-atg-/",
  },
  {
    title: "Next Level Web Development",
    company_name: "Advance Web Development Course",
    icon: "https://i.ibb.co/NL9S099/ph-removebg-preview.png",
    iconBg: "#333333",
    date: "April 2023 - Present",
    link: "https://web.programming-hero.com/home/",
  },
  {
    title: "Complete Web Development",
    company_name: "Web Development Course",
    icon: "https://i.ibb.co/NL9S099/ph-removebg-preview.png",
    iconBg: "#333333",
    date: "Jul 2023 - Dec 2022 · 6 mos",
    link: "https://web.programming-hero.com/home/",
  },
];

const projects = [
  {
    id: "project-2",
    name: "SPRC BD",
    description:
      "The website for physiotherapy specialist Shafiqul Islam is a professional portfolio site that highlights his qualifications and services with a clean, user-friendly design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co.com/nP0KJBF/Project-one.png",
    repo: "https://github.com/MahbuburRahman013/",
    demo: "https://www.sprcbd.com/",
  },
  {
    id: "project-4",
    name: "TRC Sapphire Publisher",
    description: `TRC Sapphire Publisher is an academic publishing platform focused on helping authors publish scholarly books with comprehensive support.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co.com/HpPvXCK/Screenshot-2024-09-09-004826.png",
    repo: "https://github.com/MahbuburRahman013/",
    demo: "https://www.trc-sapphirepublisher.com/",
  },
  {
    id: "project-5",
    name: "Physiotherapist",
    description:
      "The website is a professional service site for advanced physiotherapy, emphasizing over 25 years of experience in NHS and private practice, and providing specialized care to keep clients active.",
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
    image: "https://i.ibb.co.com/0htp8Wm/Screenshot-2024-09-09-005800.png",
    repo: "https://github.com/MahbuburRahman013/",
    demo: "https://physiotherapist.vercel.app/",
  },
  {
    id: "project-3",
    name: "Math Magicians",
    description: "This is a single-page calculator app built with React",
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
    image: "https://i.ibb.co/BcrVJsf/clander.png",
    repo: "https://github.com/MahbuburRahman013/",
    demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
