import SecondaryCard from './ui/SecondaryCard'
import Image from 'next/image'
import PrimaryCard from '@/app/components/ui/PrimaryCard'

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
}
const Hall = () => (
    <SecondaryCard>
        <p
            style={{ fontWeight: 500 }}
            className={
                'text-on-background text-[32px]/10 font-[var(--font-cormorant-sc)]'
            }
        >
            Холлы
        </p>
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
        {/*  TODO: Carousel  */}
        Carousel
    </SecondaryCard>
)

export default Hall
