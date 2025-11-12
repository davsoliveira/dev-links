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
    <ul className="w-full flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="flex justify-center py-4 rounded-lg border border-white/40 
            bg-white/20 text-white
            shadow-[0_0_15px_rgba(255,255,255,0.2)] 
            text-shadow-[0_0_15px_rgba(255,255,255,1)] 
            backdrop-blur-sm 
            hover:bg-white/20 transition-all duration-300"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
