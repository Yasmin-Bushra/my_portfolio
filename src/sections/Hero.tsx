
import { useState } from 'react';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-16 lg:pb-28 lg:pt-24"
      aria-labelledby="hero-title"
    >
      {/* Introduction */}
      <div className="min-w-0">
        <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68685F] sm:text-[11px]">
          <span className="h-px w-8 shrink-0 bg-[#E65336]" />
          Full-stack developer · Information systems
        </p>

        <h1
          id="hero-title"
          className="editorial max-w-[680px] text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.94] tracking-[-0.055em]"
        >
          Good ideas deserve{' '}
          <span className="text-[#E65336]">good software.</span>
        </h1>

        <div className="mt-8 max-w-xl">
          <p className="max-w-lg text-sm leading-7 text-[#68685F] sm:text-base">
            I’m Yasmin, a full-stack developer drawn to thoughtful digital
            products—useful tools built with care, clarity, and a sense of
            purpose.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button href="#work">
              Explore selected work
              <span aria-hidden="true">↘</span>
            </Button>

            <Button href="#contact" variant="plain">
              Let’s talk
              <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-3" aria-label="Social and email links">
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn — replace placeholder URL"
              className="flex h-10 w-10 items-center justify-center border border-[#C9C5BA] text-[#20211F] transition-colors hover:border-[#E65336] hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E65336]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M5.2 3.5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3.6 9h3.2v11H3.6V9Zm5.3 0H12v1.5h.05A3.55 3.55 0 0 1 15.25 8.8c3.4 0 4.05 2.2 4.05 5.05V20h-3.2v-5.45c0-1.3-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V20H8.9V9Z" /></svg>
            </a>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub — replace placeholder URL"
              className="flex h-10 w-10 items-center justify-center border border-[#C9C5BA] text-[#20211F] transition-colors hover:border-[#E65336] hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E65336]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2.5a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.67c-2.73.59-3.3-1.16-3.3-1.16-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.88 1.5 2.3 1.07 2.86.82.09-.64.35-1.07.63-1.32-2.18-.25-4.47-1.1-4.47-4.85 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.6 0 0 .83-.27 2.69 1.01a9.35 9.35 0 0 1 4.9 0c1.86-1.28 2.68-1.01 2.68-1.01.54 1.35.2 2.35.1 2.6.64.69 1.02 1.57 1.02 2.64 0 3.76-2.3 4.6-4.49 4.84.36.31.67.9.67 1.82v2.69c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.5Z" /></svg>
            </a>
            <a
              href="mailto:YOUR_EMAIL_HERE"
              aria-label="Send email"
              title="Email — replace placeholder address"
              className="flex h-10 w-10 items-center justify-center border border-[#C9C5BA] text-[#20211F] transition-colors hover:border-[#E65336] hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E65336]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="5.5" width="17" height="13" rx="1" /><path d="m4 7 8 6 8-6" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive project preview */}
      <div className="min-w-0 border border-[#C9C5BA] bg-[#EEEAE0] p-3 sm:p-5 lg:ml-auto lg:w-full lg:max-w-[570px]">
        <div
          className={`relative flex min-h-[320px] flex-col justify-between overflow-hidden p-6 text-[#F3F0E8] transition-colors duration-500 sm:min-h-[360px] sm:p-8 ${
            project.tone === 'vermilion'
              ? 'bg-[#B94A32]'
              : project.tone === 'olive'
                ? 'bg-[#59634C]'
                : project.tone === 'blue'
                  ? 'bg-[#40586A]'
                  : 'bg-[#715567]'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          <div
            className="pointer-events-none absolute -right-12 -top-14 h-64 w-64 rounded-full border border-white/20 sm:h-80 sm:w-80"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-4 -top-6 h-52 w-52 rounded-full border border-white/20 sm:h-64 sm:w-64"
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:text-[10px]">
              Selected project / {project.number}
            </span>

            <span className="text-right text-[9px] uppercase tracking-[0.12em] text-white/75 sm:text-[10px]">
              {project.category}
            </span>
          </div>

          <div className="relative mt-14">
            <p className="mb-3 text-xs text-white/75">{project.role}</p>

            <h2 className="editorial max-w-md text-4xl leading-[1.05] sm:text-5xl">
              {project.name}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/85">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/35 px-2.5 py-1 text-[9px] uppercase tracking-wider sm:text-[10px]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project selector */}
        <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#68685F] sm:text-[10px]">
            Explore projects
          </p>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Select a project preview"
          >
            {projects.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-pressed={activeIndex === index}
                aria-label={`Preview ${item.name}`}
                onClick={() => setActiveIndex(index)}
                className={`min-h-10 min-w-10 border px-3 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E65336] ${
                  activeIndex === index
                    ? 'border-[#20211F] bg-[#20211F] text-[#F3F0E8]'
                    : 'border-[#C9C5BA] text-[#20211F] hover:border-[#20211F] hover:bg-[#E5E1D8]'
                }`}
              >
                {item.number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
