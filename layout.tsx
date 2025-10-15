import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Khách sạn ABC - Quận 1, TP.Hồ Chí Minh",
  description: "Khách sạn ABC - Trải nghiệm sang trọng tại trung tâm Sài Gòn",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Script src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" strategy="afterInteractive" />
        <Script
          src="https://files.bpcontent.cloud/2025/10/14/23/20251014235629-RJVY1ZHY.json"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
