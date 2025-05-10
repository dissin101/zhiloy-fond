import Map from '@/app/components/Address/Map'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import SectionTitle from '@/app/components/ui/SectionTitle'
import Phone from '@/app/components/icons/Phone'
import Location from '@/app/components/icons/Location'
import Clock from '@/app/components/icons/Clock'

const content = {
    coordinates: [49.797976, 73.066012],
    items: [
        {
            icon: <Phone />,
            text: '+7 707 799 7979',
        },
        {
            icon: <Location />,
            text: 'Казахстан, Караганда, ул. Касыма Аманжолова, 100',
        },
        {
            icon: <Clock />,
            text: '10:00 – 19:00 (без выходных и без перерывов)',
        },
    ],
}

const Address = () => {
    return (
        <section className={'grid grid-cols-12 gap-5'}>
            <div className={'col-span-12 lg:col-span-5'}>
                <SecondaryCard className={'lg:!gap-2.5 h-full'}>
                    <SectionTitle>Адрес клубного дома</SectionTitle>
                    <p>Мы бесплатно проконсультируем и все покажем!</p>
                    {content.items.map(({ icon, text }, index) => (
                        <div
                            className={'flex gap-2.5 items-center'}
                            key={index}
                        >
                            {icon}
                            <span className={'text-on-background'}>{text}</span>
                        </div>
                    ))}
                </SecondaryCard>
            </div>
            <div
                className={
                    'col-span-12 lg:col-span-7 flex items-center justify-center'
                }
            >
                <Map coordinates={content.coordinates} />
            </div>
        </section>
    )
}

export default Address
