"use client"

import { ArrowUpRight } from "lucide-react"
import { DESIGN_CASE_STUDIES, PROJECTS } from "@/lib/portfolio-data"
import { Container, SectionKicker, SectionTitle } from "./primitives"
import { FadeUp } from "./animations"

function ProjectCard({ project, isCaseStudy = false }) {
  const { title, subtitle, description, image, technologies, liveDemo, caseStudy, github } = project

  return (
    <article className="project-card flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/60 transition-colors hover:border-primary/50">
      <div className="project-card-media overflow-hidden bg-muted">
        <img
          src={image}
          alt={`${title} ${isCaseStudy ? "case study" : "website"} preview`}
          loading="lazy"
          className="project-card-image h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">{subtitle}</p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground">{description}</p>

        {technologies?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((technology) => (
              <li key={technology} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                {technology}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-4 pt-5">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <img src="/footer/github.png" alt="" className="h-4 w-4 object-contain" /> GitHub
            </a>
          )}
          {isCaseStudy && caseStudy && (
            <a
              href={caseStudy}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              View Case Study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <Container>
        <FadeUp as="div" className="text-center" delay={0.05} y={24}>
          <SectionKicker>Selected Work</SectionKicker>
          <SectionTitle className="mt-3">Featured Projects</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Live websites and frontend work, with design case studies clearly identified separately.
          </p>
        </FadeUp>

        <div className="mt-9 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <FadeUp key={project.title} as="div" className="h-full" delay={0.08 + index * 0.05} y={24}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <FadeUp as="div" delay={0.05} y={24}>
            <SectionKicker>UI/UX Case Studies</SectionKicker>
            <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">Design work that supports my frontend practice</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              These are design case studies, not presented as deployed web applications.
            </p>
          </FadeUp>
          <div className="mt-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DESIGN_CASE_STUDIES.map((project, index) => (
              <FadeUp key={project.title} as="div" className="h-full" delay={0.1 + index * 0.06} y={24}>
                <ProjectCard project={project} isCaseStudy />
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
