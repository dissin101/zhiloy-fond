import Tag from '@/app/components/ui/Tag'
import PrimaryButton from '@/app/components/ui/PrimaryButton'
import Image from 'next/image'
import { getImagePath } from '@/app/utils/image'
import Download from '@/app/components/icons/Download'

const content = {
    title: 'VERONA',
    description: 'Гармония городской жизни на вершине комфорта',
    comissionated: 'Сдан в эксплуатацию  в 1 кв 2025 г',
    location: 'Казахстан, Караганда, ул. Касыма Аманжолова, 100',
    tags: [
        'Авторская архитектура',
        'Ландшафтный дизайн двора',
        'Зимняя детская игровая комната',
        'Подземный паркинг',
    ],
}

const Hero = () => (
    <div className={'flex flex-col gap-[5px] mt-2.5'}>
        <Image
            src={getImagePath('/hero.png')}
            alt={'Hero image'}
            width={1320}
            height={499}
            className={
                'rounded-[30px] object-cover aspect-3/3 lg:aspect-3/1 w-full'
            }
        />
        <div className={'flex flex-col lg:flex-row justify-between gap-2.5'}>
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
                <p>{content.comissionated}</p>
            </div>
            <div className={'flex flex-col lg:items-end gap-5'}>
                {/* TODO: add location icon*/}
                <p className={'text-on-background mt-2.5 lg:mt-0'}>
                    {content.location}
                </p>
                <div className={'hidden lg:flex flex-wrap gap-2.5 justify-end'}>
                    {content.tags.map((tag, index) => (
                        <Tag value={tag} key={index} />
                    ))}
                </div>
                <div className={'flex flex-col lg:flex-row gap-2.5'}>
                    <PrimaryButton className={'flex gap-2.5'}>
                        <Download />
                        Скачать буклет
                    </PrimaryButton>
                    <PrimaryButton className={'flex gap-2.5'}>
                        <Download />
                        Скачать планировку
                    </PrimaryButton>
                </div>
            </div>
        </div>
        <div className={'hidden lg:flex bg-primary w-full h-[1px]'} />
    </div>
)

export default Hero
