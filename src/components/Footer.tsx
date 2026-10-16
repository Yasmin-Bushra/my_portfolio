export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 border-t border-[#C9C5BA] px-5 py-6 text-xs text-[#68685F] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
      <span>© {new Date().getFullYear()} Yasmin B.</span>
      <a className="w-fit transition-colors hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E65336]" href="#top">Back to top ↑</a>
    </footer>
  );
}
