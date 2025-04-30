import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Image from 'next/image'

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
}

const About = () => (
    <div
        className={
            'flex flex-col gap-5 bg-secondary rounded-[30px] px-4 lg:px-10 py-10'
        }
    >
        <div className={'grid lg:grid-cols-2 gap-5'}>
            <div className={'flex flex-col gap-2.5'}>
                <p
                    style={{ fontWeight: 500 }}
                    className={
                        'text-on-background text-[32px]/10 font-[var(--font-cormorant-sc)]'
                    }
                >
                    О комплексе
                </p>
                <PrimaryCard>
                    <h2 dangerouslySetInnerHTML={{ __html: content.title }} />
                </PrimaryCard>
                <p
                    className={'text-on-secondary'}
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />
            </div>
            {/*TODO: add carousel*/}
            <div>Carousel</div>
        </div>
        <div className={'grid lg:grid-cols-3 gap-5'}>
            {content.cards.map(({ text, alt }, index) => (
                <div key={index} className={'flex flex-col gap-2.5'}>
                    <div className={'w-full relative aspect-2/1 lg:aspect-2/1'}>
                        <Image
                            src={`/about-card-${index + 1}.png`}
                            alt={alt}
                            fill
                        />
                    </div>
                    <PrimaryCard className={'w-full h-full'}>
                        <p dangerouslySetInnerHTML={{ __html: text }} />
                    </PrimaryCard>
                </div>
            ))}
        </div>
    </div>
)

export default About
