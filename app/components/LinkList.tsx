export function LinkList() {
  const links = [
    {
      id: 1,
      title: "Inscreva-se no NLW",
      href: "",
    },
    {
      id: 2,
      title: "Baixe meu e-book",
      href: "",
    },
    {
      id: 3,
      title: "Veja meu portfólio",
      href: "",
    },
    {
      id: 4,
      title: "Conheça meu curso",
      href: "",
    },
  ];

  return (
    <ul className="flex w-full flex-col gap-4 px-8 pt-10 md:px-0">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="flex justify-center rounded-lg border border-black/40 bg-black/10 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-black/20 dark:border-white/40 dark:bg-white/10 hover:dark:bg-white/20"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
