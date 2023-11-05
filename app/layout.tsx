import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://leandrogavidia.com'),
  title: 'Leandro Gavidia Santamaria',
  description: "Leandro Gavidia's personal website",
  keywords: ["Fullstack Developer", "Web3 Developer", "Smart Contract Developer", "Leandro Gavidia Santamaria"],
  authors: {
    name: "Leandro Gavidia Santamaria"
  },
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    site: "@androgavidia",
    creator: "@androgavidia",
    title: "Leandro Gavidia Santamaria",
    description: "Personal website",
    images: {
        url: "/images/personal/leandro-gavidia-picture.jpg",
        alt: "Leandro Gavidia's personal website",
        username: "@androgavidia",
        width: 750,
        height: 752,
        type: "image/jpg"
    } 
  },
  openGraph: {
    title: "Leandro Gavidia Santamaria",
    description: "Personal website",
    url: "https://leandrogavidia.com",
    type: "website",
    images: {
      url: "/images/personal/leandro-gavidia-picture.jpg",
      alt: "Leandro Gavidia's personal website",
      width: 750,
      height: 752,
      type: "image/jpg"
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-poppins max-w-[1020px] my-0 mx-auto min-h-screen py-5 px-9 bg-default text-default sm:py-10">
        <Header/>
        <main className="my-10 border-b border-zinc-900 pb-10">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
