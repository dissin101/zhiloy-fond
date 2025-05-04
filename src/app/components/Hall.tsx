import SecondaryCard from './ui/SecondaryCard'
import Image from 'next/image'
import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Carousel from '@/app/components/ui/Carousel'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getImagePath } from '@/app/utils/image'

const content = {
    image: {
        srcMobile: '/hall-mobile.png',
        src: '/hall.png',
        alt: 'Hall',
    },
    title: 'Уютные холлы клубных домов Verona с двумя входными группами –  создают дополнительный комфорт для жильцов',
    description: `
        <span>Холлы Verona – торжественная увертюра к вашей резиденции. Авторская интерпретация модерна, изящный рисунок мрамора на полу, витражные окна, раздвигающие пространство и наполняющие его солнечным светом, завораживающая красота пейзажа за окном погружают в домашнюю атмосферу с первых мгновений пребывания в Verona.</span>
        <br/>
        <br/>
        <span>Дизайнерский лифт обеспечивает плавное движение на ваш этаж, в холл и паркинг.</span>
    `,
    carousel: [
        {
            src: '/hall-carousel-1.png',
            alt: 'Hall Carousel 1',
        },
        {
            src: '/hall-carousel-2.png',
            alt: 'Hall Carousel 2',
        },
        {
            src: '/hall-carousel-3.png',
            alt: 'Hall Carousel 3',
        },
    ],
}
const Hall = () => (
    <SecondaryCard>
        <SectionTitle>Холлы</SectionTitle>
        <div className={'relative block lg:hidden aspect-3/4'}>
            <Image
                className={'object-cover rounded-[30px]'}
                src={getImagePath(content.image.srcMobile)}
                alt={content.image.alt}
                fill
            />
        </div>
        <div className={'relative hidden lg:block aspect-2/1'}>
            <Image
                className={'object-cover rounded-[30px]'}
                src={getImagePath(content.image.src)}
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
                        className={'relative aspect-1/1 lg:aspect-[3/1.3]'}
                    >
                        <Image
                            className={'rounded-[30px] object-cover'}
                            src={getImagePath(src)}
                            alt={alt}
                            fill
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    </SecondaryCard>
)

export default Hall
