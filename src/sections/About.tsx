
const highlights = [
  {
    number: '01',
    title: 'Full-stack development',
    description: 'Building useful, end-to-end web experiences.',
  },
  {
    number: '02',
    title: 'Thoughtful user experiences',
    description: 'Creating clear, intuitive interfaces.',
  },
  {
    number: '03',
    title: 'Problem solving',
    description: 'Understanding the problem before the solution.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-8 bg-[#FCE7EC] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between sm:mb-9">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D92D50]">
              A little about me
            </p>
            <h2
              id="about-title"
              className="editorial text-4xl leading-none tracking-[-0.04em] text-[#282329] sm:text-5xl"
            >
              About me<span className="text-[#D92D50]">.</span>
            </h2>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-[#716775] sm:block">
            Yasmin Bushra / 01
          </span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Portrait placeholder â€” replace with your photo later. */}
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-none">
            <div className="absolute -bottom-2 -left-2 h-full w-full border border-[#D92D50]/50" />

            <div className="relative flex aspect-[4/4.2] items-center justify-center overflow-hidden bg-[#DBC9D2]">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#282329]/15" />
              <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-[#282329]/20" />

              <div className="relative flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#282329]/20 font-serif text-3xl text-[#282329]">
                  YB
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#716775]">
                  Your portrait goes here
                </p>
              </div>

              <span className="absolute bottom-4 left-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#282329]/65">
                Information Systems Â· 2026
              </span>
              <span className="absolute right-4 top-4 font-serif text-xl text-[#D92D50]">
                âœ³
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div>
            <p className="editorial text-2xl leading-tight tracking-[-0.035em] text-[#282329] sm:text-3xl lg:text-4xl">
              A little about my background and approach.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#282329]/80 sm:text-base sm:leading-7">
              I’m an Information Systems graduate who values clear interfaces and thoughtful problem solving.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#716775]">
              My work spans independent and collaborative projects, where I keep learning by building.
            </p>

            <div className="mt-5 grid gap-2">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group flex items-center gap-3 border border-[#E8D8CF] bg-[#FFF8F0]/60 px-3 py-3 transition-colors duration-200 hover:border-[#D92D50] hover:bg-[#FFF8F0]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#D92D50]/40 text-[10px] text-[#D92D50] transition-colors group-hover:bg-[#D92D50] group-hover:text-[#FFF8F0]">
                    {item.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-semibold text-[#282329] sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-4 text-[#716775] sm:text-xs">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-sm text-[#D92D50] transition-transform group-hover:translate-x-1">
                    â†—
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#716775]">
              <span>Listen first</span>
              <span>Build with purpose</span>
              <span>Keep learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
