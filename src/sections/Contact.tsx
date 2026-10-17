
import Button from '../components/Button';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="contact-gradient scroll-mt-8 mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16 lg:py-28"
    >
      <div>
        <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D92D50]">
          <span
            className="h-2 w-2 rounded-full bg-[#D92D50]"
            aria-hidden="true"
          />
          Have something in mind?
        </p>

        <h2
          id="contact-title"
          className="editorial max-w-3xl text-5xl leading-[0.96] tracking-[-0.04em] sm:text-7xl"
        >
          Let's make something{' '}
          <span className="text-[#D92D50]">meaningful.</span>
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-[#716775]">
          I'm open to new opportunities and collaborations. I'd love to hear
          what you're working on and how I can contribute.
        </p>
      </div>

      <div className="flex flex-col items-start gap-5 lg:items-end">
        <Button
          href="mailto:yasminbushraa@gmail.com"
          className="w-full justify-between rounded-none px-5 shadow-[4px_4px_0_#28232922] sm:w-auto sm:min-w-52"
        >
          <span className="inline-flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="5" width="18" height="14" rx="1" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            Email me
          </span>
          <span aria-hidden="true">&rarr;</span>
        </Button>

        <div className="flex flex-wrap gap-2" aria-label="Social profiles">
          <a className="group inline-flex items-center gap-2 border border-[#E8D8CF] px-4 py-3 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-[#D92D50]/50 hover:bg-[#FCE7EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50]" href="https://www.linkedin.com/in/yasminb-m017" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-[#A51F3A]"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 9h3.56v11.45H3.56z"/></svg>
            LinkedIn
          </a>
          <a className="group inline-flex items-center gap-2 border border-[#E8D8CF] px-4 py-3 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-[#D92D50]/50 hover:bg-[#FCE7EC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50]" href="https://github.com/Yasmin-Bushra" target="_blank" rel="noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-current"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.65 10.65 0 0 1 5.57 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
