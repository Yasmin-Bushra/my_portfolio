const groups = [
  { label: 'Application development', items: ['Full-stack development', 'Web applications', 'Responsive interfaces'] },
  { label: 'Product thinking', items: ['Information systems', 'Problem discovery', 'Collaborative delivery'] },
  { label: 'Ways of working', items: ['Clear communication', 'Iterative building', 'Careful detail'] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 border-y border-[#C9C5BA] bg-[#EEEAE0]" aria-labelledby="skills-title">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E65336]">How I contribute</p><h2 id="skills-title" className="editorial text-5xl tracking-[-0.04em] sm:text-6xl">Skills & approach</h2></div><p className="max-w-sm text-sm leading-6 text-[#68685F]">The strengths I bring to shaping and building digital products.</p></div>
        <div className="grid border-t border-[#C9C5BA] md:grid-cols-3">
          {groups.map((group, index) => <div key={group.label} className={`py-6 md:px-6 ${index > 0 ? 'md:border-l md:border-[#C9C5BA]' : ''} ${index === 0 ? 'md:pl-0' : ''}`}><p className="mb-5 text-xs font-semibold uppercase tracking-[0.13em]">{group.label}</p><ul className="space-y-3">{group.items.map((item) => <li className="flex items-center gap-3 text-sm text-[#68685F]" key={item}><span className="h-1 w-1 bg-[#E65336]" />{item}</li>)}</ul></div>)}
        </div>
        <p className="mt-5 border-t border-[#C9C5BA] pt-5 text-xs leading-5 text-[#68685F]">Specific languages, frameworks, and tools can be added here once confirmed.</p>
      </div>
    </section>
  );
}
