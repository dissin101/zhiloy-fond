import type { Metadata } from 'next'
import { Lora, Cormorant_SC } from 'next/font/google'
import './globals.css'

const lora = Lora({
    variable: '--font-lora-sans',
    subsets: ['latin'],
})

const cormorant = Cormorant_SC({
    variable: '--font-cormorant-sc',
    subsets: ['latin'],
    weight: '700',
})

export const metadata: Metadata = {
    title: 'Verona | Жилой фонд',
    description:
        'Жилой комплекс Верона предлагает комфортные квартиры с современной инфраструктурой. Выбирайте идеальное жилье для вашей семьи в удобном районе города.',
    keywords:
        'жилой комплекс, недвижимость, квартиры, новостройка, Верона, жилье, апартаменты, ипотека, Verona, квартиры Караганда',
    robots: 'index, follow',
    openGraph: {
        title: 'Verona | Жилой фонд',
        description:
            'Жилой комплекс Верона предлагает комфортные квартиры с современной инфраструктурой. Выбирайте идеальное жилье для вашей семьи в удобном районе города.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Verona | Жилой фонд',
        images: [
            {
                url: '/hero.png',
                width: 1320,
                height: 499,
                alt: 'Жилой комплекс Verona',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`
            flex flex-col m-auto gap-5 lg:gap-[30px] px-4 md:px-[60px] max-w-[1320px]
            ${lora.variable} ${cormorant.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
