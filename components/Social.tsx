import Link from "next/link";
import { socialLinks } from "@/lib/socials";

interface SocialProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({
    containerStyles = "flex gap-6",
    iconStyles = "w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300",
}) => {
    return (
        <div className={containerStyles} role="list" aria-label="Social links">
            {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                    <Link
                        href={social.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconStyles}
                        key={index}
                        role="listitem"
                        aria-label={`Visit my ${social.name} profile`}
                    >
                        <Icon aria-hidden="true" />
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;