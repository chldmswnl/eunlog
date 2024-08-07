import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eunlog',
  description: '꾸준함의 힘을 믿는 프론트엔드 개발자의 기술블로그',
  openGraph: {
    title: 'Eunlog',
    description: '꾸준함의 힘을 믿는 프론트엔드 개발자의 기술블로그',
    images: {
      url: 'https://github.com/user-attachments/assets/a41f35c2-02c5-48af-9093-b8e8a953be43', // Must be an absolute URL
      width: 1200,
      height: 630,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex w-full flex-col items-center">
        <Header />
        <main className="w-full max-w-screen-md grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
