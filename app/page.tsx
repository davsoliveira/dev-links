import { LinkList } from "./components/LinkList";
import { ProfileSection } from "./components/ProfileSection";
import { SocialMediaList } from "./components/SocialMediaList";

export default function Home() {
  return (
    <main className="h-screen w-full bg-[url('/bg-desktop.jpg')] bg-cover bg-center">
      <section className="mx-auto flex max-w-147 flex-col items-center pt-14">
        <ProfileSection />
        <LinkList />
        <SocialMediaList />
      </section>
    </main>
  );
}
