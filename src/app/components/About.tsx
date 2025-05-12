import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Image from 'next/image'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Carousel from '@/app/components/ui/Carousel'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getContent } from '@/app/utils/content'

const About = () => {
    const { about: content } = getContent()

    return (
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
                            className={
                                'col-span-2 lg:col-span-1 grid grid-cols-1'
                            }
                        >
                            <div
                                className={
                                    'col-start-1 col-end-2 justify-self-center w-full my-auto'
                                }
                            >
                                <Carousel>
                                    {content.carousel.map(
                                        ({ src, alt }, index) => (
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
                                                    src={src}
                                                    alt={alt}
                                                    fill
                                                />
                                            </figure>
                                        )
                                    )}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className={'grid lg:grid-cols-3 gap-5'}>
                        {content.cards.map(
                            ({ text, alt, image: { src } }, index) => (
                                <div
                                    key={index}
                                    className={'flex flex-col gap-2.5'}
                                >
                                    <div
                                        className={
                                            'w-full relative aspect-2/1 lg:aspect-2/1'
                                        }
                                    >
                                        <Image
                                            src={src}
                                            alt={alt}
                                            fill
                                            className={
                                                'object-cover rounded-[30px]'
                                            }
                                        />
                                    </div>
                                    <PrimaryCard className={'w-full h-full'}>
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: text,
                                            }}
                                        />
                                    </PrimaryCard>
                                </div>
                            )
                        )}
                    </div>
                </SecondaryCard>
            </article>
        </section>
    )
}

export default About
