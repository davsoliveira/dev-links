import { LinkList } from "./components/LinkList";
import { ProfileSection } from "./components/ProfileSection";
import { SocialMediaList } from "./components/SocialMediaList";
import { ThemeToggle } from "./components/ThemeToggle";

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
