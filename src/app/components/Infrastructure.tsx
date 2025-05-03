import SecondaryCard from '@/app/components/ui/SecondaryCard'
import Image from 'next/image'
import Star from '@/app/components/icons/Star'
import Education from '@/app/components/icons/Education'
import Mall from '@/app/components/icons/Mall'
import Health from '@/app/components/icons/Health'

const content = {
    image: '/infrastructure.png',
    items: [
        {
            title: 'Отдых и спорт',
            description: 'Парки, скверы и спортивные площадки',
            icon: <Star />,
        },
        {
            title: 'Образование',
            description: 'Школы, ясли-сады и разные центры.',
            icon: <Education />,
        },
        {
            title: 'Магазины и кофейни',
            description: 'Магазины, экомаркеты, кофейни и рестораны',
            icon: <Mall />,
        },
        {
            title: 'Здоровье',
            description: 'Центры здоровья и аптеки',
            icon: <Health />,
        },
    ],
}

const Infrastructure = () => (
    <SecondaryCard>
        <>
            <p
                style={{ fontWeight: 500 }}
                className={
                    'text-on-background text-[32px]/10 font-[var(--font-cormorant-sc)]'
                }
            >
                Инфраструктура
            </p>

            <div className={'grid lg:grid-cols-3 gap-5'}>
                <Image
                    className={'col-span-2'}
                    src={content.image}
                    alt="Infrastructure"
                    width={832}
                    height={446}
                />
                <ol className={'col-span-1 flex flex-col gap-[30px]'}>
                    {content.items.map(
                        ({ title, description, icon }, index) => (
                            <li key={index}>
                                <div className={'flex gap-2.5'}>
                                    <div
                                        className={
                                            'flex justify-center items-center rounded-3xl bg-[#8F7546] w-[36px] h-[36px] shrink-0'
                                        }
                                    >
                                        {icon}
                                    </div>
                                    <div
                                        className={
                                            'text-on-secondary flex flex-col gap-[5px]'
                                        }
                                    >
                                        <p
                                            className={
                                                'uppercase font-bold text-[16px]'
                                            }
                                        >
                                            {title}
                                        </p>
                                        <p className={'text-[16px]'}>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    )}
                </ol>
            </div>
        </>
    </SecondaryCard>
)

export default Infrastructure
