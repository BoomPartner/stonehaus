import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Stonehaus | Piedras naturales",
    template: "%s - Stonehaus"
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.stonehaus.com.mx/",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "StoneHaus",
    description: "Mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas",
    url: "https://www.stonehaus.com.mx/",
    siteName: "Stonehaus",
    images: '/og-image.png',
  },
  description: 'Mármoles, granitos, cuarzos, travertinos, canteras, cuarcitas y calizas',
  keywords: ["piedras","naturales", "stone","haus","stonehaus","marmol","mármol","marmoles","mármoles", "calizas","granito","granitos","cuarcitas","travertinos","cuarzo",
  "cuarzos","canteras","marbles","granites","quartzites","limestone","travertine"],
  creator: "Luis Hernández Nava",
  publisher: "Boom Partner"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Provider>
          {children}
        </Provider>
        

      </body>
    </html>
  )
}
