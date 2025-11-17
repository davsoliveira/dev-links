import { createClient } from "@prismicio/client";
import { LinkList } from "./components/link-list";
import { ProfileSection } from "./components/profile-section";
import { SocialMediaList } from "./components/social-media-list";
import { ThemeToggle } from "./components/theme-toggle";

export default async function Home() {
  const client = createClient("dev-links-davs");
  const response = await client.get();
  const data = response.results[0].data;

  return (
    <main className="min-h-screen w-full bg-[url('/bg-desktop-light.jpg')] bg-cover bg-center dark:bg-[url('/bg-desktop.jpg')]">
      <section className="mx-auto flex max-w-147 flex-col items-center pt-14 pb-5">
        <ProfileSection data={data} />
        <ThemeToggle />
        <LinkList data={data} />
        <SocialMediaList data={data} />
      </section>
    </main>
  );
}
