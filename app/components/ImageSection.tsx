import Image from "next/image";

export function ImageSection() {
  return (
    <section className="py-6 flex flex-col items-center gap-2">
      <Image width={112} height={112} src="/avatar.png" alt="Júlia Silva" />

      <span>@juliasilva</span>
    </section>
  );
}
