import SecondaryCard from '@/app/components/ui/SecondaryCard'
import PrimaryCard from '@/app/components/ui/PrimaryCard'
import Image from 'next/image'
import { getImagePath } from '@/app/utils/image'

const content = {
    title: `
        <span>
            В Verona каждое утро начинается с тишины, наполненной смыслом.
        </span>
        </br>
        <span>
            Здесь время словно замедляется, чтобы 
            вы могли проживать день неспешно, 
            с удовольствием, в гармонии с собой 
            и пространством.
        </span>
    `,
    description: `
        <span>
            Философия уютной и размеренной жизни заложена в каждый элемент этого камерного комплекса.
            Особое внимание уделено пространствам, где можно остановиться и насладиться моментом:
            Уютные беседки, утопающие в зелени двора, приглашают на неторопливые разговоры с близкими, чашку утреннего кофе или вечернее спокойствие под мягким светом фонарей.
        </span>
        <br/>
        <br/>
        <span>
            Для самых юных жителей создана современная детская площадка — безопасная, интерактивная 
            и вдохновляющая на игру.
            А продуманные зоны отдыха позволяют родителям расслабиться и наблюдать, как растёт их счастье.
        </span>
        <br/>
        <br/>
        <span>
            Verona — это не просто жильё.
        </span>
        <br/>
        <br/>
        <span>
            Это место, где возвращается вкус к жизни. Где каждый день — это ваш личный уютный ритуал.
        </span>
    `,
    images: [
        {
            srcMobile: '/additional-mobile-1.png',
            src: '/additional-1.png',
            alt: 'Additional image 1',
        },
        {
            srcMobile: '/additional-mobile-2.png',
            src: '/additional-2.png',
            alt: 'Additional image 2',
        },
        {
            srcMobile: '/additional-mobile-3.png',
            src: '/additional-3.png',
            alt: 'Additional image 3',
        },
    ],
}

const Additional = () => (
    <section>
        <SecondaryCard>
            <div className={'grid grid-cols-12 gap-5'}>
                <div className={'col-span-12 lg:col-span-4'}>
                    <PrimaryCard className={'flex h-full items-center'}>
                        <p
                            dangerouslySetInnerHTML={{ __html: content.title }}
                        />
                    </PrimaryCard>
                </div>
                <p
                    className={'col-span-12 lg:col-span-8'}
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />
                <div
                    className={
                        'hidden lg:grid lg:grid-cols-12 lg:col-span-12 lg:gap-5'
                    }
                >
                    {content.images.map(({ src, alt }, index) => (
                        <div
                            className={'col-span-4 aspect-[2/1.5] relative'}
                            key={index}
                        >
                            <Image src={getImagePath(src)} alt={alt} fill />
                        </div>
                    ))}
                </div>
                <div className={'grid col-span-12 lg:hidden gap-2.5'}>
                    {content.images.map(({ srcMobile, alt }, index) => (
                        <div className={'aspect-[2/1.2] relative'} key={index}>
                            <Image
                                className={'object-cover'}
                                src={getImagePath(srcMobile)}
                                alt={alt}
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
        </SecondaryCard>
    </section>
)

export default Additional
