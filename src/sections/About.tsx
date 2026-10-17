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
      <div className="mx-auto max-w-5xl">
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D92D50]">
            A little about me
          </p>
          <h2
            id="about-title"
            className="editorial text-4xl leading-none tracking-[-0.04em] text-[#282329] sm:text-5xl"
          >
            About me<span className="text-[#D92D50]">.</span>
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[360px]">
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 h-full w-full border border-[#D92D50]/50"
            />

            <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[48%] bg-[#DBC9D2]">
              <img
                src="/images/projects/yasmin.jpg"
                alt="Yasmin Bushra"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#282329]/35 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="lg:-ml-5">
            <p className="editorial text-2xl leading-tight tracking-[-0.035em] text-[#282329] sm:text-3xl lg:text-4xl">
              I bring ideas to life through web apps.
            </p>

            <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.8] text-[#3D3640] sm:text-base sm:leading-7">
              I’m Yasmin, an Information Systems graduate from Addis Ababa University and a full-stack developer interested in building practical, user-friendly web applications.
            </p>

            <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.8] text-[#5E5563] sm:text-base sm:leading-7">
              Through independent and collaborative projects, I’ve explored both frontend and backend development, turning ideas into functional digital solutions while continuing to grow my skills.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item.number}
                  className="rounded-full border border-[#D92D50]/25 bg-[#FFF8F0]/55 px-4 py-2 text-xs font-medium text-[#282329] transition-colors hover:border-[#D92D50]/55 hover:bg-[#FFF8F0] sm:text-sm"
                >
                  <h3 className="m-0 font-sans text-xs font-medium sm:text-sm">
                    {item.title}
                  </h3>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
