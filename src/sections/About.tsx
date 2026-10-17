
const highlights = [
  {
    number: '01',
    title: 'Full-stack development',
    description: 'Building useful, end-to-end web experiences.',
  },
  {
    number: '02',
    title: 'User-focused design',
    description: 'Making web applications clear and easy to use.',
  },
  {
    number: '03',
    title: 'Practical problem solving',
    description: 'Turning real needs into working solutions.',
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

          
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[360px]">
            <div className="absolute -bottom-2 -left-2 h-full w-full border border-[#D92D50]/50" />

            <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[48%] bg-[#DBC9D2]">
              <img
                src="/images/projects/yasmin.jpg"
                alt="Yasmin Bushra"
                className="h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#282329]/35 via-transparent to-transparent" />

            </div>
          </div>

          {/* Introduction */}
          <div>
            <p className="editorial text-2xl leading-tight tracking-[-0.035em] text-[#282329] sm:text-3xl lg:text-4xl">
              I bring ideas to life through web apps.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#282329]/80 sm:text-base sm:leading-7">
              I'm Yasmin, an Information Systems graduate from Addis Ababa University and a full-stack developer interested in building practical, user-friendly web applications.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#716775]">
              Through independent and collaborative projects, I've explored both frontend and backend development, turning ideas into functional digital solutions while continuing to grow my skills.
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
                  </div>

                  <span aria-hidden="true" className="text-sm text-[#D92D50] transition-transform group-hover:translate-x-1">→</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#716775]">
              <span>Understand the problem</span>
              <span>Build thoughtfully</span>
              <span>Keep learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
