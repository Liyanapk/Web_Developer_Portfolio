"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/portfolio-data"
import { Container } from "./primitives"
import { RevealOnView } from "./animations"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-4">
      <RevealOnView as="div" className="mx-auto flex w-[90%] flex-col rounded-[20px] border border-white/10 bg-[#3D3C2E]/20 backdrop-blur-md" y={80} delay={0.08}>
        <Container className="flex h-16 items-center justify-between px-4">
          <a href="#home" className="font-heading text-lg font-semibold text-foreground" onClick={() => setOpen(false)}>
            Liyana KP
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-white/10 md:hidden" aria-label="Mobile">
            <Container className="flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </nav>
        )}
      </RevealOnView>
    </header>
  )
}
