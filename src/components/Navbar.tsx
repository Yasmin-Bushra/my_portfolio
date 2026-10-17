const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-[#E8D8CF] px-5 py-5 sm:px-8 lg:px-16">
      <a className="text-xl font-semibold tracking-[-0.08em] transition-colors hover:text-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D92D50]" href="#top" aria-label="Yasmin B. home">
        YB<span className="text-[#D92D50]">.</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            className="group relative rounded-sm px-2 py-2 text-[11px] font-medium tracking-[0.02em] text-[#716775] transition-colors duration-200 hover:text-[#282329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50] sm:px-3 sm:text-sm"
            href={link.href}
          >
            <span>{link.label}</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-2 bottom-1 h-px origin-left scale-x-0 bg-[#D92D50] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 sm:inset-x-3"
            />
          </a>
        ))}
      </nav>
    </header>
  );
}
