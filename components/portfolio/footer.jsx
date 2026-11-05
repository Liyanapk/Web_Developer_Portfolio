"use client"

import { Mail, MapPin, CircleLetterB } from "lucide-react"
import { Container } from "./primitives"
import { FadeUp } from "./animations"

const CONTACT_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/liyana-k-p-/", image: "/footer/linkedin.png" },
  { label: "GitHub", href: "https://github.com/Liyanapk", image: "/footer/github.png" },
  { label: "Behance", href: "https://www.behance.net/liyanakp1", icon: CircleLetterB },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <Container className="py-16 text-center md:py-20">
        <FadeUp as="p" className="text-sm font-medium uppercase tracking-[0.16em] text-primary" delay={0.05} y={24}>
          Get in touch
        </FadeUp>
        <FadeUp as="h2" className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl" delay={0.1} y={24}>
          Let&apos;s build for the web.
        </FadeUp>
        <FadeUp as="p" className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground" delay={0.15} y={24}>
          I&apos;m open to frontend and web development opportunities. Feel free to reach out.
        </FadeUp>

        <FadeUp
          as="a"
          href="mailto:liyana.kp8590@gmail.com"
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          delay={0.2}
          y={24}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          liyana.kp8590@gmail.com
        </FadeUp>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
          {CONTACT_LINKS.map(({ label, href, icon: Icon, image }, index) => (
            <FadeUp
              key={label}
              as="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              delay={0.22 + index * 0.05}
              y={24}
            >
              {image ? <img src={image} alt="" className="h-4 w-4 object-contain" /> : <Icon className="h-4 w-4" aria-hidden="true" />}
              {label}
            </FadeUp>
          ))}
          <FadeUp as="p" className="inline-flex items-center gap-2 text-sm text-muted-foreground" delay={0.32} y={24}>
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            Kozhikode, Kerala, India
          </FadeUp>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">© 2026 Liyana KP</p>
      </Container>
    </footer>
  )
}
