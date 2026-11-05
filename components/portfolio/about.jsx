"use client"

import { Container, SectionKicker } from "./primitives"
import { FadeUp } from "./animations"

const HIGHLIGHTS = [
  { label: "Experience", value: "Approximately 1.5 years" },
  { label: "Education", value: "B.Tech, Computer Science & Engineering" },
  { label: "Core technologies", value: "React.js and Next.js" },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-16">
        <div>
          <FadeUp as="div" delay={0.05} y={24}>
            <SectionKicker>About Me</SectionKicker>
          </FadeUp>
          <FadeUp
            as="h2"
            className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl"
            delay={0.1}
            y={24}
          >
            Frontend development with a thoughtful design perspective.
          </FadeUp>
          <FadeUp as="div" className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base" delay={0.15} y={24}>
            <p>
              I&apos;m a frontend developer with approximately 1.5 years of combined experience across professional
              roles and internships. I build responsive websites and web application interfaces with React.js,
              Next.js, JavaScript, HTML and CSS.
            </p>
            <p>
              I work from Figma designs to create functional interfaces, reusable components and responsive layouts,
              collaborating with designers and developers along the way.
            </p>
            <p>
              With a background in UI/UX design, I understand how to translate design concepts into practical,
              responsive and user-friendly interfaces.
            </p>
          </FadeUp>
        </div>

        <FadeUp as="dl" className="divide-y divide-border rounded-xl border border-border bg-card/60 px-5 sm:px-6" delay={0.2} y={24}>
          {HIGHLIGHTS.map(({ label, value }) => (
            <div key={label} className="py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
              <dd className="mt-2 font-heading text-sm font-semibold text-foreground sm:text-base">{value}</dd>
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  )
}
