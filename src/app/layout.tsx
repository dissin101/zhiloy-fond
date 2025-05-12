import type { Metadata } from 'next'
import { Lora, Cormorant_SC } from 'next/font/google'
import './globals.css'
import { getContent } from '@/app/utils/content'

const lora = Lora({
    variable: '--font-lora-sans',
    subsets: ['latin'],
})

const cormorant = Cormorant_SC({
    variable: '--font-cormorant-sc',
    subsets: ['latin'],
    weight: '700',
})

const { seo } = getContent()

export const metadata: Metadata = seo

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                id={'App'}
                className={`
            flex flex-col m-auto gap-5 lg:gap-[30px] px-4 md:px-[60px] max-w-[1320px]
            ${lora.variable} ${cormorant.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
