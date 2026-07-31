import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

type SocialItem = {
    url: string;
    label: string;
    icon: React.ReactNode;
};

const listSocial: SocialItem[] = [
    { url: "https://www.linkedin.com/in/jorianom/", label: "LinkedIn", icon: <FaLinkedinIn className="w-6 h-6" /> },
    { url: "https://github.com/jorianom", label: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
    { url: "https://www.facebook.com/share/1AEnrhibXg/", label: "Facebook", icon: <FaFacebook className="w-6 h-6" /> },
    { url: "https://www.instagram.com/jrianoma?utm_source=qr&igsh=MWNsMDh3c3I5Y2w1ag==", label: "Instagram", icon: <FaInstagram className="w-6 h-6" /> },
]
export const SocialList = () => {
    return (
        <div className="flex items-center gap-4">
            {
                listSocial.map((item) => (
                    <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex h-11 w-11 items-center justify-center text-white hover:text-primary transition-colors">
                        {item.icon}
                    </a>
                ))
            }
        </div>
    )
}