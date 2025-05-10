import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Image from 'next/image'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Carousel from '@/app/components/ui/Carousel'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getImagePath } from '@/app/utils/image'

const content = {
    title: '<b>Verona</b> — ваш личный остров тишины возле парка.',
    description: `
        <span>
            Verona — это камерный клубный дом в одном из самых престижных и тихих районов Михайловки, где сочетаются уют, приватность и городская динамика.
            Всего 2 минуты пешком до Центрального парка, пара минут на автомобиле — 
            и вы уже в самом сердце города.
        </span>
        </br>
        </br>
        <span>
            Пространство двора организовано с заботой о каждой детали:
            Современная детская площадка — для безопасного и весёлого досуга малышей.
            Игровая комната на первом этаже — в каждом доме, чтобы дети могли наслаждаться активностями даже в непогоду.
        </span>`,
    cards: [
        {
            text: '<span>Комплекс расположен на границе с парковой зоной, что позволяет вам наслаждаться природой и свежим воздухом, не покидая черты города.</span>',
            alt: '',
        },
        {
            text: '<span>В комплексе предусмотрен подземный паркинг, который обеспечивает безопасность вашего автомобиля и сохраняет эстетичность двора.</span>',
            alt: '',
        },
        {
            text: `<span>Verona — это не просто жильё.</span><br/><span>Это стиль жизни для тех, кто ценит спокойствие, природу и близость к центру.</span>`,
            alt: '',
        },
    ],
    carousel: [
        {
            src: '/about-carousel-1.png',
            alt: 'About Carousel 1',
        },
        {
            src: '/about-carousel-2.png',
            alt: 'About Carousel 2',
        },
        {
            src: '/about-carousel-3.png',
            alt: 'About Carousel 3',
        },
        {
            src: '/about-carousel-4.png',
            alt: 'About Carousel 4',
        },
        {
            src: '/about-carousel-5.png',
            alt: 'About Carousel 5',
        },
        {
            src: '/about-carousel-6.png',
            alt: 'About Carousel 6',
        },
        {
            src: '/about-carousel-7.png',
            alt: 'About Carousel 7',
        },
        {
            src: '/about-carousel-8.png',
            alt: 'About Carousel 8',
        },
        {
            src: '/about-carousel-9.png',
            alt: 'About Carousel 9',
        },
        {
            src: '/about-carousel-10.png',
            alt: 'About Carousel 10',
        },
        {
            src: '/about-carousel-11.png',
            alt: 'About Carousel 11',
        },
    ],
}

const About = () => (
    <section>
        <article>
            <SecondaryCard className={'gap-5'}>
                <div className={'grid grid-cols-1 lg:grid-cols-2 gap-5'}>
                    <div className={'col-span-2 lg:col-span-1'}>
                        <div className={'flex flex-col gap-2.5'}>
                            <SectionTitle>О комплексе</SectionTitle>
                            <PrimaryCard>
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: content.title,
                                    }}
                                />
                            </PrimaryCard>
                            <p
                                className={'text-on-secondary'}
                                dangerouslySetInnerHTML={{
                                    __html: content.description,
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={'col-span-2 lg:col-span-1 grid grid-cols-1'}
                    >
                        <div
                            className={
                                'col-start-1 col-end-2 justify-self-center w-full my-auto'
                            }
                        >
                            <Carousel>
                                {content.carousel.map(({ src, alt }, index) => (
                                    <figure
                                        key={index}
                                        className={
                                            'relative aspect-1/1 lg:aspect-[3/1.5]'
                                        }
                                    >
                                        <Image
                                            className={
                                                'rounded-[30px] object-cover'
                                            }
                                            src={getImagePath(src)}
                                            alt={alt}
                                            fill
                                        />
                                    </figure>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className={'grid lg:grid-cols-3 gap-5'}>
                    {content.cards.map(({ text, alt }, index) => (
                        <div key={index} className={'flex flex-col gap-2.5'}>
                            <div
                                className={
                                    'w-full relative aspect-2/1 lg:aspect-2/1'
                                }
                            >
                                <Image
                                    src={getImagePath(
                                        `/about-card-${index + 1}.png`
                                    )}
                                    alt={alt}
                                    fill
                                    className={'object-cover rounded-[30px]'}
                                />
                            </div>
                            <PrimaryCard className={'w-full h-full'}>
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                            </PrimaryCard>
                        </div>
                    ))}
                </div>
            </SecondaryCard>
        </article>
    </section>
)

export default About
