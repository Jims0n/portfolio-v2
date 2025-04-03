import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/Jims0n"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/abdulateef-j-194400246/"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/_Jimson__"
    }
]

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return (
                <Link href={social.path} target="_blank" rel="noopener noreferrer" className={iconStyles} key={index}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social