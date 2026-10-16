const links = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-[#C9C5BA] px-5 py-5 sm:px-8 lg:px-16">
      <a className="text-xl font-semibold tracking-[-0.08em] transition-colors hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E65336]" href="#top" aria-label="Yasmin B. home">
        YB<span className="text-[#E65336]">.</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-9">
        {links.map((link) => (
          <a key={link.href} className="text-xs text-[#68685F] transition-colors hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E65336] sm:text-sm" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
