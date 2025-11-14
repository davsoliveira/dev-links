import { LinkList } from "./components/link-list";
import { ProfileSection } from "./components/profile-section";
import { SocialMediaList } from "./components/social-media-list";
import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="h-screen w-full bg-[url('/bg-desktop-light.jpg')] bg-cover bg-center dark:bg-[url('/bg-desktop.jpg')]">
      <section className="mx-auto flex max-w-147 flex-col items-center pt-14">
        <ProfileSection />
        <ThemeToggle />
        <LinkList />
        <SocialMediaList />
      </section>
    </main>
  );
}
