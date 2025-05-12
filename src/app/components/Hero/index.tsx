import Tag from '@/app/components/ui/Tag'
import Image from 'next/image'
import Location from '@/app/components/icons/Location'
import BookletButton from '@/app/components/Hero/BookletButton'
import LayoutButton from '@/app/components/Hero/LayoutButton'
import { getContent } from '@/app/utils/content'

const Index = () => {
    const { hero: content } = getContent()

    return (
        <section className={'flex flex-col gap-[5px] mt-2.5'}>
            <figure>
                <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    width={content.image.width}
                    height={content.image.height}
                    className={
                        'rounded-[30px] object-cover aspect-3/3 lg:aspect-3/1 w-full'
                    }
                />
            </figure>
            <article
                className={'flex flex-col lg:flex-row justify-between gap-2.5'}
            >
                <div className={'flex flex-col gap-2.5 text-on-background'}>
                    <span className={'font-bold'}>Проект</span>
                    <h1
                        style={{ fontWeight: 500 }}
                        className={
                            'uppercase text-[64px]/12 font-[var(--font-cormorant-sc)]'
                        }
                    >
                        {content.title}
                    </h1>
                    <p className={'font-bold'}>{content.description}</p>
                    <time dateTime="2025-03-31">{content.comissionated}</time>
                </div>
                <div className={'flex flex-col lg:items-end gap-5'}>
                    <address className={'flex items-center gap-1'}>
                        <Location />
                        <p className={'text-on-background mt-2.5 lg:mt-0'}>
                            {content.location}
                        </p>
                    </address>
                    <div
                        className={
                            'hidden lg:flex flex-wrap gap-2.5 justify-end'
                        }
                    >
                        {content.tags.map((tag, index) => (
                            <Tag value={tag} key={index} />
                        ))}
                    </div>
                    <div className={'flex flex-col lg:flex-row gap-2.5'}>
                        <BookletButton />
                        <LayoutButton />
                    </div>
                </div>
            </article>
            <div className={'hidden lg:flex bg-primary w-full h-[1px]'} />
        </section>
    )
}

export default Index
