import { ImageSection } from "./components/ImageSection";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="max-w-147 mx-auto mt-14 flex flex-col items-center">
        <ImageSection />
      </section>
    </main>
  );
}
