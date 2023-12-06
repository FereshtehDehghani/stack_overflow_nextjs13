import ThemeProvider from '@/context/ThemeProvider'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import {Inter,Space_Grotesk} from "next/font/google"

const inter = Inter({
  subsets:['latin'],
  weight:['100','200','300','400',
'500','600','700','800','900'],
variable:'--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700'],
variable:'--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: '...',
  description: 'A Community-drivrn platform for asking and answering programming questions get help, share knowledge and collaborate with Developers from around the world explore mobile app development algorithms data researchers and more',
icons:{
  icon:'/assets/images/site-logo.svg'
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
    appearance ={{
      elements:{
        formButtonPrimary :"primary-gradient",
        footerActionLink:"primary-text-gradient hover:text-gradient-500",
      }
    }}
    >
          <ThemeProvider>
          {children}
          </ThemeProvider>
          </ClerkProvider>
          </body>
          
      </html>
   
  )
}