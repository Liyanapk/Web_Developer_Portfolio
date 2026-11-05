"use client"

import { Container } from "./primitives"
import { ResumeDownloadButton } from "./resume-download-button"
import { FadeUp, ImageReveal } from "./animations"

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Liyanapk", image: "/footer/github.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/liyana-k-p-/", image: "/footer/linkedin.png" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-primary/10 blur-[120px]"
      />
      <Container className="relative grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-8 lg:gap-16">
        <div className="order-2 text-center md:order-1 md:text-left">
          <FadeUp as="p" className="text-sm font-medium uppercase tracking-[0.18em] text-primary" delay={0.05} y={24}>
            Frontend Developer
          </FadeUp>
          <FadeUp
            as="h1"
            className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            delay={0.1}
            y={24}
          >
            Hi, I&apos;m Liyana KP
          </FadeUp>
          <FadeUp as="h2" className="mt-3 font-heading text-xl font-semibold text-primary sm:text-2xl" delay={0.15} y={24}>
            React.js · Next.js · Web Development
          </FadeUp>
          <FadeUp as="p" className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0" delay={0.2} y={24}>
            I build responsive, interactive and user-friendly web experiences using modern frontend technologies.
          </FadeUp>

          <FadeUp as="div" className="hero-cta-row mt-8 flex flex-nowrap items-center justify-center gap-2 md:justify-start" delay={0.25} y={24}>
            {/* <a
              href="#projects"
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm font-normal text-white transition-colors hover:bg-primary/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 max-[640px]:px-2 max-[640px]:text-xs"
            >
              View My Projects
            </a> */}
            <ResumeDownloadButton />
            {/* <a
              href="#contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-border px-3 text-sm font-normal text-white transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4 max-[640px]:px-2 max-[640px]:text-xs"
            >
              Contact Me
            </a> */}
          </FadeUp>

          {/* <FadeUp as="div" className="mt-7 flex items-center justify-center gap-4 md:justify-start" delay={0.3} y={24}>
            {SOCIAL_LINKS.map(({ label, href, image }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <img src={image} alt="" className="h-4 w-4 object-contain" />
                {label}
              </a>
            ))}
          </FadeUp> */}
        </div>

        <ImageReveal as="div" className="order-1 mx-auto w-full max-w-[330px] md:order-2 md:max-w-[390px]" delay={0.12}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[12%] top-[18%] z-0 h-[55%] rounded-full bg-primary/10 blur-[80px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-[8%] bottom-[-8%] z-0 h-[30%] rounded-[50%] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-[48px]"
            />
            <img
              src="/heroimage/liyaa.png"
              alt="Portrait of Liyana KP"
              className="relative z-10 mx-auto max-h-[440px] w-full object-contain drop-shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
            />
          </div>
        </ImageReveal>
      </Container>
    </section>
  )
}
