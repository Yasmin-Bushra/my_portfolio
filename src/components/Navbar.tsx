const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-[#E8D8CF] px-5 py-5 sm:px-8 lg:px-16">
      <a className="text-xl font-semibold tracking-[-0.08em] transition-colors hover:text-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D92D50]" href="#top" aria-label="Yasmin B. home">
        YB<span className="text-[#D92D50]">.</span>
      </a>
      <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
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
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#E8D8CF] text-sm transition-colors hover:border-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50] sm:ml-2"
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
        </button>
      </nav>
    </header>
  );
}
