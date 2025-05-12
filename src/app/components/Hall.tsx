import SecondaryCard from './ui/SecondaryCard'
import Image from 'next/image'
import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Carousel from '@/app/components/ui/Carousel'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getContent } from '@/app/utils/content'

const Hall = () => {
    const { hall: content } = getContent()

    return (
        <section>
            <SecondaryCard>
                <SectionTitle>Холлы</SectionTitle>
                <div className={'relative block lg:hidden aspect-3/4'}>
                    <Image
                        className={'object-cover rounded-[30px]'}
                        src={content.image.srcMobile}
                        alt={content.image.alt}
                        fill
                    />
                </div>
                <div className={'relative hidden lg:block aspect-2/1'}>
                    <Image
                        className={'object-cover rounded-[30px]'}
                        src={content.image.src}
                        alt={content.image.alt}
                        fill
                    />
                </div>
                <PrimaryCard>{content.title}</PrimaryCard>
                <p dangerouslySetInnerHTML={{ __html: content.description }} />
                <div className={'h-full'}>
                    <Carousel>
                        {content.carousel.map(({ src, alt }, index) => (
                            <div
                                key={index}
                                className={
                                    'relative aspect-1/1 lg:aspect-[3/1.3]'
                                }
                            >
                                <Image
                                    className={'rounded-[30px] object-cover'}
                                    src={src}
                                    alt={alt}
                                    fill
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </SecondaryCard>
        </section>
    )
}

export default Hall
