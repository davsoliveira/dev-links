"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function ProfileSection() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center gap-2 py-6">
      {theme === "dark" ? (
        <Image width={112} height={112} src="/avatar.png" alt="Júlia Silva" />
      ) : (
        <Image
          width={112}
          height={112}
          src="/avatar-light.png"
          alt="Júlia Silva"
        />
      )}

      <span>@juliasilva</span>
    </section>
  );
}
