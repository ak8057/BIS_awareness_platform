import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/ConsumerAdvocacy/",
    icon: <FaFacebook />,
    label: "Facebook",
  },
  {
    href: "https://x.com/jagograhakjago",
    icon: <FaTwitter />,
    label: "Twitter",
  },
  {
    href: "https://www.youtube.com/channel/UCTyQpXH6_4xVR1CUyuPkm0Q",
    icon: <FaYoutube />,
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/company/bureau-of-indian-standards/?originalSubdomain=in",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/consumeraffairs_goi/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#0033a1] py-6 text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        {/* BIS Logo and Mission */}
        <div className="text-center md:text-left relative">
          <div className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-20 blur-xl"></div>
          <img
            src="/img/logo.png"
            alt="BIS Logo"
            className="mx-auto mb-4 w-[14rem] md:w-[28rem] md:mx-0 drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <p className="text-l font-light">
            Empowering India with standards to ensure quality, safety, and
            reliability for all.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.label}`}
              className="text-white transition-colors duration-500 ease-in-out hover:text-yellow-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy and Quick Links */}
        <div className="text-center md:text-right">
          <a
            href="#privacy-policy"
            className="block text-sm font-light hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#terms-of-service"
            className="block text-sm font-light hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#accessibility"
            className="block text-sm font-light hover:underline"
          >
            Accessibility Statement
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-white/20 pt-4 text-center text-xs font-light text-white/70">
        © {new Date().getFullYear()} Bureau of Indian Standards. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
