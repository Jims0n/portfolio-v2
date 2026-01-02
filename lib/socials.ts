import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Centralized social links
export const socialLinks = [
    {
        name: "GitHub",
        icon: FaGithub,
        path: "https://github.com/Jims0n",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        path: "https://www.linkedin.com/in/abdulateef-j-194400246/",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        path: "https://x.com/_Jimson__",
    },
] as const;

export type SocialLink = (typeof socialLinks)[number];
