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
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="flex justify-center rounded-lg border border-white/40 bg-white/20 py-4 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300 text-shadow-[0_0_15px_rgba(255,255,255,1)] hover:bg-white/20"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
