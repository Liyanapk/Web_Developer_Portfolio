"use client"

import { EXPERIENCE } from "@/lib/portfolio-data"
import { Container, SectionKicker, SectionTitle } from "./primitives"
import { FadeUp } from "./animations"

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <Container>
        <FadeUp as="div" className="text-center" delay={0.05} y={24}>
          <SectionKicker>Career</SectionKicker>
          <SectionTitle className="mt-3">Work Experience</SectionTitle>
        </FadeUp>
        <ol className="mt-9 divide-y divide-border rounded-xl border border-border bg-card/40">
          {EXPERIENCE.map(({ company, role, period, points }, index) => (
            <FadeUp key={company} as="li" className="p-5 sm:p-7" delay={0.08 + index * 0.06} y={24}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{company}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{role}</p>
                </div>
                <time className="shrink-0 text-sm text-muted-foreground">{period}</time>
              </div>
              <ul className="mt-4 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </ol>
      </Container>
    </section>
  )
}
