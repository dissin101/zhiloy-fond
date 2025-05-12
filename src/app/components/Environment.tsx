import SecondaryCard from '@/app/components/ui/SecondaryCard'
import SectionTitle from '@/app/components/ui/SectionTitle'
import { getContent } from '@/app/utils/content'

const Environment = () => {
    const { environment: content } = getContent()

    return (
        <section>
            <SecondaryCard>
                <SectionTitle className={'block lg:hidden'}>
                    Окружение
                </SectionTitle>
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
                                    <span
                                        className={
                                            ' text-primary text-[80px] leading-none'
                                        }
                                    >
                                        {time.split(' ')[0]}
                                    </span>
                                    <span
                                        className={
                                            'text-on-background text-[20px]'
                                        }
                                    >
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
        </section>
    )
}

export default Environment
