import { Content } from "@prismicio/client";

type LinkListProps = {
  data: Content.AuthorDocument["data"];
};

export function LinkList({ data }: LinkListProps) {
  return (
    <ul className="flex w-full flex-col gap-4 px-8 pt-10 md:px-0">
      {data?.link_list.map((link) => (
        <li key={link.key}>
          <a
            href={link.url}
            className="flex justify-center rounded-lg border border-black/40 bg-black/10 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-black/20 dark:border-white/40 dark:bg-white/10 hover:dark:bg-white/20"
            target="_blank"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
