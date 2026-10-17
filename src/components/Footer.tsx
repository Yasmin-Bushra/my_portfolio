export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] items-center gap-4 border-t border-[#E8D8CF] px-5 pb-2 pt-1 text-xs text-[#716775] sm:px-8 sm:pb-3 sm:pt-2 lg:px-16">
      <a href="#top" aria-label="Yasmin Bushra, back to top" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D92D50]/40 font-serif text-sm tracking-[-0.08em] text-[#A51F3A] transition-colors hover:bg-[#D92D50] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D92D50]">
        YB<span className="text-[#D92D50]">.</span>
      </a>
      <div>
        <p className="text-xs font-semibold tracking-[0.02em] text-[#282329]">Yasmin Bushra</p>
        <p className="mt-1 text-[10px]">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
