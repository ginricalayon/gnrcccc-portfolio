export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Project",
    href: "#project",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Maynard Quitoriano",
    position: "CEO",
    img: "assets/review4.png",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const myProjects = [
  {
    title: "PGMS Mobile - Mobile Application",
    desc: "PGMS Mobile is a mobile application designed to enhance the user experience of the PGMS platform. It offers a user-friendly interface for viewing membership details, recent check-in, schedules, payment history, profile, tracking attendance, updating profile, username, and password.",
    subdesc:
      "Built with React-Native, Expo, TypeScript, Nativewind, Node.js, Express.js, and MySQL. It is designed to be user-friendly and efficient, making it easy for users to manage their gym activities.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/pgms-mobile.mp4",
    logo: "/assets/pgms-logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React Native",
        path: "/assets/react-native.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "assets/expo.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Nativewind",
        path: "/assets/native-wind.svg",
      },
      {
        id: 5,
        name: "Node.js",
        path: "/assets/node-js.svg",
      },
      {
        id: 6,
        name: "Express.js",
        path: "/assets/express-js.svg",
      },
      {
        id: 7,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
  {
    title: "PGMS - Praktisado Gym Management System",
    desc: "PGMS is a comprehensive gym management system designed to streamline operations for fitness centers. It offers features such as member registration, attendance tracking, and payment processing, all in one platform.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Microsoft Visual Studio, Visual Basic .NET, Guna UI, MySQL, Digital Persona U.Are.U 4500 and Crystal Report, PGMS is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/PGMS.mp4",
    logo: "/assets/pgms-logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Microsoft Visual Studio",
        path: "/assets/visual-studio-2013.svg",
      },
      {
        id: 2,
        name: "VB.Net",
        path: "/assets/vb-net.svg",
      },
      {
        id: 3,
        name: "Guna UI",
        path: "assets/guna.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-35, 10, 0]
      : isTablet
      ? [-40, 10, 0]
      : [-45, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
