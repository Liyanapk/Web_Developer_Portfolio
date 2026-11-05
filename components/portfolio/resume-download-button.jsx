import FlipCoinButton from "@/components/ui/flip-coin-button"

export function ResumeDownloadButton() {
  return (
    <a href="/document/Liyana_Front_end_Resume.pdf" download className="inline-flex">
      <FlipCoinButton className="hero-resume-button">Download Resume</FlipCoinButton>
    </a>
  )
}
