"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Content } from "@prismicio/client";

type ProfileSectionProps = {
  data: Content.AuthorDocument["data"];
};

export function ProfileSection({ data }: ProfileSectionProps) {
  const { theme } = useTheme();

  const avatar = theme === "dark" ? data.davi_avatar_dark : data.davi_avatar;

  if (!avatar || !avatar.url) {
    return (
      <section className="flex flex-col items-center gap-2 py-6">
        <span>{data.username}</span>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-2 py-6">
      <Image
        width={112}
        height={112}
        src={avatar.url}
        alt={data.name ?? "Avatar"}
        className="rounded-full"
      />

      <span>{data?.username}</span>
    </section>
  );
}
