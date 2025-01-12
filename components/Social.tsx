import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedin />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
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
                <Link href={social.path} className={iconStyles} key={index}>
                    {social.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social