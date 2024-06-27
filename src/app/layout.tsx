import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eunlog',
  description: '꾸준함의 힘을 믿는 프론트엔드 개발자의 기술블로그',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex h-screen w-full flex-col items-center bg-slate-300">
        <Header />
        <main className="h-full w-full max-w-screen-md bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
