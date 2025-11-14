import { Content } from "@prismicio/client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";

type SocialMediaListProps = {
  data: Content.AuthorDocument["data"];
};

export function SocialMediaList({ data }: SocialMediaListProps) {
  const socialMedias = [
    {
      id: 1,
      icon: FaGithub,
      href: data?.social_media[0].url,
    },
    {
      id: 2,
      icon: FaInstagram,
      href: data?.social_media[1].url,
    },
    {
      id: 4,
      icon: FaLinkedin,
      href: data?.social_media[2].url,
    },
    {
      id: 3,
      icon: FaLetterboxd,
      href: data?.social_media[3].url,
    },
  ];

  return (
    <ul className="flex items-center gap-3 pt-8">
      {socialMedias.map((socialMedia) => (
        <li
          key={socialMedia.id}
          className="rounded-full p-3 transition hover:bg-gray-400/30"
        >
          <a href={socialMedia.href} target="_blank">
            <socialMedia.icon size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}
