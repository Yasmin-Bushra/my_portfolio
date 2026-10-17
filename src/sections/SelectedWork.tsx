
import { useState } from 'react';
import { projects } from '../data/projects';

export default function SelectedWork() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];
  const projectHeaderTone = activeProject?.tone === 'vermilion'
    ? 'bg-[#D92D50] text-[#FFF8F0]'
    : activeProject?.tone === 'blue'
      ? 'bg-[#426A91] text-[#FFF8F0]'
      : activeProject?.tone === 'plum'
        ? 'bg-[#F3A7BD] text-[#282329]'
        : 'bg-[#F5D96B] text-[#282329]';

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF8F0] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-24 h-52 w-52 rounded-full border border-[#D92D50]/15 sm:-right-20 sm:top-20 sm:h-72 sm:w-72" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D92D50]">
              A selection of my work
            </p>
            <h2 className="font-serif text-3xl tracking-tight text-[#282329] sm:text-4xl">
              Selected projects
              <span className="text-[#D92D50]">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveProjectIndex(index)}
              aria-label={`View details for ${project.name}`}
              className={`group relative min-w-0 overflow-hidden border border-[#282329]/10 bg-[#FBF7F2] text-left shadow-[5px_5px_0_#2823290a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#d92d5022] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D92D50] ${index % 2 === 1 ? 'sm:mt-8' : ''}`}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-[#282329]">{project.name}</h3>
                  <span aria-hidden="true" className="text-[#D92D50] transition-transform group-hover:translate-x-1">→</span>
                </div>
                <p className="line-clamp-2 text-xs leading-relaxed text-[#282329]/65">{project.cardDescription ?? project.description}</p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#282329]/55 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProjectIndex(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#282329]/10 bg-[#FFF8F0] shadow-2xl"
          >
            <div className={`relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 ${projectHeaderTone}`}>
              <span aria-hidden="true" className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-[#282329]/15" />
              <span aria-hidden="true" className="absolute -right-1 -top-7 h-36 w-36 rounded-full border border-[#282329]/15" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#282329]/65">
                    {activeProject.category} <span className="mx-1">/</span> {activeProject.number}
                  </p>
                  <h3 id="project-dialog-title" className="font-serif text-4xl tracking-tight sm:text-5xl">
                    {activeProject.name}<span className="text-[#D92D50]">.</span>
                  </h3>
                </div>
              <button
                type="button"
                autoFocus
                onClick={() => setActiveProjectIndex(null)}
                aria-label="Close project details"
                className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-[#282329]/20 text-xl transition-colors hover:bg-[#282329] hover:text-[#FFF8F0]"
              >
                ×
              </button>
              </div>
            </div>

            <div className="p-6 sm:p-10">
            <p className="max-w-2xl font-serif text-xl leading-8 text-[#282329]/85 sm:text-2xl">{activeProject.description}</p>

            <div className="mt-9 grid gap-9 border-t border-[#282329]/10 pt-7 sm:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h4 className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D92D50]"><span className="h-px w-6 bg-[#D92D50]" /> What it does</h4>
                {activeProject.features?.length ? (
                  <ul className="space-y-4 text-sm leading-6 text-[#282329]/75">
                    {activeProject.features.map((feature, index) => (
                      <li key={feature} className="group/feature flex gap-3">
                        <span className="mt-0.5 font-mono text-[10px] font-medium text-[#D92D50]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="transition-colors group-hover/feature:text-[#282329]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : <p className="text-sm text-[#282329]/55">Project details coming soon.</p>}
              </div>
              <div>
                <h4 className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D92D50]"><span className="h-px w-6 bg-[#D92D50]" /> Built with</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((technology) => (
                    <span key={technology} className="border border-[#282329]/10 bg-white/60 px-2.5 py-1.5 text-[11px] leading-snug text-[#282329]/70 transition-colors hover:border-[#D92D50]/40 hover:bg-[#F5D96B]/25">{technology}</span>
                  ))}
                </div>
              </div>
            </div>

            {!!activeProject.links?.length && (
              <div className="mt-7 border-t border-[#282329]/10 pt-5">
                <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D92D50]">Project links</h4>
                <div className="flex flex-wrap gap-4">
                  {activeProject.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#282329] underline decoration-[#D92D50] underline-offset-4 hover:text-[#D92D50]">
                      {link.label} ?
                    </a>
                  ))}
                </div>
              </div>
            )}
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
