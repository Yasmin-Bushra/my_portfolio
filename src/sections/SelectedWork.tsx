import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { projects } from '../data/projects';

/**
 * One source of truth for each tone, so the card and the modal can't drift apart.
 * - shot:   background behind the screenshot on the card
 * - header: modal header background + text color
 * - dot:    color of the "." after the modal title (must contrast with `header`)
 */
const toneStyles = {
  vermilion: {
    shot: 'bg-[#A51F3A]',
    header: 'bg-[#D92D50] text-[#FFF8F0]',
    dot: 'text-[#282329]',
  },
  olive: {
    shot: 'bg-[#59634C]',
    header: 'bg-[#59634C] text-[#FFF8F0]',
    dot: 'text-[#F5D96B]',
  },
  blue: {
    shot: 'bg-[#40586A]',
    header: 'bg-[#426A91] text-[#FFF8F0]',
    dot: 'text-[#F5D96B]',
  },
  plum: {
    shot: 'bg-[#C77A3D]',
    header: 'bg-[#C77A3D] text-[#282329]',
    dot: 'text-[#FFF8F0]',
  },
} as const;

type ToneKey = keyof typeof toneStyles;

function getTone(tone: string | undefined) {
  return toneStyles[(tone as ToneKey) ?? 'vermilion'] ?? toneStyles.vermilion;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function SelectedWork() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const projectTrackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];
  const activeTone = getTone(activeProject?.tone);

  function openProject(index: number, event: MouseEvent<HTMLElement>) {
    triggerRef.current = event.currentTarget;
    setActiveProjectIndex(index);
  }

  // Modal behaviour: lock scroll, focus the close button, trap focus,
  // close on Escape, and give focus back to the card that opened it.
  useEffect(() => {
    if (activeProjectIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveProjectIndex(null);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [activeProjectIndex]);

  function updateActiveSlide(viewport: HTMLDivElement) {
    const slides = Array.from(
      viewport.querySelectorAll<HTMLElement>('[data-project-slide]'),
    );

    if (!slides.length) return;

    // The first and last cards can never reach the center of the viewport,
    // so handle the edges explicitly.
    const atStart = viewport.scrollLeft <= 4;
    const atEnd =
      viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 4;

    if (atStart) {
      setActiveSlideIndex(0);
      return;
    }

    if (atEnd) {
      setActiveSlideIndex(slides.length - 1);
      return;
    }

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

    const nearestIndex = slides.reduce((nearest, slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const nearestCenter =
        slides[nearest].offsetLeft + slides[nearest].offsetWidth / 2;

      return Math.abs(slideCenter - viewportCenter) <
        Math.abs(nearestCenter - viewportCenter)
        ? index
        : nearest;
    }, 0);

    setActiveSlideIndex(nearestIndex);
  }

  // The scroll handler owns activeSlideIndex, so we don't set it here.
  // (Setting it here made the dots flicker during the smooth scroll.)
  function goToSlide(index: number) {
    const viewport = scrollerRef.current;
    const slide = projectTrackRef.current?.querySelectorAll<HTMLElement>(
      '[data-project-slide]',
    )[index];

    if (!viewport || !slide) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const left = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;

    viewport.scrollTo({
      left,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-[#FFF8F0] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-56 w-56 rounded-full border border-[#D92D50]/15 sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D92D50]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#D92D50]"
              />
              A selection of my work
            </p>

            <h2
              id="projects-title"
              className="editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#282329] sm:text-6xl"
            >
              Selected projects
              <span className="text-[#D92D50]">.</span>
            </h2>
          </div>

          <span className="inline-flex items-center gap-2 pb-1 font-mono text-xs uppercase tracking-[0.1em] text-[#716775]">
            <span aria-hidden="true">&larr;&nbsp;&rarr;</span>
            Swipe or use arrows
          </span>
        </div>

        <div
          ref={scrollerRef}
          role="region"
          tabIndex={0}
          aria-label="Browse selected projects"
          className="overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-2 pb-6 pt-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50] [&::-webkit-scrollbar]:hidden"
          onScroll={(event) => updateActiveSlide(event.currentTarget)}
        >
          <div
            ref={projectTrackRef}
            className="flex w-max items-start gap-5 sm:gap-7"
          >
            {projects.map((project, index) => {
              const tone = getTone(project.tone);

              return (
                <article
                  key={project.name}
                  data-project-slide
                  className={`group relative w-[85vw] max-w-[450px] shrink-0 snap-center overflow-hidden border border-[#282329]/10 bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#D92D50]/35 hover:shadow-[7px_7px_0_#d92d5022] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-[#D92D50] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-[420px] lg:w-[450px] ${
                    index % 2 === 1 ? 'sm:mt-9' : ''
                  }`}
                >
                  <div
                    className={`relative aspect-[5/3] overflow-hidden ${tone.shot}`}
                  >
                    <img
                      src={project.image}
                      alt={`Preview of ${project.name}`}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:p-4"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 text-base font-bold tracking-tight text-[#282329] sm:text-lg">
                      {/* Stretched button: the whole card is clickable, but the
                          markup stays valid (no headings inside a button). */}
                      <button
                        type="button"
                        onClick={(event) => openProject(index, event)}
                        aria-haspopup="dialog"
                        className="text-left outline-none after:absolute after:inset-0 after:content-['']"
                      >
                        {project.name}
                        <span className="sr-only">, view details</span>
                      </button>
                    </h3>

                    <p className="line-clamp-2 text-xs leading-5 text-[#716775] sm:text-sm sm:leading-6">
                      {project.cardDescription ?? project.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-4 inline-block border-b border-transparent text-xs font-semibold uppercase tracking-[0.14em] text-[#D92D50] transition-colors group-hover:border-[#D92D50]"
                    >
                      View details
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {projects.length > 1 && (
          <div
            className="mt-2 flex items-center justify-center gap-2"
            role="group"
            aria-label="Project carousel controls"
          >
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => goToSlide(Math.max(0, activeSlideIndex - 1))}
              disabled={activeSlideIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#282329]/15 text-lg text-[#282329] transition-colors hover:border-[#D92D50] hover:text-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#282329]/15 disabled:hover:text-[#282329]"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="flex items-center px-2">
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  aria-label={`Go to project ${index + 1}: ${project.name}`}
                  aria-current={activeSlideIndex === index ? 'true' : undefined}
                  onClick={() => goToSlide(index)}
                  className="group/dot flex h-8 items-center justify-center px-1.5 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#D92D50]"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                      activeSlideIndex === index
                        ? 'w-7 bg-[#D92D50]'
                        : 'w-2 bg-[#282329]/25 group-hover/dot:bg-[#D92D50]/60'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next project"
              onClick={() =>
                goToSlide(Math.min(projects.length - 1, activeSlideIndex + 1))
              }
              disabled={activeSlideIndex === projects.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#282329]/15 text-lg text-[#282329] transition-colors hover:border-[#D92D50] hover:text-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50] disabled:cursor-default disabled:opacity-30 disabled:hover:border-[#282329]/15 disabled:hover:text-[#282329]"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        )}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#282329]/65 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveProjectIndex(null);
            }
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[90dvh] w-full max-w-3xl overflow-y-auto border border-[#282329]/10 bg-[#FFF8F0] shadow-2xl"
          >
            <div
              className={`relative overflow-hidden px-5 py-7 sm:px-10 sm:py-10 ${activeTone.header}`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full border border-white/25"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-1 -top-7 h-36 w-36 rounded-full border border-white/25"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
                    {activeProject.category}
                    <span className="mx-2">/</span>
                    {activeProject.number}
                  </p>

                  <h3
                    id="project-dialog-title"
                    className="editorial break-words text-3xl leading-tight tracking-tight sm:text-5xl"
                  >
                    {activeProject.name}
                    <span className={activeTone.dot}>.</span>
                  </h3>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveProjectIndex(null)}
                  aria-label="Close project details"
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-current text-2xl transition-colors hover:bg-[#282329] hover:text-[#FFF8F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#282329]"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-10">
              <p className="max-w-2xl text-sm leading-6 text-[#282329]/85 sm:text-base sm:leading-7">
                {activeProject.description}
              </p>

              <div className="mt-8 grid gap-8 border-t border-[#282329]/10 pt-7 sm:mt-9 sm:grid-cols-[1.15fr_0.85fr] sm:gap-9">
                <div>
                  <h4 className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D92D50]">
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-[#D92D50]"
                    />
                    What it does
                  </h4>

                  {activeProject.features?.length ? (
                    <ul className="space-y-4 text-[15px] leading-6 text-[#716775]">
                      {activeProject.features.map((feature, index) => (
                        <li key={feature} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 font-mono text-xs font-medium text-[#D92D50]"
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[15px] leading-6 text-[#716775]">
                      More project details coming soon.
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D92D50]">
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-[#D92D50]"
                    />
                    Built with
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[#282329]/10 bg-white/70 px-2.5 py-1.5 text-xs leading-snug text-[#282329]/80 transition-colors hover:border-[#D92D50]/40 hover:bg-[#FCE7EC]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {!!activeProject.links?.length && (
                <div className="mt-8 border-t border-[#282329]/10 pt-6">
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#D92D50]">
                    Project links
                  </h4>

                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {activeProject.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#282329] underline decoration-[#D92D50] underline-offset-4 transition-colors hover:text-[#D92D50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D92D50]"
                      >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
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
