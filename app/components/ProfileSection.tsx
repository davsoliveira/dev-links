import Image from "next/image";

export function ProfileSection() {
  return (
    <section className="flex flex-col items-center gap-2 py-6">
      <Image width={112} height={112} src="/avatar.png" alt="Júlia Silva" />

      <span>@juliasilva</span>
    </section>
  );
}
