import { useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';

// Your thin-circle motif, turned into a small solar system: each group is a
// ring, and its skills drift slowly around it. Labels always stay upright.
// The animated orbit is reserved for larger screens; phones get a clean list.
const rings = [
  {
    label: 'Frontend',
    radius: 120,
    seconds: 70,
    reverse: false,
    dot: 'bg-[#D92D50]',
    line: 'border-[#D92D50]/30',
    pill: 'border-[#D92D50]/30 bg-[#FCE7EC] text-[#8F1B35]',
    activeText: 'text-[#A51F3A] decoration-[#D92D50]',
    rule: 'border-[#D92D50]',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend & databases',
    radius: 190,
    seconds: 95,
    reverse: true,
    dot: 'bg-[#426A91]',
    line: 'border-[#426A91]/30',
    pill: 'border-[#426A91]/30 bg-[#E4ECF4] text-[#2F4F70]',
    activeText: 'text-[#2F4F70] decoration-[#426A91]',
    rule: 'border-[#426A91]',
    items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Tools & workflow',
    radius: 260,
    seconds: 120,
    reverse: false,
    dot: 'bg-[#59634C]',
    line: 'border-[#59634C]/30',
    pill: 'border-[#59634C]/30 bg-[#E9EDE1] text-[#46503A]',
    activeText: 'text-[#46503A] decoration-[#59634C]',
    rule: 'border-[#59634C]',
    items: ['Git', 'GitHub', 'REST APIs', 'Responsive design', 'Figma'],
  },
];

const css = `
@keyframes orbit-spin { to { transform: rotate(360deg); } }
@keyframes orbit-counter {
  from { transform: rotate(calc(var(--a) * -1deg)); }
  to   { transform: rotate(calc(var(--a) * -1deg - 360deg)); }
}
.orbit-ring  { animation: orbit-spin var(--d) linear infinite; }
.orbit-label {
  transform: rotate(calc(var(--a) * -1deg));
  animation: orbit-counter var(--d) linear infinite;
}
.orbit-core  { animation: orbit-spin 30s linear infinite; }
/* Hovering the orbit pauses it, so the names are easy to read. */
.orbit-stage:hover .orbit-ring,
.orbit-stage:hover .orbit-label,
.orbit-stage:hover .orbit-core { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .orbit-ring, .orbit-label, .orbit-core { animation: none; }
}
`;

export default function Skills() {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? selected;

  function previewOn(index: number) {
    return (event: PointerEvent) => {
      if (event.pointerType === 'mouse') setHovered(index);
    };
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-8 overflow-hidden bg-[#FFF8F0] text-[#282329]"
    >
      <style>{css}</style>

      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:grid lg:grid-cols-[minmax(0,260px)_1fr] lg:items-center lg:gap-28 lg:px-16 lg:py-14">
        {/* Heading + legend */}
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D92D50]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#D92D50]" />
            My toolkit
          </p>
          <h2
            id="skills-title"
            className="editorial whitespace-nowrap text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl"
          >
            Skills &amp; tools
          </h2>

          <div className="mt-8 hidden lg:block">
            <p className="mb-3 max-w-[220px] border-l-2 border-[#D92D50]/35 pl-3 text-xs leading-5 text-[#716775]">
              Hover the orbit to pause it. Pick a group to light up its ring.
            </p>
            <div role="group" aria-label="Highlight a skill group" className="flex flex-col">
              {rings.map((ring, index) => (
                <button
                  key={ring.label}
                  type="button"
                  aria-pressed={selected === index}
                  onClick={() => setSelected(selected === index ? null : index)}
                  onPointerEnter={previewOn(index)}
                  onPointerLeave={() => setHovered(null)}
                  className="flex min-h-11 items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D92D50]"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-300 motion-reduce:transition-none ${ring.dot} ${
                      active === index ? 'scale-150' : ''
                    }`}
                  />
                  <span
                    className={`editorial text-xl tracking-tight underline-offset-[6px] transition-colors duration-300 motion-reduce:transition-none ${
                      active === index
                        ? `underline decoration-2 ${ring.activeText}`
                        : 'no-underline'
                    }`}
                  >
                    {ring.label}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Orbit for large screens */}
        <div
          aria-hidden="true"
          className="orbit-stage relative mx-auto hidden h-[600px] w-[600px] lg:col-start-2 lg:ml-16 lg:block"
        >
          {/* soft glow behind everything */}
          <div className="skills-orbit-glow absolute inset-0 bg-[radial-gradient(circle,rgba(252,231,236,0.9),rgba(252,231,236,0)_70%)]" />

          {/* ring guides */}
          {rings.map((ring, index) => (
            <div
              key={`guide-${ring.label}`}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-opacity duration-300 motion-reduce:transition-none ${ring.line} ${
                active !== null && active !== index ? 'opacity-30' : 'opacity-100'
              }`}
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
              }}
            />
          ))}

          {/* center */}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#D92D50]/30 bg-[#FFF8F0] shadow-[0_0_0_8px_rgba(217,45,80,0.06)]">
            <span className="orbit-core text-2xl leading-none text-[#D92D50]">✳</span>
            <span className="editorial mt-1 text-sm leading-none text-[#282329]">
              full-stack
            </span>
          </div>

          {/* orbiting skills */}
          {rings.map((ring, ringIndex) => {
            const dimmed = active !== null && active !== ringIndex;
            const count = ring.items.length;
            const offset = ringIndex * 28 - 90;

            return (
              <div
                key={ring.label}
                className={`orbit-ring absolute left-1/2 top-1/2 h-0 w-0 transition-opacity duration-300 motion-reduce:transition-none ${
                  dimmed ? 'opacity-25' : 'opacity-100'
                }`}
                style={
                  {
                    '--d': `${ring.seconds}s`,
                    animationDirection: ring.reverse ? 'reverse' : 'normal',
                  } as CSSProperties
                }
              >
                {ring.items.map((item, itemIndex) => {
                  const angle = offset + (360 / count) * itemIndex;

                  return (
                    <div
                      key={item}
                      className="absolute left-0 top-0 h-0 w-0"
                      style={{
                        transform: `rotate(${angle}deg) translateX(${ring.radius}px)`,
                      }}
                    >
                      <div
                        className="orbit-label absolute left-0 top-0 h-0 w-0"
                        style={
                          {
                            '--a': angle,
                            '--d': `${ring.seconds}s`,
                            animationDirection: ring.reverse ? 'reverse' : 'normal',
                          } as CSSProperties
                        }
                      >
                        <span
                          className={`skill-orbit-pill absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[13px] font-medium shadow-sm ${ring.pill}`}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Clear grouped layout on small and medium screens */}
        <div className="skills-mobile-list mt-7 grid gap-6 sm:grid-cols-3 lg:sr-only">
          {rings.map((ring) => (
            <div key={ring.label} className={`border-t-2 pt-3 ${ring.rule}`}>
              <h3 className="text-sm font-semibold tracking-tight text-[#282329] sm:text-base">{ring.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
                {ring.items.map((item) => (
                  <li key={item} className="rounded-full border border-[#E8D8CF] bg-white/60 px-3 py-1.5 text-[#716775]">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
