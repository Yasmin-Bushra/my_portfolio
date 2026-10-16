import Button from '../components/Button';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16 lg:py-28" aria-labelledby="contact-title">
      <div>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E65336]">Have something in mind?</p>
        <h2 id="contact-title" className="editorial max-w-3xl text-5xl leading-[0.96] tracking-[-0.04em] sm:text-7xl">Let’s make something <span className="text-[#E65336]">meaningful.</span></h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-[#68685F]">I’m open to conversations about freelance collaborations and full-time opportunities. I’d love to hear what you’re working on.</p>
      </div>
      <div className="flex flex-col items-start gap-4 lg:items-end">
        <Button href="mailto:YOUR_EMAIL_HERE">Email me <span aria-hidden="true">↗</span></Button>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
          <a className="underline decoration-[#C9C5BA] underline-offset-4 transition-colors hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E65336]" href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="underline decoration-[#C9C5BA] underline-offset-4 transition-colors hover:text-[#E65336] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E65336]" href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="max-w-xs text-left text-[10px] leading-5 text-[#68685F] lg:text-right">Replace <code className="bg-transparent p-0 text-[10px]">YOUR_EMAIL_HERE</code>, <code className="bg-transparent p-0 text-[10px]">YOUR_LINKEDIN_USERNAME</code>, and <code className="bg-transparent p-0 text-[10px]">YOUR_GITHUB_USERNAME</code> in Contact.tsx with your details.</p>
      </div>
    </section>
  );
}
