"use client";

import { createClient } from "@prismicio/client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ProfileSection() {
  const { theme } = useTheme();
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

  return (
    <section className="flex flex-col items-center gap-2 py-6">
      {theme === "dark" ? (
        <Image
          width={112}
          height={112}
          src={data?.davi_avatar_dark.url}
          alt={data?.name}
          className="rounded-full"
        />
      ) : (
        <Image
          width={112}
          height={112}
          src={data?.davi_avatar.url}
          alt={data?.name}
          className="rounded-full"
        />
      )}

      <span>{data?.username}</span>
    </section>
  );
}
