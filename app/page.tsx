import { LinkList } from "./components/LinkList";
import { ProfileSection } from "./components/ProfileSection";
import { SocialMediaList } from "./components/SocialMediaList";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[url('/bg-desktop.jpg')] bg-center bg-cover">
      <section className="max-w-147 mx-auto pt-14 flex flex-col items-center">
        <ProfileSection />
        <LinkList />
        <SocialMediaList />
      </section>
    </main>
  );
}
