import { LinkList } from "./components/LinkList";
import { ProfileSection } from "./components/ProfileSection";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[url('/bg-desktop.jpg')] bg-center bg-cover">
      <section className="max-w-147 mx-auto pt-14 flex flex-col items-center">
        <ProfileSection />
        <LinkList />
      </section>
    </main>
  );
}
