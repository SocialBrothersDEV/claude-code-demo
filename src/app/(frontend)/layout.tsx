import type { Metadata } from 'next'
import { Archivo, DM_Sans, Inter } from 'next/font/google'
import '../globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DRIVEN // LAWYERS',
  description: 'AI-first advocatenkantoor voor bedrijven die snelheid, voorspelbaarheid en kwaliteit verwachten.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${archivo.variable} ${dmSans.variable} ${inter.variable} bg-driven-dark`}>
        {children}
      </body>
    </html>
  )
}
