import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#5542ff] py-6 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Left: Copyright */}
        <p className="text-center text-sm font-light md:text-left">
          ©Nova 2024. All rights reserved.
        </p>

        {/* Center: Social icons */}
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black transition-all duration-300 hover:scale-110 hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right: Privacy link */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
