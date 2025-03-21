import Whrai from "../assets/images/Whr.ai.png";
import Recofy from "../assets/images/recofy.png";
import EComMinimalistScreenshot from "../assets/images/e-com_minimalist_screenshot.webp";

export const ProjectStack = [
  {
    name: "Whr.ai",
    image: Whrai,
    className: "pro pro_1",
    imageClassName: "Whr_ai_img",
    description:
      "Developed an advanced event intelligence platform that empowers businesses to optimize operations by providing real-time insights, trend analysis, and predictive analytics on upcoming events",
    techStacks: [
      "Next.js",
      "TypeScript",
      "D3.js​",
      "TanStack",
      "Shadcn",
      "Tailwind",
    ],
    liveDemo: "https://whr.ai/",
    githubLink: "",
  },
  {
    name: "Recofy",
    image: Recofy,
    className: "pro pro_1 reversed-proj",
    imageClassName: "Recofy_img",
    description:
      "Developed and implemented a dynamic recommendation system within the event-based platform. Personalized business recommendations drove increased user interaction with the platform, resulting in longer user sessions and higher retention rates.",
    techStacks: ["Next.js", "TypeScript", "Tailwind", "RestfulAPIs​"],
    liveDemo: "https://recofy.com/",
    githubLink: "",
  },
  {
    name: "ECommerce",
    image: EComMinimalistScreenshot,
    className: "pro pro_1",
    imageClassName: "E_Com_Minimalist_Website_img",
    description:
      "With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
    techStacks: ["React", "Vanilla CSS"],
    liveDemo: "",
    githubLink: "",
  },
];
