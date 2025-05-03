import SecondaryCard from '@/app/components/ui/SecondaryCard'
import SectionTitle from '@/app/components/ui/SectionTitle'

const content = {
    items: [
        {
            time: '2 минуты',
            description: 'Центральный Парк',
        },
        {
            time: '4 минуты',
            description: 'Детские сады & Центры',
        },
        {
            time: '5 минут',
            description: 'Гостиница / Fitness Центр Cosmonaut',
        },
        {
            time: '6 минут',
            description: 'Супер маркет Южный & Аян',
        },
        {
            time: '7 минут',
            description: 'Гостиница Чайка',
        },
        {
            time: '8 минут',
            description: 'Ресторан / Банкетный зал Villa Borghese',
        },
        {
            time: '9 минут',
            description: 'Зоопарк',
        },
        {
            time: '10 минут',
            description: 'ТРЦ Азия / ЦУМ & Сity Mall',
        },
    ],
}

const Environment = () => (
    <SecondaryCard>
        <SectionTitle className={'block lg:hidden'}>Окружение</SectionTitle>
        <div
            className={
                'grid grid-cols-12 gap-x-3 gap-y-7.5 lg:gap-x-20 lg:gap-y-12'
            }
        >
            {content.items.map(({ time, description }, index) => (
                <div key={index} className={'col-span-6 lg:col-span-3'}>
                    <div className={'flex flex-col gap-2.5'}>
                        <div
                            className={
                                'flex gap-2.5  lg:gap-[22px] flex-col lg:flex-row justify-center items-center'
                            }
                        >
                            {/*TODO: add Roboto font*/}
                            <span
                                className={
                                    ' text-primary text-[80px] leading-none'
                                }
                            >
                                {time.split(' ')[0]}
                            </span>
                            <span className={'text-on-background text-[20px]'}>
                                {time.split(' ')[1]}
                            </span>
                        </div>
                        <p className={'text-primary text-center'}>
                            {description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </SecondaryCard>
)

export default Environment
