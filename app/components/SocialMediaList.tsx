import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const socialMedias = [
  {
    id: 1,
    icon: FaGithub,
    href: "",
  },
  {
    id: 2,
    icon: FaInstagram,
    href: "",
  },
  {
    id: 3,
    icon: FaYoutube,
    href: "",
  },
  {
    id: 4,
    icon: FaLinkedin,
    href: "",
  },
];

export function SocialMediaList() {
  return (
    <ul className="flex items-center gap-3 pt-8">
      {socialMedias.map((socialMedia) => (
        <li
          key={socialMedia.id}
          className="rounded-full p-3 transition hover:bg-gray-400/30"
        >
          <a href={socialMedia.href}>
            <socialMedia.icon size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}
