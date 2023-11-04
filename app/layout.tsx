import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leandro Gavidia Santamaria',
  description: "Leandro Gavidia's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-poppins max-w-[1920px] my-0 mx-auto min-h-screen py-5 px-9 bg-default text-default">
        <Header/>
        <main className="my-10 border-b border-zinc-900 pb-10">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
