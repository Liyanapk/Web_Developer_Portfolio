"use client"

import { EDUCATION } from "@/lib/portfolio-data"
import { Container } from "./primitives"
import { FadeUp } from "./animations"

export function EducationProcess() {
  return (
    <section id="education" className="py-12 md:py-16">
      <Container>
        <FadeUp as="div" className="mx-auto  rounded-xl border border-border bg-card/60 p-6 sm:p-8" delay={0.05} y={24}>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Education</p>
          <h2 className="mt-3 font-heading text-xl font-semibold text-foreground sm:text-2xl">{EDUCATION.degree}</h2>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>{EDUCATION.college}</span>
            <span>{EDUCATION.period}</span>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
