import Map from '@/app/components/Address/Map'
import SecondaryCard from '@/app/components/ui/SecondaryCard'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getContent } from '@/app/utils/content'

const Address = () => {
    const { address: content } = getContent()

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
