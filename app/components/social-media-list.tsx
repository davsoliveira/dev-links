"use client";
import { createClient } from "@prismicio/client";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";

export function SocialMediaList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const client = createClient("dev-links-davs");
      const response = await client.get();
      setData(response.results[0].data);
    }
    fetchData();
  }, []);

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
