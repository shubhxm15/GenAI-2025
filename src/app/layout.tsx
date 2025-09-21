import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VisionAI - Personalized Career & Skills Advisor',
  description: 'AI-powered guidance for students and professionals to discover their ideal career paths and bridge skill gaps',
  keywords: 'career advisor, AI, skills analysis, job recommendations, professional development',
  authors: [{ name: 'Team VisionAI - Shubham Sharma' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}