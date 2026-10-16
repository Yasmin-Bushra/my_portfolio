
import { projects } from '../data/projects';

const visualStyles = [
  {
    background: 'bg-[#E65336]',
    foreground: 'text-[#F3F0E8]',
    accent: 'bg-[#F3F0E8]',
    label: 'CARE / COMMUNITY',
    art: 'care',
  },
  {
    background: 'bg-[#DCE2D0]',
    foreground: 'text-[#293126]',
    accent: 'bg-[#65734F]',
    label: 'BEAUTY / BOOKING',
    art: 'beauty',
  },
  {
    background: 'bg-[#D9E2EB]',
    foreground: 'text-[#263B51]',
    accent: 'bg-[#426A91]',
    label: 'PUBLIC SERVICE',
    art: 'workflow',
  },
  {
    background: 'bg-[#E5D9E5]',
    foreground: 'text-[#4B354D]',
    accent: 'bg-[#805D83]',
    label: 'SPACE / SCIENCE',
    art: 'space',
  },
];

function ProjectPreview({
  art,
  background,
  foreground,
  accent,
  label,
}: {
  art: string;
  background: string;
  foreground: string;
  accent: string;
  label: string;
}) {
  return (
    <div
      className={`project-preview group/preview relative aspect-[1.8/1] overflow-hidden ${background} ${foreground}`}
    >
      {/* Temporary artwork — replace this preview with a real screenshot later. */}
      <div className="absolute inset-0 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px]">
            {label}
          </span>
          <span className="text-xs opacity-60">/{' '}
            {String(
              visualStyles.findIndex((style) => style.art === art) + 1,
            ).padStart(2, '0')}
          </span>
        </div>

        {art === 'care' && (
          <>
            <div className="absolute -right-5 top-7 h-28 w-28 rounded-full border border-current/30 transition-transform duration-500 group-hover/preview:scale-110 sm:h-36 sm:w-36 sm:w-36" />
            <div className="absolute right-6 top-12 h-20 w-20 rounded-full border border-current/50 transition-transform duration-500 group-hover/preview:-translate-x-2 sm:right-10 sm:top-10 sm:h-24 sm:w-24" />
            <div className={`absolute right-12 top-[4.5rem] h-10 w-10 rounded-full ${accent} transition-transform duration-500 group-hover/preview:scale-110 sm:right-16 sm:top-14 sm:h-12 sm:w-12`} />
            <span className="absolute bottom-3 left-4 font-serif text-4xl opacity-30 sm:bottom-4 sm:left-5 sm:text-5xl">
              t.
            </span>
          </>
        )}

        {art === 'beauty' && (
          <>
            <div className="absolute -right-3 top-7 h-28 w-28 rotate-12 rounded-[40%] bg-[#A7B493] transition-transform duration-500 group-hover/preview:rotate-45 sm:h-36 sm:w-36" />
            <div className="absolute right-7 top-10 h-20 w-20 rounded-full border border-current/50 transition-transform duration-500 group-hover/preview:-rotate-12 sm:right-10 sm:top-10 sm:h-24 sm:w-24" />
            <div className="absolute right-14 top-14 h-10 w-10 rounded-full bg-[#E5D9E5] transition-transform duration-500 group-hover/preview:scale-125 sm:right-[4.5rem] sm:top-16 sm:h-12 sm:w-12" />
            <span className="absolute bottom-3 left-4 font-serif text-4xl opacity-30 sm:bottom-4 sm:left-5 sm:text-5xl">
              g.
            </span>
          </>
        )}

        {art === 'workflow' && (
          <>
            <div className="absolute right-8 top-9 grid grid-cols-4 gap-2 opacity-50 sm:right-12 sm:top-10 sm:gap-3">
              {Array.from({ length: 16 }, (_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover/preview:scale-150 ${
                    index === 2 || index === 5 || index === 10
                      ? 'bg-[#426A91]'
                      : 'bg-current/50'
                  }`}
                />
              ))}
            </div>
            <div className="absolute right-10 top-12 h-20 w-20 rotate-45 border border-current/50 transition-transform duration-500 group-hover/preview:rotate-90 sm:right-14 sm:top-12 sm:h-24 sm:w-24" />
            <div className={`absolute right-[4.25rem] top-[3.25rem] h-10 w-10 ${accent} transition-transform duration-500 group-hover/preview:translate-x-2 sm:right-[4.75rem] sm:top-[3.75rem] sm:h-12 sm:w-12`} />
            <span className="absolute bottom-3 left-4 font-serif text-4xl opacity-30 sm:bottom-4 sm:left-5 sm:text-5xl">
              ↗
            </span>
          </>
        )}

        {art === 'space' && (
          <>
            <div className="absolute -right-3 top-0 h-36 w-36 rounded-full border border-current/25 transition-transform duration-700 group-hover/preview:rotate-45 sm:h-44 sm:w-44" />
            <div className="absolute right-5 top-5 h-28 w-28 rounded-full border border-current/40 transition-transform duration-700 group-hover/preview:-rotate-45 sm:right-8 sm:top-6 sm:h-36 sm:w-36" />
            <div className="absolute right-12 top-12 h-16 w-16 rounded-full border border-current/50 sm:right-14 sm:top-12 sm:h-20 sm:w-20" />
            <div className={`absolute right-[4.25rem] top-[3.5rem] h-3 w-3 rounded-full ${accent} transition-transform duration-500 group-hover/preview:translate-x-3 group-hover/preview:-translate-y-2 sm:right-[5rem] sm:top-[3.75rem]`} />
            <span className="absolute bottom-3 left-4 font-serif text-4xl opacity-30 sm:bottom-4 sm:left-5 sm:text-5xl">
              ✳
            </span>
          </>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[#20211F]/0 transition-colors duration-300 group-hover/preview:bg-[#20211F]/[0.04]" />
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="projects"
      className="bg-[#F3F0E8] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#E65336]">
              A selection of my work
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-[#20211F] sm:text-4xl">
              Selected projects
              <span className="text-[#E65336]">.</span>
            </h2>
          </div>

          <p className="hidden max-w-52 text-right text-sm leading-relaxed text-[#20211F]/60 sm:block">
            Ideas shaped into thoughtful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, index) => {
            const style = visualStyles[index % visualStyles.length];

            return (
              <article
                key={project.name}
                className="group min-w-0 overflow-hidden border border-[#20211F]/10 bg-[#FAF8F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#20211F]/25"
              >
                <ProjectPreview
                  art={style.art}
                  background={style.background}
                  foreground={style.foreground}
                  accent={style.accent}
                  label={style.label}
                />

                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#20211F]/55">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-[#20211F]/50">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#20211F]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#20211F]/70">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#20211F]/10 pt-3">
                    <span className="text-xs text-[#20211F]/60">
                      {project.role}
                    </span>
                    <span className="text-xs font-medium text-[#E65336]">
                      {project.technologies.join(' · ')}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
