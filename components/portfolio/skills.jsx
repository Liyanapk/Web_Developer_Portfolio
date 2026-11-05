"use client"

import { SKILLS } from "@/lib/portfolio-data"
import { Container, SectionKicker, SectionTitle } from "./primitives"
import { FadeUp } from "./animations"

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <Container>
        <FadeUp as="div" className="text-center" delay={0.05} y={24}>
          <SectionKicker>Technical Skills</SectionKicker>
          <SectionTitle className="mt-3">Tools I use to build for the web</SectionTitle>
        </FadeUp>
        <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SKILLS.map(({ title, items }, index) => (
            <FadeUp
              key={title}
              as="div"
              className="rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/50 sm:p-6"
              delay={0.1 + index * 0.06}
              y={24}
            >
              <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
