import { Analytics } from "@vercel/analytics/next"
import { Inter, Sora } from "next/font/google"
import { ScrollToTop } from "@/components/portfolio/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})

export const metadata = {
  title: "Liyana KP | Frontend Developer",
  description:
    "Portfolio of Liyana KP, a frontend developer building responsive web experiences with React.js and Next.js.",
  icons: {
    icon: "/heroimage/favicon_portfolio.png",
    shortcut: "/heroimage/favicon_portfolio.png",
    apple: "/heroimage/favicon_portfolio.png",
  },

  openGraph: {
    images: ["/heroimage/favicon_portfolio.png"],
  },

  twitter: {
    images: ["/heroimage/favicon_portfolio.png"],
  },
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        <ScrollToTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
